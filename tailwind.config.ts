import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1F2937",
        secondary: "#9CA3AF",
        accent: "#09FA0B",
        mood: "#FA05FE",
        light: "#F3F4F6",
        dark: "#1E1E1E",
        neutral: {
          100: "#fff",
          200: "#f5f5f5",
          300: "#e5e7eb",
          400: "#d1d5db",
          500: "#9ca3af",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        }
      },
    },
  },
  plugins: [],
};
export default config;
