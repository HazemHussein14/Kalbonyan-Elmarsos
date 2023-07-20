import Contact from "./Contact";
import Description from "./Description";
import Form from "./Form";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-white shadow-[0_-3px_2px_rgba(0,0,0,0.03)] p-10"
    >
      <div className="container text-center lg:grid lg:grid-cols-3 lg:gap-5">
        <Description />

        <Form />

        <Contact />

        <SocialLinks />
      </div>
      <div className="container pt-3 border-[#741906] border-t-2 text-center">
        <p className="text-[12px]">
          &#169; Copyright - <b>YourCar</b> All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
