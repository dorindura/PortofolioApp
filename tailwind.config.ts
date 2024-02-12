import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#06b6d4",
        "primary-grey": "#475569",
        "primary-white": "#FFFFFF",
        "icons-blue": "#F2F7FC",
        "h4-grey": "#0B0909",
        "contact-card-color": "#F2F5F9",
        "download-color-btn": "#376D84",
        "dark-theme-color": "#102027",
        "mini-nav-color": "#E1E8EF",
        "light-black": "#576267",
        "blacky-blue": "#09143C",
      },
      screens: {
        "xl": {"max": "1240px"},
      }
    },
  },
  plugins: [],
};
export default config;
