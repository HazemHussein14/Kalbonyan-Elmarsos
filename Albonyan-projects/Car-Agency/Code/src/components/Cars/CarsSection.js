import SectionTitlte from "../UI/SectionTitle";
import MultiCarousel from "./MultiCarousel";

const CarsSection = () => {
  return (
    <section id="cars" className="section-spacing">
      <SectionTitlte
        title={"Cars"}
        titleColor={"text-[--primary-color]"}
        largeTitleColor={""}
      />
      <MultiCarousel />
    </section>
  );
};

export default CarsSection;
