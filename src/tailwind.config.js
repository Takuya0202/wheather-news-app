/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      width: {
        width: "353",
      },
      minHeight: {
        standard: "44",
      },
      colors: {
        blue: "#74C5FF",
        red: "#E98383",
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "16px",
        4: "32px",
        5: "64px",
      },
      // テキスト用の影（React NativeではboxShadowと共通化できないため）
      textShadow: {
        white: "1 1 2 rgba(255, 255, 255, 0.35)",
      },
      // 枠（View）用の影
      boxShadow: {
        shadow: "2 2 4 rgba(0, 0, 0, 0.4)",
      },
      fontFamily: {
        notoSansJP: "NotoSansJP_400Regular",
      },
    },
  },
  plugins: [
    require("tailwindcss/plugin")(function ({ addUtilities, theme }) {
      // Text Shadow Plugin
      const textShadows = theme("textShadow");
      const textUtilities = Object.entries(textShadows).map(([key, value]) => {
        const parts = value.split(" ");
        return {
          [`.text-shadow-${key}`]: {
            textShadowOffset: {
              width: parseFloat(parts[0]),
              height: parseFloat(parts[1]),
            },
            textShadowRadius: parseFloat(parts[2]),
            textShadowColor: parts.slice(3).join(" "),
          },
        };
      });

      // Box Shadow Plugin (React Native View用)
      const boxShadows = theme("boxShadow");
      const boxUtilities = Object.entries(boxShadows).map(([key, value]) => {
        const parts = value.split(" ");
        return {
          [`.shadow-${key}`]: {
            shadowOffset: {
              width: parseFloat(parts[0]),
              height: parseFloat(parts[1]),
            },
            shadowRadius: parseFloat(parts[2]),
            shadowColor: parts.slice(3).join(" "),
            shadowOpacity: 1, // 色の方にalphaが含まれている想定
            elevation: parseFloat(parts[2]), // Android用
          },
        };
      });

      addUtilities([...textUtilities, ...boxUtilities]);
    }),
  ],
};
