import { ContentInfo, ContentType } from "@/types/layout";

// 各サイズのコンテンツ一覧
export const LARGE_CONTENTS: ContentInfo[] = [
  { type: "temperature", label: "気温", size: "large" },
  { type: "sensibleTemperature", label: "体感温度", size: "large" },
  { type: "clothing", label: "服装", size: "large" },
  { type: "humidity", label: "湿度", size: "large" },
  { type: "windSpeed", label: "風速", size: "large" },
  { type: "precipitationProbability", label: "降水確率", size: "large" },
  { type: "laundry", label: "洗濯", size: "large" },
  { type: "stimulation", label: "気圧", size: "large" },
];

export const MEDIUM_CONTENTS: ContentInfo[] = [
  { type: "temperature", label: "気温", size: "medium" },
  { type: "sensibleTemperature", label: "体感温度", size: "medium" },
  { type: "clothing", label: "服装", size: "medium" },
  { type: "humidity", label: "湿度", size: "medium" },
  { type: "windSpeed", label: "風速", size: "medium" },
  { type: "precipitationProbability", label: "降水確率", size: "medium" },
  { type: "laundry", label: "洗濯", size: "medium" },
  { type: "stimulation", label: "気圧", size: "medium" },
];

export const SMALL_CONTENTS: ContentInfo[] = [
  { type: "temperature", label: "気温", size: "small" },
  { type: "sensibleTemperature", label: "体感温度", size: "small" },
  { type: "clothing", label: "服装", size: "small" },
  { type: "humidity", label: "湿度", size: "small" },
  { type: "windSpeed", label: "風速", size: "small" },
  { type: "precipitationProbability", label: "降水確率", size: "small" },
  { type: "laundry", label: "洗濯", size: "small" },
  { type: "stimulation", label: "気圧", size: "small" },
];

export function getContentsBySize(size: "small" | "medium" | "large"): ContentInfo[] {
  switch (size) {
    case "small":
      return SMALL_CONTENTS;
    case "medium":
      return MEDIUM_CONTENTS;
    case "large":
      return LARGE_CONTENTS;
  }
}
