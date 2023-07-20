import SpecialOverlay from "./SpecialOverlay";

const Image = ({ src, alt, specialOverlay }) => {
  return (
    <figure className="relative">
      <img src={src} alt={alt} className="h-[369px] w-full md:object-cover" />
      {specialOverlay && <SpecialOverlay/>}
    </figure>
  );
};

export default Image;
