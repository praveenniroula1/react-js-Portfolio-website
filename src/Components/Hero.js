import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoo from "../img/logoo.png";
import logo from "../img/logo.jpg";
import photo from "../img/photo.png";
const Hero = () => {
  return (
    <div className="top">
      {/* nav */}
      <Navbar variant="dark">
        <Container>
          <Nav className="nav-text ">
            <span className="nav-left">
              <i class="fa-solid fa-computer text-warning fs-2 m-3">
                {"  "} {"  "}W e l c o m e!!!
              </i>{" "}
            </span>
            <Nav.Link className="text-light" href="#home ">
              Home
            </Nav.Link>
            <Nav.Link className="text-light" href="#features">
              Skills
            </Nav.Link>
            <Nav.Link className="text-light" href="#pricing">
              Projects
            </Nav.Link>
            <Nav.Link className="text-light" href="#pricing">
              About
            </Nav.Link>
            <Nav.Link className="text-light" href="#pricing">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="hero mt-4">
        <div className="slogan fs-5 p-4 mb-4">
          <img className="img" src={logoo} alt="" />{" "}
          <p>
            As per Statistics, The best programmer in the world came from
            different field and doing really well!!!
          </p>
          <p>
            As per Statistics, The best programmer in the world came from
            different field and doing really well!!!
          </p>
          <p>I am on the journey to become the next!!!</p>
        </div>

        <div className="slogan2 fs-5">
          <p>Hi! I AM</p>
          <p className="name fs-1">Praveen Niroula</p>
          <p>
            I am a Full-Stack Software developer with high level of experience
            in web development.
          </p>
        </div>
        <div className="white d-flex justify-content-center align-items-center ">
          <span className="a bg-light"></span>{" "}
          <span className="b bg-light"></span>{" "}
          <span className="c bg-light"></span>{" "}
        </div>
        <div className="hero-img">
          <img className="img2" src={logo} width="100%" alt="" />
          <img className="img1" src={photo} width="100%" alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
