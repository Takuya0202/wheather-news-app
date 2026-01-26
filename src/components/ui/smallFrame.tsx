import { GlassView } from "expo-glass-effect";
import { Text, View } from "react-native";
import { cssInterop } from "nativewind";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tintedGlassView: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});


cssInterop(GlassView, {
  className: "style",
});
cssInterop(Image, {
  className: "style",
});


export default function SmallFrame() {
  return (
    <View className="absolute w-[160px] h-[170px] rounded-[12px] flex justify-center items-center">
      <GlassView
        className="w-full h-full rounded-[12px] flex justify-center items-center"
        glassEffectStyle="clear"
        style={styles.tintedGlassView}
      >
        <Text className="text-white shadow">気温</Text>
        <Image
          source={require("@/assets/whether-img/27218923_1.png")}
          className="w-[90px] h-[90px] opacity-50"
        />
        <View className="w-[119px] justify-between flex flex-row">
          <View>
            <Text className="text-[#74C5FF]">最低</Text>
            <View className="flex flex-row items-baseline h-[20px]">
              <Text className="text-[#74C5FF] font-bold">13</Text>
              <Text className="text-[#74C5FF] font-bold">℃</Text>
            </View>
          </View>

          <View>
            <Text className="text-[#E98383]">最高</Text>
            <View className="flex flex-row items-baseline h-[20px]">
              <Text className="text-[#E98383] font-bold">24</Text>
              <Text className="text-[#E98383] font-bold">℃</Text>
            </View>
          </View>
        </View>
      </GlassView>
    </View>
  );
}