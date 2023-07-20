const logos = [
  { path: "images/logo1.webp" },
  { path: "images/logo2.webp" },
  { path: "images/logo3.webp" },
  { path: "images/logo4.webp" },
  { path: "images/logo5.jpg" },
  { path: "images/logo6.webp" },
  { path: "images/logo7.webp" },
  { path: "images/logo8.jpg" },
];

const Logos = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-8 justify-items-center lg:grid-cols-8">
        {logos.map((logo, idx) => (
          <img key={idx} src={logo.path} alt="logo" className="w-14 lg:w-16" />
        ))}
      </div>
    </div>
  );
};

export default Logos;
