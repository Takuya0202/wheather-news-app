import React from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { GlassView } from "expo-glass-effect";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { LayoutItem, GRID_SIZE } from "@/types/layout";
import { renderContentComponent } from "@/utils/contentRenderer";

interface Props {
  item: LayoutItem;
  index: number;
  totalItems: number;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
  onDelete: (id: string) => void;
  gridCellWidth: number;
  gridCellHeight: number;
}

export default function StaticContentItem({
  item,
  index,
  totalItems,
  onMoveUp,
  onMoveDown,
  onDelete,
  gridCellWidth,
  gridCellHeight,
}: Props) {
  const gridSize = GRID_SIZE[item.size];

  const itemWidth = gridCellWidth * gridSize.cols - 8;
  const itemHeight = gridCellHeight * gridSize.rows - 8;
  const left = item.gridX * gridCellWidth + 4;
  const top = item.gridY * gridCellHeight + 4;

  return (
    <View
      style={[
        styles.container,
        {
          position: "absolute",
          left,
          top,
          width: itemWidth,
          height: itemHeight,
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

      {/* コントロールボタン */}
      <View style={styles.controls}>
        {index > 0 && (
          <Pressable style={styles.controlButton} onPress={() => onMoveUp(index)}>
            <FontAwesome6 name="arrow-up" size={16} color="white" />
          </Pressable>
        )}
        {index < totalItems - 1 && (
          <Pressable style={styles.controlButton} onPress={() => onMoveDown(index)}>
            <FontAwesome6 name="arrow-down" size={16} color="white" />
          </Pressable>
        )}
        <Pressable style={styles.deleteButton} onPress={() => onDelete(item.id)}>
          <FontAwesome6 name="trash" size={16} color="white" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  glassView: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  controls: {
    position: "absolute",
    top: 8,
    right: 8,
    flexDirection: "row",
    gap: 8,
    zIndex: 10,
  },
  controlButton: {
    backgroundColor: "rgba(59, 130, 246, 0.9)",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "rgba(239, 68, 68, 0.9)",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
