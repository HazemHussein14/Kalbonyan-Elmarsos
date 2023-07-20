import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialFacebook } from "react-icons/sl";
import { LiaTelegramPlane } from "react-icons/lia";

const LeftSide = () => {
  return (
    <div className="flex flex-col items-center justify-end w-full h-full gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/HazemHussein14" target="_blank">
          <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
            <TbBrandGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/hazem-hussein/" target="_blank">
          <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="https://www.facebook.com/hazim.hussein.148/" target="_blank">
          <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
            <SlSocialFacebook />
          </span>
        </a>
        <a href="https://t.me/HazemHussein142" target="_blank">
          <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
            <LiaTelegramPlane />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
