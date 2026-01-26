import { Stack } from "expo-router";
import { View } from "react-native";
import { cssInterop } from "nativewind";
import "../global.css";

cssInterop(View, {
  className: "style",
});

export default function RootLayout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  );
}
