import { Image, Text, View } from "@/components/index";
import { useWhetherStore } from "@/store/whetherStore";

export default function Humidity() {
  const data = useWhetherStore((state) => state.humidity);
  return (
    <View className="flex justify-between p-2">
      <Text className="text-center font-notoSansJP text-[20px] text-[#000000]">湿度</Text>
      <View className="flex items-center justify-center">
        <Image
          source={require("@/assets/whether-img/humidity.png")}
          className="h-[90px] w-[90px]"
        />
      </View>
      <View className="flex flex-row items-baseline justify-center">
        <Text className="notoSansJP text-[36px] font-bold text-[#000000]">{data?.current_h}</Text>
        <Text className="notoSansJP text-[24px] font-bold text-[#000000]">%</Text>
      </View>
    </View>
  );
}
