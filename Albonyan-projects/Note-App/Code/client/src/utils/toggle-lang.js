import i18n from "i18next";

const toggleLanguage = () => {
  let savedLanguage = localStorage.getItem("i18nextLng");
  let currentLanguage = savedLanguage || "en"; 

  if (currentLanguage === "en") {
    i18n.changeLanguage("ar");
    document.documentElement.setAttribute("dir", "rtl");
    localStorage.setItem("direction", "rtl"); 
  } else {
    i18n.changeLanguage("en");
    document.documentElement.setAttribute("dir", "ltr");
    localStorage.setItem("direction", "ltr");
  }
};

const savedDirection = localStorage.getItem("direction");
if (savedDirection === "rtl") {
  document.documentElement.setAttribute("dir", "rtl");
} else {
  document.documentElement.setAttribute("dir", "ltr");
}

export default toggleLanguage;
