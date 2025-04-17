import { useState, useEffect } from "react";
// import { Link, useLocation } from 'wouter';
import { Menu, X } from "lucide-react";
import "./NavBar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/AlqalamLogo.png";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  let [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""}${
        sticky ? "darkNav" : "noColor"
      } `}
    >
      <div className="header-container">
        <div className="header-content">
          <Link href="/" className="logo-link">
            <div className="logo-icon">
              <img src={logo} alt="" className="logo" />
            </div>
            <div className="logo-text">
              <h1>Al Qalam Academy</h1>
            </div>
          </Link>

          <div className="desktop-menu">
            <nav>
              <ul className="nav-list">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/aboutUs">About</NavLink>
                <NavLink to="/academics">Academics</NavLink>
                <NavLink to="/faculty">Faculty</NavLink>
                <NavLink to="/admissions">Admissions</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/activities">Activities
                </NavLink>
                <NavLink to="/contactUs">Contact</NavLink>
              </ul>
            </nav>
            <Link to="/admissions">
              <button className="apply-button">Apply Now</button>
            </Link>
          </div>

          <button
            className="menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${!mobileMenuOpen ? "hidden" : ""}`}>
        <nav>
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <NavLink
                to="/"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink
                to="/aboutUs"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink
                to="/academics"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Academics
              </NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink
                to="/faculty"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Faculty
              </NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink
                to="/admissions"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admissions
              </NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink
                to="/gallery"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink
                to="/contact"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink
                to="/activities"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Activities
              </NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink to="/admissions">
                <button
                  className="mobile-apply-button"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Apply Now
                </button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
