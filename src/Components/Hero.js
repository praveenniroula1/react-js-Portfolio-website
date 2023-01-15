import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import Button from "react-bootstrap/Button";

const Hero = () => {
  return (
    <div className="hero container text-light bg-dark">
      <div className="content">
        <h4>
          {" "}
          <TypeWriterEffect
            textStyle={{
              // fontFamily: "Red Hat Display",
              color: "white",
              fontWeight: 500,
              fontSize: "1em",
            }}
            startDelay={1000}
            cursorColor="#3F3D56"
            multiText={["Hi! I AM,"]}
            multiTextDelay={1000}
            typeSpeed={30}
            hideCursorAfterText
          />
        </h4>
        <h1>
          {" "}
          <TypeWriterEffect
            textStyle={{
              // fontFamily: "Red Hat Display",
              color: "orange",
              fontWeight: 500,
              // fontSize: "1.5em",
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={["Praveen Niroula"]}
            multiTextDelay={1000}
            typeSpeed={30}
            repeat={true}
            hideCursorAfterText
          />
        </h1>
        <h4 className="">
          {" "}
          <TypeWriterEffect
            textStyle={{
              // fontFamily: "Red Hat Display",
              color: "white",
              fontWeight: 500,
              fontSize: "0.9em",
            }}
            startDelay={3000}
            cursorColor="#3F3D56"
            multiText={["</> Mern-Stack-Developer </>"]}
            multiTextDelay={1000}
            typeSpeed={30}
            repeat={true}
            hideCursorAfterText
          />
        </h4>
      </div>
      {/* two buttons here */}
      <div className="btn">
        <Button variant="danger fs-4">
          Download Resume <i class="fa-solid fa-download"></i>
        </Button>{" "}
      </div>
      <div>
        <img
          src="https://media.giphy.com/media/7uDtQm2jKdS0VGLg46/giphy.gif"
          alt="gif"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
