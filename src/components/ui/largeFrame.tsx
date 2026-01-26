import { GlassView } from "expo-glass-effect";
import { Text, View, StyleSheet } from "react-native";
import { cssInterop } from "nativewind";
import { Image } from "expo-image";

cssInterop(GlassView, {
  className: "style",
});
cssInterop(Image, {
  className: "style",
});

export default function BigFrame() {
  const styles = StyleSheet.create({
    tintedGlassView: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  });
  return (
    <View className=" w-width h-[257px] rounded-[12px] flex justify-center items-center">
      <GlassView
        className="w-full h-full rounded-[12px] flex justify-center items-center"
        glassEffectStyle="clear"
        style={styles.tintedGlassView}
      >
        <Text className="text-[28px] text-[#CDCDCD] font-notoSansJP text-shadow-white">
          気温
        </Text>
        <Image
          source={require("@/assets/whether-img/27218923_1.png")}
          className="w-[130px] h-[130px]"
        />
        <View className="w-[235px] justify-between flex flex-row">
          <View className="flex flex-col ">
            <Text className=" text-[16px] text-blue notoSansJP">最低</Text>
            <View className="flex flex-row items-baseline">
              {/* 最低温度 */}
              <Text className="text-[36px] text-blue font-bold notoSansJP">
                13
              </Text>
              <Text className="text-[24px] text-blue font-bold notoSansJP">
                ℃
              </Text>
            </View>
          </View>
          <View className="flex flex-col ">
            <Text className=" text-[16px] text-red notoSansJP">最高</Text>
            <View className="flex flex-row items-baseline">
              {/* 最高温度 */}
              <Text className="text-[36px] text-red font-bold notoSansJP">
                13
              </Text>
              <Text className="text-[24px] text-red font-bold notoSansJP">
                ℃
              </Text>
            </View>
          </View>
        </View>
      </GlassView>
    </View>
  );
}
