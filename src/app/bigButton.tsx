import { VideoView, useVideoPlayer } from "expo-video";
import { View, StyleSheet, ScrollView, ActivityIndicator, DimensionValue } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { SortableGridRenderItem } from "react-native-sortables";
import Sortable from "react-native-sortables";
import React, { useCallback, useEffect, useState } from "react";
import { GlassView } from "@/components/index";

// 各サイズのコンポーネントをインポート
import * as Large from "@/components/content/large";
import * as Medium from "@/components/content/medium";
import * as Small from "@/components/content/small";
import fetchWeather, { WeatherData } from "@/lib";
import { useWeatherStore } from "@/store/weatherStore";

// 並び替えアイテムの型定義
interface WeatherItem {
  id: string;
  type: keyof typeof Large; // コンポーネント名
  size: "large" | "medium" | "small";
}

// ビデオファイルの読み込み
const bgWhetherVideo = require("@/assets/whether-mov/45125_960x540.mp4");

export default function BigButton() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  // 並び替えデータの初期状態
  const [items, setItems] = useState<WeatherItem[]>([
    { id: "1", type: "Temperature", size: "large" },
    { id: "2", type: "SensibleTemperature", size: "large" },
    { id: "3", type: "Clothing", size: "large" },
    { id: "4", type: "Humidity", size: "small" },
    { id: "5", type: "WindSpeed", size: "small" },
    { id: "6", type: "PrecipitationProbability", size: "small" },
    { id: "7", type: "Laundry", size: "small" },
    { id: "8", type: "Stimulation", size: "medium" },
  ]);

  const setData = useWeatherStore((state) => state.setData);

  useEffect(() => {
    fetchWeather().then((res) => {
      if (res) setData(res);
      setLoading(false);
    });
  }, []);

  const video = useVideoPlayer(bgWhetherVideo, (videoPlayer) => {
    videoPlayer.loop = true;
    videoPlayer.play();
    videoPlayer.playbackRate = 0.3;
  });

  const styles = StyleSheet.create({
    card: {
      width: "100%",
      borderRadius: 12,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
    },
    tintedGlass: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  });

  const renderItem = useCallback<SortableGridRenderItem<WeatherItem>>(({ item }) => {
    // サイズに応じたコンポーネントの選択
    let Component: React.ComponentType<any>;
    let height: number;
    let width: DimensionValue;

    switch (item.size) {
      case "large":
        Component = Large[item.type];
        height = 257;
        width = "100%";
        break;
      case "medium":
        Component = Medium[item.type];
        height = 122;
        width = "100%";
        break;
      case "small":
        Component = Small[item.type];
        height = 170;
        width = "50%";
        break;
    }

    if (!Component) return null;

    return (
      <View style={{ width, padding: 6 }}>
        <GlassView glassEffectStyle="clear" style={[styles.card, styles.tintedGlass, { height }]}>
          <Component />
        </GlassView>
      </View>
    );
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-black">
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <SafeAreaView className="relative flex-1" edges={["top"]}>
      <VideoView
        player={video}
        contentFit="cover"
        nativeControls={false}
        pointerEvents="none"
        style={[StyleSheet.absoluteFill, { width: "100%", height: "100%", opacity: 0.7 }]}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 40 }}
      >
        <Sortable.Grid
          columns={2}
          data={items}
          onDragEnd={(event) => setItems(event.data)}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          rowGap={0}
          columnGap={0}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
