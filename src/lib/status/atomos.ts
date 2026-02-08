import fetchWeather from "../index";

export interface AtomosApi {
  current_a: number;
  status: number;
  message: string;
}
export default async function atomos(): Promise<AtomosApi> {
  const data = await fetchWeather();
  return data.atomos;
}
