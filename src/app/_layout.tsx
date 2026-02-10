import { Stack } from "expo-router";
import { View } from "react-native";
import { cssInterop } from "nativewind";
import "../global.css";
import { GlassView } from "expo-glass-effect";
import { Image } from "expo-image";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
    <GestureHandlerRootView>
      <View className="flex-1">
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </View>
    </GestureHandlerRootView>
  );
}
