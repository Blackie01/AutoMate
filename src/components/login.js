import React, { useState } from "react";
import { auth, provider } from "./authentication/config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

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
        "You don't have an account with us. Sign up.";
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
    <section>
      <Link to="/">
        <button>go to home</button>
      </Link>
      <form>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <p id="error-display"></p>

        <input type="submit" onClick={login} />

        <section onClick={signInWithGoogle}>Sign in with Google</section>
      </form>
    </section>
  );
}

export default Login;
