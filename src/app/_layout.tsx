import { Stack } from "expo-router";
import { View } from "react-native";
import { cssInterop } from "nativewind";
import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GlassView } from "expo-glass-effect";
import { Image } from "expo-image";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetView, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useEffect } from "react";
import fetchWeather from "@/lib";
import { useWhetherStore } from "@/store/whetherStore";

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
  const setWhetherData = useWhetherStore((state) => state.setWhetherData);
  const loadLayout = useWhetherStore((state) => state.loadLayout);

  useEffect(() => {
    // 天気データの取得
    fetchWeather().then((data) => {
      if (data) {
        setWhetherData(data);
      }
    });

    // 保存されたレイアウトの読み込み
    loadLayout();
  }, [setWhetherData, loadLayout]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <BottomSheetModalProvider>
          <View className="flex-1">
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            />
          </View>
        </BottomSheetModalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
