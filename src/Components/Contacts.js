import React from "react";
import { Card } from "react-bootstrap";

const Contacts = () => {
  return (
    <div className="contacts container-fluid ">
      <h1 className="text-light text-align-center mt-3">
        You can contact me via:
      </h1>
      <Card>
        <ul className="contactlist   d-flex justify-content-center">
          <a
            className="app d-flex flex-column"
            href="https://www.facebook.com/praveen.niroula.9/"
            target="_blank"
          >
            {" "}
            <i class="bbb fb fa-brands fa-facebook text-primary"> </i>{" "}
          </a>

          <a href="https://www.instagram.com/praveen.niroula/" target="_blank">
            <i class="bbb insta fa-brands fa-instagram text-danger"></i>
          </a>
          <a href="mailto:praveenniroula1@gmail.com">
            <i class="bbb email fa-solid fa-envelope text-secondary"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/praveen-niroula-aa2b17215/"
            target="_blank"
          >
            <i class="bbb linkedin fa-brands fa-linkedin text-primary"></i>
          </a>
          <a href="https://github.com/praveenniroula1" target="_blank">
            <i class="bbb github fa-brands fa-github text-dark"></i>
          </a>
        </ul>
      </Card>
    </div>
  );
};

export default Contacts;
