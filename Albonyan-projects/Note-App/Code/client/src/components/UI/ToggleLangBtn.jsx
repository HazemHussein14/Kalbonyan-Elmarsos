import { useState, useEffect } from "react";
import toggleLanguage from "../../utils/toggle-lang";

const ToggleLangBtn = ({ useInNav }) => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng");
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const toggleLangHandler = () => {
    toggleLanguage();
    setLang((prevLang) => (prevLang === "en" ? "ar" : "en"));
  };
  let btnContent;
  if (lang === "en") {
    btnContent = "Ar";
  } else if (lang === "ar") {
    btnContent = "En";
  }
  return (
    <button
      className={`text-2xl md:text-4xl ${
        useInNav ? "" : "md:absolute md:bottom-[-5px] md:left-[5px]"
      }`}
      onClick={toggleLangHandler}
    >
      {btnContent || 'En'}
    </button>
  );
};
export default ToggleLangBtn;
