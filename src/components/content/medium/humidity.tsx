import { Image, Text, View } from "@/components/index";
import { useWhetherStore } from "@/store/whetherStore";

export default function Humidity() {
  const data = useWhetherStore((state) => state.humidity);
  return (
    <View className="flex h-full w-[354px] flex-row items-center justify-between px-[32px]">
      <View className="flex w-[140px] gap-2">
        <View className="flex flex-row items-end gap-2">
          <Text className="font-notoSansJP text-[40px] text-[#000000]">{data?.current_h}</Text>
          <Text className="font-notoSansJP text-[24px] text-[#000000]">%</Text>
        </View>
        <Text className="font-notoSansJP text-[16px] text-[#000000]">{data?.message}</Text>
      </View>
      <View className="flex items-center justify-center">
        <Image
          source={require("@/assets/whether-img/humidity.png")}
          className="h-[90px] w-[90px]"
        />
      </View>
    </View>
  );
}
