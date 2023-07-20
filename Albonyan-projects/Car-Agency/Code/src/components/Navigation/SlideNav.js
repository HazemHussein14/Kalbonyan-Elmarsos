import { useState } from "react";
import SlideNavLinks from "./SlideNavLinks";

const Slider = ({ isSideOpen, checkIsVisited }) => {
  const [isVisited, setisVisited] = useState(false);

  const visitLinkHandler = () => {
    setisVisited(true);
    checkIsVisited(isVisited);
  };

  return (
    <div
      className={`absolute top-[68px] right-0 h-screen w-64 bg-[#0e2338db] transition-all duration-500 ease-in flex flex-col ${
        isSideOpen
          ? "pointer-events-auto visible translate-x-0 opacity-100"
          : "pointer-events-none invisible translate-x-[100%] opacity-0"
      }`}
    >
      <SlideNavLinks visitLinkHandler={visitLinkHandler} />
    </div>
  );
};

export default Slider;


