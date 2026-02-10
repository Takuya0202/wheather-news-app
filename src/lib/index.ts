import * as Location from "expo-location";

export interface TemperatureApi {
  max_temp: number;
  min_temp: number;
  current_temp: number;
  wheather: string;
  icon_url: string;
}

export interface HumidityApi {
  current_h: number;
  message: string;
}

export interface WindSpeedApi {
  current_w: number;
  message: string;
  direction: string;
}

export interface RainApi {
  current_r: number;
  message: string;
}

export interface LaundryApi {
  status: number;
  message: string;
}

export interface AtomosApi {
  current_a: number;
  status: number;
  message: string;
}

export interface WeatherData {
  temperature: TemperatureApi;
  humidity: HumidityApi;
  wind: WindSpeedApi;
  rain: RainApi;
  laundry: LaundryApi;
  atomos: AtomosApi;
}

export default async function fetchWeather(): Promise<WeatherData | undefined> {
  // 位置情報を許可するか
  const { status } = await Location.requestForegroundPermissionsAsync();
  //   許可しない場合
  if (status !== "granted") {
    console.error("位置情報へのアクセスが拒否されました");
    return;
  }

  // 位置情報を取得
  const location = await Location.getCurrentPositionAsync({});
  const { latitude, longitude } = location.coords;
  const api = process.env.EXPO_PUBLIC_API_URL;

  const url = `${api}/api/wheather?lat=${latitude}&lon=${longitude}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`取得に失敗しました: ${res.status}`);
    }

    const data = await res.json();
    return data as WeatherData;
  } catch (error) {
    console.error("fetch error:", error);
    throw error;
  }
}

export function getStatusIcon(status: number) {
  switch (status) {
    case 1:
      return require("@/assets/icons/circle.svg");
    case 2:
      return require("@/assets/icons/triangle.svg");
    case 3:
      return require("@/assets/icons/cross.svg");
    default:
      return require("@/assets/icons/circle.svg");
  }
}
