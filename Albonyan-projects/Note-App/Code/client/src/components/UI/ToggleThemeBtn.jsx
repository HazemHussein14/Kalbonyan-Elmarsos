import { useEffect, useState } from "react";
import toggleTheme from "../../utils/toggle-theme";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ToggleThemeBtn = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const handleClick = () => {
    toggleTheme();
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  let content;
  if (theme === "light") {
    content = <BsMoonFill style={{ fontSize: "28px" }} />;
  } else if (theme === "dark") {
    content = <BsSunFill style={{ fontSize: "28px" }}/>;
  }

  return (
    <button aria-label="switch theme" onClick={handleClick}>
      {content}
    </button>
  );
};

export default ToggleThemeBtn;
