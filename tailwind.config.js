const palette = require('./palette');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: palette,
      fontFamily: {
        poppins: 'Poppins',
        rubik: 'Rubik',
      },
    },
  },
  plugins: [],
};
