import React from "react";

const Skills = () => {
  return (
    <div className="skills container">
      <h1 className="text-light text-align-center ">
        Technologies I'm Familiar with:
        <div className="line"></div>
      </h1>
      <div className="logo container mt-5">
        <ul className="row fs-1">
          <li className="col-sm-12 col-lg-4">
            <i class="htmll fa-brands fa-html5 "> HTML5</i>
          </li>
          <li className="col-sm-6 col-lg-4">
            <i class="css fa-brands fa-css3-alt"> CSS3</i>
          </li>
          <li className="col-sm-6 col-lg-4">
            <i class="js fa-brands fa-js"> javaScript</i>
          </li>
          <li className="col-sm-6 col-lg-4">
            <i class="react fa-brands fa-react"> React JS</i>
          </li>
          <li className="col-sm-6 col-lg-4">
            <i class="node fa-brands fa-node"> Node-JS</i>
          </li>
          <li className="col-sm-6 col-lg-4">
            <i class="bootstrap fa-brands fa-bootstrap"> BootStrap</i>
          </li>
          <li className="col-sm-6 col-lg-4">
            <i class="figma fa-brands fa-figma"> Figma</i>
          </li>
          <li className="col-sm-6 col-lg-4">
            <i class="vscode fa-solid fa-code"> Vs Code</i>
          </li>
          <li className="col-sm-6 col-lg-4">
            <i class="npm fa-brands fa-npm"> NPM</i>
          </li>
          <li className="col-sm-6 col-lg-4">
            <i class="git fa-brands fa-github"> GitHub</i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
