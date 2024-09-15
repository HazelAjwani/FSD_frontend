import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import './styles.css'; 

const Header = () => {
  return (
    <header className="header-container">
      <Navbar bg="light" expand="lg" className="py-2">
        <Container fluid>
          <Row className="w-100">
            <Col>
              <Navbar.Brand href="#">Connect</Navbar.Brand>
            </Col>

            <Col className="d-flex justify-content-end">
              <Nav>
                <NavDropdown title="Profile" id="profile-dropdown" alignRight>
                  <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Log Out</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;