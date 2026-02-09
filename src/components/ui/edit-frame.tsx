import { GlassView } from "expo-glass-effect";
import { DimensionValue, Pressable, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import EditBottomSheet from "./edit-bottom-sheet";

type Size = "small" | "medium" | "large";
interface Props {
  size: Size;
}
const FRMAE_SIZE = {
  small: {
    width: 160,
    height: 192,
  },
  // n%表記はstring判定で型エラーになるため、DimensionValueのリテラル型を使用
  medium: {
    width: "100%" as DimensionValue,
    height: 92,
  },
  large: {
    width: "100%" as DimensionValue,
    height: 256,
  },
};
export default function EditFrame({ size = "medium" }: Props) {
  const { width, height } = FRMAE_SIZE[size];
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.expand();
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
      <EditBottomSheet ref={bottomSheetRef} size={size} />
    </>
  );
}
