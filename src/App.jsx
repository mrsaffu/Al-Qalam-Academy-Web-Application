import React from "react";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Home from "./Components/Home/Home.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Programs from "./Components/Programs/Programs.jsx";
import AboutUs from "./Components/AboutUS/AboutUs.jsx";
import Events from "./Components/Events/Events.jsx";
import Testimonial from "./Components/Testimonial/Testimonial.jsx";
import Contact from "./Components/ContactUs/Contact.jsx";
import Gallery from "./Components/Gallery/Gallery.jsx";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Programs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactUs" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
