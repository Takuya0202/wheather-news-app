import { GlassView } from "expo-glass-effect";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { cssInterop } from "nativewind";

cssInterop(GlassView, {
  className: "style",
});
cssInterop(Image, {
  className: "style",
});

export default function MediumFrame() {
  const styles = StyleSheet.create({
    tintedGlassView: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  });
  return (
    <View className="w-width h-[122px] rounded-[12px] flex justify-center items-center">
      <GlassView
        className="w-full h-full rounded-[12px] flex justify-center items-center"
        glassEffectStyle="clear"
        style={styles.tintedGlassView}
      >
        <View className="w-[235px] justify-between flex flex-row items-center">
          <View className="flex justify-between">
            <Text className="text-[24px] text-white shadow">気温</Text>
            <View className="flex flex-row w-[40%] justify-around">
              <View className="flex">
                <Text className=" text-[16px] text-blue">最低</Text>
                <View className="flex flex-row items-baseline">
                  {/* 最低温度 */}
                  <Text className="text-[36px] text-blue font-bold">13</Text>
                  <Text className="text-[24px] text-blue font-bold">℃</Text>
                </View>
              </View>
              <View className="flex">
                <Text className=" text-[16px] text-red">最高</Text>
                <View className="flex flex-row items-baseline">
                  {/* 最高温度 */}
                  <Text className="text-[36px] text-red font-bold">13</Text>
                  <Text className="text-[24px] text-red font-bold">℃</Text>
                </View>
              </View>
            </View>
          </View>
          <Image
            source={require("@/assets/whether-img/27218923_1.png")}
            className="w-[130px] h-[130px]"
          />
        </View>
      </GlassView>
    </View>
  );
}
