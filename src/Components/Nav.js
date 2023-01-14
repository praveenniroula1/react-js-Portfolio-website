import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <div>
      {" "}
      <Navbar className="fs-4" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <span className="fs-2  text-light">Praveen</span>{" "}
            <span className="text-warning fs-2">Niroula</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav bg-dark "
            className="aaa text-light bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav ">
            <div className="check">
              {" "}
              <Nav className="ms-auto align-text-center ">
                <Nav.Link className="aaa text-light " href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className="aaa text-light" href="#home">
                  Skills
                </Nav.Link>

                <Nav.Link className="aaa text-light" href="#home">
                  Projects
                </Nav.Link>
                <Nav.Link className="aaa text-light" href="#home">
                  About
                </Nav.Link>

                <Nav.Link className="aaa text-light" href="#home">
                  Contact
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
