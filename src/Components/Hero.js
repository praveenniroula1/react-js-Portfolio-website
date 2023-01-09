import React from "react";
import photo from "../img/banner.png";
import vector1 from "../img/Vector1.png";
import vector2 from "../img/Vector2.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Hero = () => {
  return (
    <div className="card1 container">
      <Card className="card2" style={{ width: "25rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text className="i-name">
            {/* Hy! I Am
            <span></span>
            <Card.Title>Praveen Niroula</Card.Title>
            <span>
              Full-Stack-Developer with high level of experience in web
              designing and development.
            </span> */}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="card2 order-md-2" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>

    // <div className="intro d-flex  container ">
    //   {/* left */}
    //

    //   {/* right */}
  );
};
// };<div className="i-left">
//     <div className="i-name">
//       <span>Hy! I Am</span>
//       <span>Praveen Niroula</span>
//       <span>
//         Full-Stack-Developer with high level of experience in web designing
//         and development.
//       </span>
//     </div>
//   </div>
//   <div className="i-right order-md-2">
//     <img src={vector1} alt="" />
//     <img src={vector2} alt="" />
//     <img className="imgg" src={photo} alt="" />
//   </div>
// </div>
