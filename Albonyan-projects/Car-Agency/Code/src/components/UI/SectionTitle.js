const SectionTitle = ({ title, titleColor, largeTitleColor }) => {
  return (
    <div className="container text-center">
      <h2
        className={`text-5xl font-bold ${largeTitleColor} uppercase opacity-10 lg:text-7xl`}
      >
        {title}
      </h2>
      <h3 className={`text-xl font-bold ${titleColor} -m-6 lg:text-3xl`}>
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
