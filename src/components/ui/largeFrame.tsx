import { GlassView, View, StyleSheet } from "../index";
import React from "react";
import Temperature from "../content/large/temperature";
import SensibleTemperature from "../content/large/sensibleTemperature";
import Clothing from "../content/large/clothing";
import Humidity from "../content/large/humidity";
import WindSpeed from "../content/large/windSpeed";
import PrecipitationProbability from "../content/large/precipitationProbability";
import Laundry from "../content/large/laundry";
import Stimulation from "../content/large/stimulation";
import { ScrollView } from "react-native";
import { useWhetherStore } from "@/store/whetherStore";

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
