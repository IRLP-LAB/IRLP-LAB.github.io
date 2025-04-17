import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles';
import logo from '../../assets/logo-blue.png';

const Header = () => {
    return (
        <Navbar expand="lg" style={{ backgroundColor: '#d1f6ff' }}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-1" />
                <Navbar.Brand 
                    as={Link} 
                    to="/home" 
                    className="order-2 d-none d-md-block" 
                    style={styles.navbarBrand}
                >
                    {/* <img 
                        src={logo} 
                        alt="IRLP Lab Logo" 
                        style={{ height: '80px' }}
                    /> */}
                    <strong>IRLP Lab</strong>
                </Navbar.Brand>
                <Navbar.Brand 
                    as={Link} 
                    to="/home" 
                    className="order-2 d-block d-md-none" 
                    style={styles.navbarBrandMobile}
                >
                    <img 
                        src={logo} 
                        alt="IRLP Lab Logo" 
                        style={{ height: '30px' }}
                    />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className="order-3">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home" style={styles.navLink}>Home</Nav.Link>
                        <NavDropdown title="People" id="people-dropdown" style={styles.navLink}>
                            <NavDropdown.Item as={Link} to="/people/current">Current</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/people/alumni">Alumni</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Research" id="research-dropdown" style={styles.navLink}>
                            <NavDropdown.Item as={Link} to="/research/projects">Projects</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/research/resources">Resources</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Affairs" id="affairs-dropdown" style={styles.navLink}>
                            <NavDropdown.Item as={Link} to="/events">Events</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/gallery">Gallery</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/media-coverage">Media Coverage</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/publications" style={styles.navLink}>Publications</Nav.Link>
                        <Nav.Link as={Link} to="/contact" style={styles.navLink}>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
