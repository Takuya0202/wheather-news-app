import { Image, Text, View } from "@/components/index";

export default function Temperature() {
  return (
    <View>
      <Text className="text-center font-notoSansJP text-[28px] text-[#CDCDCD]">気温</Text>
      <View className="flex items-center justify-center">
        <Image
          source={require("@/assets/whether-img/27218923_1.png")}
          className="h-[130px] w-[130px]"
        />
      </View>
      <View className="flex w-[235px] flex-row justify-between">
        <View className="flex flex-col ">
          <Text className=" notoSansJP text-[16px] text-blue">最低</Text>
          <View className="flex flex-row items-baseline">
            {/* 最低温度 */}
            <Text className="notoSansJP text-[36px] font-bold text-blue">13</Text>
            <Text className="notoSansJP text-[24px] font-bold text-blue">℃</Text>
          </View>
        </View>
        <View className="flex flex-col ">
          <Text className=" notoSansJP text-[16px] text-red">最高</Text>
          <View className="flex flex-row items-baseline">
            {/* 最高温度 */}
            <Text className="notoSansJP text-[36px] font-bold text-red">13</Text>
            <Text className="notoSansJP text-[24px] font-bold text-red">℃</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
