import React from "react";
import { useNavigate } from "react-router";

function Onboarding () {

    const goback = useNavigate()

    const logout = () => {
        localStorage.clear()
        goback('/')
    //   window.location.reload()

    }

    return (

        <section>
            oops! page under construction.
            <button onClick={logout}>Logout</button>
        </section>

    )
  
}

export default Onboarding;