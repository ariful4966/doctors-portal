import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>4O4</h1>
            <h4>Your Page is not found</h4>
            <Link to="/">See our Homepage</Link>
        </div>
    );
};

export default NotFound;