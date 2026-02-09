import { Image, Text, View } from "@/components/index";
import { useWhetherStore } from "@/store/whetherStore";

export default function PrecipitationProbability() {
  const data = useWhetherStore((state) => state.rain);
  return (
    <View>
      <Text className="text-center font-notoSansJP text-[28px] text-[#000000]">降水確率</Text>
      <View className="flex items-center justify-center">
        <Image
          source={require("@/assets/whether-img/precipitationProbability.png")}
          className="h-[130px] w-[130px]"
        />
      </View>
      <View className="flex w-[235px] flex-row items-center justify-between">
        <View className="flex flex-row items-baseline">
          <Text className="notoSansJP text-[48px] font-bold text-[#000000]">{data?.current_r}</Text>
          <Text className="notoSansJP text-[20px] font-bold text-[#000000]">%</Text>
        </View>
        <Text className="notoSansJP w-[120px] text-[16px] text-[#000000]">{data?.message}</Text>
      </View>
    </View>
  );
}
