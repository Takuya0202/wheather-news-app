import { VideoView, useVideoPlayer } from "expo-video";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { GlassView } from "expo-glass-effect";

import { useWhetherStore } from "@/store/whetherStore";
import { renderContentComponent } from "@/utils/contentRenderer";
import { GRID_SIZE } from "@/types/layout";
import ConfigButton from "@/components/ui/config-button";

const bgWhetherVideo = require("@/assets/whether-mov/45125_960x540.mp4");

const SCREEN_WIDTH = Dimensions.get("window").width;
const GRID_WIDTH = SCREEN_WIDTH * 0.94;
const GRID_COLUMNS = 2;
const GRID_CELL_WIDTH = GRID_WIDTH / GRID_COLUMNS;
const GRID_CELL_HEIGHT = 128;
const GRID_PADDING = 8;

export default function Index() {
  const layoutItems = useWhetherStore((state) => state.layoutItems);

  const video = useVideoPlayer(bgWhetherVideo, (videoPlayer) => {
    videoPlayer.loop = true;
    videoPlayer.play();
    videoPlayer.playbackRate = 0.3;
  });

  // グリッドの最大高さを計算
  const maxGridHeight = Math.max(
    ...layoutItems.map((item) => {
      const gridSize = GRID_SIZE[item.size];
      return (item.gridY + gridSize.rows) * GRID_CELL_HEIGHT;
    }),
    GRID_CELL_HEIGHT * 2
  );

  return (
    <SafeAreaView className="relative mb-[12px] flex-1 bg-black pt-[20px]" edges={["top"]}>
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
        contentContainerStyle={{
          alignItems: "center",
          paddingVertical: 16,
        }}
      >
        <View style={{ width: GRID_WIDTH, height: maxGridHeight, position: "relative" }}>
          {layoutItems.map((item) => {
            const gridSize = GRID_SIZE[item.size];
            const itemWidth = GRID_CELL_WIDTH * gridSize.cols - GRID_PADDING * 2;
            const itemHeight = GRID_CELL_HEIGHT * gridSize.rows - GRID_PADDING * 2;
            const left = item.gridX * GRID_CELL_WIDTH + GRID_PADDING;
            const top = item.gridY * GRID_CELL_HEIGHT + GRID_PADDING;

            return (
              <View
                key={item.id}
                style={{
                  position: "absolute",
                  left,
                  top,
                  width: itemWidth,
                  height: itemHeight,
                }}
              >
                <GlassView
                  className="flex items-center justify-center rounded-[16px]"
                  style={[StyleSheet.absoluteFill, styles.glassView]}
                  glassEffectStyle="clear"
                >
                  {renderContentComponent(item.contentType, item.size)}
                </GlassView>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <ConfigButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  glassView: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});
