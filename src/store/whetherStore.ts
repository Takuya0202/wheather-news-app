import { create } from "zustand";
import { WeatherData } from "@/lib";

const useWhetherStore = create<WeatherData>((set) => ({
  temperature: {
    max_temp: 0,
    min_temp: 0,
    current_temp: 0,
    wheather: "",
    icon_url: "",
  },
  humidity: {
    current_h: 0,
    message: "",
  },
  wind: {
    current_w: 0,
    message: "",
    direction: "",
  },
  rain: {
    current_r: 0,
    message: "",
  },
  laundry: {
    status: 0,
    message: "",
  },
  atomos: {
    current_a: 0,
    status: 0,
    message: "",
  },
}));
