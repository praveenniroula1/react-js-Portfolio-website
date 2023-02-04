import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import svg from "../img/skil.svg";

const Skills = () => {
  return (
    <div className="skills container ">
      <h1 className="text-light text-align-center ">
        Technologies I'm Familiar with:
        <div className="line"></div>
      </h1>
      <div className="logo container ">
        <img className="imgg " src={svg} alt="logo"></img>

        <Card className="card2 container ">
          <Card.Body>
            {/* <Card.Title>HTML5</Card.Title> */}
            <Card.Text className="fs-4 container">
              <i class="qqq item1 htmll fa-brands fa-html5 "> HTML5</i>
              <i class="qqq item2 react fa-brands fa-react "> React JS</i>
              <i class="qqq item3 css fa-brands fa-css3-alt "> CSS3</i>
              <i class="qqq item4 js fa-brands fa-js"> javaScript</i>
              <i class="qqq item5 bootstrap fa-brands fa-bootstrap">
                {" "}
                BootStrap
              </i>
              <i class="qqq item6 npm fa-brands fa-npm"> N P M</i>
              <i class="qqq item7  node fa-brands fa-node"> Node-JS</i>
              <i class="qqq item8 figma fa-brands fa-figma"> Figma</i>
              <i class="qqq item9 vscode fa-solid fa-code"> Vs Code</i>
              <i class="qqq item10 git fa-brands fa-github"> GitHub</i>
            </Card.Text>
          </Card.Body>
        </Card>
        {/* <ul className="row fs-3">
          <li className="col-sm-6 col-lg-3">
            <i class="qqq htmll fa-brands fa-html5 "> HTML5</i>
          </li>
          <li className="col-sm-6 col-lg-3">
            <i class="qqq css fa-brands fa-css3-alt "> CSS3</i>
          </li>
          <li className="col-sm-6 col-md-6 col-lg-3">
         
          </li>
          <li className="col-sm-6 col-md-6 col-lg-3">
          </li>
          <li className="col-sm-6 col-md-6 col-lg-3">
          </li> */}
        {/*<li className="col-sm-6 col-lg-4">
          </li>
          <li className="col-sm-6 col-lg-4">
          </li>
          <li className="col-sm-6 col-lg-4">
          </li>
          <li className="col-sm-6 col-lg-4">
          </li>
          <li className="col-sm-6 col-lg-4">
          </li> */}
        {/* </ul> */}
      </div>
    </div>
  );
};

export default Skills;
