/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "done": "url('/done.png')",
        "photo": "url('/photo.png')",
        "bell": "url('/bell.png')",
        "rocket": "url('/rocket.png')",
        "arrow": "url('/arrow.png')",
      },
      backgroundSize: {
        '70%': '70%',
        '60%': '60%',
      },
      boxShadow: {
        'card': 'rgba(0, 0, 0, 0.25) 0px 2px 10px',
      },
      padding: {
        '25%': '25%',
      },
    },
  },
  plugins: [],
};
