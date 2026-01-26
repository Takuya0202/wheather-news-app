import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { GlassView } from "expo-glass-effect";
import { cssInterop } from "nativewind";
import { Link } from "expo-router";
cssInterop(GlassView, {
  className: "style",
});
export default function ConfigButton() {
  return (
    <Link href="/config" className="absolute bottom-4 right-4">
      <GlassView
        className="flex h-10 w-10 items-center justify-center rounded-full"
        glassEffectStyle="clear"
      >
        <FontAwesome6 name="gear" size={24} color="white" />
      </GlassView>
    </Link>
  );
}
