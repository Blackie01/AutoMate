import React from "react";
import logo from "../assets/logo.png";
import "./signup.css";
import { Link } from "react-router-dom";

function Signup() {
  function displayTest() {
    let pswrd = document.getElementById("passworded").value;
    console.log(pswrd);
    document.getElementsByClassName("display-error").innerHTML = pswrd;
  }

  return (
    <section className="overall-signup-page">
      <section className="center-container">
        <div className="left-div">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <span className="logo-span-signup">
              <img className="class-one-logo" src={logo} />
              <p>AutoMate</p>
            </span>
          </Link>

          <div className="individual-signup-detail-box">
            <div className="numerical-count">01. </div>
            <section className="signup-textuals">
              <h2>Register and Confirm</h2>
              <p>
                Create an account for your company. Confirm email, and get
                started with registering your vehicle details.
              </p>
            </section>
          </div>

          <div className="individual-signup-detail-box">
            <div className="numerical-count">02. </div>
            <section className="signup-textuals">
              <h2>Request on site installations</h2>
              <p>
                Once we have spec details of your vehicles, expect our experts
                technicians who get all your vehicles connected to the system.
              </p>
            </section>
          </div>

          <div className="individual-signup-detail-box">
            <div className="numerical-count">03. </div>
            <section className="signup-textuals">
              <h2>Manage your fleet</h2>
              <p>
                Once we confirm that all systems are go, we handover necessary
                infrastructures to you. Use our dashboard to gain unprecedented
                insights. And yes, we offer support, 24/7.
              </p>
            </section>
          </div>

          <div className="contact-support">
            More questions?{" "}
            <span style={{ color: "#646208", textDecoration: "underline" }}>
              Contact support.
            </span>
          </div>
        </div>

        <div className="right-div">
          <h3>Register your company.</h3>
          <form>
            <input type="text" placeholder="Company name" required />
            <input type="email" placeholder="Company email" required />
            <input
              id="passworded"
              type="password"
              placeholder="Create password"
              required
            />
            <p className="display-error"></p>
            <input
              onClick={displayTest}
              className="button-on-signup-page"
              type="submit"
              value="Continue"
            />
          </form>

          <div className="signup-with-google"></div>

          <p>
            Already have an account? <span>Login</span>
          </p>
        </div>
      </section>
    </section>
  );
}

export default Signup;
