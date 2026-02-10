import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LayoutEditor from "@/components/ui/layout-editor";

// 別の動画を使用（bigButton.tsxとは違う動画）
const bgVideo = require("@/assets/whether-mov/132598_960x540.mp4");

export default function Config() {
  const video = useVideoPlayer(bgVideo, (videoPlayer) => {
    videoPlayer.loop = true;
    videoPlayer.play();
    videoPlayer.playbackRate = 0.3;
  });

  return (
    <SafeAreaView className="relative flex-1 bg-black" edges={["top", "bottom"]}>
      <VideoView
        player={video}
        contentFit="cover"
        nativeControls={false}
        pointerEvents="none"
        style={[StyleSheet.absoluteFill, { width: "100%", height: "110%", opacity: 0.7 }]}
      />
      <LayoutEditor />
    </SafeAreaView>
  );
}
