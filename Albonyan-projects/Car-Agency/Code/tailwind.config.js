/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('assets/hero.webp')",
        "services-image": "url('assets/services.webp')",
      },
    },
  },
  plugins: [],
};
