import { GlassView } from "expo-glass-effect";
import { Text, View, StyleSheet } from "react-native";
import { cssInterop } from "nativewind";
import { Image, ImageSource } from "expo-image";

cssInterop(GlassView, {
  className: "style",
});
cssInterop(Image, {
  className: "style",
});
const colors = {
  blue: "text-blue",
  red: "text-red",
  white: "text-[#CDCDCD]",
};

interface LargeFrameProps {
  // 項目のタイトル
  title: string;
  // 項目に入るイラスト
  image: string;
  // styleの変更が可能
  className?: string;
  // 最初の項目
  First?: {
    title?: string;
    // テキストカラーを選択（デフォルトは白色）
    textColor?: keyof typeof colors;
    // 数字用
    numberValue?: {
      number: number;
      value: string;
    };
    // テキスト用
    textValue?: {
      text: string;
      value?: string;
    };
  };
  // 2個目の項目
  Second?: {
    title?: string;
    // テキストカラーを選択（デフォルトは白色）
    textColor?: keyof typeof colors;
    // 数字用
    numberValue?: {
      number: number;
      value: string;
    };
    // テキスト用
    textValue?: {
      text: string;
      value?: string;
    };
  };
}

export default function BigFrame({ image, title, First, Second, className }: LargeFrameProps) {
  const styles = StyleSheet.create({
    tintedGlassView: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  });
  return (
    <View className="flex h-[257px] w-width items-center justify-center rounded-[12px]">
      <GlassView
        className="flex h-full w-full items-center justify-center rounded-[12px]"
        glassEffectStyle="clear"
        style={styles.tintedGlassView}
      >
        <Text className="font-notoSansJP text-[28px] text-[#CDCDCD] text-shadow-white">
          {title}
        </Text>
        <Image
          source={image || require("@/assets/whether-img/27218923_1.png")}
          className="h-[130px] w-[130px]"
        />
        <View className="flex w-[235px] flex-row justify-between">
          <View className="flex flex-col ">
            <Text className=" notoSansJP text-[16px] text-blue">{First?.title}</Text>
            <View className="flex flex-row items-baseline">
              {/* 最低温度 */}
              <Text
                className={`notoSansJP text-[36px] font-bold ${colors[First?.textColor || "white"]} ${className}`}
              >
                {First?.numberValue?.number || First?.textValue?.text}
              </Text>
              <Text
                className={`notoSansJP text-[24px] font-bold ${colors[First?.textColor || "white"]} ${className}`}
              >
                {First?.numberValue?.value || First?.textValue?.value}
              </Text>
            </View>
          </View>
          <View className="flex flex-col ">
            <Text className=" notoSansJP text-[16px] text-red">{Second?.title}</Text>
            <View className="flex flex-row items-baseline">
              {/* 最高温度 */}
              <Text
                className={`notoSansJP text-[36px] font-bold ${colors[Second?.textColor || "white"]} ${className}`}
              >
                {Second?.numberValue?.number || Second?.textValue?.text}
              </Text>
              <Text
                className={`notoSansJP text-[24px] font-bold ${colors[Second?.textColor || "white"]} ${className}`}
              >
                {Second?.numberValue?.value || Second?.textValue?.value}
              </Text>
            </View>
          </View>
        </View>
      </GlassView>
    </View>
  );
}
