import { Image, Text, View } from "@/components/index";
import { useWhetherStore } from "@/store/whetherStore";

export default function Clothing() {
  const data = useWhetherStore((state) => state.laundry);
  return (
    <View className="flex justify-between p-2">
      <Text className="text-center font-notoSansJP text-[20px] text-[#000000]">服装の提案</Text>
      <View className="flex items-center justify-center">
        <Image
          source={require("@/assets/whether-img/sensibleTemperature.png")}
          className="h-[90px] w-[90px]"
        />
      </View>
      <Text className="text-center font-notoSansJP text-[16px] text-[#000000]">
        {data?.message}
      </Text>
    </View>
  );
}
