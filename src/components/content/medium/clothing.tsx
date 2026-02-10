import { Image, Text, View } from "@/components/index";
import { useWhetherStore } from "@/store/whetherStore";

export default function Clothing() {
  const data = useWhetherStore((state) => state.laundry);
  return (
    <View className="flex h-full w-[354px] flex-row items-center justify-between px-[32px]">
      <View className="flex w-[140px] gap-2">
        <Text className="font-notoSansJP text-[32px] text-[#000000]">服装の提案</Text>
        <Text className="font-notoSansJP text-[16px] text-[#000000]">{data?.message}</Text>
      </View>
      <View className="flex items-center justify-center">
        <Image
          source={require("@/assets/whether-img/sensibleTemperature.png")}
          className="h-[90px] w-[90px]"
        />
      </View>
    </View>
  );
}
