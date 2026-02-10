import { GlassView, View, StyleSheet } from "../index";
import React from "react";
import {
  Clothing,
  Humidity,
  Laundry,
  PrecipitationProbability,
  SensibleTemperature,
  Stimulation,
  Temperature,
  WindSpeed,
} from "../content/small";

export default function SmallFrame() {
  const styles = StyleSheet.create({
    tintedGlassView: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  });

  const smallFrameList = [
    <Temperature />,
    <SensibleTemperature />,
    <Clothing />,
    <Humidity />,
    <WindSpeed />,
    <PrecipitationProbability />,
    <Laundry />,
    <Stimulation />,
  ];

  return (
    // flex-row と flex-wrap を使って2列に並べる
    <View className="flex w-full flex-row flex-wrap justify-between gap-y-[24px]">
      {smallFrameList.map((item, index) => (
        <GlassView
          key={index}
          className="flex h-[170px] w-[160px] items-center justify-center rounded-[12px]"
          glassEffectStyle="clear"
          style={styles.tintedGlassView}
        >
          {item}
        </GlassView>
      ))}
    </View>
  );
}
