// レイアウト設定の型定義

export type ContentType =
  | "temperature"
  | "sensibleTemperature"
  | "clothing"
  | "humidity"
  | "windSpeed"
  | "precipitationProbability"
  | "laundry"
  | "stimulation";

export type ContentSize = "small" | "medium" | "large";

// グリッド上の配置情報
export interface LayoutItem {
  id: string; // ユニークID
  contentType: ContentType; // コンテンツの種類
  size: ContentSize; // コンテンツのサイズ
  gridX: number; // グリッドのX座標（0 or 1）
  gridY: number; // グリッドのY座標（0, 1, 2, ...）
}

// 各サイズのコンテンツ情報
export interface ContentInfo {
  type: ContentType;
  label: string;
  size: ContentSize;
}

// グリッドサイズ定義
export const GRID_SIZE = {
  small: { cols: 1, rows: 2 }, // 幅1列、高さ2行
  medium: { cols: 2, rows: 1 }, // 幅2列、高さ1行
  large: { cols: 2, rows: 2 }, // 幅2列、高さ2行
};
