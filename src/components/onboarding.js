import React from "react";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "./authentication/config";


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

        <section>
            oops! page under construction.
            <button 
            // onClick={logout}
            onClick={logOut}
            >Logout</button>
        </section>

    )
  
}

export default Onboarding;