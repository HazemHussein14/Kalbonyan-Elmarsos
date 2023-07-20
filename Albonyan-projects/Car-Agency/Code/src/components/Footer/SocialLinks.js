const SocialLinks = () => {
  return (
    <ul className="flex items-center justify-center gap-3 mb-4 text-3xl lg:col-span-3">
      <li>
        <a aria-label="facebook" href="https://www.facebook.com" className="hover:text-[--primary-color] transition-colors duration-300">
          <i className="fa-brands fa-facebook"></i>
        </a>
      </li>
      <li>
        <a aria-label="twitter" href="https://www.twitter.com" className="hover:text-[--primary-color] transition-colors duration-300">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </li>
      <li>
        <a aria-label="instagram" href="https://www.instagram.com" className="hover:text-[--primary-color] transition-colors duration-300">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
