import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../NavBar/NavBar.css";
import logo from "../../assets/AlqalamLogo.png";

const NavBar = () => {
  let [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "darkNav" : "noColor"}`}>
      <div className="logoCont">
        <img src={logo} alt="" className="logo" />
        <h1>AL QALAM ACADEMY</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/program">Program</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">About us</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/testimonials">Testimonials</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          {" "}
          <button className="btn navBtn">
            <NavLink to="contactUs">Contact us</NavLink>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
