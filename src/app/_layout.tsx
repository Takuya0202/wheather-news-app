import { Stack } from "expo-router";
import { View } from "react-native";
import { cssInterop } from "nativewind";
import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GlassView } from "expo-glass-effect";
import { Image } from "expo-image";

cssInterop(View, {
  className: "style",
});
cssInterop(GlassView, {
  className: "style",
});
cssInterop(Image, {
  className: "style",
});

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <View className="flex-1">
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </View>
    </SafeAreaProvider>
  );
}
