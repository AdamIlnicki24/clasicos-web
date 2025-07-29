import { colors } from "./src/constants/colors";
import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: colors,
      boxShadow: {
        sm: "0 0px 7.2px 0.5px var(--tw-shadow-color)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
