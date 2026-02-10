import { Image, Text, View } from "@/components/index";
import { useWhetherStore } from "@/store/whetherStore";

export default function PrecipitationProbability() {
  const data = useWhetherStore((state) => state.rain);
  return (
    <View className="flex h-full w-[354px] flex-row items-center justify-between px-[32px]">
      <View className="flex w-[140px] gap-2">
        <View className="flex flex-row items-end gap-2">
          <Text className="font-notoSansJP text-[40px] text-[#000000]">{data?.current_r}</Text>
          <Text className="font-notoSansJP text-[24px] text-[#000000]">%</Text>
        </View>
        <Text className="font-notoSansJP text-[16px] text-[#000000]">{data?.message}</Text>
      </View>
      <View className="flex items-center justify-center">
        <Image
          source={require("@/assets/whether-img/precipitationProbability.png")}
          className="h-[90px] w-[90px]"
        />
      </View>
    </View>
  );
}
