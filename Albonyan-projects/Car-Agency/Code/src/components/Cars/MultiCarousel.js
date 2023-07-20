import { useState, useEffect } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomDot from "./Dots";

import { fetchData } from "../../utils/fetch-data";

import Car from "./Car";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1280 },
    items: 3,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MultiCarousel = () => {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    const getCarsData = async () => {
      const data = await fetchData("data.json");
      setCarsData(data.cars);
    };
    getCarsData();
  }, []);

  return (
    <div className="container mt-20">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        customDot={<CustomDot />}
        renderDotsOutside
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        keyBoardControl={true}
      >
        {carsData.map((car, idx) => (
          <Car
            key={idx}
            id={idx}
            name={car.name}
            carClass={car.class}
            image={car.image}
            description={car.description}
            luggage={car.luggage}
            seats={car.seats}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default MultiCarousel;
