import { Text, View } from "react-native";
import { Button } from "react-native";
import { H1, Div } from '@expo/html-elements';
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
      <Div className="bg-green-500">  
        <Button title="ああああ111"/>
      </Div>
      <H1>aaa</H1>
      <Link href="/bigButton">bigButton</Link>
    </View>
  );
}
