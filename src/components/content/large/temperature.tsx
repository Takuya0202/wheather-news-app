import { Image, Text, View } from "@/components/index";
import temperature, { TemperatureApi as TemperatureData } from "@/lib/status/temperature";
import { useEffect, useState } from "react";

export default function Temperature() {
  const [data, setData] = useState<TemperatureData>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    temperature().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);
  return (
    <View>
      <Text className="text-center font-notoSansJP text-[28px] text-[#000000]">気温</Text>
      <View className="flex items-center justify-center">
        <Image
          source={require("@/assets/whether-img/temperature.png")}
          className="h-[130px] w-[130px]"
        />
      </View>
      <View className="flex h-fit w-[235px] flex-row items-end justify-between">
        <View className="flex flex-col ">
          <Text className=" notoSansJP text-[16px] text-blue">最低</Text>
          <View className="flex flex-row items-baseline">
            {/* 最低温度 */}
            <Text className="notoSansJP text-[36px] font-bold text-blue">{data?.min_temp}</Text>
            <Text className="notoSansJP text-[24px] font-bold text-blue">℃</Text>
          </View>
        </View>
        <View className="flex flex-col">
          <Text className=" notoSansJP text-[16px] text-[#6f6f6f]">現在の気温</Text>
          <View className="flex flex-row items-baseline">
            {/* 現在の気温 */}
            <Text className="notoSansJP text-[52px] font-bold text-[#6f6f6f]">
              {data?.current_temp}
            </Text>
            <Text className="notoSansJP text-[24px] font-bold text-[#6f6f6f]">℃</Text>
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
