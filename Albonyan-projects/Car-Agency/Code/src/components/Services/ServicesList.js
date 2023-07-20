import { Fragment } from "react";

const services = [
  {
    title: "Car Selling",
    icon: "fa-regular fa-gem",
    description:
      "At YourCar, we make it easy to sell your car. Simply bring your vehicle in for an appraisal, and we'll handle the rest. We offer fair prices and a hassle-free selling process, so you can get your vehicle with minimal effort.",
  },
  {
    title: "Car Rental",
    icon: "fa-solid fa-key",
    description:
      "If you're in need of a luxury car rental, look no further than YourCar. Our fleet of high-end vehicles is regularly maintained and serviced to ensure that you have a safe and comfortable driving experience.",
  },
  {
    title: "Car Sales",
    icon: "fa-regular fa-star",
    description:
      "At YourCar, we offer a wide selection of luxury vehicles for sale. Whether you're in the market for a sleek sports car or a spacious SUV, we have the perfect vehicle to fit your needs.",
  },
];

const ServicesList = () => {
  return (
    <div className="container mt-20 text-center text-[--secondary-color] lg:grid lg:grid-cols-3 lg:gap-10 lg:mt-32">
      {services.map((service) => (
        <Fragment key={service.title}>
          <div className="mb-10">
            <i className={`mb-4 text-5xl ${service.icon}`}></i>
            <h4 className="mb-4 text-2xl font-bold">{service.title}</h4>
            <p className="text-[1.125rem]">{service.description}</p>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default ServicesList;
