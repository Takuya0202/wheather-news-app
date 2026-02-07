import { Image, Text, View } from "@/components/index";

export default function PrecipitationProbability() {
  return (
    <View className="flex justify-between p-2">
      <Text className="text-center font-notoSansJP text-[20px] text-[#000000]">降水確率</Text>
      <View className="flex items-center justify-center">
        <Image
          source={require("@/assets/whether-img/precipitationProbability.png")}
          className="h-[90px] w-[90px]"
        />
      </View>
      <View className="flex flex-row items-baseline justify-center">
        {/* 最高温度 */}
        <Text className="notoSansJP text-[36px] font-bold text-[#000000]">13</Text>
        <Text className="notoSansJP text-[24px] font-bold text-[#000000]">%</Text>
      </View>
    </View>
  );
}
