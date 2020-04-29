import React from 'react';
import { Link } from 'react-router-dom';

export default () => (

    <div className="bounds">
        <React.Fragment>
            <Link className="button button-secondary" to="/">Return to list</Link>
        </React.Fragment>
        <h1>Not Found</h1>
        <p>Sorry! It looks like the page you are looking for doesn't exist.</p>
    </div>
);