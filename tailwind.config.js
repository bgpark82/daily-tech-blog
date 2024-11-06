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
    themes: [
      {
        customtheme: {
          "primary": "#06AC78",          // Primary button color (light green)
          "secondary": "#ffb347",        // Secondary button color (orange)
          "accent": "#2d3748",           // Accent color (dark background)
          "neutral": "#3d4451",          // Neutral color (default dark gray)
          "base-100": "#ffffff",         // Background color for light theme
          "base-200": "#f7f8fa",         // Lighter background for light theme elements
          "info": "#3ABFF8",             // Info color
          "success": "#36D399",          // Success color
          "warning": "#FBBD23",          // Warning color
          "error": "#F87272",
        }
      },
      "light"], // Enable light and dark themes
  },
};