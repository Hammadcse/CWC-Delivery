import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer id="footer">
        <div className="container-fluid footer-container">
            <div className="footer-top">
                <div className="row">
                    <div className="col-lg-5 col-md-6">
                        <div className="footer-widget logo-widget">
                            <Link to="/">
                                {/* <img src={Logo} alt="Logo-img"/> */}
                            </Link>
                            <div className="footer-social">
                                <ul className="social-list d-flex">
                                    <li><Link to="/"><i class="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-youtube"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-whatsapp"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-pinterest"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                        <div className="col-lg-4 col-md-6">
                        <div className="footer-widget">
                            <h3>About Chuzeday</h3>
                            <ul className="footer-link">
                                <li><Link to="/">Careers at</Link></li>
                                <li><Link to="/">Customer support</Link></li>
                                <li><Link to="/">Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-widget">
                            <h3>For business</h3>
                            <ul className="footer-link">
                                <li><Link to="/">For Partners</Link></li>
                                <li><Link to="/">Pricing</Link></li>
                                <li><Link to="/">Support for partners</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-widget">
                            <h3>Legal</h3>
                            <ul className="footer-link">
                                <li><Link to="/">Booking terms</Link></li>
                                <li><Link to="/">Privacy policy</Link></li>
                                <li><Link to="/">Website terms</Link></li>
                            </ul>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}
export default Footer;