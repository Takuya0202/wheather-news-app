import fetchWeather from "../index";

export interface TemperatureApi {
  max_temp: number;
  min_temp: number;
  current_temp: number;
  wheather: string;
  icon_url: string;
}
export default async function temperature(): Promise<TemperatureApi> {
  const data = await fetchWeather();
  return data.temperature;
}
