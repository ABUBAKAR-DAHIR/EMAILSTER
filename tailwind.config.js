// tailwind.config.js
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#e99b63",
      },
    },
  },
  plugins: [],
})
