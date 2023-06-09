import React from "react";
import { useNavigate } from "react-router";

function Onboarding () {

    const goback = useNavigate()

    const logout = () => {
        localStorage.clear()
        goback('/')
    }

    return (

        <section>
            oops! page under construction.
            <button onClick={logout}>Logout</button>
        </section>

    )
  
}

export default Onboarding;