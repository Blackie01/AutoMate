import React from "react";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "./authentication/config";
import logo from '../assets/logo.png'
import location from '../assets/xlocation.png'
import maintenance from '../assets/maintenance.png'
import dashcam from '../assets/dashcam.png'
import fuel from '../assets/fuel.png'
import dispatch from '../assets/dispatch.png'
import telematics from '../assets/telematics.png'
import './onboarding.css'


function Onboarding () {

    const goback = useNavigate()

    // const logout = () => {
    //     localStorage.clear()
    //     goback('/')
    // //   window.location.reload()

    // }

    const logOut = async () => {
        try {
        await signOut(auth);
        goback('/')
        } catch (err){
          console.error(err);
        }
      };

    return (

        <section id="onboarding-one">
            <div 
            // onClick={logout}
            onClick={logOut}
            >
              <img className="class-one-logo" src={logo} />
            </div>

            <section id="overall-onboard-one-container">
              <h3 id="onboard-one-text">
                Welcome, what do you need our help with? 
              </h3>

              <section id="onboard-one-options">
                <div className="option-container">
                  <img src={location} className="icons"/>
                  <p>Vehicle Tracker</p>
                </div>

                <div className="option-container">
                  <img src={maintenance} id="img-2-onboard" className="icons"/>
                  <p>Maintenance</p>
                </div>

                <div className="option-container">
                  <img src={dashcam} className="icons"/>
                  <p>Dashcams</p>
                </div>

                <div className="option-container">
                  <img src={fuel} className="icons"/>
                  <p>Fuel Manager</p>
                </div>

                <div className="option-container">
                  <img src={dispatch} className="icons"/>
                  <p>Dispatch Control</p>
                </div>

                <div className="option-container">
                  <img src={telematics} className="icons"/>
                  <p>Telematics</p>
                </div>
              </section>

              <hr id="onboard-hr"></hr>

              <div className="next-button">Next</div>
            </section>


        </section>

    )
  
}

export default Onboarding;