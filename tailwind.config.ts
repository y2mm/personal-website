import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { bg: "var(--bg)", fg: "var(--fg)", muted: "var(--muted)", card: "var(--card)" },
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,0.25)" }
    },
  },
  plugins: [],
};
export default config;