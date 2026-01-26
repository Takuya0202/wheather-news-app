import { Text, View } from "react-native";
import { Button } from "react-native";
import { Link } from "expo-router";
import EditFrame from "@/components/ui/edit-frame";
import BigFrame from "@/components/ui/bigFrame";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import ConfigButton from "@/components/ui/config-button";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text className="text-blue-500">ああああああ</Text>
      <View className="bg-green-500">
        <Button title="ああああ111" />
      </View>
      <Text className="text-3xl font-bold">{isLiquidGlassAvailable() ? "リキッど" : "だめ"}</Text>
      <Link href="/bigButton">bigButton</Link>
      <EditFrame size="small" />
      <EditFrame size="medium" />
      <EditFrame size="big" />
      <ConfigButton />
    </View>
  );
}
