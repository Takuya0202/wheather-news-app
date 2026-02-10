import { Image, Text, View } from "@/components/index";
import { useWhetherStore } from "@/store/whetherStore";

export default function SensibleTemperature() {
  const data = useWhetherStore((state) => state.temperature);
  return (
    <View className="flex justify-between p-2">
      <Text className="text-center font-notoSansJP text-[20px] text-[#000000]">体感温度</Text>
      <View className="flex items-center justify-center">
        <Image
          source={require("@/assets/whether-img/sensibleTemperature.png")}
          className="h-[90px] w-[90px]"
        />
      </View>
      <View className="flex w-fit flex-row justify-between gap-3">
        <View className="flex flex-col ">
          <View className="flex flex-row items-baseline">
            <Text className="notoSansJP text-[36px] font-bold text-blue">{data?.min_temp}</Text>
            <Text className="notoSansJP text-[24px] font-bold text-blue">℃</Text>
          </View>
        </View>
        <View className="flex flex-col ">
          <View className="flex flex-row items-baseline">
            <Text className="notoSansJP text-[36px] font-bold text-red">{data?.max_temp}</Text>
            <Text className="notoSansJP text-[24px] font-bold text-red">℃</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
