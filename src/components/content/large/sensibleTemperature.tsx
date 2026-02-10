import { Image, Text, View } from "@/components/index";
import { useWhetherStore } from "@/store/whetherStore";

export default function SensibleTemperature() {
  const data = useWhetherStore((state) => state.temperature);
  return (
    <View>
      <Text className="text-center font-notoSansJP text-[28px] text-[#000000]">体感温度</Text>
      <View className="flex items-center justify-center">
        <Image
          // 画像はあまり納得いってないが仮で配置してます
          source={require("@/assets/whether-img/sensibleTemperature.png")}
          className="h-[130px] w-[130px]"
        />
      </View>
      <View className="flex w-[235px] flex-row justify-between">
        <View className="flex flex-col ">
          <Text className=" notoSansJP text-[16px] text-blue">最低</Text>
          <View className="flex flex-row items-baseline">
            {/* 最低温度 */}
            <Text className="notoSansJP text-[36px] font-bold text-blue">{data?.min_temp}</Text>
            <Text className="notoSansJP text-[24px] font-bold text-blue">℃</Text>
          </View>
        </View>
        <View className="flex flex-col ">
          <Text className=" notoSansJP text-[16px] text-red">最高</Text>
          <View className="flex flex-row items-baseline">
            {/* 最高温度 */}
            <Text className="notoSansJP text-[36px] font-bold text-red">{data?.max_temp}</Text>
            <Text className="notoSansJP text-[24px] font-bold text-red">℃</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
