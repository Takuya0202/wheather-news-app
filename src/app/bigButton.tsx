import { VideoView, useVideoPlayer } from "expo-video";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";

import LargeFrame from "@/components/ui/largeFrame";
import fetchWeather from "@/lib";
import { useWhetherStore } from "@/store/whetherStore";

// Force refresh
const bgWhetherVideo = require("@/assets/whether-mov/45125_960x540.mp4");

export default function BigButton() {
  const [loading, setLoading] = useState(true);
  const setWhetherData = useWhetherStore((state) => state.setWhetherData);
  const temperatureData = useWhetherStore((state) => state.temperature);

  // データの取得
  useEffect(() => {
    fetchWeather()
      .then((data) => {
        if (data) {
          setWhetherData(data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const video = useVideoPlayer(bgWhetherVideo, (videoPlayer) => {
    // ビデオをループ再生
    videoPlayer.loop = true;
    // 読み込まれたらビデオを再生
    videoPlayer.play();
    videoPlayer.playbackRate = 0.3;
  });

  return (
    <View className="relative flex-1 bg-black/20">
      {/* nativeControls={false}で動画のコントロールボタンを制御 */}
      <VideoView
        player={video}
        contentFit="cover"
        nativeControls={false}
        pointerEvents="none"
        style={[StyleSheet.absoluteFill, { width: "100%", height: "100%", opacity: 0.6 }]}
      />
      <View className="flex h-full w-full flex-col items-center justify-center gap-4">
        <LargeFrame />
      </View>
    </View>
  );
}
