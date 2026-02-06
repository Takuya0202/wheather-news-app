// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import { GlassView, View, StyleSheet } from "../index";
import React from "react";

import Temperature from "../content/medium/temperature";

export default function MediumFrame() {
  const styles = StyleSheet.create({
    tintedGlassView: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  });

  return (
    <View className="flex h-[122px] w-width items-center rounded-[12px]">
      {/* <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerClassName="items-center flex gap-4"
      > */}
      <GlassView
        className="flex h-[122px] w-width items-center rounded-[12px]"
        glassEffectStyle="clear"
        style={styles.tintedGlassView}
      >
        <Temperature />
      </GlassView>
      {/* </ScrollView> */}
    </View>
  );
}
