/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImg: "url('E:ancons_techmy-appsrcimages\bg.JPG')",
      },
    },
    screens: {
      sm: { max: "640px" },
      md: { max: "1024px" },
      lg: { max: "1270px" },
      xl: { max: "1550px" },
    },
  },
  plugins: [],
};
