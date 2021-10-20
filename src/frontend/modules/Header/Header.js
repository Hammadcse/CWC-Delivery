
import { Link } from "react-router-dom";
import {Navbar, Nav,NavDropdown} from 'react-bootstrap';
import Logo from '../../../dist/images/logo.png';
import parcelImg from '../../../dist/images/drop-shipping.png';
import warehousing from '../../../dist/images/warehouse.png';
import bulkImg from '../../../dist/images/bulk.png';
import logistics from '../../../dist/images/logistics.png';
import '../../../dist/css/style.css';
import '../../../dist/css/responsive.css';


const Header = () => {

    return (
        <header id="header" className="header-main">
            <div className="navbarWrap">
                <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className="p-0">
                    <div className="container-fluid px-3 px-md-5">
                        <Navbar.Brand>
                            <Link to="/">
                                <img src={Logo} alt="Logo"/> 
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about-us" className="nav-link">About Us</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <div className="row">
                                            <div className="mt-2 col-md-4 col-sm-6 col-6 px-0 text-center">
                                                <Link className="d-flex- flex-column" to="/">
                                                    <img src={parcelImg} alt="Service"/><br/>
                                                    <span>Parcel Delivery</span>
                                                </Link>
                                            </div>
                                            <div className="mt-2 col-md-4 col-sm-6 col-6 px-0 text-center">
                                                <Link className="d-flex- flex-column" to="/">
                                                    <img src={warehousing} alt="Service"/><br/>
                                                    <span>Warehousing</span>
                                                </Link>
                                            </div>
                                            <div className="mt-2 col-md-4 col-sm-6 col-6 px-0 text-center">
                                                <Link className="d-flex- flex-column" to="/">
                                                    <img src={bulkImg} alt="Service"/><br/>
                                                    <span>Bulk Shipment</span>
                                                </Link>
                                            </div>
                                            <div className="mt-2 col-md-4 col-sm-6 col-6 px-0 text-center">
                                                <Link className="d-flex- flex-column" to="/">
                                                    <img src={logistics} alt="Service"/><br/>
                                                    <span>Logistics Service</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/charges" className="nav-link">Charges</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Log in</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">BN</Link>
                                </li>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        </header>
     );
}

export default Header;