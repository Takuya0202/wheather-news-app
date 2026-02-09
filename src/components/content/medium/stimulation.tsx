import { Image, Text, View } from "@/components/index";

export default function Stimulation() {
  return (
    <View className="flex h-full w-[354px] flex-row items-center justify-between px-[32px]">
      <View className="flex w-[140px] gap-2">
        <View className="flex flex-row items-baseline gap-2">
          <Image
            source={require("@/assets/whether-img/circle.svg")}
            className="h-[40px] w-[40px]"
            contentFit="contain"
          />
        </View>
        <Text className="font-notoSansJP text-[16px] text-[#000000]">
          今日は半袖でも過ごしやすいような一日になるでしょう。
        </Text>
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
