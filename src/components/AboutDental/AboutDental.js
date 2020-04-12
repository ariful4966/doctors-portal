import React from 'react';
import { Link } from 'react-router-dom';

import './AboutDental.css'

const AboutDental = () => {
    return (
        <div className="aboutDental">
            <h1>Your New Simple Start Hear</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sed explicabo id blanditiis, nemo nulla voluptatum omnis magnam, porro a veniam aut facere velit? Aspernatur enim dolore deleniti saepe esse.</p>
            <button className="doctorBg btnDoctor" ><Link className="linkColor" to="/appointment">Get Appointment</Link></button>
        </div>

    );
};

export default AboutDental;