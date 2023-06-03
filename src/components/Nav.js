import React, { useState }from "react";
import "./Nav.css";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navigation() {

  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => {
    setIsOpen(!isOpen)
  };
  

  return (
    <nav className="navigation">
      <section className="overall-nav">
        <Link
          style={{
            width: "max-content",
            textDecoration: "none",
            color: "black",
          }}
        >
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

        <div className="hamburger-menu" onClick={openMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        
      </section>

      <hr className="divide" />

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        
        <div>Features</div>
        <div>Company</div>
        <div>Solutions</div>
        <div>Case Study</div>

        <section className="mobile-access-menu">
          <div id="mobile-login-button">Log in</div>

          <NavLink
            to="/signup"
            style={({ isActive }) =>
              isActive ? { color: "yellow" } : { color: "green" }
            }
          >
            <Button variant="outlined">Sign Up</Button>
          </NavLink>
        </section>

      </div>
     
    </nav>
  );
}

export default Navigation;
