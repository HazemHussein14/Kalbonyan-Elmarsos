import SectionTitle from "../UI/SectionTitle";

import TestimonalCard from "./TestimonalCard";

const TestimonialsSection = () => {
  return (
    <section className="section-spacing bg-[rgba(18,39,61,0.96)]">
      <SectionTitle
        title={"Testimonials"}
        titleColor={"text-white"}
        largeTitleColor={"text-white"}
      />
      <TestimonalCard />
    </section>
  );
};

export default TestimonialsSection;
