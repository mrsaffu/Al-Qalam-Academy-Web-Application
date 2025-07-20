"use server";
import { useState, useEffect, use, Fragment } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  X,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ExternalLink,
} from "lucide-react";
import { facultyMembers } from "../../../SchoolMemberDetails/sclMemDetails";
import "./Faculty.css";
import useFetch from "../../../apisFunction/useFecth";
import axios from "axios";

const Faculty = () => {
  // let { data, loading, error } = useFetch(
  //   "http://localhost:8000/api/faculty/getfaculty"
  // );

  let [data, setData] = useState([]);
  let [error, setError] = useState(false);
  let [notFound, setNotFound]= useState(false)

  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(
          "https://alqalam-academy-bakend.onrender.com/api/faculty/getfaculty"
        );
        console.log(response);
        let data = response.data;
        setData(data.data);
      } catch (error) {
        setError("Something else went wrong (network error, etc.)")
        console.log(error);
        console.log(error.message);
        console.log(error.response.data.message);
        setNotFound(error.response.data.message)
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   document.title = "Faculty - Al Qalam Academy";
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  const openFacultyModal = (faculty) => {
    setSelectedFaculty(faculty);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeFacultyModal = () => {
    setShowModal(false);
    setSelectedFaculty(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="faculty-page">
      <section className="faculty-cont">
        <div className="faculty-container">
          <div className="page-header">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="page-title"
            >
              Our <span>Expert Faculty</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="page-description"
            >
              Dedicated teachers committed to excellence in education and
              nurturing young minds
            </motion.p>
          </div>
          <div className="faculty-error">
            {notFound ? <h1>{notFound}</h1> : <h1>{error}</h1>}
          </div>
          <div className="faculty-grid">
            {data.map((member, index) => (
              <motion.div
                key={member._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="faculty-card"
              >
                <div className="faculty-image-container">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="faculty-image"
                  />
                  <div className="faculty-department">{member.department}</div>
                </div>
                <div className="faculty-content">
                  <h3 className="faculty-name">{member.name}</h3>
                  <p className="faculty-position">{member.possition}</p>

                  <div className="faculty-info">
                    <div className="faculty-qualification">
                      <p className="info-label">Qualification</p>
                      <p className="info-value">{member.qualification}</p>
                    </div>
                    <div className="faculty-experience">
                      <p className="info-label">Experience</p>
                      <p className="info-value">{member.experience}</p>
                    </div>
                  </div>

                  <p className="faculty-bio">{member.description}</p>

                  <div className="faculty-contact">
                    <div className="faculty-email">
                      <Mail size={16} />
                      <span>{member?.email?.split("@")[0] ?? "N/A"}@...</span>
                    </div>
                    <button
                      onClick={() => openFacultyModal(member)}
                      className="faculty-link"
                    >
                      View Profile <ArrowRight className="ml-1" size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="philosophy-section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="philosophy-container"
            >
              <h2 className="philosophy-title">Our Teaching Philosophy</h2>
              <p className="philosophy-text">
                At Al Qalam Academy, we believe that effective teaching goes
                beyond just delivering curriculum content. Our faculty members
                are dedicated to:
              </p>

              <div className="philosophy-grid">
                <div className="philosophy-card">
                  <h3 className="philosophy-card-title">
                    Student-Centered Approach
                  </h3>
                  <p className="philosophy-card-text">
                    Our teachers recognize the unique learning needs and
                    abilities of each student. They employ differentiated
                    instruction techniques to ensure that every child receives
                    the support they need to succeed academically.
                  </p>
                </div>

                <div className="philosophy-card">
                  <h3 className="philosophy-card-title">Continuous Learning</h3>
                  <p className="philosophy-card-text">
                    Our faculty regularly participates in professional
                    development programs to stay updated with the latest
                    teaching methodologies and educational research. This
                    commitment to continuous learning helps them bring
                    innovative practices to the classroom.
                  </p>
                </div>

                <div className="philosophy-card">
                  <h3 className="philosophy-card-title">Values Integration</h3>
                  <p className="philosophy-card-text">
                    Beyond academic excellence, our teachers focus on character
                    development and the integration of Islamic values across the
                    curriculum. They serve as role models and mentors, nurturing
                    students to become responsible and ethical individuals.
                  </p>
                </div>

                <div className="philosophy-card">
                  <h3 className="philosophy-card-title">
                    Collaborative Environment
                  </h3>
                  <p className="philosophy-card-text">
                    Our teachers work collaboratively with each other, with
                    parents, and with students to create a supportive learning
                    community. This collaborative approach ensures that students
                    receive consistent guidance and support in their educational
                    journey.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faculty Profile Modal */}
      {showModal && selectedFaculty && (
        <div className="faculty-modal">
          <div className="modal-content">
            <button className="modal-close" onClick={closeFacultyModal}>
              <X size={16} />
            </button>

            <div className="modal-body">
              <div className="modal-image-container">
                <img
                  src={selectedFaculty.image}
                  alt={selectedFaculty.name}
                  className="modal-image"
                />
              </div>

              <div className="modal-details">
                <h2 className="modal-name">{selectedFaculty.name}</h2>
                <p className="modal-position">{selectedFaculty.possition}</p>

                <div className="modal-info-grid">
                  <div className="modal-info-item">
                    <span className="modal-info-label">Department</span>
                    <span className="modal-info-value">
                      {selectedFaculty.department}
                    </span>
                  </div>

                  <div className="modal-info-item">
                    <span className="modal-info-label">Qualification</span>
                    <span className="modal-info-value">
                      {selectedFaculty.qualification}
                    </span>
                  </div>

                  <div className="modal-info-item">
                    <span className="modal-info-label">Experience</span>
                    <span className="modal-info-value">
                      {selectedFaculty.experience}
                    </span>
                  </div>

                  <div className="modal-info-item">
                    <span className="modal-info-label">Expertise</span>
                    <span className="modal-info-value">
                      {selectedFaculty.expertise}
                    </span>
                  </div>
                </div>

                <h3 className="modal-bio-title">Biography</h3>
                <p className="modal-bio">
                  {selectedFaculty.biography &&
                    selectedFaculty.biography
                      .split("\n\n")
                      .map((paragraph, index, arr) => (
                        <span key={index}>
                          {paragraph}
                          {index < arr.length - 1 && (
                            <>
                              <br />
                              <br />
                            </>
                          )}
                        </span>
                      ))}
                </p>

                <h3 className="modal-education-title">Education</h3>
                <ul className="education-list">
                  {selectedFaculty.education.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>

                <div className="modal-contact">
                  <a
                    href={`mailto:${selectedFaculty.email}`}
                    className="modal-email"
                  >
                    <Mail size={18} />
                    {selectedFaculty.email}
                  </a>

                  <div className="modal-social">
                    {selectedFaculty.socialMedia.linkedin && (
                      <a
                        href={selectedFaculty.socialMedia.linkedin}
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}

                    {selectedFaculty.socialMedia.twitter && (
                      <a
                        href={selectedFaculty.socialMedia.twitter}
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter size={18} />
                      </a>
                    )}

                    {selectedFaculty.socialMedia.facebook && (
                      <a
                        href={selectedFaculty.socialMedia.facebook}
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook size={18} />
                      </a>
                    )}

                    {selectedFaculty.socialMedia.instagram && (
                      <a
                        href={selectedFaculty.socialMedia.instagram}
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram size={18} />
                      </a>
                    )}

                    {selectedFaculty.socialMedia.researchGate && (
                      <a
                        href={selectedFaculty.socialMedia.researchGate}
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faculty;
