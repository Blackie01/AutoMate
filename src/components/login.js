import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogo from "../assets/rrgoogle.png";

function Login() {
  const navigate = useNavigate();

 

  return (
    <section className="login-page">
      <section className="login-container">
        <form className="login-form">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <span id="login-logo" className="logo-span-login">
              <img className="class-one-logo" src={logo} />
              <p>AutoMate</p>
            </span>
          </Link>
          <h3>Login</h3>

          <input
            className="login-form-input"
            type="email"
            placeholder="email"
            required
          />

          <input
            className="login-form-input"
            type="password"
            placeholder="password"
            required
          />

          <p id="error-display"></p>

          <input
            type="submit"
            className="button-on-login-page"
          />

          <section className="or-section">
            <div className="or-hr"></div>
            <p>or</p>
            <div className="or-hr"></div>
          </section>

          <section className="google-signin-button">
            <img className="google-signin-img" src={GoogleLogo} />
            <span>Sign in with Google</span>
          </section>

          <p style={{ fontSize: "smaller", textAlign: "center" }}>
            Don't have an account?{" "}
            <Link to="/signup">
              <span>Sign up</span>
            </Link>
          </p>
        </form>
      </section>
    </section>
  );
}

export default Login;
