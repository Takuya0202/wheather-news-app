import { VideoView, useVideoPlayer } from "expo-video";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import LargeFrame from "@/components/ui/largeFrame";
import MediumFrame from "@/components/ui/mediumFrame";

// Force refresh
const bgWhetherVideo = require("@/assets/whether-mov/45125_960x540.mp4");

export default function BigButton() {
  const video = useVideoPlayer(bgWhetherVideo, (videoPlayer) => {
    // ビデオをループ再生
    videoPlayer.loop = true;
    // 読み込まれたらビデオを再生
    videoPlayer.play();
  });

  return (
    // edgesはスマホの余分な余白を制御するために使用し、今回はiphoneの画面上部にある切り欠き部分から避けるために使用
    <SafeAreaView className="relative mb-[12px] flex-1 pt-[20px]" edges={["top"]}>
      {/* nativeControls={false}で動画のコントロールボタンを制御 */}
      <VideoView
        player={video}
        contentFit="cover"
        nativeControls={false}
        pointerEvents="none"
        style={[StyleSheet.absoluteFill, { width: "100%", height: "150%", opacity: 0.7 }]}
      />
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerClassName="items-center flex gap-4"
      >
        <View className="flex w-full flex-col items-center justify-center gap-4">
          <MediumFrame />
          <LargeFrame />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
