import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Medal, 
  Heart, 
  Lightbulb, 
  CheckCircle,
  BookOpen,
  Users,
  GraduationCap,
  Award
} from 'lucide-react';
import { aboutStats, coreValues } from '../../../SchoolMemberDetails/sclMemDetails';

import './AboutUs.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  useEffect(() => {
    document.title = 'About Us - Al Qalam Academy';
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <div className="about-header">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="about-title"
            >
              AboutUs <span className="about-title-highlight">Al Qalam Academy</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="about-subtitle"
            >
              Building a foundation of academic excellence and strong character through quality education and Islamic values
            </motion.p>
          </div>
          
          <div className="story-container">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="story-content"
            >
              <h2>Our Story</h2>
              <p className="story-paragraph">
                Founded in 2005, Al Qalam Academy was established with a vision to provide quality education integrated with Islamic values. The school started with just 150 students and a handful of dedicated teachers in a small building.
              </p>
              <p className="story-paragraph">
                Over the years, Al Qalam Academy has grown into a prestigious educational institution with state-of-the-art facilities and a strong reputation for academic excellence. Today, we serve over 1,500 students with a team of more than 100 qualified educators.
              </p>
              <p className="story-paragraph">
                Our commitment to integrating modern education with moral values has made us a trusted choice for parents who want their children to excel academically while developing strong character and Islamic identity.
              </p>
              
              <div className="quote-box">
                <p className="quote-text">
                  "Education is the most powerful weapon which you can use to change the world."
                </p>
                <p className="quote-author">- Nelson Mandela</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="image-container"
            >
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Al Qalam Academy campus" 
                className="about-image"
              />
              <div className="image-decoration-1"></div>
              <div className="image-decoration-2"></div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="stats-container"
          >
            {aboutStats.map((stat, index) => (
              <div 
                key={stat.id} 
                className="stat-card"
              >
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </motion.div>
          
          <div className="vision-mission-section">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="section-header"
            >
              <h2 className="section-title">Vision & Mission</h2>
              <p className="section-subtitle">Our guiding principles that drive everything we do</p>
            </motion.div>
            
            <div className="vision-mission-grid">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="vision-mission-card"
              >
                <div className="icon-circle">
                  <GraduationCap className="icon" size={32} />
                </div>
                <h3 className="card-title">Our Vision</h3>
                <p className="card-text">
                  To be the leading educational institution that nurtures future leaders with academic excellence and strong Islamic values, preparing them to meet global challenges while maintaining their cultural identity.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="vision-mission-card"
              >
                <div className="icon-circle">
                  <BookOpen className="icon" size={32} />
                </div>
                <h3 className="card-title">Our Mission</h3>
                <p className="card-text">
                  To provide a holistic educational environment that:
                </p>
                <ul className="mission-list">
                  <li className="mission-item">
                    <CheckCircle className="mission-icon" size={20} />
                    <span>Delivers high-quality CBSE curriculum through innovative teaching methods</span>
                  </li>
                  <li className="mission-item">
                    <CheckCircle className="mission-icon" size={20} />
                    <span>Instills Islamic principles and moral values</span>
                  </li>
                  <li className="mission-item">
                    <CheckCircle className="mission-icon" size={20} />
                    <span>Develops critical thinking, creativity and leadership skills</span>
                  </li>
                  <li className="mission-item">
                    <CheckCircle className="mission-icon" size={20} />
                    <span>Fosters a sense of community service and global citizenship</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
          
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle">The principles that guide our approach to education</p>
            </motion.div>
            
            <div className="values-grid">
              {coreValues.map((value, index) => (
                <motion.div 
                  key={value.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="value-card"
                >
                  <div className="value-icon-circle">
                    {value.icon === 'Medal' && <Medal className="icon" size={28} />}
                    {value.icon === 'Heart' && <Heart className="icon" size={28} />}
                    {value.icon === 'Lightbulb' && <Lightbulb className="icon" size={28} />}
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="cta-container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="cta-title"
          >
            Join Our Al Qalam Family
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="cta-text"
          >
            Experience the perfect blend of academic excellence and Islamic values. We're now accepting applications for the upcoming academic year.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/admissions">
              <a className="cta-button">Apply for Admission</a>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
