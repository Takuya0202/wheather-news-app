import { Text, Pressable, View, StyleSheet, DimensionValue } from "react-native";
import { BottomSheetModal, BottomSheetScrollView, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { forwardRef, useCallback, useMemo } from "react";
import { GlassView } from "expo-glass-effect";
import { getContentsBySize } from "@/constants/contentList";
import { ContentSize, ContentType } from "@/types/layout";
import { renderContentComponent } from "@/utils/contentRenderer";

interface Props {
  size: ContentSize;
  onSelectContent: (contentType: string) => void;
  existingContentTypes: ContentType[];
}

// サイズごとのフレームサイズ
const FRAME_DIMENSIONS: Record<ContentSize, { width: DimensionValue; height: number }> = {
  small: { width: 160, height: 192 },
  medium: { width: "100%" as DimensionValue, height: 92 },
  large: { width: "100%" as DimensionValue, height: 256 },
};

const EditBottomSheet = forwardRef<BottomSheetModal, Props>(function EditBottomSheet(
  { size, onSelectContent, existingContentTypes },
  ref
) {
  const contents = useMemo(() => getContentsBySize(size), [size]);
  const frameDimensions = FRAME_DIMENSIONS[size];

  const handleContentPress = (contentType: string, isDisabled: boolean) => {
    if (isDisabled) return;

    onSelectContent(contentType);
    // BottomSheetModalを閉じる
    if (ref && typeof ref !== "function" && ref.current) {
      ref.current.dismiss();
    }
  };

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} opacity={0.5} />
    ),
    []
  );

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={["70%", "90%"]}
      enablePanDownToClose={true}
      backgroundStyle={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      }}
      handleIndicatorStyle={{
        backgroundColor: "white",
      }}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetScrollView className="w-full flex-1 px-4 py-6">
        <Text className="mb-6 text-center text-2xl font-bold text-white">コンテンツを選択</Text>
        <Text className="mb-4 text-center text-base text-white">サイズ: {size}</Text>

        <View className="flex flex-col gap-4">
          {contents.map((content, index) => {
            const isDisabled = existingContentTypes.includes(content.type);
            return (
              <Pressable
                key={`${content.type}-${index}`}
                onPress={() => handleContentPress(content.type, isDisabled)}
                disabled={isDisabled}
              >
                <View style={styles.frameContainer}>
                  <GlassView
                    className="flex items-center justify-center rounded-[12px]"
                    style={[
                      styles.glassView,
                      {
                        width: frameDimensions.width,
                        height: frameDimensions.height,
                      },
                      isDisabled && styles.disabledGlass,
                    ]}
                    glassEffectStyle="clear"
                  >
                    {renderContentComponent(content.type, size)}
                    {isDisabled && (
                      <View style={styles.disabledOverlay}>
                        <Text style={styles.disabledText}>配置済み</Text>
                      </View>
                    )}
                  </GlassView>
                </View>
              </Pressable>
            );
          })}
        </View>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  frameContainer: {
    width: "100%",
    alignItems: "center",
  },
  glassView: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  disabledGlass: {
    backgroundColor: "rgba(100, 100, 100, 0.3)",
    opacity: 0.5,
  },
  disabledOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  disabledText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default EditBottomSheet;
