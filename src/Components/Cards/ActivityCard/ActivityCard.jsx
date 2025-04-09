import "./ActivityCard.css"
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Award, Link } from 'lucide-react';
import { NavLink } from "react-router-dom";


const ActivityCard = ({ 
    title, 
    date, 
    time, 
    description, 
    image, 
    category,
    index 
  }) => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="activity-card"
      >
        <div className="activity-image-container">
          <img 
            src={image} 
            alt={title} 
            className="activity-image"
          />
          <div className="activity-category-badge">
            {category}
          </div>
        </div>
        <div className="activity-content">
          <div className="activity-meta">
            <span className="activity-meta-item">
              <Calendar className="activity-meta-icon" size={14} /> {date}
            </span>
            <span className="activity-meta-separator">|</span>
            <span className="activity-meta-item">
              <Clock className="activity-meta-icon" size={14} /> {time}
            </span>
          </div>
          <h3 className="activity-card-title">{title}</h3>
          <p className="activity-card-description">{description}</p>
          <NavLink to="/activities" className="activity-link">
            View Details <ArrowRight className="activity-link-icon" size={16} />
          </NavLink>
        </div>
      </motion.div>
    );
  };
  
  export default ActivityCard;