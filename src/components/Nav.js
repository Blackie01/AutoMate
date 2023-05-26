import React from "react";
import "./Nav.css";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

function Navigation() {

  document.addEventListener('DOMContentLoaded', function() {
    const dividerr = document.querySelector('.divide');
  
    window.addEventListener('scroll', function() {
      // Check if the user has scrolled past the top of the navigation
      if (window.pageYOffset > 2) {
        // If so, hide the <hr> element
        dividerr.style.display = 'none';
      } else {
        // If not, show the <hr> element
        dividerr.style.display = 'block';
      }
    });
  });
  
        
  return (
    <nav className="navigation">
      <section className="overall-nav">
        <section className="logo-menu">
          <p>AutoMate</p>
        </section>

        <section className="middle-menu">
          <ul>
            <li>Features</li>
            <li>Company</li>
            <li>Solutions</li>
            <li>Case Study</li>
          </ul>
        </section>

        <section className="access-menu">
          <div>Log in</div>

          <NavLink to="/signup"
          style={({isActive}) => isActive ? {color:"yellow"} : {color: "green"} }
          >
          <Button variant="outlined">Sign Up</Button>


          </NavLink>
        </section>
      </section>
      <hr className="divide" />
    </nav>
  );
}

export default Navigation;
