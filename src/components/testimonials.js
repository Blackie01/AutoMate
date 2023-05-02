import React from 'react';
import './testimonials.css';
import vivian from '../assets/vivian.jpg'
import gbenga from '../assets/gbenga.jpg'
import godwin from '../assets/godwin.jpg'
import adedoyin from '../assets/adedoyin.jpg'
import gabriel from '../assets/gabriel.jpg'
import lois from '../assets/lois.jpg'

function Testimonials () {

    const users = [

{
        name: 'Vivian Ikpeba',
        company: 'ODY Logistics',
        userImage: vivian,
        position: 'Head of Operations',
        words: 'AutoMate has transformed our operations by optimizing routes and reducing fuel consumption, resulting in significant cost savings.'
},

{
        name: 'Gbenga Ogunmade',
        company: 'Gbenga Motors',
        userImage: gbenga,
        position: 'CEO',
        words: 'With AutoMate real-time vehicle tracking, we are able to monitor our fleet performance and ensure on-time deliveries.'
},

{
        name: 'Godwin John',
        company: 'Bolton White Hotels',
        userImage: godwin,
        position: 'Fleet Manager',
        words: 'AutoMate maintenance scheduling feature has helped us streamline our maintenance processes and minimize downtime'
},

{
        name: 'Adedoyin Gold',
        company: 'Motive Cars',
        userImage: adedoyin,
        position: 'Domestic Fleet Coord',
        words: 'AutoMate driver safety monitoring has helped us improve driver behavior and reduce the risk of accidents'
},

{
        name: 'Gabriel Thompson',
        company: 'Julius Berger',
        userImage: gabriel,
        position: 'Head of Logistics',
        words: 'Thanks to AutoMate customizable reporting, we are able to access detailed fleet analytics and make informed decisions.'
},

{
        name: 'Lois Lane',
        company: 'Transformers Ltd.',
        userImage: lois,
        position: 'CEO',
        words: 'The AutoMate automated dispatch system has enabled us to efficiently assign tasks to our drivers and improve overall fleet productivity.'
} 

]

    const reviewCard = users.map(user  => {

        return (
            <div>
            <h2 className='company'>{user.company}</h2>
        </div>

        )
       
    })


    return (
        <main className='container'>

            <div className='title'>
                <h2>How clients use AutoMate for<br></br> better efficiency.</h2>
            </div>

            <section className='review-container'>
                {reviewCard}
            </section>

        </main>
    )
}

export default Testimonials;