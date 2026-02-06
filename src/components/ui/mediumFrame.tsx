import { GlassView, View, StyleSheet, ScrollView } from "../index";
import React from "react";

import Temperature from "../content/medium/temperature";
import SensibleTemperature from "../content/medium/sensibleTemperature";
import Clothing from "../content/medium/clothing";
import Humidity from "../content/medium/humidity";
import WindSpeed from "../content/medium/windSpeed";
import PrecipitationProbability from "../content/medium/precipitationProbability";
import Laundry from "../content/medium/laundry";
import Stimulation from "../content/medium/stimulation";

export default function MediumFrame() {
  const styles = StyleSheet.create({
    tintedGlassView: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  });
  const mediumFrameList = [
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
    <View className="flex h-full w-width items-center rounded-[12px]">
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerClassName="items-center flex gap-4"
      >
        {mediumFrameList.map((item, index) => (
          <GlassView
            key={index}
            className="flex h-[122px] w-width items-center rounded-[12px]"
            glassEffectStyle="clear"
            style={styles.tintedGlassView}
          >
            {item}
          </GlassView>
        ))}
      </ScrollView>
    </View>
  );
}
