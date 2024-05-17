/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "hsl(27, 66%, 92%)",
        cyan: "hsl(186, 34%, 60%)",
        softRed: "hsl(10, 79%, 65%)",
        darkBrown: "hsl(25, 47%, 15%)",
        mediumBrown: "hsl(28, 10%, 53%)",
        veryPaleOrange: "hsl(33, 100%, 98%)",
      },
    },
  },
  plugins: [],
};
