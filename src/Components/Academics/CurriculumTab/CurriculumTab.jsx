import { motion } from 'framer-motion';
import { CheckCircle, Book, Calculator, FlaskRound, Globe, Laptop, Palette, Terminal, Users, CopyCheck, Award, BookOpen, HandHelping, History, Languages, Heart } from 'lucide-react';
import './CurriculumTab.css';

const CurriculumTab = () => {
  return (
    <div className="tab-pane active">
      <div className="curriculum-grid">
        <div>
          <h3 className="curriculum-title">CBSE Curriculum Framework</h3>
          <p className="curriculum-text">
            Al Qalam Academy follows the comprehensive Central Board of Secondary Education (CBSE) curriculum, which is designed to provide a balanced education focusing on cognitive, affective, and psychomotor domains.
          </p>
          <p className="curriculum-text">
            Our curriculum integrates Islamic teachings with modern educational practices, preparing students for both academic success and moral development.
          </p>
          
          <h4 className="features-title">Key Features:</h4>
          <ul className="features-list">
            <li className="feature-item">
              <CheckCircle className="feature-icon" size={20} />
              <span className="feature-text">Continuous and Comprehensive Evaluation (CCE) system</span>
            </li>
            <li className="feature-item">
              <CheckCircle className="feature-icon" size={20} />
              <span className="feature-text">Focus on experiential learning and practical application</span>
            </li>
            <li className="feature-item">
              <CheckCircle className="feature-icon" size={20} />
              <span className="feature-text">Integration of technology in teaching methodologies</span>
            </li>
            <li className="feature-item">
              <CheckCircle className="feature-icon" size={20} />
              <span className="feature-text">Regular assessments and parent-teacher interactions</span>
            </li>
            <li className="feature-item">
              <CheckCircle className="feature-icon" size={20} />
              <span className="feature-text">Value education and character building programs</span>
            </li>
          </ul>
        </div>
        
        <div className="image-container">
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80" 
            alt="Students engaged in learning activities" 
            className="curriculum-image"
          />
          <div className="image-badge">
            <p className="badge-text">CBSE Affiliated</p>
          </div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="subjects-grid"
      >
        <div className="subject-card">
          <h4 className="subject-title">Scholastic Areas</h4>
          <ul className="subject-list">
            <li className="subject-item">
              <Book className="subject-icon" size={20} />
              <span>Languages (English, Hindi, Arabic)</span>
            </li>
            <li className="subject-item">
              <Calculator className="subject-icon" size={20} />
              <span>Mathematics</span>
            </li>
            <li className="subject-item">
              <FlaskRound className="subject-icon" size={20} />
              <span>Science & Technology</span>
            </li>
            <li className="subject-item">
              <Globe className="subject-icon" size={20} />
              <span>Social Studies</span>
            </li>
            <li className="subject-item">
              <Laptop className="subject-icon" size={20} />
              <span>Computer Science</span>
            </li>
          </ul>
        </div>
        
        <div className="subject-card">
          <h4 className="subject-title">Co-Scholastic Areas</h4>
          <ul className="subject-list">
            <li className="subject-item">
              <Palette className="subject-icon" size={20} />
              <span>Visual & Performing Arts</span>
            </li>
            <li className="subject-item">
              <Terminal className="subject-icon" size={20} />
              <span>Physical Education & Sports</span>
            </li>
            <li className="subject-item">
              <Users className="subject-icon" size={20} />
              <span>Life Skills & Leadership</span>
            </li>
            <li className="subject-item">
              <CopyCheck className="subject-icon" size={20} />
              <span>Community Service</span>
            </li>
            <li className="subject-item">
              <Award className="subject-icon" size={20} />
              <span>Competitions & Olympiads</span>
            </li>
          </ul>
        </div>
        
        <div className="subject-card">
          <h4 className="subject-title">Islamic Studies</h4>
          <ul className="subject-list">
            <li className="subject-item">
              <BookOpen className="subject-icon" size={20} />
              <span>Quran Recitation & Memorization</span>
            </li>
            <li className="subject-item">
              <HandHelping className="subject-icon" size={20} />
              <span>Islamic Principles & Practices</span>
            </li>
            <li className="subject-item">
              <History className="subject-icon" size={20} />
              <span>Islamic History & Culture</span>
            </li>
            <li className="subject-item">
              <Languages className="subject-icon" size={20} />
              <span>Arabic Language</span>
            </li>
            <li className="subject-item">
              <Heart className="subject-icon" size={20} />
              <span>Character & Moral Development</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default CurriculumTab;
