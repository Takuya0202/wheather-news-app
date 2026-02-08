import { Image, Text, View } from "@/components/index";
import { LaundryApi as LaundryData } from "@/lib/index";

export default function Laundry({ data }: { data?: LaundryData }) {
  return (
    <View>
      <Text className="text-center font-notoSansJP text-[28px] text-[#000000]">洗濯</Text>
      <View className="flex items-center justify-center">
        <Image
          source={require("@/assets/whether-img/laundry.png")}
          className="h-[130px] w-[130px]"
        />
      </View>
      <View className="flex w-[235px] flex-row items-center justify-between">
        <View className="flex flex-row items-baseline gap-2">
          {/* 後にステータスごとに表示を切り替えるようにする */}
          <Image
            source={require("@/assets/whether-img/triangle.svg")}
            className="h-[55px] w-[55px]"
            contentFit="contain"
          />
        </View>
        <Text className="notoSansJP w-[110px] text-[24px] text-[#000000]">{data?.message}</Text>
      </View>
    </View>
  );
}
