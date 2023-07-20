import Image from "./Image";

const COL_1 = [
  { path: "images/test1.webp" },
  { path: "images/test2.webp" },
  { path: "images/test3.webp" },
];

const COL_2 = [
  { path: "images/test4.webp" },
  { path: "images/test5.webp" },
  { path: "images/test6.webp" },
];

const COL_3 = [
  { path: "images/test7.webp" },
  { path: "images/test8.webp" },
  { path: "images/test9.webp" },
];

const GalleryImages = () => {
  return (
    <div className="grid lg:grid-cols-3">
      <div className="hidden lg:block">
        {COL_1.map((image, idx) => (
          <Image key={idx} src={image.path} alt="car" />
        ))}
      </div>

      <div>
        {COL_2.map((image, idx) => (
          <Image
            key={idx}
            src={image.path}
            alt="car"
            specialOverlay={idx === 1 ? true : null}
          />
        ))}
      </div>

      <div className="hidden lg:block">
        {COL_3.map((image, idx) => (
          <Image key={idx} src={image.path} alt="car" />
        ))}
      </div>
    </div>
  );
};

export default GalleryImages;
