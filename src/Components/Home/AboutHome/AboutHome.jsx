import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
// import { Link, Navigate, useNavigate } from "react-router-dom";
import { ArrowRight, Medal, Heart, Lightbulb, X, Contact } from "lucide-react";
import "./AboutHome.css"

const AboutHome = () => {

    useEffect(() => {
        document.title = "Al Qalam Academy - CBSE Board School";
      }, []);
    
      const navigate = useNavigate();
      const navigateToAbout = () => {
        console.log("navigate sucess fully");
    
        navigate("/aboutus");
      };
    
  return (
    <section className="about-section">
    <div className="about-container">
      <div className="about-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="about-title"
        >
          About{" "}
          <span className="About-title-highlight">Al Qalam Academy</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="about-subtitle"
        >
          Building a foundation of academic excellence and strong character
          through quality education and Islamic values
        </motion.p>
      </div>

      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="about-content"
        >
          <h3 className="about-heading">Our Vision</h3>
          <p className="about-text">
            To be the leading educational institution that nurtures future
            leaders with academic excellence and strong Islamic values,
            preparing them to meet global challenges while maintaining their
            cultural identity.
          </p>

          <h3 className="about-heading">Our Mission</h3>
          <p className="about-text">
            To provide a holistic educational environment that:
          </p>
          <ul className="about-list">
            <li>
              Delivers high-quality CBSE curriculum through innovative
              teaching methods
            </li>
            <li>Instills Islamic principles and moral values</li>
            <li>
              Develops critical thinking, creativity and leadership skills
            </li>
            <li>
              Fosters a sense of community service and global citizenship
            </li>
          </ul>

          <div onClick={navigateToAbout} className="about-link">
            Learn More About Us
            <ArrowRight className="about-link-icon" size={20} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="about-image-container"
        >
          <div className="relative z-10">
            <img
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Students at Al Qalam Academy campus"
              className="about-image"
            />
          </div>
          <div className="about-bg-circle-1"></div>
          <div className="about-bg-circle-2"></div>
        </motion.div>
      </div>

      <div className="values-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: true }}
          className="value-card"
        >
          <div className="value-icon-container">
            <Medal className="value-icon" size={24} />
          </div>
          <h4 className="value-title">Excellence</h4>
          <p className="value-text">
            We strive for excellence in all aspects of education,
            encouraging students to achieve their highest potential.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="value-card"
        >
          <div className="value-icon-container">
            <Heart className="value-icon" size={24} />
          </div>
          <h4 className="value-title">Compassion</h4>
          <p className="value-text">
            We cultivate empathy and kindness, teaching students to care for
            others and contribute positively to society.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="value-card"
        >
          <div className="value-icon-container">
            <Lightbulb className="value-icon" size={24} />
          </div>
          <h4 className="value-title">Innovation</h4>
          <p className="value-text">
            We embrace innovative teaching methods and technologies to
            prepare students for a rapidly changing world.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
  );
}

export default AboutHome;
