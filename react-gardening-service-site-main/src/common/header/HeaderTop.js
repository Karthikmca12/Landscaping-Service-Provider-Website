import React from 'react';
import { FaPhoneAlt, FaClock } from 'react-icons/fa';

const HeaderTop = () => {
    return (
        <div className="header-top pt-15 pb-15 bg-1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                        <div className="header-info">
                            <ul>
                                <li>
                                    <FaPhoneAlt /> Call Us on : (+91) 92844 97492
                                </li>
                                <li>
                                    <FaClock /> Open Hours : Mon-Sat (08:00 - 18:00)
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="header-social text-center text-xl-end text-lg-end">
                            <a href="https://www.facebook.com">Facebook</a>
                            <a href="https://www.twitter.com">Twitter</a>
                            <a href="https://www.instagram.com">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;