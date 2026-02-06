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
} from "../content/large";

export default function LargeFrame() {
  const styles = StyleSheet.create({
    tintedGlassView: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  });
  const largeFrameList = [
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
    <View className="flex w-width items-center gap-[24px] rounded-[12px]">
      {largeFrameList.map((item, index) => (
        <GlassView
          key={index}
          className="flex h-[257px] w-width items-center justify-center rounded-[12px]"
          glassEffectStyle="clear"
          style={styles.tintedGlassView}
        >
          {item}
        </GlassView>
      ))}
    </View>
  );
}
