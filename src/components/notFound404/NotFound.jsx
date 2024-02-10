import React from 'react';


const NotFound = () => {
    return (
        <div className="container">
            <div className="header">
                <h1>404</h1>
                <p>Oops! The page you're looking for cannot be found.</p>
            </div>
            <div className="content">
                <h2>We're sorry, but the page you requested is not available.</h2>
                <p>It may have been moved, deleted, or never existed. Please check the URL or try searching for the content you're looking for.</p>
                <div className="buttons">
                    <a href="/">Go back to the homepage</a>
                    <a href="/contact">Contact us</a>
                </div>
            </div>
        </div>
    );
};

export default NotFound;