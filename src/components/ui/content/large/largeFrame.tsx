import { GlassView, View, StyleSheet } from "../../../index";
import React from "react";
import Temperature from "./temperature";
import SensibleTemperature from "./sensibleTemperature";
import Clothing from "./clothing";
import Humidity from "./humidity";
import WindSpeed from "./windSpeed";
import PrecipitationProbability from "./precipitationProbability";
import Laundry from "./laundry";
import Stimulation from "./stimulation";
import { ScrollView } from "react-native";

export default function LargeFrame({ children }: { children?: React.ReactNode }) {
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
    <View className="flex h-full w-width items-center rounded-[12px]">
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerClassName="items-center flex gap-4"
      >
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
      </ScrollView>
    </View>
  );
}
