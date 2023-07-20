import { Fragment } from "react";

const SpecialOverlay = () => {
  return (
    <Fragment>
      <div className="absolute z-10 text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <h3 className="mb-4 text-2xl font-bold">Tesla Model 3</h3>
        <p className="mb-6">Disruptive, avant-garde, futuristic, innovative.</p>
        <a
          href="#contact"
          className="block w-fit border-solid border-white border-2 px-5 py-1 mx-auto rounded hover:scale-[1.1] transition-transform duration-300"
        >
          Contact
        </a>
      </div>
      <div className="after:absolute after:content-[''] after:bg-[#00000089] after:w-full after:h-full after:top-0 after:left-0 text-center" />
    </Fragment>
  );
};
export default SpecialOverlay;
