import { Image, Text, View } from "@/components/index";
import { useWhetherStore } from "@/store/whetherStore";
import { getStatusIcon } from "@/lib";

export default function Laundry() {
  const data = useWhetherStore((state) => state.laundry);
  return (
    <View>
      <Text className="text-center font-notoSansJP text-[28px] text-[#000000]">洗濯</Text>
      <View className="flex items-center justify-center">
        <Image
          source={require("@/assets/whether-img/laundry.png")}
          className="h-[130px] w-[130px]"
        />
      </View>
      <View className="flex w-[250px] flex-row items-center justify-between gap-1">
        <View className="flex flex-row items-baseline">
          <Image
            source={getStatusIcon(data?.status)}
            className="h-[44px] w-[44px]"
            contentFit="contain"
          />
        </View>
        <Text className="notoSansJP w-full text-[24px] text-[#000000]">{data?.message}</Text>
      </View>
    </View>
  );
}
