import "./TestimonialCard.css";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialCard = ({ quote, name, role, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="testimonials-page-card"
    >
      <div className="testimonial-quote-icon">
        <Quote size={20} />
      </div>
      <p className="testimonial-text">{quote}</p>
      <div className="testimonial-author">
        <div className="testimonial-author-image">
          <img src={image} alt={name} />
        </div>
        <div className="testimonial-author-details">
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
