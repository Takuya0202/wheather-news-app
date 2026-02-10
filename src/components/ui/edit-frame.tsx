import { GlassView } from "expo-glass-effect";
import { DimensionValue, Pressable, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import EditBottomSheet from "./edit-bottom-sheet";
import { ContentSize, ContentType } from "@/types/layout";

interface Props {
  size: ContentSize;
  onAddContent: (contentType: ContentType, size: ContentSize) => void;
  existingContentTypes: ContentType[];
}

const FRAME_SIZE = {
  small: {
    width: 160,
    height: 192,
  },
  medium: {
    width: "100%" as DimensionValue,
    height: 92,
  },
  large: {
    width: "100%" as DimensionValue,
    height: 256,
  },
};

export default function EditFrame({ size = "medium", onAddContent, existingContentTypes }: Props) {
  const { width, height } = FRAME_SIZE[size];
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.present();
  };

  const handleSelectContent = (contentType: string) => {
    onAddContent(contentType as ContentType, size);
  };

  return (
    <>
      <View className="w-full">
        <GlassView
          className="flex items-center justify-center rounded-[16px]"
          style={{
            width,
            height,
          }}
          glassEffectStyle="clear"
        >
          <Pressable onPress={handleOpenBottomSheet}>
            <FontAwesome6 name="add" size={36} color="white" />
          </Pressable>
        </GlassView>
      </View>
      <EditBottomSheet
        ref={bottomSheetRef}
        size={size}
        onSelectContent={handleSelectContent}
        existingContentTypes={existingContentTypes}
      />
    </>
  );
}
