import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#100F0F",
      primary: {
        200: "#efeffc",
        300: "#cfd0f6",
        400: "#FF3170",
        DEFAULT: "#FF1069",
        600: "#E91455",
      },
      secondary: {
        200: "#eaf8f4",
        300: "#a3daff",
        400: "#4ab7ff",
        DEFAULT: "#139cf7",
        600: "#0284FC",
      },
      gray: {
        300: "#fafafa",
        400: "#f2f2f2",
        500: "#e5e5e5",
        600: "#b2b2b2",
        700: "#808080",
        800: "#333333",
        DEFAULT: "#1d1d1d",
      },
      dark: {
        primary: "#FF1CAC",
        secondary: "#45ADFF",
        gray: "#212020",
      },
      alert: {
        danger: "#FF4E4E",
        success: "#90DA1A",
        warning: "#FEB72F",
      },
    },

    fontSize: {
      "8xl": "50px",
      "7xl": "42px",
      "6xl": "36px",
      "5xl": "30px",
      "4xl": "26px",
      "3xl": "24px",
      "2xl": "23px",
      xl: "21px",
      lg: "20px",
      base: "19px",
      sm: "18px",
      caption1: "17px",
      caption2: "16px",
      caption3: "15px",
      caption4: "14px",
    },

    borderRadius: {
      DEFAULT: "10px",
      full: "50%",
    },

    extend: {
      boxShadow: {
        "3xl": "0 0 30px #FF1069",
        "4xl": "0 0 30px #333333",
        "5xl": "0 0 25px #45ADFF",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
