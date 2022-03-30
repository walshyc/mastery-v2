module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minWidth: { "1/5": "20%" },
    extend: {
      colors: {
        'mgreen': '#056A4B',
        'mred': '#EF3340',
        'ukraineyellow': '#ffd700',
        'ukraineblue': '#0057B7'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],

}
