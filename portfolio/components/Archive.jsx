import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { moreProjects } from "../utils/more-projects";

const Archive = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const initialProjectCount = 6;
  const projectsToShow = showAllProjects
    ? moreProjects
    : moreProjects.slice(0, initialProjectCount);

  const handleButtonClick = () => {
    setShowAllProjects((prevShowAllProjects) => !prevShowAllProjects);
  };

  return (
    <div
      className="px-4 py-24 mx-auto max-w-contentContainer"
    >
      <div className="flex flex-col items-center w-full">
        <h3 className="text-3xl font-semibold font-titleFont">
          More Projects
        </h3>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 xl:grid-cols-3 lgl:px-10">
        {projectsToShow.map((project, idx) => (
          <ArchiveCard
            key={idx}
            link={project.link}
            title={project.title}
            content={project.content}
            tags={project.tags}
            img={project.img}
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-12">
        <button
          onClick={handleButtonClick}
          className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
        >
          {showAllProjects ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Archive;
