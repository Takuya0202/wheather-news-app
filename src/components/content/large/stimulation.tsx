import { Image, Text, View } from "@/components/index";
import { useWhetherStore } from "@/store/whetherStore";
import { getStatusIcon } from "@/lib";

export default function Stimulation() {
  const data = useWhetherStore((state) => state.atomos);
  return (
    <View>
      <Text className="text-center font-notoSansJP text-[28px] text-[#000000]">刺激</Text>
      <View className="flex items-center justify-center">
        <Image
          source={require("@/assets/whether-img/stimulation.png")}
          className="h-[130px] w-[130px]"
        />
      </View>
      <View className="flex w-[235px] flex-row items-center justify-between">
        <View className="flex flex-row items-baseline gap-2">
          <Image
            source={getStatusIcon(data?.status)}
            className="h-[55px] w-[55px]"
            contentFit="contain"
          />
        </View>
        <Text className="notoSansJP w-full px-3 text-[20px] text-[#000000]">{data?.message}</Text>
      </View>
    </View>
  );
}
