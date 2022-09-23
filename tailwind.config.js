/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          
          
          "primary": "#a7f9f7",
          
          "secondary": "#adef1f",
                   
          "accent": "#e23477",
                   
          "neutral": "#2E2438",
                   
          "base-100": "#3B444E",
                   
          "info": "#3262D2",
                   
          "success": "#1C9C5C",
                   
          "warning": "#9B6803",
                   
          "error": "#FA6866",
                   },
      },
    ],
  },
  plugins: [require("daisyui")],
}
