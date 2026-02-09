import { Text } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { forwardRef } from "react";
import { GlassView } from "expo-glass-effect";
import { Temperature } from "../content/large";

type Size = "small" | "medium" | "large";
interface Props {
  size: Size;
}

const EditBottomSheet = forwardRef<BottomSheet, Props>(function EditBottomSheet({ size }, ref) {
  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={["50%", "70%"]}
      enablePanDownToClose={true}
      backgroundStyle={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
      handleIndicatorStyle={{
        backgroundColor: "white",
      }}
      style={{
        zIndex: 9999,
      }}
      containerStyle={{
        zIndex: 9999,
      }}
    >
      <BottomSheetScrollView
        className="w-full flex-1 px-4 py-6"
        contentContainerClassName="items-center"
      >
        <Text className="mb-4 text-2xl font-bold text-white">表示設定</Text>
        <Text className="mb-4 text-base text-white">サイズ: {size}</Text>

        <GlassView
          className="flex h-[257px] w-full items-center justify-center rounded-[12px]"
          glassEffectStyle="clear"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <Temperature />
        </GlassView>
      </BottomSheetScrollView>
    </BottomSheet>
  );
});

export default EditBottomSheet;
