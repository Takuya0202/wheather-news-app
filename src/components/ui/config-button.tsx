import { Pressable } from "react-native";
import { router } from "expo-router";
import { GlassView } from "expo-glass-effect";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function ConfigButton() {
  return (
    <Pressable onPress={() => router.push("/config")} className="absolute bottom-4 right-4">
      <GlassView
        className="flex h-10 w-10 items-center justify-center rounded-full"
        glassEffectStyle="clear"
      >
        <FontAwesome6 name="gear" size={24} color="white" />
      </GlassView>
    </Pressable>
  );
}
