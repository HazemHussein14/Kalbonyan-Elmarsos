import { Fragment } from "react";
import NavBar from "./components/Navigation/NavBar";
import HeroBanner from "./components/Hero/HeroBanner";
import AboutSection from "./components/About/AboutSection";
import ServicesSection from "./components/Services/ServicesSection";
import CarsSection from "./components/Cars/CarsSection";
import GallerySection from "./components/Gallery/GallerySection";
import TestimonialsSection from "./components/Testimonials/TestimonialsSection";
import LogosSection from "./components/Logos/LogosSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <NavBar />
      <HeroBanner />
      <AboutSection />
      <ServicesSection />
      <CarsSection />
      <GallerySection />
      <TestimonialsSection />
      <LogosSection />
      <Footer />
    </Fragment>
  );
}

export default App;
