/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgPrimary: '#2d3748', // Soft, garden-inspired background
        primaryAccent: '#58BF72', // Light green for accents
        secondaryAccent: '#ffb347', // Subtle orange for secondary elements
        textPrimary: '#a7acb9', // Dark text color for readability
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"], // Enable light and dark themes
  },
};