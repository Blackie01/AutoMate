import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogo from "../assets/rrgoogle.png";
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://ajayaqiwuafrfmgzripn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqYXlhcWl3dWFmcmZtZ3pyaXBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk0NzE0MjEsImV4cCI6MjAwNTA0NzQyMX0.zRxlg047kf0yET1cPuA9p6ryNWjANWfdyAp_J4p7g-Q"
);

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const {data, error} = await supabase.auth.signInWithPassword({email, password})

      if(error) {
        setErrorMessage(`You don't have an AutoMate account`)
        setTimeout(() => setErrorMessage(''), 4000)
      } else {
        

        navigate('/onboarding')

      }
    } catch (error) {
      console.error(error.message)
    }
  }
 

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="login-form-input"
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p id="error-display"></p>

          <input
            type="submit"
            className="button-on-login-page"
            onClick={handleLogin}
          />

          <section className="or-section">
            <div className="or-hr"></div>
            <p>or</p>
            <div className="or-hr"></div>
          </section>

          <p style={{color: 'red', fontSize:'smaller', textAlign: 'center', height: '0.8rem', marginTop: '0'}}>{errorMessage}</p>

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
