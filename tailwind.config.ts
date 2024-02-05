import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      white: "#ffffff",
      primary: {
        200: "#efeffc",
        300: "#cfd0f6",
        400: "#f30835",
        DEFAULT: "#f30850",
        600: "#f30820",
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
      alert: {
        danger: "#FF4E4E",
        success: "#90DA1A",
        warning: "#FEB72F",
      },
    },

    fontSize: {
      "8xl": [
        "70px",
        {
          lineHeight: "95px",
          letterSpacing: "-5px",
          fontWeight: "500",
        },
      ],
      "7xl": [
        "50px",
        {
          lineHeight: "70px",
          letterSpacing: "-2px",
          fontWeight: "600",
        },
      ],
      "6xl": [
        "40px",
        {
          lineHeight: "50px",
          letterSpacing: "-2px",
          fontWeight: "500",
        },
      ],
      "5xl": [
        "35px",
        {
          lineHeight: "54px",
          letterSpacing: "-1.600000023841858px",
          fontWeight: "500",
        },
      ],
      "4xl": [
        "30px",
        {
          lineHeight: "44px",
          letterSpacing: "-1.2000000476837158px",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "25px",
        {
          lineHeight: "34px",
          letterSpacing: "-0.800000011920929px",
          fontWeight: "500",
        },
      ],
      "2xl": [
        "23px",
        {
          lineHeight: "30px",
          letterSpacing: "-1px",
          fontWeight: "400",
        },
      ],
      xl: [
        "22px",
        {
          lineHeight: "30px",
          letterSpacing: "-1px",
          fontWeight: "400",
        },
      ],
      lg: [
        "21px",
        {
          lineHeight: "30px",
          letterSpacing: "-0.800000011920929px",
          fontWeight: "400",
        },
      ],
      base: [
        "20px",
        {
          lineHeight: "25px",
          letterSpacing: "-0.699999988079071px",
          fontWeight: "400",
        },
      ],
      sm: [
        "19px",
        {
          lineHeight: "28px",
          letterSpacing: "-0.6000000238418579px",
          fontWeight: "400",
        },
      ],
      caption1: [
        "18px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.6000000238418579px",
          fontWeight: "400",
        },
      ],
      caption2: [
        "17px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.30000001192092896px",
          fontWeight: "400",
        },
      ],
      caption3: [
        "16px",
        {
          lineHeight: "18px",
          letterSpacing: "-0.5px",
          fontWeight: "400",
        },
      ],
      caption4: [
        "14px",
        {
          lineHeight: "15px",
          letterSpacing: "-0.20000000298023224px",
          fontWeight: "400",
        },
      ],
    },

    borderRadius: {
      DEFAULT: "10px",
      full: "50%",
    },

    extend: {},
  },
  plugins: [],
};
export default config;
