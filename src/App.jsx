import React from "react";
import "./App.css";
import NavBar from "./Components/Layout/NavBar/NavBar.jsx";
import Home from "./Components/Pages/HomeNav/Home.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutUs from "./Components/Pages/AboutUS/AboutUs.jsx";
import Events from "./Components/Pages/Events/Events.jsx";
// import Testimonial from "./Components/Testimonial/Testimonial.jsx";
import Contact from "./Components/Pages/ContactUs/Contact.jsx";
import Gallery from "./Components/Pages/Gallery/Gallery.jsx";
import Footer from "./Components/Layout/Footer/Footer.jsx";
import Academics from "./Components/Academics/Academics.jsx";
import Faculty from "./Components/Pages/Faculty/Faculty.jsx";
import Admissions from "./Components/Pages/Admissions/Admissions.jsx";
import TestimonialPage from "./Components/Pages/TestimonialPage/TestimonialPage.jsx";

const App = () => {
  return (
    <div className="appStyle">
      <Router>
        {/* <Router > */}
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/aboutUs" element={<AboutUs />} />

          <Route path="/faculty" element={<Faculty />} />

          <Route path="/activities" element={<Events />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<TestimonialPage />} />

          <Route path="/contactUs" element={<Contact />} />
          {/* <Routes path="/activities" element={<Events />} /> */}
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
