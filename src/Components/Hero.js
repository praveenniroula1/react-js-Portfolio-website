import React from "react";
import photo from "../img/banner.png";
import vector1 from "../img/Vector1.png";
import vector2 from "../img/Vector2.png";

export const Hero = () => {
  return (
    <div className="intro  container ">
      {/* left */}
      <div className="i-left  ">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Praveen Niroula</span>
          <span>
            Full-Stack-Developer with high level of experience in web designing
            and development.
          </span>
        </div>
      </div>

      {/* right */}

      <div className="i-right  ">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img className="imgg" src={photo} alt="" />
      </div>
    </div>
  );
};
