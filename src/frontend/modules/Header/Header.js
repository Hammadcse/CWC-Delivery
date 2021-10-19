
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
                            <Link to="/g">
                                <img src={Logo} alt="Logo"/> 
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link to="/" className="active">Home</Nav.Link>
                                <Nav.Link to="/">About Us</Nav.Link>
                                <NavDropdown title="Services" id="collasible-nav-dropdown">
                                    <div className="row">
                                        <div className="mt-2 col-md-4 col-sm-6 col-6 px-0 text-center">
                                            <Link class="d-flex- flex-column" to="/">
                                                <img src={parcelImg} alt="Service"/><br/>
                                                <span>Parcel Delivery</span>
                                            </Link>
                                        </div>
                                        <div className="mt-2 col-md-4 col-sm-6 col-6 px-0 text-center">
                                            <Link class="d-flex- flex-column" to="/">
                                                <img src={warehousing} alt="Service"/><br/>
                                                <span>Warehousing</span>
                                            </Link>
                                        </div>
                                        <div className="mt-2 col-md-4 col-sm-6 col-6 px-0 text-center">
                                            <Link class="d-flex- flex-column" to="/">
                                                <img src={bulkImg} alt="Service"/><br/>
                                                <span>Bulk Shipment</span>
                                            </Link>
                                        </div>
                                        <div className="mt-2 col-md-4 col-sm-6 col-6 px-0 text-center">
                                            <Link class="d-flex- flex-column" to="/">
                                                <img src={logistics} alt="Service"/><br/>
                                                <span>Logistics Service</span>
                                            </Link>
                                        </div>
                                    </div>
                                </NavDropdown>
                                <Nav.Link to="/">Charges</Nav.Link>
                                <Nav.Link to="/">Log in</Nav.Link>
                                <Nav.Link to="/">BN</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        </header>
     );
}

export default Header;