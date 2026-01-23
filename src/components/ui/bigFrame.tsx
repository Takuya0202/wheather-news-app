import { GlassView } from "expo-glass-effect";
import { Text, View } from "react-native";
import { cssInterop } from "nativewind";
import { Image } from "expo-image";
import { Div } from "@expo/html-elements";

cssInterop(GlassView, {
  className: "style",
});
cssInterop(Image, {
  className: "style",
});
cssInterop(Div, {
  className: "style",
});

export default function BigFrame() {
  return (
    <View className="absolute w-width h-[257px] rounded-[12px] flex justify-center items-center">
      <GlassView
        className="w-full h-full rounded-[12px] flex justify-center items-center"
        glassEffectStyle="clear"
      >
        <Text className="text-[24px] text-white shadow">気温</Text>
        <Image
          source={require("@/assets/whether-img/27218923_1.png")}
          className="w-[130px] h-[130px]"
        />
        <Div className="w-[235px] justify-between flex flex-row">
          <Div className="flex flex-col ">
            <Text className=" text-[16px] text-[#74C5FF]">最低</Text>
            <Div className="flex flex-row items-baseline">
              {/* 最低温度 */}
              <Text className="text-[36px] text-[#74C5FF] font-bold">13</Text>
              <Text className="text-[24px] text-[#74C5FF] font-bold">℃</Text>
            </Div>
          </Div>
          <Div className="flex flex-col ">
            <Text className=" text-[16px] text-[#E98383]">最高</Text>
            <Div className="flex flex-row items-baseline">
              {/* 最低温度 */}
              <Text className="text-[36px] text-[#E98383] font-bold">13</Text>
              <Text className="text-[24px] text-[#E98383] font-bold">℃</Text>
            </Div>
          </Div>
        </Div>
      </GlassView>
    </View>
  );
}
