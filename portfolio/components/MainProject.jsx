import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const MainProject = ({
  index,
  demo,
  imageSrc,
  title,
  description,
  techStack,
  repoLink,
}) => {
  const isEven = index % 2 === 0;
  return (
    <div
      className={`flex flex-col ${
        isEven ? "lgl:flex-row-reverse" : "lgl:flex-row"
      } gap-6`}
    >
      <a
        href={demo}
        target="_blank"
        className="relative w-full h-auto lgl:w-1/2 group"
      >
        <div>
          <Image src={imageSrc} alt={title} />
        </div>
      </a>
      <div className="z-10 flex flex-col items-end w-full gap-6 text-right lgl:w-1/2 lgl:justify-between lgl:-ml-16">
        <div>
          <p className="text-sm tracking-wide font-titleFont text-textGreen">
            Featured Project
          </p>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md lgl:-mr-16">
          {description}
        </p>
        <ul className="flex justify-between gap-2 text-xs tracking-wide md:text-sm font-titleFont md:gap-5 text-textDark">
          {techStack.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <div className="flex gap-4 text-2xl">
          <a
            href={repoLink}
            className="duration-300 hover:text-textGreen"
            target="_blank"
          >
            <TbBrandGithub />
          </a>
          <a href={demo} target="_blank" className="hover:text-textGreen">
            <RxOpenInNewWindow />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainProject;
