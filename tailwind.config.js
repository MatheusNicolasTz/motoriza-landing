/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Site (light)
        page: "#FFFFFF",
        pageSoft: "#F6F8FB",
        ink: "#0E1620",
        inkSoft: "#3B4A5A",
        inkMuted: "#6B7B8C",
        line: "#E5EAF0",
        // App brand (dark)
        appBg: "#15202A",
        appSurface: "#1F2C36",
        appSurface2: "#243341",
        appBorder: "#34485A",
        appText: "#FFFFFF",
        appTextSec: "#C4D4DF",
        appMuted: "#8FA5B5",
        primary: "#2E96FF",
        primaryDark: "#1C7DF6",
        success: "#58CC02",
        successDark: "#58A700",
        danger: "#FF5A5A"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
}