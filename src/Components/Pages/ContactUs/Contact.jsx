import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useForm } from 'react-hook-form';
import './Contact.css';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us - Al Qalam Academy';
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    // In a real application, this would send the form data to a server
    alert('Message sent successfully!');
    reset();
  };

  return (
    <div  className="contact-page">
      <section className="contact-hero">
        <div className="contact-container">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="hero-title"
            >
              Contact <span>Us</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hero-description"
            >
              Get in touch with our team for any inquiries or to schedule a visit
            </motion.p>
          </div>
          
          <div className="contact-grid">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="info-card">
                <h2 className="card-title">School Information</h2>
                
                <div className="info-list">
                  <div className="info-item">
                    <div className="icon-wrapper">
                      <MapPin />
                    </div>
                    <div className="info-content">
                      <h3>Our Location</h3>
                      <p>
                        123 Education Road, Academic District<br />
                        New Delhi - 110001, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="icon-wrapper">
                      <Phone />
                    </div>
                    <div className="info-content">
                      <h3>Contact Numbers</h3>
                      <p>
                        Office: +91 98765 43210<br />
                        Admissions: +91 98765 43211
                      </p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="icon-wrapper">
                      <Mail />
                    </div>
                    <div className="info-content">
                      <h3>Email Addresses</h3>
                      <p>
                        General Inquiries: info@alqalamacademy.edu<br />
                        Admissions: admissions@alqalamacademy.edu
                      </p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="icon-wrapper">
                      <Clock />
                    </div>
                    <div className="info-content">
                      <h3>Office Hours</h3>
                      <p>
                        Monday to Friday: 8:00 AM - 4:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM (Admin only)
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="social-links">
                  <h3>Connect With Us</h3>
                  <div className="social-icons">
                    <a href="#" className="social-icon">
                      <Facebook />
                    </a>
                    <a href="#" className="social-icon">
                      <Twitter />
                    </a>
                    <a href="#" className="social-icon">
                      <Instagram />
                    </a>
                    <a href="#" className="social-icon">
                      <Youtube />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="form-card">
                <h2 className="card-title">Send Us a Message</h2>
                
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      placeholder="Enter your full name"
                      {...register('name', { required: true })}
                    />
                    {errors.name && <p className="error-text">Name is required</p>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="Enter your email address"
                      {...register('email', { 
                        required: true, 
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                      })}
                    />
                    {errors.email?.type === 'required' && (
                      <p className="error-text">Email is required</p>
                    )}
                    {errors.email?.type === 'pattern' && (
                      <p className="error-text">Please enter a valid email</p>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      placeholder="Enter your phone number"
                      {...register('phone', { 
                        pattern: /^[0-9]{10}$/
                      })}
                    />
                    {errors.phone?.type === 'pattern' && (
                      <p className="error-text">Please enter a valid 10-digit phone number</p>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className={`form-input ${errors.subject ? 'error' : ''}`}
                      placeholder="Enter message subject"
                      {...register('subject', { required: true })}
                    />
                    {errors.subject && <p className="error-text">Subject is required</p>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea 
                      id="message" 
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                      placeholder="Enter your message"
                      {...register('message', { required: true })}
                    ></textarea>
                    {errors.message && <p className="error-text">Message is required</p>}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-button"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="map-container"
          >
            <div className="map-frame">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d638.598436958236!2d85.88648098566546!3d26.137623997769307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb9b2600eda05%3A0x1660d1617a382f34!2sAl%20Qalam%20Academy!5e0!3m2!1sen!2sin!4v1744805178557!5m2!1sen!2sin" 
                allowFullScreen={false} 
                loading="lazy"
                title="Google Maps"
              ></iframe>
           
            </div>
          </motion.div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="cta-title"
          >
            Visit Our Campus
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="cta-description"
          >
            We invite you to visit our campus and experience our facilities in person. Schedule a tour with our admissions office to learn more about our educational programs.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <NavLink to="/admissions" className="cta-button">
              Schedule a Visit
            </NavLink>
          </motion.div>
        </div>
      </section>
    </div>
  )
};

export default Contact;
