import { useState, useEffect } from "react";
// import { Link, useLocation } from 'wouter';
import { Menu, ToggleLeft, X } from "lucide-react";
import "../../../../Components/Layout/NavBar/NavBar.css";
import {
  Link,
  Navigate,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import logo from "../../../../assets/AlqalamLogo.png";

const AdminNavBar = () => {
  let navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loginToggle, setLoginToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // admin login

  let handleAdminLogin = () => {
    const newToggleState = !loginToggle;
    setLoginToggle(newToggleState);

    setTimeout(() => {
      if (newToggleState) {
        navigate("/home");
        console.log("Admin toggle ON");
      } else {
        navigate("/admin"); // back to home or user login
        console.log("Admin toggle OFF");
      }
    }, 500);
  };

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
          <Link href="/admin" className="logo-link">
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
                <NavLink to="/admin">Home</NavLink>
                <NavLink to="/admin/faculty">Faculty</NavLink>
                <NavLink to="/admin/gallery">Gallery</NavLink>
                <NavLink to="/admin/testimonial">Testimonial</NavLink>
                <NavLink to="/admin/editfaculty">Edit Faculty</NavLink>
                <NavLink to="/admin/editgallery">Edit Gallery</NavLink>
                <NavLink to="/admin/edittestimonial">Edit Testimonial</NavLink>
              </ul>
            </nav>

            {/* toggle admin */}
            <div className="toggle-cont" onClick={handleAdminLogin}>
              <div className={`admintoggle ${loginToggle ? "on" : ""}`}>
                <div className="circle" />
              </div>
              <p>user</p>
            </div>
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
        <nav className="mobilenav">
          <ul className="mobile-nav-list">
            <div className="toggle-cont">
              <div
                className={`admintoggle ${loginToggle ? "on" : ""}`}
                onClick={() => {
                  handleAdminLogin();
                }}
              >
                <div className="circle" />
              </div>
              <p>Admin</p>
            </div>
            <li className="mobile-nav-item">
              <NavLink
                to="/admin"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink
                to="/admin/faculty"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Faculty
              </NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink
                to="/admin/gallery"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink
                to="/admin/testimonial"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonial
              </NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink
                to="/admin/editfaculty"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Edit Faculty
              </NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink
                to="/admin/edit/gallery"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Edit Gallery
              </NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink
                to="/admin/edittestimonial"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Edit Testimonial
              </NavLink>
            </li>
            {/* <li className="mobile-nav-item">
              <NavLink
                to="/activities"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Activities
              </NavLink>
            </li> */}
            {/* <li className="mobile-nav-item">
              <NavLink to="/admissions">
                <button
                  className="mobile-apply-button"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Apply Now
                </button>
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AdminNavBar;
