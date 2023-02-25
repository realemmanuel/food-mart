module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rg_pink: {
          light: "#D23369",
          DEFAULT: "#FB2576",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
