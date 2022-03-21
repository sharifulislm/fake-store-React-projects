import React from 'react';
import './Manubar.css';

const Manubar = () => {
    return (
        <div>

<div className="container">
    <div className="row">
        <div className="col-md-2">logo </div>
        <div className="col-md-10 manu-container d-flex justify-content-end">
            <li>Home </li>
            <li>Contact </li>
            <li>Cart </li>
            <li>Login</li>

        </div>

    </div>


</div>
            
        </div>
    );
};

export default Manubar;