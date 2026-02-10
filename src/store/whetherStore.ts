import { create } from "zustand";
import { WeatherData } from "@/lib";
import { LayoutItem } from "@/types/layout";
import * as SecureStore from "expo-secure-store";

const LAYOUT_STORAGE_KEY = "weather_layout_config";

interface WhetherStore extends WeatherData {
  setWhetherData: (data: WeatherData) => void;
  layoutItems: LayoutItem[];
  setLayoutItems: (items: LayoutItem[]) => void;
  addLayoutItem: (item: LayoutItem) => void;
  removeLayoutItem: (id: string) => void;
  updateLayoutItem: (id: string, updates: Partial<LayoutItem>) => void;
  saveLayout: () => Promise<void>;
  loadLayout: () => Promise<void>;
}

export const useWhetherStore = create<WhetherStore>((set, get) => ({
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
  setWhetherData: (data: WeatherData) => set(data),

  // デフォルトレイアウト（large気温情報1つ）
  layoutItems: [
    {
      id: "default-temperature",
      contentType: "temperature",
      size: "large",
      gridX: 0,
      gridY: 0,
    },
  ],

  setLayoutItems: (items: LayoutItem[]) => set({ layoutItems: items }),

  addLayoutItem: (item: LayoutItem) =>
    set((state) => ({
      layoutItems: [...state.layoutItems, item],
    })),

  removeLayoutItem: (id: string) =>
    set((state) => ({
      layoutItems: state.layoutItems.filter((item) => item.id !== id),
    })),

  updateLayoutItem: (id: string, updates: Partial<LayoutItem>) =>
    set((state) => ({
      layoutItems: state.layoutItems.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      ),
    })),

  saveLayout: async () => {
    try {
      const { layoutItems } = get();
      await SecureStore.setItemAsync(LAYOUT_STORAGE_KEY, JSON.stringify(layoutItems));
    } catch (error) {
      console.error("Failed to save layout:", error);
    }
  },

  loadLayout: async () => {
    try {
      const saved = await SecureStore.getItemAsync(LAYOUT_STORAGE_KEY);
      if (saved) {
        const layoutItems = JSON.parse(saved) as LayoutItem[];
        set({ layoutItems });
      }
    } catch (error) {
      console.error("Failed to load layout:", error);
    }
  },
}));
