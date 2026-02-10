import { Image, Text, View } from "@/components/index";
import { useWhetherStore } from "@/store/whetherStore";

export default function SensibleTemperature() {
  const data = useWhetherStore((state) => state.temperature);
  return (
    <View className="flex h-full w-[354px] flex-row items-center justify-between px-[32px]">
      <View className="flex w-[140px] gap-2">
        <Text className="font-notoSansJP text-[32px] text-[#000000]">体感温度</Text>
        <View className="flex flex-row justify-between">
          <View className="flex flex-row items-baseline">
            {/* 最低温度 */}
            <Text className="notoSansJP text-[28px] font-bold text-blue">{data?.min_temp}</Text>
            <Text className="notoSansJP text-[24px] font-bold text-blue">℃</Text>
          </View>
          <View className="flex flex-col ">
            <View className="flex flex-row items-baseline">
              {/* 最高温度 */}
              <Text className="notoSansJP text-[28px] font-bold text-red">{data?.max_temp}</Text>
              <Text className="notoSansJP text-[24px] font-bold text-red">℃</Text>
            </View>
          </View>
        </View>
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
