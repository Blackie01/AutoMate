import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./login.css";
import { auth, provider } from "./authentication/config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogo from "../assets/rrgoogle.png";

function Login() {
  const navigate = useNavigate();

  // login with email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/onboarding");
    } catch (err) {
      console.error(err);
      document.getElementById("error-display").innerHTML =
        "You don't have an account with us. Sign up below.";
    }
  };

  // login with google
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/onboarding");
    } catch (err) {
      console.error(err);
    }
  };

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
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="login-form-input"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <p id="error-display"></p>

          <input
            type="submit"
            onClick={login}
            className="button-on-login-page"
          />

          <section className="or-section">
            <div className="or-hr"></div>
            <p>or</p>
            <div className="or-hr"></div>
          </section>

          <section className="google-signin-button" onClick={signInWithGoogle}>
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
