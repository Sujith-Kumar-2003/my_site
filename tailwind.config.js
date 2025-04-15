module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        // Ensure gray colors are available
        gray: {
          200: '#e2e8f0',
          800: '#2d3748',
        },
      },
    },
  },
  plugins: [],
}
