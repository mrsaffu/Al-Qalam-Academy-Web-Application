import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CurriculumTab from "./CurriculumTab/CurriculumTab";
import "./Academics.css";

const Academics = () => {
  useEffect(() => {
    document.title = "Academics - Al Qalam Academy";
  }, []);

  const [activeTab, setActiveTab] = useState("curriculum");

  const tabs = [
    { id: "curriculum", label: "Curriculum" },
    { id: "primary", label: "Primary Wing" },
    { id: "middle", label: "Middle Wing" },
    { id: "senior", label: "Senior Wing" },
    { id: "islamic", label: "Islamic Studies" },
  ];

  return (
    <>
      <section className="academics-section">
        <div className="academics-container">
          <div className="academics-header">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="academics-title"
            >
              Our{" "}
              <span className="academics-title-highlight">
                Academic Programs
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="academics-subtitle"
            >
              Comprehensive CBSE curriculum with focus on holistic development
              and Islamic values
            </motion.p>
          </div>

          <div className="tabs-container">
            <div className="tabs-nav">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="tab-content">
              {activeTab === "curriculum" && <CurriculumTab />}
              {activeTab === "primary" && (
                <div className="tab-pane active">
                  <div className="wing-layout">
                    <div className="wing-content">
                      <h3 className="tab-pane-title">
                        Primary Wing (Pre-Nursery to Grade 5)
                      </h3>
                      <p className="tab-pane-text">
                        Our Primary Wing focuses on building a strong foundation
                        for lifelong learning through age-appropriate activities
                        and play-based education. We provide a nurturing
                        environment where young minds develop essential
                        cognitive, social, and motor skills.
                      </p>

                      <div className="wing-features">
                        <div className="wing-feature-group">
                          <h4 className="wing-subtitle">Grade Levels</h4>
                          <ul className="wing-list">
                            <li>Pre-Nursery (Age 2.5-3.5 years)</li>
                            <li>Nursery (Age 3.5-4.5 years)</li>
                            <li>Kindergarten (KG) (Age 4.5-5.5 years)</li>
                            <li>Grades 1 to 5 (Ages 6-11 years)</li>
                          </ul>
                        </div>

                        <div className="wing-feature-group">
                          <h4 className="wing-subtitle">Key Focus Areas</h4>
                          <ul className="wing-list">
                            <li>Foundational literacy and numeracy skills</li>
                            <li>
                              Language development (English, Hindi, Arabic)
                            </li>
                            <li>
                              Environmental awareness and science exploration
                            </li>
                            <li>Basic computer skills and digital literacy</li>
                            <li>
                              Creative arts, music, and physical education
                            </li>
                            <li>Islamic values and character building</li>
                          </ul>
                        </div>
                      </div>

                      <div className="wing-highlight">
                        <h4 className="wing-highlight-title">
                          Teaching Methodology
                        </h4>
                        <p>
                          Our activity-based learning approach includes
                          storytelling, arts and crafts, educational games,
                          outdoor activities, and interactive learning
                          experiences. We maintain small class sizes to ensure
                          personalized attention for each child.
                        </p>
                      </div>
                    </div>

                    <div className="wing-image-container">
                      <img
                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80"
                        alt="Primary Wing Students"
                        className="wing-image"
                      />
                      <div className="wing-badge primary-badge">
                        <span>Building Foundations</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "middle" && (
                <div className="tab-pane active">
                  <div className="wing-layout">
                    <div className="wing-content">
                      <h3 className="tab-pane-title">
                        Middle Wing (Grades 6 to 8)
                      </h3>
                      <p className="tab-pane-text">
                        The Middle Wing at Al Qalam Academy helps students
                        transition from elementary learning to more advanced
                        academic concepts. Our curriculum encourages analytical
                        thinking, problem-solving skills, and personal
                        responsibility.
                      </p>

                      <div className="wing-features">
                        <div className="wing-feature-group">
                          <h4 className="wing-subtitle">Core Academics</h4>
                          <ul className="wing-list">
                            <li>Advanced Mathematics (Algebra, Geometry)</li>
                            <li>
                              Science (Physics, Chemistry, Biology concepts)
                            </li>
                            <li>English Literature and Language Arts</li>
                            <li>Social Studies and Civics</li>
                            <li>Hindi and Arabic language instruction</li>
                            <li>Computer Science and Technology</li>
                          </ul>
                        </div>

                        <div className="wing-feature-group">
                          <h4 className="wing-subtitle">
                            Co-Curricular Activities
                          </h4>
                          <ul className="wing-list">
                            <li>
                              Science laboratories and practical experiments
                            </li>
                            <li>Debate and public speaking workshops</li>
                            <li>Sports and physical education programs</li>
                            <li>Art, music, and theater opportunities</li>
                            <li>Educational field trips and excursions</li>
                            <li>Leadership development programs</li>
                          </ul>
                        </div>
                      </div>

                      <div className="wing-highlight">
                        <h4 className="wing-highlight-title">
                          Development Focus
                        </h4>
                        <p>
                          During these formative years, we promote critical
                          thinking, time management, research skills, and
                          teamwork. Students participate in annual science
                          fairs, literary competitions, and sports tournaments
                          to develop their talents and interests.
                        </p>
                      </div>
                    </div>

                    <div className="wing-image-container">
                      <img
                        src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        alt="Middle Wing Students"
                        className="wing-image"
                      />
                      <div className="wing-badge middle-badge">
                        <span>Developing Potential</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "senior" && (
                <div className="tab-pane active">
                  <div className="wing-layout">
                    <div className="wing-content">
                      <h3 className="tab-pane-title">
                        Senior Wing (Grades 9 to 10)
                      </h3>
                      <p className="tab-pane-text">
                        Our Senior Wing prepares students for CBSE board
                        examinations while nurturing their academic excellence,
                        character development, and career readiness. We
                        emphasize a balanced approach to education with strong
                        academic rigor and holistic development.
                      </p>

                      <div className="wing-features">
                        <div className="wing-feature-group">
                          <h4 className="wing-subtitle">
                            CBSE Curriculum Focus
                          </h4>
                          <ul className="wing-list">
                            <li>
                              Mathematics (Advanced Algebra, Statistics,
                              Geometry)
                            </li>
                            <li>Science (Physics, Chemistry, Biology)</li>
                            <li>English Language and Literature</li>
                            <li>
                              Social Sciences (History, Geography, Economics,
                              Civics)
                            </li>
                            <li>
                              Information Technology and Computer Applications
                            </li>
                            <li>Second Languages (Hindi, Arabic)</li>
                          </ul>
                        </div>

                        <div className="wing-feature-group">
                          <h4 className="wing-subtitle">Skill Development</h4>
                          <ul className="wing-list">
                            <li>Board examination preparation and practice</li>
                            <li>Career counseling and guidance</li>
                            <li>Scientific research and project work</li>
                            <li>Advanced computer skills and programming</li>
                            <li>Public speaking and presentation skills</li>
                            <li>
                              Leadership and community service opportunities
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="wing-highlight">
                        <h4 className="wing-highlight-title">
                          Achievements & Outcomes
                        </h4>
                        <p>
                          Our students consistently achieve excellent results in
                          CBSE board examinations, with many securing top
                          positions and distinctions. We provide specialized
                          support through additional classes, regular
                          assessments, and one-on-one mentoring by experienced
                          faculty members.
                        </p>
                      </div>
                    </div>

                    <div className="wing-image-container">
                      <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        alt="Senior Wing Students"
                        className="wing-image"
                      />
                      <div className="wing-badge senior-badge">
                        <span>Preparing for Excellence</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "islamic" && (
                <div className="tab-pane active">
                  <div className="wing-layout">
                    <div className="wing-content">
                      <h3 className="tab-pane-title">
                        Islamic Studies Program
                      </h3>
                      <p className="tab-pane-text">
                        Our Islamic Studies program is integrated across all
                        grade levels, providing students with comprehensive
                        education in Islamic principles, practices, and values.
                        The curriculum is designed to foster a deep connection
                        with Islamic heritage while promoting moral and ethical
                        development.
                      </p>

                      <div className="wing-features">
                        <div className="wing-feature-group">
                          <h4 className="wing-subtitle">Core Components</h4>
                          <ul className="wing-list">
                            <li>
                              Quran recitation with proper tajweed
                              (pronunciation)
                            </li>
                            <li>Hifz program (Quran memorization)</li>
                            <li>Islamic studies (Fiqh, Aqeedah, Seerah)</li>
                            <li>Islamic history and civilization</li>
                            <li>Arabic language instruction</li>
                            <li>Islamic ethics and character development</li>
                          </ul>
                        </div>

                        <div className="wing-feature-group">
                          <h4 className="wing-subtitle">
                            Activities & Programs
                          </h4>
                          <ul className="wing-list">
                            <li>Daily prayer sessions (Salah)</li>
                            <li>Weekly Juma (Friday) prayers and sermons</li>
                            <li>Quran competitions and tajweed contests</li>
                            <li>Islamic celebrations and festivals</li>
                            <li>Community service and charity initiatives</li>
                            <li>Islamic art and calligraphy workshops</li>
                          </ul>
                        </div>
                      </div>

                      <div className="wing-highlight">
                        <h4 className="wing-highlight-title">
                          Integration Approach
                        </h4>
                        <p>
                          Our Islamic Studies program is seamlessly integrated
                          with academic subjects, creating connections between
                          Islamic teachings and modern education. We emphasize
                          the application of Islamic values in daily life,
                          encouraging students to become well-rounded
                          individuals with strong moral character and academic
                          excellence.
                        </p>
                      </div>
                    </div>

                    <div className="wing-image-container">
                      <img
                        src="https://images.unsplash.com/photo-1607325585518-f835be7ae35e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                        alt="Islamic Studies Program"
                        className="wing-image"
                      />
                      <div className="wing-badge islamic-badge">
                        <span>Faith & Knowledge</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Academics;
