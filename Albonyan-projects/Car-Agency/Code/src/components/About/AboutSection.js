
import AboutImage from '../../assets/about.webp'
import AboutBg from '../../assets/about-bg.webp'
import AboutTitle from './AboutTitle';

const AboutSection = () => {
  return (
    <section id='about' className="section-spacing">
      <div className="container lg:flex lg:gap-40 xl:justify-between">
        <div className="flex-1 mt-10">
        <AboutTitle/>
          <p className="mb-8 lg:text-xl">
            YourCar is a luxury car dealership that offers a personalized and
            first-class experience to its clients. Our team of experienced
            professionals is dedicated to providing exceptional service and
            finding the perfect vehicle to match our clients' unique preferences
            and requirements. We have an extensive selection of high-end
            vehicles, ranging from sports cars to SUVs, all of which are
            maintained to the highest standards of quality and safety.
          </p>
          <p className='lg:text-xl'>
            At YourCar, we are committed to creating a stress-free and enjoyable
            car buying experience. We understand that purchasing a luxury car
            can be a significant investment, which is why we offer flexible
            financing options to make the process more manageable. Our team is
            available to answer any questions and provide guidance throughout
            the entire buying process. We take pride in our outstanding customer
            service and attention to detail, and we are confident that our
            clients will be satisfied with their experience at YourCar.
          </p>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:relative">
       <img src={AboutImage} alt="car"/>
       <img src={AboutBg} alt="car" className="absolute z-[-1] top-1/2 left-1/2 translate-x-[-65%] translate-y-[-50%]"/>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
