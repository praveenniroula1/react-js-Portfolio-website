import React from "react";
import banner from "../img/banner.png";
import Vector2 from "../img/Vector2.png";

const Hero = () => {
  return (
    <div className="hero row d-flex justify-content-center align-items-center">
      <div className="text  col-md d-flex justify-content-center align-items-center">
        <span className="fs-2">Hi! I Am</span>
        <h1 className="text-warning">Praveen Niroula</h1>
        <h3 className="details">
          I am software engineer based in sydney. My background is Business and
          Tech.
        </h3>
      </div>
      <div className="photo col-md-3 ">
        <img class="imggg1 order-md-1" src={Vector2} alt=""></img>
        <img class="imggg order-md-1" src={banner} alt=""></img>
      </div>
    </div>
  );
};

export default Hero;
