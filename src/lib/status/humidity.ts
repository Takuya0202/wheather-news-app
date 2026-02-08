import fetchWeather from "../index";

export interface HumidityApi {
  current_h: number;
  message: string;
}
export default async function humidity(): Promise<HumidityApi> {
  const data = await fetchWeather();
  return data.humidity;
}
