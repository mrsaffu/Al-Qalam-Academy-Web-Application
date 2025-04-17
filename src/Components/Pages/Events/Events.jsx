import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Volleyball, 
  FlaskRound, 
  Trophy, 
  Music, 
  BookOpen, 
  Calendar, 
  Clock, 
  ChevronRight 
} from 'lucide-react';
import './Events.css';
import { NavLink } from 'react-router-dom';

const Events= () => {
  useEffect(() => {
    document.title = 'School Activities - Al Qalam Academy';
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [activeCategory, setActiveCategory] = useState('sports');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // Smooth scroll to the section
    const section = document.getElementById(`${category}-section`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="activities-page">
      {/* Hero Section */}
      <section className="envactivities-hero">
        <div className="evnthero-overlay"></div>
        <div className="evnthero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            School <span>Activities</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover the diverse range of extracurricular and co-curricular activities 
            that enrich our students' educational experience at Al Qalam Academy.
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="activities-categories">
        <div className="evntcontainer">
          <div className="category-tabs">
            <button 
              className={`category-tab ${activeCategory === 'sports' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('sports')}
            >
              Sports
            </button>
            <button 
              className={`category-tab ${activeCategory === 'academic' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('academic')}
            >
              Science Exhibitions
            </button>
            <button 
              className={`category-tab ${activeCategory === 'cultural' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('cultural')}
            >
              Cultural Events
            </button>
            <button 
              className={`category-tab ${activeCategory === 'islamic' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('islamic')}
            >
              Islamic Activities
            </button>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section id="sports-section" className="sports-section">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">
              <Volleyball size={40} />
            </div>
            <h2>Sports <span>Activities</span></h2>
            <p>
              We offer a variety of sports activities to help students develop physical fitness, 
              teamwork, and leadership skills while fostering a healthy competitive spirit.
            </p>
          </div>

          <div className="sports-grid">
            {/* Cricket Card */}
            <div className="sport-card">
              <div className="sport-image">
                <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80" alt="Cricket" />
              </div>
              <div className="sport-content">
                <div className="sport-icon">
                  <Volleyball />
                </div>
                <h3>Cricket</h3>
                <p>
                  Our cricket team participates in inter-school tournaments and has brought 
                  numerous trophies to the school. Regular practice sessions are held under 
                  the guidance of experienced coaches.
                </p>
              </div>
            </div>

            {/* Badminton Card */}
            <div className="sport-card">
              <div className="sport-image">
                <img src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Badminton" />
              </div>
              <div className="sport-content">
                <div className="sport-icon">
                  <Volleyball />
                </div>
                <h3>Badminton</h3>
                <p>
                  Our indoor badminton courts allow students to practice and compete 
                  year-round. The school hosts an annual badminton tournament where students 
                  showcase their skills and agility.
                </p>
              </div>
            </div>

            {/* Kabaddi Card */}
            <div className="sport-card">
              <div className="sport-image">
                <img src="https://images.unsplash.com/photo-1580196969807-cc6de06c05be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Kabaddi" />
              </div>
              <div className="sport-content">
                <div className="sport-icon">
                  <Volleyball />
                </div>
                <h3>Kabaddi</h3>
                <p>
                  Kabaddi, a traditional Indian sport, is popular among our students. 
                  It teaches them coordination, strength, and strategic thinking while 
                  honoring our cultural heritage.
                </p>
              </div>
            </div>

            {/* Athletics Card */}
            <div className="sport-card">
              <div className="sport-image">
                <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Track and Field" />
              </div>
              <div className="sport-content">
                <div className="sport-icon">
                  <Volleyball />
                </div>
                <h3>Track & Field</h3>
                <p>
                  Our annual sports day features various track and field events where 
                  students compete in races, long jump, high jump, and relay races, 
                  showcasing their athletic abilities and sportsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Section (Science Exhibitions) */}
      <section id="academic-section" className="academic-section">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">
              <FlaskRound size={40} />
            </div>
            <h2>Science <span>Exhibitions</span></h2>
            <p>
              Our science exhibitions provide a platform for students to explore scientific concepts, 
              conduct experiments, and present their innovative ideas and discoveries.
            </p>
          </div>

          <div className="academic-grid">
            {/* Annual Science Fair Card */}
            <div className="academic-card">
              <div className="academic-image">
                <img src="https://images.unsplash.com/photo-1529586691389-2d3d4140047c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Annual Science Fair" />
              </div>
              <div className="academic-content">
                <h3>Annual Science Fair</h3>
                <p>
                  Our yearly science fair features projects from various scientific disciplines. 
                  Students develop hypotheses, conduct experiments, and present their findings to judges 
                  and visitors, fostering a deep understanding of the scientific method.
                </p>
              </div>
            </div>

            {/* Robotics Showcase Card */}
            <div className="academic-card">
              <div className="academic-image">
                <img src="https://images.unsplash.com/photo-1581092921461-39b9884e8311?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Robotics Showcase" />
              </div>
              <div className="academic-content">
                <h3>Robotics Showcase</h3>
                <p>
                  Students design, build, and program robots to perform specific tasks. This 
                  interdisciplinary activity combines engineering, computer science, and physics, 
                  preparing students for future technological innovations.
                </p>
              </div>
            </div>

            {/* Environmental Projects Card */}
            <div className="academic-card">
              <div className="academic-image">
                <img src="https://images.unsplash.com/photo-1507668077129-56e32842fceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Environmental Projects" />
              </div>
              <div className="academic-content">
                <h3>Environmental Projects</h3>
                <p>
                  Students work on projects addressing environmental issues such as waste management, 
                  water conservation, and renewable energy. These projects raise awareness and 
                  develop solutions for sustainable living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Section */}
      <section id="cultural-section" className="cultural-section">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">
              <Music size={40} />
            </div>
            <h2>Cultural <span>Events</span></h2>
            <p>
              Our cultural events celebrate diversity, creativity, and artistic expression, 
              allowing students to showcase their talents in music, dance, drama, and visual arts.
            </p>
          </div>

          <div className="cultural-grid">
            {/* Annual Function Card */}
            <div className="cultural-card">
              <div className="cultural-image">
                <img src="https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Annual Function" />
              </div>
              <div className="cultural-content">
                <h3>Annual Function</h3>
                <p>
                  Our grand annual function showcases dance performances, musical presentations, 
                  skits, and plays. It provides a platform for students to display their artistic 
                  talents and boost their confidence.
                </p>
              </div>
            </div>

            {/* Independence Day Celebrations Card */}
            <div className="cultural-card">
              <div className="cultural-image">
                <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Independence Day Celebrations" />
              </div>
              <div className="cultural-content">
                <h3>Independence Day Celebrations</h3>
                <p>
                  Students participate in patriotic performances, speeches, and parades to commemorate 
                  India's independence. These celebrations instill a sense of national pride and 
                  historical awareness.
                </p>
              </div>
            </div>

            {/* Art Exhibition Card */}
            <div className="cultural-card">
              <div className="cultural-image">
                <img src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Art Exhibition" />
              </div>
              <div className="cultural-content">
                <h3>Art Exhibition</h3>
                <p>
                  The annual art exhibition displays students' paintings, sculptures, and crafts. 
                  It encourages creative expression and appreciation for various art forms and 
                  techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Islamic Activities Section */}
      <section id="islamic-section" className="islamic-section">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">
              <BookOpen size={40} />
            </div>
            <h2>Islamic <span>Activities</span></h2>
            <p>
              Our Islamic activities help students develop a deeper understanding of Islamic values, 
              traditions, and practices, fostering spiritual growth and moral development.
            </p>
          </div>

          <div className="islamic-grid">
            {/* Ramadan Activities Card */}
            <div className="islamic-card">
              <div className="islamic-image">
                <img src="https://images.unsplash.com/photo-1567610956620-65827c1ac2fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Ramadan Activities" />
              </div>
              <div className="islamic-content">
                <h3>Ramadan Activities</h3>
                <p>
                  During the holy month of Ramadan, students participate in various activities 
                  such as Quran recitation competitions, Islamic knowledge quizzes, and charity 
                  drives, enhancing their spiritual experience.
                </p>
              </div>
            </div>

            {/* Quran Competition Card */}
            <div className="islamic-card">
              <div className="islamic-image">
                <img src="https://images.unsplash.com/photo-1609599006353-e629aaabbd47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Quran Competition" />
              </div>
              <div className="islamic-content">
                <h3>Quran Competition</h3>
                <p>
                  Our annual Quran recitation competition allows students to showcase their 
                  tajweed skills and memorization abilities. It encourages regular Quran practice 
                  and a deeper connection with the holy scripture.
                </p>
              </div>
            </div>

            {/* Islamic Heritage Day Card */}
            <div className="islamic-card">
              <div className="islamic-image">
                <img src="https://images.unsplash.com/photo-1608553566822-1c860293271d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Islamic Heritage Day" />
              </div>
              <div className="islamic-content">
                <h3>Islamic Heritage Day</h3>
                <p>
                  This special event celebrates Islamic history, art, and contributions to science 
                  and culture. Students prepare exhibitions and presentations on various aspects of 
                  Islamic heritage, fostering pride in their religious identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Activities */}
      <section className="sports-section">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">
              <Calendar size={40} />
            </div>
            <h2>Upcoming <span>Activities</span></h2>
            <p>
              Stay updated with our upcoming events and activities. Join us and be part of these 
              enriching experiences that contribute to holistic development.
            </p>
          </div>

          <div className="sports-grid">
            {/* Upcoming Activity 1 */}
            <div className="activity-card">
              <div className="activity-image-container">
                <img src="https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Annual Sports Day" className="activity-image" />
                <div className="activity-badge">Sports</div>
              </div>
              <div className="activity-content">
                <h3 className="activity-title">Annual Sports Day</h3>
                <div className="activity-details">
                  <div className="activity-date">
                    <Calendar size={16} className="mr-2" /> May 15, 2025
                  </div>
                  <div className="activity-time">
                    <Clock size={16} className="mr-2" /> 9:00 AM
                  </div>
                </div>
                <p className="activity-description">
                  Join us for a day of athletic competitions, races, and team sports. Students will showcase 
                  their physical prowess and sportsmanship as they compete for medals and trophies.
                </p>
                <a href="#" className="activity-read-more">
                  Learn More <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Upcoming Activity 2 */}
            <div className="activity-card">
              <div className="activity-image-container">
                <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Music Festival" className="activity-image" />
                <div className="activity-badge">Cultural</div>
              </div>
              <div className="activity-content">
                <h3 className="activity-title">Music Festival</h3>
                <div className="activity-details">
                  <div className="activity-date">
                    <Calendar size={16} className="mr-2" /> June 5, 2025
                  </div>
                  <div className="activity-time">
                    <Clock size={16} className="mr-2" /> 5:30 PM
                  </div>
                </div>
                <p className="activity-description">
                  Experience a melodious evening featuring vocal and instrumental performances by our talented 
                  students. The festival will showcase various musical traditions from classical to contemporary.
                </p>
                <a href="#" className="activity-read-more">
                  Learn More <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Upcoming Activity 3 */}
            <div className="activity-card">
              <div className="activity-image-container">
                <img src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Science Innovation Challenge" className="activity-image" />
                <div className="activity-badge">Academic</div>
              </div>
              <div className="activity-content">
                <h3 className="activity-title">Science Innovation Challenge</h3>
                <div className="activity-details">
                  <div className="activity-date">
                    <Calendar size={16} className="mr-2" /> July 10, 2025
                  </div>
                  <div className="activity-time">
                    <Clock size={16} className="mr-2" /> 10:00 AM
                  </div>
                </div>
                <p className="activity-description">
                  This competition challenges students to develop innovative solutions to real-world problems 
                  using scientific principles. Participants will present their prototypes to a panel of judges.
                </p>
                <a href="#" className="activity-read-more">
                  Learn More <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Upcoming Activity 4 */}
            <div className="activity-card">
              <div className="activity-image-container">
                <img src="https://images.unsplash.com/photo-1546531130-0157c4eda1e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80" alt="Islamic Quiz Competition" className="activity-image" />
                <div className="activity-badge">Islamic</div>
              </div>
              <div className="activity-content">
                <h3 className="activity-title">Islamic Quiz Competition</h3>
                <div className="activity-details">
                  <div className="activity-date">
                    <Calendar size={16} className="mr-2" /> August 8, 2025
                  </div>
                  <div className="activity-time">
                    <Clock size={16} className="mr-2" /> 2:00 PM
                  </div>
                </div>
                <p className="activity-description">
                  Test your knowledge of Islamic history, principles, and the Quran in this exciting quiz 
                  competition. Open to all grade levels with separate categories for different age groups.
                </p>
                <a href="#" className="activity-read-more">
                  Learn More <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Activities CTA */}
      <section className="join-activities">
        <div className="container">
          <div className="join-content">
            <h2>Get Involved in Our Activities</h2>
            <p>
              We encourage all students to actively participate in our diverse range of activities. 
              These experiences not only enhance academic learning but also develop essential life skills, 
              build confidence, and create lasting memories.
            </p>
            <NavLink to="/contactUs" className="join-button">
              Contact Us for More Information
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;