import { Image, Text, View } from "@/components/index";

export default function WindSpeed() {
  return (
    <View>
      <Text className="text-center font-notoSansJP text-[28px] text-[#CDCDCD]">風速</Text>
      <View className="flex items-center justify-center">
        <Image
          source={require("@/assets/whether-img/windSpeed.png")}
          className="h-[130px] w-[130px]"
        />
      </View>
      <View className="flex w-[235px] flex-row items-center justify-between">
        <View className="flex flex-row items-baseline">
          <Text className="notoSansJP text-[48px] font-bold text-[#CDCDCD]">55</Text>
          <Text className="notoSansJP text-[20px] font-bold text-[#CDCDCD]">m</Text>
        </View>
        <Text className="notoSansJP w-[120px] text-[16px] text-[#CDCDCD]">
          今日は台風並みに風が強いです
        </Text>
      </View>
    </View>
  );
}
