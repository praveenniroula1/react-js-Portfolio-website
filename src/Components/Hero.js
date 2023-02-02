// import React from "react";
// import photo from "../img/photo.png";

// const Hero = () => {
//   return (
//     <div className="hero">
//       <div className="container mt-5">
//         <div className="row bg-opacity-50">
//           <div className="write col-md-7 text-center ">
//             Hi👋,
//             <div className="fs-2 fw-bolder">Praveen Niroula</div>
//             <p>
//               I am software engineer based in sydney. My background is Business
//               and Technology. I'm currently enrolled in Applied Blockchain
//               Technology as well. <br /> Basically, I am trying to combine the
//               business world with the technology by acquiring the skills.{" "}
//             </p>
//             <button type="button" className="btn btn-outline-danger">
//               Download Resume{" "}
//               <i className="fa-solid fa-download text-dark bg-warning"></i>
//             </button>
//           </div>
//           <div className="col-md-5 text-center">
//             <img
//               className="img"
//               src={photo}
//               width="100%"
//               height="300vh"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import Button from "react-bootstrap/Button";
import svg from "../img/svg.svg";
import logo from "../img/logo.jpg";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <div className="hero container text-light  d-flex justify-content-center">
      <div className="row container">
        <div className="content col-md-6 col-lg-6 col-sm-12">
          <h4>
            <TypeWriterEffect
              textStyle={{
                // fontFamily: "Red Hat Display",
                color: "",
                fontWeight: 500,
                fontSize: "1em",
              }}
              startDelay={1000}
              cursorColor="#3F3D56"
              multiText={["Hi! I Am,"]}
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
          <h5>
            {" "}
            <TypeWriterEffect
              textStyle={{
                // fontFamily: "Red Hat Display",
                fontWeight: 500,
                fontSize: "1.2em",
              }}
              startDelay={2000}
              cursorColor="#3F3D56"
              multiText={["I'm a:"]}
              multiTextDelay={1000}
              typeSpeed={30}
              repeat={true}
              hideCursorAfterText
            />
          </h5>
          <h4 className="effect">
            {" "}
            <Typewriter
              options={{
                strings: [
                  "</> Mern-Stack-Developer </>",
                  "</> React-JS-Developer </>",
                  "</> Web-Designer </>",
                  "</> Web-Developer </>",
                  "</> System Analyst </>",
                  "</> Web-Developer </>",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h4>
        </div>
        {/* two buttons here */}
        {/* <div className="btn">
        <Button variant="danger fs-4">
          Download Resume <i class="fa-solid fa-download"></i>
        </Button>{" "}
      </div> */}
        {/* <div className="mt-3 col-lg-6 col-md-4">
          <img
            src="https://media.giphy.com/media/7uDtQm2jKdS0VGLg46/giphy.gif"
            alt="gif"
          ></img>
        </div> */}

        <div className="col-md-5">
          <img className="img" src={svg} alt="logo"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
