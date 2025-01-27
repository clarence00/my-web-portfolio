/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "grid-pattern":
          "radial-gradient(circle, oklch(var(--nc)/0.2) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-pattern": "16px 16px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customOrange: "#f05539",
        customYellow: "#eba32b",
        customGreen: "#006400",
        customBlue: {
          light: "#0aa7cf",
          DEFAULT: "#2c65f3",
          dark: "#3b77a9",
        },
        customViolet: {
          light: "#9f73d9",
          DEFAULT: "#9B4F96",
          dark: "#7b7fb5",
        },
        customPink: {
          DEFAULT: "#CB6699",
          dark: "#99425B",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["forest"],
  },
};
