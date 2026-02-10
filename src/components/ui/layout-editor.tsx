import React, { useState, useEffect } from "react";
import { View, Pressable, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import DraggableGridItem from "./draggable-grid-item";
import EditFrame from "./edit-frame";
import { useWhetherStore } from "@/store/whetherStore";
import { LayoutItem, ContentSize, ContentType, GRID_SIZE } from "@/types/layout";
import { router } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const GRID_COLUMNS = 2;
const SCREEN_WIDTH = Dimensions.get("window").width;
const GRID_WIDTH = SCREEN_WIDTH * 0.94;
const GRID_CELL_WIDTH = GRID_WIDTH / GRID_COLUMNS;
const GRID_CELL_HEIGHT = 128;
const GRID_PADDING = 8; // フレーム間の間隔

// グリッド配置を自動計算する関数
function calculateGridPositions(items: LayoutItem[]): LayoutItem[] {
  let currentY = 0;
  let currentX = 0;
  let rowHeight = 0;

  return items.map((item) => {
    const gridSize = GRID_SIZE[item.size];

    // smallフレームの場合、横に2つ並べられる
    if (item.size === "small") {
      const newItem = { ...item, gridX: currentX, gridY: currentY };
      rowHeight = Math.max(rowHeight, gridSize.rows);

      // 次のsmallフレームは右側へ
      if (currentX === 0) {
        currentX = 1;
      } else {
        // 2つ並んだら次の行へ
        currentX = 0;
        currentY += rowHeight;
        rowHeight = 0;
      }

      return newItem;
    } else {
      // large, mediumは全幅使用
      // 前の行にsmallが1つだけあった場合は改行
      if (currentX === 1) {
        currentY += rowHeight;
        currentX = 0;
        rowHeight = 0;
      }

      const newItem = { ...item, gridX: 0, gridY: currentY };
      currentY += gridSize.rows;
      return newItem;
    }
  });
}

// ドラッグ中の新しい位置を計算
function calculateDragPosition(
  items: LayoutItem[],
  draggingIndex: number,
  offsetY: number
): LayoutItem[] {
  if (draggingIndex < 0 || draggingIndex >= items.length) return items;

  const draggingItem = items[draggingIndex];
  const currentCenterY = draggingItem.gridY * GRID_CELL_HEIGHT + offsetY;

  // 各アイテムの中心Y座標を計算して、一番近いアイテムを見つける
  let newIndex = 0;
  let minDistance = Infinity;

  const itemsWithoutDragging = items.filter((_, i) => i !== draggingIndex);

  for (let i = 0; i < items.length; i++) {
    if (i === draggingIndex) continue;

    const item = items[i];
    const itemSize = GRID_SIZE[item.size];
    const itemCenterY = item.gridY * GRID_CELL_HEIGHT + (itemSize.rows * GRID_CELL_HEIGHT) / 2;
    const distance = Math.abs(currentCenterY - itemCenterY);

    if (distance < minDistance) {
      minDistance = distance;
      newIndex = i > draggingIndex ? i - 1 : i;
    }
  }

  // Y座標が全アイテムより下なら最後に
  const lastItem = items[items.length - 1];
  const lastItemSize = GRID_SIZE[lastItem.size];
  const lastItemBottom = (lastItem.gridY + lastItemSize.rows) * GRID_CELL_HEIGHT;

  if (currentCenterY > lastItemBottom) {
    newIndex = items.length - 1;
  }

  // アイテムを並び替え
  const reorderedItems = [...items];
  const [removed] = reorderedItems.splice(draggingIndex, 1);
  reorderedItems.splice(newIndex, 0, removed);

  return calculateGridPositions(reorderedItems);
}

export default function LayoutEditor() {
  const layoutItems = useWhetherStore((state) => state.layoutItems);
  const setLayoutItems = useWhetherStore((state) => state.setLayoutItems);
  const saveLayout = useWhetherStore((state) => state.saveLayout);

  const [editingItems, setEditingItems] = useState<LayoutItem[]>(
    calculateGridPositions([...layoutItems])
  );
  const [draggingIndex, setDraggingIndex] = useState<number>(-1);
  const [dragOffset, setDragOffset] = useState<number>(0);

  useEffect(() => {
    // マウント時に現在のレイアウトを読み込み、グリッド位置を再計算
    setEditingItems(calculateGridPositions([...layoutItems]));
  }, [layoutItems]);

  const handleDragStart = (index: number) => {
    setDraggingIndex(index);
  };

  const handleDragUpdate = (offsetY: number) => {
    if (draggingIndex >= 0) {
      setDragOffset(offsetY);
      const newItems = calculateDragPosition(editingItems, draggingIndex, offsetY);
      setEditingItems(newItems);
    }
  };

  const handleDragEnd = () => {
    setDraggingIndex(-1);
    setDragOffset(0);
  };

  const handleDelete = (id: string) => {
    setEditingItems((prev) => {
      const filtered = prev.filter((item) => item.id !== id);
      return calculateGridPositions(filtered);
    });
  };

  // 既に配置されているコンテンツタイプのリスト
  const existingContentTypes = editingItems.map((item) => item.contentType);

  const handleAddContent = (contentType: ContentType, size: ContentSize) => {
    // 同じcontentTypeが既に存在するかチェック
    const isDuplicate = editingItems.some((item) => item.contentType === contentType);

    if (isDuplicate) {
      // 既に存在する場合は追加しない
      return;
    }

    const newItem: LayoutItem = {
      id: `${contentType}-${size}-${Date.now()}`,
      contentType,
      size,
      gridX: 0,
      gridY: 0, // 仮の値、calculateGridPositionsで再計算される
    };

    setEditingItems((prev) => calculateGridPositions([...prev, newItem]));
  };

  const handleComplete = async () => {
    setLayoutItems(editingItems);
    await saveLayout();
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  const maxGridHeight = Math.max(
    ...editingItems.map((item) => {
      const gridSize = GRID_SIZE[item.size];
      return (item.gridY + gridSize.rows) * GRID_CELL_HEIGHT;
    }),
    GRID_CELL_HEIGHT * 6
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.cancelButton} onPress={handleCancel}>
          <FontAwesome6 name="xmark" size={24} color="white" />
          <Text style={styles.buttonText}>キャンセル</Text>
        </Pressable>

        <Pressable style={styles.completeButton} onPress={handleComplete}>
          <Text style={styles.buttonText}>完了</Text>
          <FontAwesome6 name="check" size={24} color="white" />
        </Pressable>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 配置を編集エリアを上部に配置 */}
        {editingItems.length > 0 && (
          <>
            <Text style={styles.editTitle}>配置を編集</Text>
            <View
              style={[
                styles.gridContainer,
                {
                  width: GRID_WIDTH,
                  minHeight: maxGridHeight,
                },
              ]}
            >
              {editingItems.map((item, index) => (
                <DraggableGridItem
                  key={item.id}
                  item={item}
                  index={index}
                  isDragging={draggingIndex === index}
                  onDragStart={handleDragStart}
                  onDragUpdate={handleDragUpdate}
                  onDragEnd={handleDragEnd}
                  onDelete={handleDelete}
                  gridCellWidth={GRID_CELL_WIDTH}
                  gridCellHeight={GRID_CELL_HEIGHT}
                  gridPadding={GRID_PADDING}
                />
              ))}
            </View>
          </>
        )}

        {/* コンテンツ追加エリア */}
        <View style={styles.addButtonsContainer}>
          <Text style={styles.addTitle}>コンテンツを追加</Text>
          <View style={styles.addButtonsRow}>
            <View style={styles.addButtonWrapper}>
              <EditFrame
                size="large"
                onAddContent={handleAddContent}
                existingContentTypes={existingContentTypes}
              />
            </View>
          </View>
          <View style={styles.addButtonsRow}>
            <View style={styles.addButtonWrapper}>
              <EditFrame
                size="medium"
                onAddContent={handleAddContent}
                existingContentTypes={existingContentTypes}
              />
            </View>
          </View>
          <View style={styles.addButtonsRow}>
            <View style={styles.addButtonWrapper}>
              <EditFrame
                size="small"
                onAddContent={handleAddContent}
                existingContentTypes={existingContentTypes}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 16,
    zIndex: 10,
  },
  cancelButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 8,
  },
  completeButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 80,
    paddingTop: 20,
  },
  gridContainer: {
    position: "relative",
    marginBottom: 0,
    alignSelf: "center",
  },
  addButtonsContainer: {
    width: GRID_WIDTH,
    gap: 16,
    marginTop: 24,
  },
  addTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center",
  },
  editTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  addButtonsRow: {
    width: "100%",
    alignItems: "center",
  },
  addButtonWrapper: {
    width: "100%",
  },
});
