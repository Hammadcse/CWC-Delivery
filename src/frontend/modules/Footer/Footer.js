import React from 'react';
import { Link } from "react-router-dom";
import FooterLogo from '../../../dist/images/logo.png'
import FooterIcon from '../../../dist/images/logo-icon.png'


const Footer = () => {
    return (
        <footer id="footer">
        <div className="container footer-container">
            <div className="footer-top">
                    <div className="row footer-top-row1">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="footer-widget">
                                    <h3>About CWE </h3>
                                    <ul className="footer-link">
                                        <li><Link to="/">Careers at</Link></li>
                                        <li><Link to="/">Customer support</Link></li>
                                        <li><Link to="/">Blog</Link></li>
                                            <li><Link to="/">Careers at</Link></li>
                                            <li><Link to="/">Customer support</Link></li>
                                            <li><Link to="/">Blog</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-widget">
                                    <h3 className="hide">service</h3>
                                    <ul className="footer-link">
                                            <li><Link to="/">Booking terms</Link></li>
                                            <li><Link to="/">Privacy policy</Link></li>
                                            <li><Link to="/">Website terms</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="footer-widget">
                                        <h3>Services</h3>
                                        <ul className="footer-link">
                                            <li><Link to="/">Parcel Delivery</Link></li>
                                            <li><Link to="/">Warehousing</Link></li>
                                            <li><Link to="/">Bulk Shipment</Link></li>
                                            <li><Link to="/">Line Houl</Link></li>
                                            <li><Link to="/">Logistics Services</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="footer-widget">
                                        <h3 className="hide">service</h3>
                                        <ul className="footer-link">
                                            <li><Link to="/">Logistics Services</Link></li>
                                            <li><Link to="/">Customizable Solution</Link></li>
                                            <li><Link to="/">Line Houl</Link></li>
                                            <li><Link to="/">Warehousing</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="row footer-top-row2">
                        <div className="col-md-6">
                            <ul className="left-inner d-flex align-items-center justify-content-between">
                                <li><Link to="/"><img src={FooterLogo} alt="logo" /></Link></li>
                                <li className="d-flex align-items-center">
                                    <span>Call Us:</span>
                                    <Link>0170000000</Link>
                                </li>
                                <li className="d-flex align-items-center">
                                    <span>Email:</span>
                                    <Link>CWC@gmail.com</Link>
                                </li>
                            </ul>
                        </div>
                    <div className="col-md-6">
                            <div className="right-inner d-flex align-items-center justify-content-between">
                            <Link to="/"><img src={FooterIcon} alt="img" /></Link>
                            <ul className="footer-social d-flex align-items-center">
                                <li><Link to="/"><i className="fab fa-facebook"></i></Link></li>
                                <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                                <li><Link to="/"><i className="fab fa-linkedin"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom d-flex align-items-center justify-content-center">
                <span>Copyright <span className="cpy-symbol">&copy;</span> 2021 CWC. All rights reserved.</span>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Terms and Condition</Link>
            </div>
        </div>
    </footer>
    );
}
export default Footer;