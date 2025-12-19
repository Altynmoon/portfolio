import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            lightHover: "#fcf4ff",
            darkHover: "#2a004a",
            darkTheme: "#11001F",
        },
        fontFamily: {
            Outfit: ["Outfit", "sans-serief"],
            Ovo: ["Ovo", "serief"]
        }
    },
  },
  plugins: [],
};

export default config;
