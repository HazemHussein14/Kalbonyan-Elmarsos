module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        register: "url('assets/images/register-bg.webp')",
        form: "url('assets/images/form-bg.webp')",
        mainBg: "url('assets/images/main-light-bg.webp')",
        mainBgDark: "url('assets/images/main-dark-bg.webp')",
      },
    },
  },
  plugins: [],
};
