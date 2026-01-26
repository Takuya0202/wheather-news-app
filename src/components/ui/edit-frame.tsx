import { GlassView } from "expo-glass-effect";
import { DimensionValue, View } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { cssInterop } from "nativewind";
type Size = "small" | "medium" | "big";
interface Props {
    size: Size
}
cssInterop(GlassView, {
    className: "style",
});
const FRMAE_SIZE = {
    small: {
        width: 160,
        height: 192
    },
    // n%表記はstring判定で型エラーになるため、DimensionValueのリテラル型を使用
    medium: {
        width: "100%" as DimensionValue,
        height: 92
    },
    big: {
        width: "100%" as DimensionValue,
        height: 256
    }
}
export default function EditFrame({ size = "medium" }: Props) {
    const { width, height } = FRMAE_SIZE[size];
    return (
        <View className="w-full">
            <GlassView
                className="rounded-[16px] flex justify-center items-center"
                style={{
                    width, height
                }}
                glassEffectStyle="clear"
            >
                <FontAwesome6
                    name="add"
                    size={36}
                    color="white"
                />
            </GlassView>
        </View>
    )
}