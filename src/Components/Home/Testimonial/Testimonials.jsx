import { motion } from "framer-motion";
import { ArrowRight, Link, Quote } from "lucide-react";

import { testimonials } from "./../../../SchoolMemberDetails/sclMemDetails";
import "./Testimonials.css";
import TestimonialCard from "../../Cards/TestimonialCards/TestimonialCard";
import { NavLink } from "react-router-dom";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="testimonials-title"
          >
            What Parents{" "}
            <span className="testimonials-title-highlight">Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="testimonials-subtitle"
          >
            Hear from our parent community about their experience with Al Qalam
            Academy
          </motion.p>
        </div>

        <div className="testimonials-grid">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              index={index}
            />
          ))}
        </div>

        <div className="testimonials-mores">
          <NavLink to="/testimonials" className="testimonials-more-links">
            Read More Testimonials
            <ArrowRight size={20} />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
