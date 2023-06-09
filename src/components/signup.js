import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogo from '../assets/rrgoogle.png';
import { auth, provider } from './authentication/config'
import { signInWithPopup } from 'firebase/auth'
import Onboarding from "./onboarding";

function Signup() {
  function displayTest() {
    let pswrd = document.getElementById("passworded").value;
    console.log(pswrd);
    document.getElementsByClassName("display-error").innerHTML = pswrd;
  }

  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const googleSignIn = () => {
    signInWithPopup(auth, provider).then ((data) => {
      setValue(data.user.email)
      localStorage.setItem('email',data.user.email)
    })
    if (value) {
      // window.location.reload()
      navigate ('/onboarding')
      
    }
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  })

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
            <span>
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
            <input
              onClick={displayTest}
              className="button-on-signup-page"
              type="submit"
              value="Continue"
            />
          </form>

          <section className="or-section">
            <div className="or-hr"></div>
            <p>or</p>
            <div className="or-hr"></div>
          </section>

          {/* Sign in with Google */}

          {/* {value ? <Onboarding/> : */}
          <section className="google-signin-button" onClick={googleSignIn}>
            <img className="google-signin-img" src={GoogleLogo}/>
            <span>Sign up with Google</span>
          </section>
          {/* } */}

          <p>
            Already have an account? <span>Login</span>
          </p>
        </div>
      </section>
    </section>
  );
}

export default Signup;
