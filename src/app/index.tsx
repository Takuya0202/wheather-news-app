import { Text, View } from "react-native";
import { Button } from "react-native";
import { H1 } from '@expo/html-elements';

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
      <Text className="text-red-500">ああああああ</Text>
      <Button title="ああああ111" />
      <H1>aaa</H1>
    </View>
  );
}
