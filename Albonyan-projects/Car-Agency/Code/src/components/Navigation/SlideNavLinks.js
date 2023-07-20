const SlideNavLinks = ({ visitLinkHandler }) => {
  return (
    <nav>
      <ul className="flex-col mt-20 font-bold text-white">
        <li className="p-4 transition duration-300 hover:bg-[--primary-color]">
          <a href="#home" className="block" onClick={visitLinkHandler}>
            Home
          </a>
        </li>
        <li className="p-4 hover:bg-[--primary-color]">
          <a href="#about" className="block" onClick={visitLinkHandler}>
            About
          </a>
        </li>
        <li className="p-4 transition duration-300 hover:bg-[--primary-color]">
          <a href="#services" className="block" onClick={visitLinkHandler}>
            Services
          </a>
        </li>
        <li className="p-4 transition duration-300 hover:bg-[--primary-color]">
          <a href="#fleet" className="block" onClick={visitLinkHandler}>
            Fleet
          </a>
        </li>
        <li className="p-4 transition duration-300 hover:bg-[--primary-color]">
          <a href="#contact" onClick={visitLinkHandler}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SlideNavLinks;
