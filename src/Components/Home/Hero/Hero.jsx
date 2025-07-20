import { useRef } from "react";
import { motion } from "framer-motion";
import heroImg from "../../../assets/heroImg.jpg";
import "./hero.css";
// import './HeroSection.css';
import { Link } from "react-router-dom";

const HeroSection = () => {
  const containerRef = useRef(null);

  return (
    <section className="Hero-section">
      <div className="Hero-overlay"></div>
      <div className="Hero-background">
        <img src={heroImg} alt="Students studying at Al Qalam Academy" />
      </div>

      <div ref={containerRef} className="Hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="Hero-title"
        >
          We Ensure better education for a better world{" "}
          <span className="Hero-title-highlight">Islamic Values</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="Hero-description"
        >
          
          <span className="Hhdescription">
            {" "}
            Nurturing young minds with quality education and moral values at the
            leading CBSE board school
          </span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="Hero-buttons"
        >
          <Link to="/admissions" className="btn-admissions">
            Admissions Open
          </Link>
          <Link to="/aboutUs" className="btn-discover">
            Discover More
          </Link>
        </motion.div>
      </div>

      <div className="Hero-gradient"></div>
    </section>
  );
};

export default HeroSection;
