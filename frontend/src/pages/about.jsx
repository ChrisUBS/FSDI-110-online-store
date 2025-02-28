import React, { useState } from 'react';
import './about.css';

function About() {

    const [showEmail, setShowEmail] = useState(false);

    function showInfo() {
        console.log('My email is christian.bonilla@uabc.edu.mx');
        setShowEmail(!showEmail);
    }

    return (
        <div className="about page">
            <h1 className='text-success'>Christian Bonilla</h1>
            { showEmail 
                ? <h5 className='mb-2'>christian.bonilla@uabc.edu.mx</h5>
                : <p className='mb-2'>Click the button bellow to see my email address.</p> 
            }
            <button className='btn btn-outline-dark' onClick={showInfo}>
                { showEmail ? 'Hide my email' : 'Show my email' }
            </button>
        </div>
    );
}

export default About;
