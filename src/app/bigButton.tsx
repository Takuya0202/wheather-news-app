import { Text, View, StyleSheet } from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";
import { Div } from "@expo/html-elements";
import BigFrame from "@/components/ui/bigFrame";
import { cssInterop} from "nativewind";

cssInterop(Div, {
    className: "style",
});

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
            <VideoView player={video} contentFit="cover" nativeControls={false} style={[StyleSheet.absoluteFill, {width: "100%", height: "100%"}]}/>
            <Div className="w-full h-full flex items-center justify-center">
                <BigFrame/>
            </Div>
        </View>
    );
} 
