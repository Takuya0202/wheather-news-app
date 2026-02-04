import { Image, Text, View } from "@/components/index";

export default function Stimulation() {
  return (
    <View>
      <Text className="text-center font-notoSansJP text-[28px] text-[#CDCDCD]">刺激</Text>
      <View className="flex items-center justify-center">
        <Image
          source={require("@/assets/whether-img/stimulation.png")}
          className="h-[130px] w-[130px]"
        />
      </View>
      <View className="flex w-[235px] flex-row items-center justify-between">
        <View className="flex flex-row items-baseline gap-2">
          <Image
            source={require("@/assets/whether-img/circle.svg")}
            className="h-[55px] w-[55px]"
            contentFit="contain"
          />
        </View>
        <Text className="notoSansJP w-[110px] text-[24px] text-[#CDCDCD]">気圧が安定</Text>
      </View>
    </View>
  );
}
