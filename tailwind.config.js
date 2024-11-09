/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "heading-mobile": "56px",
        "heading-desktop": "104px"
      },
      colors: {
        "figma-purple": "#854dff",
        "figma-red": "#ff5959",
        "figma-lighter-grey": "#F0F0F0",
        "figma-dark-grey": "#716F6F",
        "figma-light-grey": "#dcdcdc"
      },
    }
  },
  plugins: [],
}