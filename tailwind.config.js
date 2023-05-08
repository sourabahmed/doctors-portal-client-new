/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
        },
      },
    ],
  },
  // {
  //   themes: [
  //     {
  //       doctorPortalTheme: {
  //         primary: "#0FCFEC",
  //         secondary: "#19D3AE",
  //         accent: "#3A4256",
  //         neutral: "#3d4451",
  //         "base-100": "#ffffff",
  //       },
  //     },
  //   ],
  // },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
