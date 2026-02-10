import { Image, Text, View } from "@/components/index";
import { useWhetherStore } from "@/store/whetherStore";
import { getStatusIcon } from "@/lib";

export default function Stimulation() {
  const data = useWhetherStore((state) => state.atomos);
  return (
    <View className="flex h-full w-[354px] flex-row items-center justify-between px-[32px]">
      <View className="flex w-[140px] gap-2">
        <View className="flex flex-row items-baseline gap-2">
          <Image
            source={getStatusIcon(data?.status)}
            className="h-[40px] w-[40px]"
            contentFit="contain"
          />
        </View>
        <Text className="font-notoSansJP text-[16px] text-[#000000]">{data?.message}</Text>
      </View>
      <View className="flex items-center justify-center">
        <Image
          source={require("@/assets/whether-img/stimulation.png")}
          className="h-[90px] w-[90px]"
        />
      </View>
    </View>
  );
}
