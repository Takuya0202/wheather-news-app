import { GlassView } from 'expo-glass-effect';
import { Text } from "react-native";
import { cssInterop} from "nativewind";

cssInterop(GlassView, {
    className: "style",
});

export default function BigFrame() {
    return (
        <GlassView className="absolute w-[200px] h-[100px] rounded-[12px] flex justify-center items-center" glassEffectStyle='clear'>
            <Text>aaa</Text>
        </GlassView>
    );
}