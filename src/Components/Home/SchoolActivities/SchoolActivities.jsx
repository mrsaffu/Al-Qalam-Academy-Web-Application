import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Award, Link } from 'lucide-react';
import { schoolActivities } from '../../../SchoolMemberDetails/sclMemDetails';

import './SchoolActivities.css';
import { NavLink } from 'react-router-dom';
import ActivityCard from '../../Cards/ActivityCard/ActivityCard';


const SchoolActivities = () => {
  // Group activities by category
  const categories = [...new Set(schoolActivities.map(activity => activity.category))];
  
  return (
    <section className="activities-section">
      <div className="activities-container">
        <div className="activities-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="activities-title"
          >
            Events & <span className="activities-title-highlight">Activities</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="activities-subtitle"
          >
            Explore our vibrant school life through sports, cultural events, and academic activities
          </motion.p>
        </div>
        
        <div className="activities-categories">
          <div className="category-tabs">
            <button className="category-tab active">All</button>
            {categories.map(category => (
              <button key={category} className="category-tab">
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="activities-grid">
          {schoolActivities.map((activity, index) => (
            <ActivityCard
              key={activity.id}
              title={activity.title}
              date={activity.date}
              time={activity.time}
              description={activity.description}
              image={activity.image}
              category={activity.category}
              index={index}
            />
          ))}
        </div>
        
        <div className="activities-view-all">
          <NavLink to="/activities" className="activities-view-all-btn">
            View All Activities
            <ArrowRight className="activities-view-all-icon" size={16} />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SchoolActivities;
