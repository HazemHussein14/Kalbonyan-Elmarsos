import SectionTitle from "./SectionTitle";
import Kalbonyan from "./works/Kalbonyan";

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-4 py-10 mx-auto max-w-containerxs lgl:py-24"
    >
      <SectionTitle title="Where I have worked" titleNo="02" />
      <div className="flex flex-col w-full gap-16 mt-10 md:flex-row">
        <ul>
          <li className="border-l-hoverColor border-l-textGreen text-textGreen border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium">
            Kalbonyan Elmarsos
          </li>
        </ul>
        <Kalbonyan />
      </div>
    </section>
  );
};
export default Experience;
