import { Text, View } from "react-native";
import { Button } from "react-native";
import { Link } from "expo-router";

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
      <Text className="text-3xl font-bold">aaa</Text>
      <Link href="/bigButton">bigButton</Link>
    </View>
  );
}
