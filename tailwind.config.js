/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: '#8B4513',    // warm brown
        secondary: '#FFF8F0',  // soft cream
        accent: '#C1440E',     // chili red
    },
  },
  plugins: [],
}
}
