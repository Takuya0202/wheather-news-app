import React from "react";
import { ContentType, ContentSize } from "@/types/layout";

// Large コンポーネント
import * as LargeContent from "@/components/content/large";

// Medium コンポーネント
import * as MediumContent from "@/components/content/medium";

// Small コンポーネント
import * as SmallContent from "@/components/content/small";

export function renderContentComponent(
  contentType: ContentType,
  size: ContentSize
): React.ReactNode {
  // サイズに応じてコンポーネントセットを選択
  let ComponentSet: any;
  switch (size) {
    case "large":
      ComponentSet = LargeContent;
      break;
    case "medium":
      ComponentSet = MediumContent;
      break;
    case "small":
      ComponentSet = SmallContent;
      break;
  }

  // コンテンツタイプに応じてコンポーネントを選択
  switch (contentType) {
    case "temperature":
      return <ComponentSet.Temperature />;
    case "sensibleTemperature":
      return <ComponentSet.SensibleTemperature />;
    case "clothing":
      return <ComponentSet.Clothing />;
    case "humidity":
      return <ComponentSet.Humidity />;
    case "windSpeed":
      return <ComponentSet.WindSpeed />;
    case "precipitationProbability":
      return <ComponentSet.PrecipitationProbability />;
    case "laundry":
      return <ComponentSet.Laundry />;
    case "stimulation":
      return <ComponentSet.Stimulation />;
    default:
      return null;
  }
}
