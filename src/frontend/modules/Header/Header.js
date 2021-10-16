
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav} from 'react-bootstrap';
import '../../../dist/css/style.css';
import '../../../dist/css/responsive.css';


const Header = () => {

    return (
        <header id="header" className="header-main">
            <div className="container-fluid navbarWrap">
                <Navbar expand="lg">
                    <NavLink to="/home" className="logo">
                        {/* <img src={Logo} alt="Logo-img"/> */}
                    </NavLink>
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <ul className="primaryMenu">
                                <li><NavLink className="navItem" activeClassName="navItemActive" to="/">Home</NavLink></li>
                                <li><NavLink className="navItem" to="/About">About</NavLink></li>
                                <li><NavLink className="navItem" to="/partnerprofile">For Partners</NavLink></li>
                                <li className="dropdownWrap"><NavLink className="navItem" to="/">Log In</NavLink>
                                <ul className="submenu">
                                    <li><NavLink to="/partnerlogin">Partner</NavLink></li>
                                    <li><NavLink to="/customerlogin">Guests</NavLink></li>
                                </ul>
                                </li>
                            </ul>
                        </Nav>
                </Navbar>
                </div>
        </header>
     );
}

export default Header;