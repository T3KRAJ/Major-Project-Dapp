module.exports = {
  content: ["./index.html", "./src/**/*.{vue,jsx,ts,js}"],
  theme: {
    extend: {
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
  },
  plugins: [],
};
