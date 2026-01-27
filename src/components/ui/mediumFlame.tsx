import { GlassView } from "expo-glass-effect";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { cssInterop } from "nativewind";

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

interface MediumFrameProps {
  // 項目のタイトル
  title: string;
  // 項目に入るイラスト
  image: any;
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

export default function MediumFrame({ image, title, First, Second, className }: MediumFrameProps) {
  const styles = StyleSheet.create({
    tintedGlassView: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  });
  return (
    <View className="flex h-[122px] w-width items-center justify-center rounded-[12px]">
      <GlassView
        className="flex h-full w-full items-center justify-center rounded-[12px]"
        glassEffectStyle="clear"
        style={styles.tintedGlassView}
      >
        <View className="flex w-[235px] flex-row items-center justify-between">
          <View className="flex justify-between">
            <Text className="text-[24px] text-white shadow">{title}</Text>
            <View className="flex w-[40%] flex-row justify-around">
              <View className="flex">
                <Text className={`text-[16px] ${colors[First?.textColor || "white"]}`}>
                  {First?.title}
                </Text>
                <View className="flex flex-row items-baseline">
                  {/* 最初 */}
                  <Text
                    className={`text-[36px] font-bold ${colors[First?.textColor || "white"]} ${className}`}
                  >
                    {First?.numberValue?.number || First?.textValue?.text}
                  </Text>
                  <Text
                    className={`text-[24px] font-bold ${colors[First?.textColor || "white"]} ${className}`}
                  >
                    {First?.numberValue?.value || First?.textValue?.value}
                  </Text>
                </View>
              </View>
              <View className="flex">
                <Text className={`text-[16px] ${colors[Second?.textColor || "white"]}`}>
                  {Second?.title}
                </Text>
                <View className="flex flex-row items-baseline">
                  {/* 2番目 */}
                  <Text
                    className={`text-[36px] font-bold ${colors[Second?.textColor || "white"]} ${className}`}
                  >
                    {Second?.numberValue?.number || Second?.textValue?.text}
                  </Text>
                  <Text
                    className={`text-[24px] font-bold ${colors[Second?.textColor || "white"]} ${className}`}
                  >
                    {Second?.numberValue?.value || Second?.textValue?.value}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Image
            source={image || require("@/assets/whether-img/27218923_1.png")}
            className="h-[130px] w-[130px]"
          />
        </View>
      </GlassView>
    </View>
  );
}
