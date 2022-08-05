const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,jsx,tsx,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        san: ['Helvetica Neue', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
