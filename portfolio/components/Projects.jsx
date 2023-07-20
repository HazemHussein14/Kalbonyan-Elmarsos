import SectionTitle from "./SectionTitle";
import { mainProjects } from "../utils/main-projects";
import MainProject from "./MainProject";

const Projects = () => {
  return (
    <section id="projects" className="py-24 mx-auto max-w-container lgl:px-20">
      <SectionTitle title="Some Projects I have Built" titleNo="03" />
      <div className="flex flex-col items-center justify-center w-full mt-10 gap-28">
        {mainProjects.map((project, idx) => (
          <MainProject key={idx} {...project} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
