import { create } from "zustand";
import { WeatherData } from "@/lib";

interface WeatherStore {
  data: WeatherData | null;
  setData: (data: WeatherData) => void;
}

export const useWeatherStore = create<WeatherStore>((set) => ({
  data: null,
  setData: (data) => set({ data }),
}));
