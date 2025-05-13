import React, { useEffect, useState } from "react";
import "./Home.css";
import Hero from "../../Home/Hero/Hero.jsx";
import Hulk from "../../Home/Hulk/Hulk.jsx";

import Testimonials from "../../Home/Testimonial/Testimonials.jsx";
import CampusGallery from "../../Home/CampusGallery/CampusGallery.jsx";
import AboutHome from "../../Home/AboutHome/AboutHome.jsx";

import SchoolActivities from "../../Home/SchoolActivities/SchoolActivities.jsx";
import Contact from "../ContactUs/Contact.jsx";


const Home = () => {
  useEffect(() => {
    document.title = 'Al Qalam Academy';
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[]);
  return (
    <div className="homSec">
      <Hero />
      <Hulk />
      <AboutHome />
      <CampusGallery />
      <SchoolActivities/>
      <Testimonials />
      <Contact/>
    </div>
  );
};

export default Home;
