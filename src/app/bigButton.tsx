import { VideoView, useVideoPlayer } from "expo-video";
// import LargeFrame from "@/components/ui/largeFrame";
import MediumFrame from "@/components/ui/mediumFrame";
import { View, StyleSheet } from "react-native";

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
    <View className="relative flex-1">
      {/* nativeControls={false}で動画のコントロールボタンを制御 */}
      <VideoView
        player={video}
        contentFit="cover"
        nativeControls={false}
        pointerEvents="none"
        style={[StyleSheet.absoluteFill, { width: "100%", height: "100%", opacity: 0.7 }]}
      />
      <View className="flex h-full w-full flex-col items-center justify-center gap-4">
        <MediumFrame />
      </View>
    </View>
  );
}
