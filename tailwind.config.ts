import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#130B07",
        crema: "#F6E7C9",
        copper: "#C87A3C",
        ember: "#F9A14A",
        pine: "#1D392A",
        roast: "#26130C"
      },
      boxShadow: {
        glow: "0 0 80px rgba(248, 161, 74, 0.22)",
        premium: "0 30px 100px rgba(0,0,0,0.35)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
