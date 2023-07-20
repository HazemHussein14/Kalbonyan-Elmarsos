const SectionTitle = ({ title, titleNo }) => {
  return (
    <h2 className="flex items-center text-2xl font-semibold font-titleFont">
      <span className="mr-2 text-base md:text-lg text-textGreen">
        {titleNo}.
      </span>{" "}
      {title}
      <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
    </h2>
  );
};

export default SectionTitle;
