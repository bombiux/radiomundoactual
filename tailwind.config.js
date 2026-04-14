export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#001e40",
        "primary-container": "#003366",
        "on-primary": "#ffffff",
        "secondary": "#286c00",
        "secondary-fixed": "#92fc5e",
        "secondary-container": "#92fc5e",
        "on-secondary-container": "#2b7300",
        "surface": "#f8f9fa",
        "surface-container-low": "#f3f4f5",
        "surface-container": "#edeeef",
        "surface-container-highest": "#e1e3e4",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#191c1d",
        "on-surface-variant": "#43474f",
        "outline-variant": "#c3c6d1",
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Manrope", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
