import React from 'react';
import './testimonials.css';

function Testimonials () {

    const testimoniesObject = [

{
    user1: {
        name: 'Vivian Ikpeba',
        company: 'Operations Head, ODY Logistics',
        userImage: '',
        starRating: '',
        words: ''
    }

},

{
    user2: {
        name: 'Gbenga Ogunmade',
        company: 'CEO, Gbenga Motors',
        userImage: '',
        starRating: '',
        words: ''
    }
},

{
    user3: {
        name: 'Godwin John',
        company: 'Logistics, Bolton White Hotels',
        userImage: '',
        starRating: '',
        words: ''
    }
},

{
    user4: {
        name: 'Adedoyin Gold',
        company: 'CFO, Motive Cars',
        userImage: '',
        starRating: '',
        words: ''
    }
},

{
    user5: {
        name: 'Gabriel Thompson',
        company: 'Logistics Head, Julius Berger',
        userImage: '',
        starRating: '',
        words: ''
    }
},

{
    user6: {
        name: 'Lois Lane',
        company: 'CEO, Transformers Ltd.',
        userImage: '',
        starRating: '',
        words: ''
    }
} 

]



    return (
        <main className='container'>

            <div className='title'>
                <h2>How clients use AutoMate for<br></br> better efficiency.</h2>
            </div>

        </main>
    )
}

export default Testimonials;