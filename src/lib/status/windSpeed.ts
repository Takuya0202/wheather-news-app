import fetchWeather from "../index";

export interface WindSpeedApi {
  current_w: number;
  message: string;
  direction: string;
}
export default async function windSpeed(): Promise<WindSpeedApi> {
  const data = await fetchWeather();
  return data.wind;
}
