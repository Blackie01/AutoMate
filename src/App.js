import './App.css';
import React from 'react';
import Homepage from './components/Homepage';
import { Routes, Route, Link } from 'react-router-dom'
import Signup from './components/signup';

function App() {
  return (
    <section className="app">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='signup' element= {<Signup/>}/>
        <Route/>

      </Routes>


    </section>
  );
}

export default App;
