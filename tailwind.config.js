module.exports = {
  purge: ['./src/pages/*.{js,ts,jsx,tsx}', './src/components/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      '1': '1 1 0%',
      '2': '2 2 0%',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
