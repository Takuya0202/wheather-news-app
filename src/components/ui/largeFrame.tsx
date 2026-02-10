import { GlassView, View, StyleSheet } from "../index";
import React, { useEffect, useState } from "react";
import Temperature from "../content/large/temperature";
import SensibleTemperature from "../content/large/sensibleTemperature";
import Clothing from "../content/large/clothing";
import Humidity from "../content/large/humidity";
import WindSpeed from "../content/large/windSpeed";
import PrecipitationProbability from "../content/large/precipitationProbability";
import Laundry from "../content/large/laundry";
import Stimulation from "../content/large/stimulation";
import { ScrollView } from "react-native";
import fetchWeather, { WeatherData } from "@/lib";

export default function LargeFrame() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather()
      .then((res) => {
        if (res) setData(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const styles = StyleSheet.create({
    tintedGlassView: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  });
  const largeFrameList = [
    <Temperature data={data?.temperature} />,
    <SensibleTemperature data={data?.temperature} />,
    <Clothing data={data} />,
    <Humidity data={data?.humidity} />,
    <WindSpeed data={data?.wind} />,
    <PrecipitationProbability data={data?.rain} />,
    <Laundry data={data?.laundry} />,
    <Stimulation data={data?.atomos} />,
  ];

  return (
    <View className="flex w-full items-center gap-[24px] rounded-[12px]">
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
