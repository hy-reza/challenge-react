import {
  Header,
  Hero,
  OurService,
  WhyUs,
  Testimonial,
  Cta,
  Faq,
  Footer,
} from "../components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Hero buttonCTA = {true} />
      <OurService />
      <WhyUs />
      <Testimonial />
      <Cta />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
