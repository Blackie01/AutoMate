import React from 'react';
import Navigation from './Nav';
import './Homepage.css'
import jumboImage from '../assets/jumbo.jpg';
import Button from '@mui/material/Button';
import driverImage from '../assets/driver.jpg';


function Homepage () {
    
    return (
        <section>

            <section className='group-1-for-bg-color'>

                    
                    <Navigation />

                    <section className='hero'>
                        <section className='hero-text-area'>
                            <h2 className='jumbo-text'>Manage your fleet, <br/> like a pro.</h2>
                            <p>The number of vehicles don't matter, AutoMate provides all <br/> the tools you need to boost productivity</p>
                        
                            <section className='jumbo-buttons'>
                                <Button variant='outlined'>Get Started</Button>
                                <Button variant='contained'>Download App</Button>
                            </section>
                        </section>

                        <section className='hero-image'>
                            <img className='jumbo-image' src={jumboImage} alt='jumbo-Image'/>
                        </section>
                    </section>

            </section>


            <section className='hero-first-floor'>
                <section className='hero-first-floor-image'>
                    <img className='driver-image' src={driverImage} alt='driver-Image'/>
                </section>

               <aside>
                    <section>
                        <h2>Products & Services</h2>
                    </section>

                    <section>
                        <div>01</div>
                        <section>
                            
                        </section>
                    </section>
               </aside>

            </section>
        </section>
    );
}

export default Homepage;