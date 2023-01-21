import React from "react";
import { Button, Card } from "react-bootstrap";
import calc from "../Components/projects-image/calc.jpg";
import lovecalc from "../Components/projects-image/loveCalc.jpg";
import todo from "../Components/projects-image/todo.jpg";
import dkt from "../Components/projects-image/dkt.jpg";
import banner from "../img/banner.png";

const Project = () => {
  return (
    <div className="project container">
      <h1 className="text-light text-align-center ">
        Projects I've made:
        <div className="line"></div>
      </h1>{" "}
      <div className="cards row  ">
        {" "}
        <Card className="card2 col-lg-4">
          <Card.Img className="calc card " src={calc} />
          <Card.Body className="text">
            <Card.Title className="fs-1">Calculator</Card.Title>
            <Card.Text>
              This app has been made with HTML, CSS and Raw JavaScript.
            </Card.Text>
            <Button variant="dark">
              {" "}
              <a href="https://lnkd.in/gQ8M-Ajk">L i v e</a>
            </Button>
            <Button variant="dark">
              <a href="https://github.com/praveenniroula1/JS-Calculator">
                GitHub Code
              </a>
            </Button>
          </Card.Body>
        </Card>
        <Card className="card2 col-lg-4">
          <Card.Img className="calc card " src={lovecalc} />
          <Card.Body className="text">
            <Card.Title className="fs-1">Love-Calculator</Card.Title>
            <Card.Text>
              This app has been made with HTML, CSS and Raw JavaScript.
            </Card.Text>
            <Button variant="dark">
              {" "}
              <a href="https://lnkd.in/gZ7-xk2P">L i v e</a>
            </Button>
            <Button variant="dark">
              <a href="https://github.com/praveenniroula1/practiceLoveCalculatorResponsive">
                GitHub Code
              </a>
            </Button>
          </Card.Body>
        </Card>
        <Card className="card2 col-lg-4">
          <Card.Img className="calc card mt-3" src={todo} />
          <Card.Body className="text">
            <Card.Title className="fs-1">Activity-Tracker-App</Card.Title>
            <Card.Text>
              This app has been made with HTML, CSS and Raw JavaScript.
            </Card.Text>
            <Button variant="dark">
              {" "}
              <a href="https://lnkd.in/g-VZ8_3N">L i v e</a>
            </Button>
            <Button variant="dark">
              <a href="https://github.com/praveenniroula1/js-not-to-do-list">
                GitHub Code
              </a>
            </Button>
          </Card.Body>
        </Card>
        <Card className="card2 col-lg-4 mt-1">
          <Card.Img className="calc card mt-3" src={dkt} />
          <Card.Body className="text">
            <Card.Title className="fs-1">DKT-Practice-Test</Card.Title>
            <Card.Text>
              This app has been made with HTML, CSS and Raw JavaScript.
            </Card.Text>
            <Button variant="dark">
              {" "}
              <a href="https://lnkd.in/gQHb8w3P">L i v e</a>
            </Button>
            <Button variant="dark">
              <a href="https://github.com/praveenniroula1/DktPracticeSet">
                GitHub Code
              </a>
            </Button>
          </Card.Body>
        </Card>
        <Card className="card2 col-lg-4 mt-1">
          <Card.Img className="calc card mt-3" src={banner} />
          <Card.Body className="text">
            <Card.Title className="fs-1">DKT-Practice-Test</Card.Title>
            <Card.Text>
              This app has been made with HTML, CSS and Raw JavaScript.
            </Card.Text>
            <Button variant="dark">
              {" "}
              <a href="https://lnkd.in/gQHb8w3P">L i v e</a>
            </Button>
            <Button variant="dark">
              <a href="https://github.com/praveenniroula1/DktPracticeSet">
                GitHub Code
              </a>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Project;
