import React from 'react';
import './Nav.css'
import Button from '@mui/material/Button';

function Navigation() {

    return (
        <section>
            <section className="overall-nav">
            <section className="logo-menu">
                <p>AutoMate</p>
            </section>

            <section className="middle-menu">
                <ul>
                    <li>Features</li>
                    <li>Company</li>
                    <li>Solutions</li>
                    <li>Case Study</li>
                </ul>
            </section>

            <section className="access-menu">
                <div>Log in</div>
                <Button variant="outlined">Sign Up</Button>
            </section>

        </section>
        <hr/>
        </section>
        
        
    );
}

export default Navigation;