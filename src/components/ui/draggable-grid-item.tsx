import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
  withTiming,
} from "react-native-reanimated";
import { GlassView } from "expo-glass-effect";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { LayoutItem, GRID_SIZE } from "@/types/layout";
import { renderContentComponent } from "@/utils/contentRenderer";

interface Props {
  item: LayoutItem;
  index: number;
  isDragging: boolean;
  onDragStart: (index: number) => void;
  onDragUpdate: (offsetY: number) => void;
  onDragEnd: () => void;
  onDelete: (id: string) => void;
  gridCellWidth: number;
  gridCellHeight: number;
  gridPadding: number;
}

export default function DraggableGridItem({
  item,
  index,
  isDragging,
  onDragStart,
  onDragUpdate,
  onDragEnd,
  onDelete,
  gridCellWidth,
  gridCellHeight,
  gridPadding,
}: Props) {
  const gridSize = GRID_SIZE[item.size];

  const itemWidth = gridCellWidth * gridSize.cols - gridPadding * 2;
  const itemHeight = gridCellHeight * gridSize.rows - gridPadding * 2;

  // アニメーション用の位置
  const targetX = item.gridX * gridCellWidth + gridPadding;
  const targetY = item.gridY * gridCellHeight + gridPadding;

  const translateX = useSharedValue(targetX);
  const translateY = useSharedValue(targetY);
  const offsetY = useSharedValue(0);
  const scale = useSharedValue(1);
  const isInitialMount = React.useRef(true);

  // 目標位置が変わったらアニメーション
  React.useEffect(() => {
    if (!isDragging) {
      // 初回マウント時は即座に配置（アニメーションなし）
      if (isInitialMount.current) {
        translateX.value = targetX;
        translateY.value = targetY;
        isInitialMount.current = false;
      } else {
        // 2回目以降は高速アニメーション
        translateX.value = withTiming(targetX, { duration: 120 });
        translateY.value = withTiming(targetY, { duration: 120 });
      }
    }
  }, [targetX, targetY, isDragging]);

  const longPressGesture = Gesture.LongPress()
    .minDuration(300)
    .onStart(() => {
      scale.value = withTiming(1.05, { duration: 100 });
      runOnJS(onDragStart)(index);
    });

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      if (isDragging) {
        offsetY.value = event.translationY;
        translateY.value = targetY + event.translationY;
        runOnJS(onDragUpdate)(event.translationY);
      }
    })
    .onEnd(() => {
      if (isDragging) {
        scale.value = withTiming(1, { duration: 100 });
        offsetY.value = 0;
        runOnJS(onDragEnd)();
      }
    });

  const composedGesture = Gesture.Simultaneous(longPressGesture, panGesture);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
    zIndex: isDragging ? 1000 : 1,
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
          style={[StyleSheet.absoluteFill, styles.glassView, isDragging && styles.draggingGlass]}
          glassEffectStyle="clear"
        >
          {renderContentComponent(item.contentType, item.size)}
        </GlassView>

        {/* 削除ボタン */}
        <Pressable style={styles.deleteButton} onPress={() => onDelete(item.id)}>
          <FontAwesome6 name="trash" size={16} color="white" />
        </Pressable>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  glassView: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  draggingGlass: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  deleteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(239, 68, 68, 0.9)",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
});
