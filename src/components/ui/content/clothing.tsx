import { Image, Text, View } from "@/components/index";

export default function Clothing() {
  return (
    <View>
      <Text className="text-center font-notoSansJP text-[28px] text-[#CDCDCD]">服装の提案</Text>
      <View className="flex items-center justify-center">
        <Image
          // 画像はあまり納得いってないが仮で配置してます
          source={require("@/assets/whether-img/sensibleTemperature.png")}
          className="h-[130px] w-[130px]"
        />
      </View>
      <View className="flex w-[235px] flex-row justify-between">
        <Text className=" notoSansJP text-[16px] text-[#CDCDCD]">
          今日は半袖でも過ごしやすいような一日になるでしょう。
        </Text>
      </View>
    </View>
  );
}
