import { GlassView, Image, Text, View, StyleSheet } from "../../../index";

export default function MediumFrame() {
  const styles = StyleSheet.create({
    tintedGlassView: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  });
  return (
    <View className="flex h-[122px] w-width items-center justify-center rounded-[12px]">
      <GlassView
        className="flex h-full w-full items-center justify-center rounded-[12px]"
        glassEffectStyle="clear"
        style={styles.tintedGlassView}
      >
        <View className="flex w-[235px] flex-row items-center justify-between">
          <View className="flex justify-between">
            <Text className="text-[24px] text-white shadow">気温</Text>
            <View className="flex w-[40%] flex-row justify-around">
              <View className="flex">
                <Text className=" text-[16px] text-blue">最低</Text>
                <View className="flex flex-row items-baseline">
                  {/* 最低温度 */}
                  <Text className="text-[36px] font-bold text-blue">13</Text>
                  <Text className="text-[24px] font-bold text-blue">℃</Text>
                </View>
              </View>
              <View className="flex">
                <Text className=" text-[16px] text-red">最高</Text>
                <View className="flex flex-row items-baseline">
                  {/* 最高温度 */}
                  <Text className="text-[36px] font-bold text-red">13</Text>
                  <Text className="text-[24px] font-bold text-red">℃</Text>
                </View>
              </View>
            </View>
          </View>
          <Image
            source={require("@/assets/whether-img/27218923_1.png")}
            className="h-[130px] w-[130px]"
          />
        </View>
      </GlassView>
    </View>
  );
}
