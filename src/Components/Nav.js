import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Navigate } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
      {" "}
      <Navbar className="navbar fs-4" expand="lg">
        <Container>
          <Navbar.Brand to="#home">
            <Link to="/" className="fixing">
              <a class="fa-solid fa-child text-warning fs-1"></a>{" "}
              <span className="fs-2 text-light">Praveen</span>{" "}
              <span className="text-warning fs-2">Niroula</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav bg-dark "
            className="aaa text-light bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav ">
            <div className="check">
              {" "}
              <Nav className="ms-auto align-text-center mt-4">
                <Link className="aaa text-light container" to="/">
                  Home
                </Link>
                <Link className="aaa text-light container" to="/Skills">
                  Skills
                </Link>
                <Link className="aaa text-light container" to="/Project">
                  Projects
                </Link>
                <Link className="aaa text-light container" to="/Contacts">
                  Contact
                </Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
