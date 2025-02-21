/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/tw-elements/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        dsb: "#2C4875", // Warna yang kamu minta
        mb: "#003F5C",
        op: "#ffa600",
      },
      fontFamily: {
        garamond: ["'EB Garamond'", "serif"],
        delicious: ["'Delicious Handrawn'", "serif"],
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
};
