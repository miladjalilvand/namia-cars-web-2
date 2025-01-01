/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.625rem', // اندازه 10px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",       // متغیر برای رنگ اصلی
        secondary: "var(--secondary)",   // متغیر برای رنگ ثانویه
        danger: "var(--danger)", 
        redc:"var(--redc)" ,
        txtl:"var(--txtl)" ,

        redasli: "var(--redasli)"       // متغیر برای رنگ خطر
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
