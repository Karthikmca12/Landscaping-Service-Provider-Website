import React from 'react';
import {Link} from 'react-router-dom';
import FooterBG from '../../assets/images/image.jpg';
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaAngleDoubleRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-top bg-property theme-bg-2 pt-110 pb-80" style={{ backgroundImage: `url(${FooterBG})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget-1">
                                    <div className="footer-title">
                                        <h4>Contact Us</h4>
                                    </div>
                                    <div className="footer-text">
                                        <p>If you have any questions or need help, feel free to contact with our team.</p>
                                    </div>
                                    <div className="footer-info">
                                        <Link to="/"><FaPhoneAlt /> (+91) 92844 97492</Link>
                                    </div>
                                    <div className="footer-text">
                                        <p>New Opera, Mumbai</p>
                                    </div>
                                    <div className="footer-info">
                                        <p><FaPhoneAlt /> Get Directions</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-widget-2">
                                    <div className="footer-title">
                                        <h4>Quick Links</h4>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/contact">Contact Us</Link></li>
                                            <li><Link to="/about">Team</Link></li>
                                            <li><Link to="/services">Our Services</Link></li>
                                            <li><Link to="/projects">Our Project</Link></li>
                                            <li><Link to="/about">About Company</Link></li>
                                            <li><Link to="/faq">News Update</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-widget-3">
                                    <div className="footer-title">
                                        <h4>Our Services</h4>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/services">Landscaping</Link></li>
                                            <li><Link to="/services">Plant Growing</Link></li>
                                            <li><Link to="/services">Branch Cutting</Link></li>
                                            <li><Link to="/services">Flower Scaping</Link></li>
                                            <li><Link to="/services">Tree Planting</Link></li>
                                            <li><Link to="/services">Rubbish Removal</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget-4">
                                    <div className="footer-title">
                                        <h4>Newsletter</h4>
                                    </div>
                                    <div className="footer-text">
                                        <p>Established since 2000. Landscaping Company in India.</p>
                                    </div>
                                    <div className="footer-social mt-35">
                                        <h5>Folllow Us:</h5>
                                        <ul>
                                            <li><a href="https://www.facebook.com"><FaFacebookF /></a></li>
                                            <li><Link to="https://www.twitter.com"><FaTwitter /></Link></li>
                                            <li><Link to="https://www.instagram.com"><FaInstagram /></Link></li>
                                            <li><Link to="https://www.pinterest.com"><FaPinterestP /></Link></li>
                                        </ul>
                                    </div>
                                    <div className="footer-newsletter mt-40">
                                        <input type="text" placeholder="Email Address" />
                                        <button><FaAngleDoubleRight /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom bg-1 pt-40 pb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="copyright">
                                    <p>© 2023 Gardeners All right reserved. Developed by Rohit Ranjan.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 text-xl-end text-lg-end text-md-end text-center">
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link to="/">About Gardeners</Link></li>
                                        <li><Link to="/">Careers</Link></li>
                                        <li><Link to="/">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;