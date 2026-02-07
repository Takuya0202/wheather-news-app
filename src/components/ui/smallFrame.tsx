import Temperature from "../content/small/temperature";
import { GlassView, View, StyleSheet } from "../index";
import React from "react";
// import {
//   Clothing,
//   Humidity,
//   Laundry,
//   PrecipitationProbability,
//   SensibleTemperature,
//   Stimulation,
//   Temperature,
//   WindSpeed,
// } from "../content/medium";

export default function MediumFrame() {
  const styles = StyleSheet.create({
    tintedGlassView: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  });
  //   const mediumFrameList = [
  //     <Temperature />,
  //     <SensibleTemperature />,
  //     <Clothing />,
  //     <Humidity />,
  //     <WindSpeed />,
  //     <PrecipitationProbability />,
  //     <Laundry />,
  //     <Stimulation />,
  //   ];

  return (
    <View className="flex w-width items-center gap-[24px] rounded-[12px]">
      {/* {mediumFrameList.map((item, index) => (
        <GlassView
          key={index}
          className="flex h-[122px] w-width items-center rounded-[12px]"
          glassEffectStyle="clear"
          style={styles.tintedGlassView}
        >
          {item}
        </GlassView>
      ))} */}
      <GlassView
        className="flex h-[170px] w-[160px] items-center rounded-[12px]"
        glassEffectStyle="clear"
        style={styles.tintedGlassView}
      >
        <Temperature />
      </GlassView>
    </View>
  );
}
