/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path based on where your components are located
    "./public/index.html", // Include your HTML files
  ],
  theme: {
    extend: {
      colors: {
primary:"#C426DC",
secondary: "#d49ce2",
text:"#C426DC",
cart:"#A114AB"
    },
  },
},
  plugins: [],
};