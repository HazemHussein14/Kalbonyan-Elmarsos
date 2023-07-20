import { useState, useEffect } from "react";
import { fetchData } from "../../utils/fetch-data";

const TestimonalCard = () => {
  const [testmonialsData, setTestmonialsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActiveSlide, setIsActiveSlide] = useState(false);

  useEffect(() => {
    const getTestmonialsData = async () => {
      const data = await fetchData("data.json");
      setTestmonialsData(data.testimonials);
    };
    getTestmonialsData();
  }, []);

  const activeSlideHandler = () => {
    setIsActiveSlide(true);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevState) => {
        if (currentIndex === testmonialsData.length - 1) {
          return 0;
        } else {
          setIsActiveSlide(true);
          return prevState + 1;
        }
      });
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex, testmonialsData.length]);

  return (
    <div className="container mt-20">
      {testmonialsData.length > 0 && (
        <div className="relative p-6 m-5 text-center bg-white max-w-[800px] mx-auto">
          <p className="mb-6 italic md:text-2xl">
            {testmonialsData[currentIndex].description}
          </p>
          <div className="mb-6">
            <i className="md:text-2xl text-[#F8D7A4] fa-solid fa-star"></i>
            <i className="md:text-2xl text-[#F8D7A4] fa-solid fa-star"></i>
            <i className="md:text-2xl text-[#F8D7A4] fa-solid fa-star"></i>
            <i className="md:text-2xl text-[#F8D7A4] fa-solid fa-star"></i>
            <i className="md:text-2xl text-[#F8D7A4] fa-solid fa-star"></i>
          </div>
          <article className="justify-center mx-auto md:flex md:gap-3 md:items-center">
            <h3 className="inline text-2xl font-bold">
              {testmonialsData[currentIndex].name}
            </h3>
            <p className="text-[#ccc] text-[18px] italic">
              {testmonialsData[currentIndex].country}
            </p>
          </article>
          <img
            src={testmonialsData[currentIndex].car}
            alt="car"
            className="absolute w-[100px] md:w-[150px] bottom-0 -right-5"
          />
        </div>
      )}
      <div className="flex justify-center gap-2 mt-8">
        {testmonialsData.map((testimonial, idx) => (
          <button
            key={idx}
            onClick={() => {
              goToSlide(idx);
              activeSlideHandler();
            }}
            className={`p-1 rounded-[50%] cursor-pointer ${
              isActiveSlide && currentIndex === idx
                ? "bg-[#F8D7A4]"
                : "bg-white"
            }`}
            aria-label={`move to slide ${idx}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonalCard;
