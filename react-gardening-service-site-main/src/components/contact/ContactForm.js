import React from 'react';
import {Link} from 'react-router-dom';
import { FaArrowRight, FaHeadphones, FaEnvelopeOpen, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactForm = () => {
    return (
        <>
            <div className="contact-area white-bg pt-110 pb-110">
                <div className="container">
                    <div className="box-shadow-3 pt-60 pb-60 pl-80 pr-80">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-form pr-70">
                                    <div className="section-title mb-40">
                                        <span>Need Our Service Or Have Queries</span>
                                        <h2>Send Us Message.</h2>
                                    </div>
                                    {/* <form method="POST" action="/submit-form">
                                        <input type="text" name="name" placeholder="Your Name" />
                                        <input type="number" name="number" placeholder="Your Phone Number" />
                                        <input type="text" name="subject" placeholder="Your Subject" />
                                        <textarea name="message" placeholder="Write Message Here"></textarea>
                                        <button className="l-btn" type="submit">Send Message <FaArrowRight /></button>
                                    </form> */}

                                    <form action="/ack">
                                        <input type="text" placeholder="Your Name" />
                                        <input type="number" placeholder="Your Phone Number" />
                                        <input type="text" placeholder="Your Subject" />
                                        <textarea placeholder="Write Message Here"></textarea>
                                        <button className="l-btn">Send Message <FaArrowRight /></button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-box bg-1 pt-60 pb-35 pl-35 pr-35 mr-40">
                                    <span>Gardening Excellence!</span>
                                    <h3>Expanded Gardening <br /> Services Fits All needs!</h3>
                                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms </p>
                                    <ul className="mt-40">
                                        <li><FaHeadphones /><span>Emergency Line: <Link to="/">(+91) 92844 97492</Link></span></li>
                                        <li><FaEnvelopeOpen /><span>Our Email: <Link to="/">TheGardener@gmail.com</Link></span></li>
                                        <li><FaMapMarkerAlt /><span>Location: New Opera, Mumbai</span></li>
                                        <li><FaClock /><span>Mon - Fri: 8:00 am - 7:00 pm</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="social-btn-area pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <Link to="/" className="l-btn">Facebook</Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <Link to="/" className="l-btn">Twitter</Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <Link to="/" className="l-btn">Instagram</Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <Link to="/" className="l-btn">Pinterest</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm;