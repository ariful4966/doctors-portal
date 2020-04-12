import React from 'react';
import { Link } from 'react-router-dom';
import './SiteMenu.css';

const SiteMenu = () => {
    return (
        <nav className="navArea">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/dental">Dental Services</Link>
                </li>
                <li>
                    <Link to="/review">Reviews</Link>
                </li>
                
                <li>
                    <Link to="/doctor/dashboard">Doctor</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>

        </nav>
    );
};

export default SiteMenu;