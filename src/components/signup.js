import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogo from "../assets/rrgoogle.png";
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://ajayaqiwuafrfmgzripn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqYXlhcWl3dWFmcmZtZ3pyaXBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk0NzE0MjEsImV4cCI6MjAwNTA0NzQyMX0.zRxlg047kf0yET1cPuA9p6ryNWjANWfdyAp_J4p7g-Q"
);

function Signup() {
  const navigate = useNavigate();

  // Manage input state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  // To create account with email and password
  const handleSignIn = async (e) => {
    e.preventDefault();

    if (password.length >= 6) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });
  
        if (data) {
          navigate("/onboarding");
        } 
  
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorMessage("Password should be 6 characters or more")
      setTimeout(() => setErrorMessage(""), 4000) 
    }
  };

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
            More questions? <span>Contact support.</span>
          </div>
        </div>

        <div className="right-div">
          <h3>Register your company.</h3>
          <form className="registration-form">
            <input type="text" placeholder="Company name" required />
            <input
              id="email-input"
              type="email"
              placeholder="Company email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              id="passworded"
              type="password"
              placeholder="Create password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              id="signup-button-aux"
              className="button-on-signup-page"
              type="submit"
              value="Continue"
              onClick={handleSignIn}
            />

            <section className="or-section">
              <div className="or-hr"></div>
              <p>or</p>
              <div className="or-hr"></div>
            </section>

            <p style={{color: 'red', textAlign: 'center', height: '0.8rem', marginTop: '0'}}>{errorMessage}</p>

            {/* Sign in with Google */}

            <section className="google-signin-button">
              <img className="google-signin-img" src={GoogleLogo} />
              <span>Sign up with Google</span>
            </section>
          </form>

          <p>
            Already have an account?{" "}
            <Link to="/login">
              <span>Login</span>
            </Link>
          </p>
        </div>
      </section>
    </section>
  );
}

export default Signup;
