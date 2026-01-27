import { Text, View, StyleSheet } from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";
import LargeFrame from "@/components/ui/largeFrame";
import MediumFrame from "@/components/ui/mediumFlame";

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
      <VideoView
        player={video}
        contentFit="cover"
        nativeControls={false}
        style={[StyleSheet.absoluteFill, { width: "100%", height: "100%" }]}
      />
      <View className="flex h-full w-full flex-col items-center justify-center">
        <LargeFrame
          title="気温"
          image={require("@/assets/whether-img/27218923_1.png")}
          First={{
            title: "最低",
            textColor: "blue",
            numberValue: {
              number: 17,
              value: "℃",
            },
          }}
          Second={{
            title: "最高",
            textColor: "red",
            numberValue: {
              number: 13,
              value: "℃",
            },
          }}
        />
        <MediumFrame
          title="あああ"
          image={require("@/assets/whether-img/27218923_1.png")}
          First={{
            title: "最低",
            textColor: "blue",
            numberValue: {
              number: 53,
              value: "℃",
            },
          }}
          Second={{
            title: "最高",
            textColor: "red",
            numberValue: {
              number: 13,
              value: "℃",
            },
          }}
        />
      </View>
    </View>
  );
}
