import React from 'react';
import './testimonials.css';

function Testimonials () {

    const testimoniesObject = [

{
    user1: {
        name: 'Vivian Ikpeba',
        company: 'ODY Logistics',
        userImage: '',
        position: 'Head of Operations',
        words: 'AutoMate has transformed our operations by optimizing routes and reducing fuel consumption, resulting in significant cost savings.'
    }

},

{
    user2: {
        name: 'Gbenga Ogunmade',
        company: 'Gbenga Motors',
        userImage: '',
        position: 'CEO',
        words: 'With AutoMate real-time vehicle tracking, we are able to monitor our fleet performance and ensure on-time deliveries.'
    }
},

{
    user3: {
        name: 'Godwin John',
        company: 'Bolton White Hotels',
        userImage: '',
        position: 'Fleet Manager',
        words: 'AutoMate maintenance scheduling feature has helped us streamline our maintenance processes and minimize downtime'
    }
},

{
    user4: {
        name: 'Adedoyin Gold',
        company: 'Motive Cars',
        userImage: '',
        position: 'Domestic Fleet Coord',
        words: 'AutoMate driver safety monitoring has helped us improve driver behavior and reduce the risk of accidents'
    }
},

{
    user5: {
        name: 'Gabriel Thompson',
        company: 'Julius Berger',
        userImage: '',
        position: 'Head of Logistics',
        words: 'Thanks to AutoMate customizable reporting, we are able to access detailed fleet analytics and make informed decisions.'
    }
},

{
    user6: {
        name: 'Lois Lane',
        company: 'Transformers Ltd.',
        userImage: '',
        position: 'CEO',
        words: 'The AutoMate automated dispatch system has enabled us to efficiently assign tasks to our drivers and improve overall fleet productivity.'
    }
} 

]



    return (
        <main className='container'>

            <div className='title'>
                <h2>How clients use AutoMate for<br></br> better efficiency.</h2>
            </div>

            <section>
                
            </section>

        </main>
    )
}

export default Testimonials;