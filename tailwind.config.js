/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "purple": "#854dff",
      "red": "#ff5959",
      "lighter-grey": "#F0F0F0",
      "dark-grey": "#716F6F",
      "light-grey": "#dcdcdc",
      "black": "#000000"
    },
    extend: {
      fontSize: {
        "heading-mobile": "56px",
        "heading-desktop": "104px"
      }
    }
  },
  plugins: [],
}