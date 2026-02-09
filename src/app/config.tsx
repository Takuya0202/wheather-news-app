import EditFrame from "@/components/ui/edit-frame";
import { useVideoPlayer, VideoView } from "expo-video";
import { View, StyleSheet } from "react-native";

// 別の動画を使用（bigButton.tsxとは違う動画）
const bgVideo = require("@/assets/whether-mov/132598_960x540.mp4");
export default function Config() {
  const video = useVideoPlayer(bgVideo, (videoPlayer) => {
    videoPlayer.loop = true;
    videoPlayer.play();
  });

  return (
    <View className="relative flex-1">
      <VideoView
        player={video}
        contentFit="cover"
        nativeControls={false}
        style={[StyleSheet.absoluteFill, { width: "100%", height: "100%" }]}
      />
      <View className="m-auto flex w-[94%] flex-1 flex-col items-start justify-center gap-3">
        <EditFrame size="large" />
        <EditFrame size="medium" />
        <EditFrame size="small" />
      </View>
    </View>
  );
}
