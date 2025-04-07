import React from "react";

import Hero from "../Hero/Hero.jsx";
import Programs from "../Programs/Programs.jsx";
import AboutUs from "../AboutUS/AboutUs.jsx";
import Events from "../Events/Events.jsx";
import Testimonial from "../Testimonial/Testimonial.jsx";
import Contact from "../ContactUs/Contact.jsx";
// import Facilites from '../Facilites/Facilites.jsx';
import Hulk from "../Hulk/Hulk.jsx";
import EventCard from "../Cards/EventCard.jsx";
import Gallery from "../Gallery/Gallery.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <Hulk />
      <Programs />
      <AboutUs />
      <Events />

      <Testimonial />
      {/* <Gallery/> */}
      <Contact />
    </>
  );
};

export default Home;
