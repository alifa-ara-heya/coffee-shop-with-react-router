/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui"
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/assets/banner.jpg')"
      }
    },
  },
  daisyui: {
    themes: [ "dark", "cmyk", 'cyberpunk', 'pastel'],
  },
  plugins: [daisyui,],
}

