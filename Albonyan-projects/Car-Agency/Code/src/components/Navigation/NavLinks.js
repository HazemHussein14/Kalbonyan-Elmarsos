import { useState } from "react";

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index === activeLink ? null : index);
  };

  const colorEffect = "hover:text-white hover:bg-[--primary-color]";

  return (
    <ul className="hidden gap-4 lg:flex">
      <li>
        <a
          href="#home"
          className={`font-bold p-1 transition duration-300 rounded ${colorEffect} ${
            activeLink === 0 ? "bg-[--primary-color] text-white" : ""
          }
            
          `}
          onClick={() => handleLinkClick(0)}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className={`font-bold p-1 transition duration-300 rounded ${colorEffect} ${
            activeLink === 1 ? "bg-[--primary-color] text-white" : ""
          }`}
          onClick={() => handleLinkClick(1)}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#services"
          className={`font-bold p-1 transition duration-300 rounded ${colorEffect} ${
            activeLink === 2 ? "bg-[--primary-color] text-white" : ""
          }`}
          onClick={() => handleLinkClick(2)}
        >
          Services
        </a>
      </li>
      <li>
        <a
          href="#cars"
          className={`font-bold p-1 transition duration-300 rounded ${colorEffect} ${
            activeLink === 3 ? "bg-[--primary-color] text-white" : ""
          }`}
          onClick={() => handleLinkClick(3)}
        >
          Cars
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className={`font-bold p-1 transition duration-300 rounded ${colorEffect} ${
            activeLink === 4 ? "bg-[--primary-color] text-white" : ""
          }`}
          onClick={() => handleLinkClick(4)}
        >
          Contact us
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
