const Contact = () => {
  return (
    <div className="mb-10 lg:mb-0">
      <h3 className="text-3xl text-[#741906] font-bold mb-3">Contact</h3>
      <ul className="flex flex-col items-center gap-3 mb-8">
        <li className="flex items-center justify-center gap-2">
          <i className="fa-solid fa-location-dot"></i>
          <address className="w-1/2 not-italic">
            2038 2nd Avenue, Las Vegas, United States
          </address>
        </li>
        <li className="flex items-center gap-3">
          <i className="fa-solid fa-phone"></i>
          <div>
            <a href="tel:01444773421423" className="block">
              01444773421423
            </a>
            <a href="tel:01444773421423">01444773421423</a>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:info@YourCar.com">info@YourCar.com</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
