/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#f9f9f9",
        color1: "#1c5cff",
        color2: "#3d74ff",
        color3: "#779dff",
        color4: "#eff3ff",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
