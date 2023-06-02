import React from "react";
import "./Nav.css";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navigation() {
  document.addEventListener("DOMContentLoaded", function () {
    const dividerr = document.querySelector(".divide");

    window.addEventListener("scroll", function () {
      // Check if the user has scrolled past the top of the navigation
      if (window.pageYOffset > 2) {
        // If so, hide the <hr> element
        dividerr.style.display = "none";
      } else {
        // If not, show the <hr> element
        dividerr.style.display = "block";
      }
    });
  });


  return (
    <nav className="navigation">
      <section className="overall-nav">
        <Link style={{ textDecoration: "none", color: "black" }}>
          {/* The styling for this is in the footer.css file, cos the code block was 
        was copied from footer.js */}
          <div id="transform-logo" className="class-one-logo-container">
            <img className="class-one-logo" src={logo} />
            <p>AutoMate</p>
          </div>
        </Link>

        <section className="middle-menu">
          <ul>
            <li>Features</li>
            <li>Company</li>
            <li>Solutions</li>
            <li>Case Study</li>
          </ul>
        </section>

        <section className="access-menu">
          <div id="login-button">Log in</div>

          <NavLink
            to="/signup"
            style={({ isActive }) =>
              isActive ? { color: "yellow" } : { color: "green" }
            }
          >
            <Button variant="outlined">Sign Up</Button>
          </NavLink>
        </section>


        <button className="hamburger-menu" onClick={displayMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </section>

      <hr className="divide" />
    </nav>
  );
}

export default Navigation;
