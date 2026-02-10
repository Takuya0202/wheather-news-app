import { Image, Text, View } from "@/components/index";
import { useWhetherStore } from "@/store/whetherStore";
import { getStatusIcon } from "@/lib";

export default function Stimulation() {
  const data = useWhetherStore((state) => state.atomos);
  return (
    <View className="flex justify-between p-2">
      <Text className="text-center font-notoSansJP text-[20px] text-[#000000]">刺激</Text>
      <View className="flex items-center justify-center">
        <Image
          source={require("@/assets/whether-img/stimulation.png")}
          className="h-[90px] w-[90px]"
        />
      </View>
      <View className="flex flex-row items-baseline justify-center">
        <View className="flex flex-row items-baseline gap-2">
          <Image
            source={getStatusIcon(data?.status)}
            className="h-[40px] w-[40px]"
            contentFit="contain"
          />
        </View>
      </View>
    </View>
  );
}
