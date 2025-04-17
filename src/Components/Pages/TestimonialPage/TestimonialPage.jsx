import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, Calendar, MapPin } from 'lucide-react';
import { testimonials } from '../../../SchoolMemberDetails/sclMemDetails';
import './TestimonialPage.css';

const TestimonialPage = () => {
  useEffect(() => {
    document.title = 'Testimonials - Al Qalam Academy';
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="testimonials-page">
      <div className="testimonials-page-container">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="testimonials-page-title"
        >
          What Our <span className="testimonials-page-title-highlight">Community Says</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="testimonials-page-subtitle"
        >
          Read what parents, students, and alumni have to say about their experience at Al Qalam Academy
        </motion.p>
        
        <div className="testimonials-page-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="testimonials-page-card"
            >
              <div className="testimonial-card-header">
                <div className="testimonial-quote-icon">
                  <Quote size={24} />
                </div>
                <div className="testimonial-meta">
                  <div className="testimonial-role">
                    <MapPin size={16} />
                    <span>{testimonial.role}</span>
                  </div>
                  <div className="testimonial-date">
                    <Calendar size={16} />
                    <span>2023-2024</span>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-quote">{testimonial.quote}</div>
              
              <div className="testimonial-author-info">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="testimonial-author-image"
                />
                <div className="testimonial-author-details">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialPage;
