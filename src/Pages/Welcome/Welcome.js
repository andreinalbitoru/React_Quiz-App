// import { useState } from 'react';
// import { useEffect } from "react"
import {useHistory} from 'react-router'
import './Welcome.css';
import React from 'react'

const Welcome = () => {   

    const history = useHistory();

    const handleSubmit = () => {
        history.push('/home');
    }

    return (
        <div className="main-page">
           <span className="intuitive"> Intuitive <span className="name"> Quiz Hub</span></span>
           <p className="main-description"><span className="logo">Quiz Hub</span> is the perfect quiz game for having fun and learning new things at the same time! </p>
           <span className="reminder">This can take a few minutes...</span>
           <img src="/choose.svg" className="main-page-banner" alt="quiz app" />
           <button 
           onClick={handleSubmit}
           className="main-button"><span>Get Started</span>
           </button>
           
            
        </div>
    );
};

export default Welcome;


