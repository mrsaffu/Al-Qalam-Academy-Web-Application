import React, { useEffect, useState } from "react";
import "./viewFaculty.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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

const ViewFaculty = () => {
  let [faculty, setFacuty] = useState({});
  let [education, setEducation] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    let fetchFunction = async () => {
      try {
        let response = await axios.get(
          `https://alqalam-academy-bakend.onrender.com/api/faculty/getfaculty/${id}`
        );
        console.log(response);
        let data = response.data.data;
        setFacuty(data);
        setEducation(data.education || []);
        console.log(faculty);
        console.log(education);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    // fetchFunction()

    if (id) {
      fetchFunction();
    }
  }, [id]);
  console.log(faculty);
  console.log(education);
  let handleClose = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="facultyView-modal">
        <div className="viewCloseDiv">
          <button className="view-Closebtn" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="facultyView-content">
          <div className="facultyView-left">
            <img
              src={faculty.image}
              alt="Profile"
              className="facultyView-img"
            />
          </div>
          <div className="facultyView-right">
            <h2>{faculty.name}</h2>
            <p className="facultyView-role">{faculty.possition}</p>

            <div className="facultyView-info-grid">
              <div>
                <strong>Department:</strong>
                <br />
                {faculty.department}
              </div>
              <div>
                <strong>Qualification:</strong>
                <br />
                {faculty.qualification}
              </div>
              <div>
                <strong>Experience:</strong>
                <br />
                {faculty.experience}
              </div>
              <div>
                <strong>Expertise:</strong>
                <br />
                {faculty.expertise}
              </div>
            </div>

            <div className="facultyView-section">
              <h3>Dicription</h3>
              <p>{faculty.description}</p>
              <br />
              <h3>Biography</h3>
              <p>{faculty.biography}</p>
            </div>

            <div className="facultyView-section">
              <h3>Education</h3>

              {Array.isArray(education) &&
                education.map((m, index) => (
                  <ul key={index}>
                    <li>{m}</li>
                  </ul>
                ))}
            </div>

            <div className="facultyView-section facultyView-contact">
              <i className="fas fa-envelope"></i> <Mail size={16} />{" "}
              {faculty.email}
            </div>

            <div className="facultyView-social">
              {faculty.socialMedia?.linkedin && (
                <a href={faculty.socialMedia.linkedin} target="_blank">
                  <Linkedin size={25} />
                </a>
              )}
              {faculty.socialMedia?.twitter && (
                <a href={faculty.socialMedia.twitter} target="_blank">
                  <Twitter size={25} />
                </a>
              )}
              {faculty.socialMedia?.facebook && (
                <a href={faculty.socialMedia.facebook} target="_blank">
                  <Facebook size={25} />
                </a>
              )}
              {faculty.socialMedia?.Instagram && (
                <a href={faculty.socialMedia.instagram} target="_blank">
                  <Instagram size={25} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewFaculty;
