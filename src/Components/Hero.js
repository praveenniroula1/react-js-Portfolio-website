import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoo from "../img/logoo.png";
const Hero = () => {
  return (
    <div>
      {/* nav */}
      <Navbar>
        <Container>
          <span>
            <i class="fa-solid fa-bars text-light fs-1"></i>{" "}
            <img className="img" src={logoo} alt="" />{" "}
          </span>
          <Nav className="nav-text ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Hero;
