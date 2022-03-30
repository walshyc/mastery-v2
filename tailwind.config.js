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
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#056A4B",

          "secondary": "#ef3340",

          "accent": "#ffd700",

          "neutral": "#f1f1f1",

          "base-100": "#f1f1f1",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}
