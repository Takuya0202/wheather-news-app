import { Text, View, StyleSheet } from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";
import { cssInterop } from "nativewind";
import SmallFrame from "@/components/ui/smallFrame";

const bgWhetherVideo = require("@/assets/whether-mov/128879_960x540.mp4");

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
      <View 
    pointerEvents="none"
  >{/*       <View 
    pointerEvents="none"
    これで画面の拡大を阻止できる
  >*/}
      <VideoView
        player={video}
        contentFit="cover"
        nativeControls={false}
        style={[StyleSheet.absoluteFill, { width: "100%", height: "100%" }]}
      />
      <View className="w-full h-full flex items-center justify-center">
        <SmallFrame/>
      </View>
      </View>
    </View>
  );
}