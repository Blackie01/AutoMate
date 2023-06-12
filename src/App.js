import "./App.css";
import React from "react";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/signup";
import Onboarding from "./components/onboarding";
import Login from "./components/login";

function App() {
  return (
      <section className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login/>}/>
          <Route path="onboarding" element={<Onboarding />} />
        </Routes>
      </section>
  );
}

export default App;
