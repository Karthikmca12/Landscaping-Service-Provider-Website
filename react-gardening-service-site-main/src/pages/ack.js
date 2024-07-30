import React from 'react';
import { Link } from 'react-router-dom';
// import HeaderTop from '../common/header/HeaderTop';
// import HeaderBottomOne from '../common/header/HeaderBottomOne';

const Ack = () => {
    return (
        <>
            <div className='ac'>                   
                <h1>Thank you.</h1>
                <h3>You will get a call from our executives soon.</h3>
                <div className="header-btn">
                    <Link to="/" className="l-btn">Home</Link>
                </div>       
            </div>
        </>
    )
} 

export default Ack;