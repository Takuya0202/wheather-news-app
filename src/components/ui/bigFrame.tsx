import { GlassView } from "expo-glass-effect";
import { Text, View } from "react-native";
import { cssInterop } from "nativewind";
import { Image } from "expo-image";

cssInterop(Image, {
  className: "style",
});

export default function BigFrame() {
  return (
    <View className="absolute flex h-[257px] w-width items-center justify-center rounded-[12px]">
      <GlassView
        className="flex h-full w-full items-center justify-center rounded-[12px]"
        glassEffectStyle="clear"
      >
        <Text className="text-[24px] text-white shadow">気温</Text>
        <Image
          source={require("@/assets/whether-img/27218923_1.png")}
          className="h-[130px] w-[130px]"
        />
        <View className="flex w-[235px] flex-row justify-between">
          <View className="flex flex-col ">
            <Text className=" text-[16px] text-[#74C5FF]">最低</Text>
            <View className="flex flex-row items-baseline">
              {/* 最低温度 */}
              <Text className="text-[36px] font-bold text-[#74C5FF]">13</Text>
              <Text className="text-[24px] font-bold text-[#74C5FF]">℃</Text>
            </View>
          </View>
          <View className="flex flex-col ">
            <Text className=" text-[16px] text-[#E98383]">最高</Text>
            <View className="flex flex-row items-baseline">
              {/* 最高温度 */}
              <Text className="text-[36px] font-bold text-[#E98383]">13</Text>
              <Text className="text-[24px] font-bold text-[#E98383]">℃</Text>
            </View>
          </View>
        </View>
      </GlassView>
    </View>
  );
}
