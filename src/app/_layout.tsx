import { Stack } from "expo-router";
import { View } from "react-native";
import { cssInterop } from "nativewind";
import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GlassView } from "expo-glass-effect";
import { Image } from "expo-image";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetView } from "@gorhom/bottom-sheet";

cssInterop(View, {
  className: "style",
});
cssInterop(GlassView, {
  className: "style",
});
cssInterop(Image, {
  className: "style",
});
cssInterop(BottomSheetView, {
  className: "style",
});

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <View className="flex-1">
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
