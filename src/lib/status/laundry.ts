import fetchWeather from "../index";

export interface LaundryApi {
  status: number;
  message: string;
}
export default async function laundry(): Promise<LaundryApi> {
  const data = await fetchWeather();
  return data.laundry;
}
