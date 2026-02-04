import { GlassView, View, StyleSheet } from "../index";
import React from "react";
// import Temperature from "./content/temperature";
import SensibleTemperature from "./content/sensibleTemperature";

export default function LargeFrame({ children }: { children?: React.ReactNode }) {
  const styles = StyleSheet.create({
    tintedGlassView: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  });
  return (
    <View className="flex h-[257px] w-width items-center justify-center rounded-[12px]">
      <GlassView
        className="flex h-full w-full items-center justify-center rounded-[12px]"
        glassEffectStyle="clear"
        style={styles.tintedGlassView}
      >
        <SensibleTemperature />
        {children}
      </GlassView>
    </View>
  );
}
