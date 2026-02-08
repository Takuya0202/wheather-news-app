import fetchWeather from "../index";

export interface RainApi {
  current_r: number;
  message: string;
}
export default async function rain(): Promise<RainApi> {
  const data = await fetchWeather();
  return data.rain;
}
