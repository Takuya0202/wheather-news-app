import React, { useState } from "react";
import { StyleSheet, Pressable, Text, Alert } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { GlassView } from "expo-glass-effect";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { LayoutItem, GRID_SIZE } from "@/types/layout";
import { renderContentComponent } from "@/utils/contentRenderer";

interface Props {
  item: LayoutItem;
  onUpdatePosition: (id: string, gridX: number, gridY: number) => void;
  onDelete: (id: string) => void;
  gridCellWidth: number;
  gridCellHeight: number;
}

export default function DraggableContentItem({
  item,
  onUpdatePosition,
  onDelete,
  gridCellWidth,
  gridCellHeight,
}: Props) {
  const [showDelete, setShowDelete] = useState(false);
  const gridSize = GRID_SIZE[item.size];

  const itemWidth = gridCellWidth * gridSize.cols;
  const itemHeight = gridCellHeight * gridSize.rows;

  const initialX = item.gridX * gridCellWidth;
  const initialY = item.gridY * gridCellHeight;

  const translateX = useSharedValue(initialX);
  const translateY = useSharedValue(initialY);
  const offsetX = useSharedValue(initialX);
  const offsetY = useSharedValue(initialY);

  const snapToGrid = (value: number, gridSize: number) => {
    "worklet";
    return Math.round(value / gridSize) * gridSize;
  };

  const handleLongPress = () => {
    setShowDelete(true);
  };

  const handleDelete = () => {
    Alert.alert("削除確認", "このコンテンツを削除しますか？", [
      { text: "キャンセル", style: "cancel", onPress: () => setShowDelete(false) },
      {
        text: "削除",
        style: "destructive",
        onPress: () => {
          setShowDelete(false);
          onDelete(item.id);
        },
      },
    ]);
  };

  const longPressGesture = Gesture.LongPress()
    .minDuration(500)
    .onStart(() => {
      runOnJS(handleLongPress)();
    });

  const panGesture = Gesture.Pan()
    .onStart(() => {
      offsetX.value = translateX.value;
      offsetY.value = translateY.value;
    })
    .onUpdate((event) => {
      translateX.value = offsetX.value + event.translationX;
      translateY.value = offsetY.value + event.translationY;
    })
    .onEnd(() => {
      const snappedX = snapToGrid(translateX.value, gridCellWidth);
      const snappedY = snapToGrid(translateY.value, gridCellHeight);

      const maxX = gridCellWidth * (2 - gridSize.cols);
      const boundedX = Math.max(0, Math.min(snappedX, maxX));
      const boundedY = Math.max(0, snappedY);

      translateX.value = withSpring(boundedX);
      translateY.value = withSpring(boundedY);

      const newGridX = Math.round(boundedX / gridCellWidth);
      const newGridY = Math.round(boundedY / gridCellHeight);

      runOnJS(onUpdatePosition)(item.id, newGridX, newGridY);
    });

  const composedGesture = Gesture.Simultaneous(longPressGesture, panGesture);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
  }));

  return (
    <GestureDetector gesture={composedGesture}>
      <Animated.View
        style={[
          styles.container,
          animatedStyle,
          {
            width: itemWidth,
            height: itemHeight,
            position: "absolute",
            top: 0,
            left: 0,
          },
        ]}
      >
        <GlassView
          className="flex items-center justify-center rounded-[16px]"
          style={[StyleSheet.absoluteFill, styles.glassView]}
          glassEffectStyle="clear"
        >
          {renderContentComponent(item.contentType, item.size)}
        </GlassView>

        {showDelete && (
          <Pressable style={styles.deleteButton} onPress={handleDelete}>
            <FontAwesome6 name="trash" size={20} color="white" />
          </Pressable>
        )}
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  glassView: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  deleteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(239, 68, 68, 0.9)",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
});
