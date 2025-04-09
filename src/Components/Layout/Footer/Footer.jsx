import React from "react";
import "./Footer.css";
import logo from "../../../assets/AlqalamLogo.png";

import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div>
            <div className="footer-logo-section">
              <div className="footer-logo">
                <img src={logo} alt="" className="logo" />
              </div>
              <h3 className="footer-title">Al Qalam Academy</h3>
            </div>
            <p className="footer-description">
              Nurturing young minds with quality education and Islamic values at
              the leading CBSE board school since 2005.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon">
                <Facebook size={18} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={18} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={18} />
              </a>
              <a href="#" className="social-icon">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutUs" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="footer-link">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="footer-link">
                  Faculty
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="footer-link">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="footer-link">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="contactUs" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Useful Links</h4>
            <ul className="footer-links">
              <li>
                <Link
                  to="https://www.cbse.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  CBSE Official Website
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Student Portal
                </Link>{" "}
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Parent Portal
                </Link>{" "}
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Academic Calendar
                </Link>{" "}
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Careers
                </Link>{" "}
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Privacy Policy
                </Link>{" "}
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Terms & Conditions
                </Link>{" "}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Contact Information</h4>
            <ul className="contact-list">
              <li className="contact-item">
                <MapPin className="contact-icon" size={18} />
                <span>
                  Talim Nagar, Darbhanga, Darbhanga Ho, Darbhanga -
                  <br />
                  Bihar - 846004, India
                </span>
              </li>
              <li className="contact-item">
                <Phone className="contact-icon" size={18} />
                <span>+91 98523 27737</span>
              </li>
              <li className="contact-item">
                <Mail className="contact-icon" size={18} />
                <span>info@alqalamacademy.edu</span>
              </li>
              <li className="contact-item">
                <Clock className="contact-icon" size={18} />
                <span>
                  Mon-Fri: 8:00 AM - 4:00 PM
                  <br />
                  Sat: 9:00 AM - 1:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <p>
            &copy; {new Date().getFullYear()} Al Qalam Academy. All Rights
            Reserved. CBSE Affiliated School.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
