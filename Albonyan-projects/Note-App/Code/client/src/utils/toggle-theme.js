const toggleTheme = () => {
  document.documentElement.classList.toggle("dark");
  document.body.classList.toggle("dark-theme");

  const isDarkMode = document.documentElement.classList.contains("dark");

  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
};

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
  document.body.classList.add("dark-theme");
}

export default toggleTheme;
