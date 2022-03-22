import React from 'react';
import './Manubar.css';

const Manubar = (props) => {
    return (
        <div>

<div className="container">
    <div className="row">
        <div className="col-md-2">logo </div>
        <div className="col-md-10 manu-container d-flex justify-content-end">
            <li className='me-4 p2'>Home </li>
            <li className='me-4 p2'>Contact </li>
            <li className='me-4 p2'>Cart <sub className='pb-2'>{props.count}</sub> </li>
            <li className='me-4 p2'>Login</li>

        </div>

    </div>


</div>
            
        </div>
    );
};

export default Manubar;