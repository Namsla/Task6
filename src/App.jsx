import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const employeeNames = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Suren",
    "Avrin",
    "Sayjen",
  ];

  let listingArray = [];
  for (let i = 0; i < employeeNames.length; i++) {
    listingArray[i] = <li>{employeeNames[i]}</li>;
  }

  return (
    <>
      <div className="mainContainer">
        <header>
          <h1>Welcome to Namkhang's Moving Company</h1>
          <img
            src="data:image/jpeg;base64,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"
            alt="truck"
          />
        </header>
        <div className="topBar">
          <ul>
            <li>
              <a href="https://www.uhaul.com/About/History/"> History</a>
            </li>

            <li>
              <a href="https://www.uhaul.com/Locations/New-York/">Location</a>
            </li>

            <li>
              <a href="https://sixads.net/blog/testimonial-examples/">
                Testimonial
              </a>
            </li>

            <li>
              <a href="https://www.upack.com/?&refnum=google&c=Campaign%5F8S&g=MOVING%5FINDIANA%5FPHRASEm=p&k=in%20moving%20services&ad=581725223502&gad=1&gclid=Cj0KCQjwjryjBhD0ARIsAMLvnF-RBX2Tef1FPXMrFY9vFxRd9AblAZBQieIo0rnyut7KWzKDLM6zFmAaApMAEALw_wcB&gclsrc=aw.ds">
                Service
              </a>
            </li>

            <li>
              <button>Contact Us</button>
            </li>
          </ul>
        </div>
        <hr />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugiat
          laborum quidem optio sint itaque est consequatur repudiandae. Dolorem
          debitis repudiandae officiis facere natus sunt, similique, sint ipsam
          aliquid libero in facilis voluptas autem quis consequatur, laborum
          aperiam dolore consectetur cupiditate accusamus possimus. Ex quis
          magnam, minus nam aliquam tempore dolor alias accusantium ut? Illum
          rem, illo inventore fugit molestiae, provident odit modi laborum sint
          consectetur cupiditate quod hic dolorum natus ipsa mollitia? Magnam,
          iusto aspernatur quos perferendis debitis earum iste. Eligendi
          voluptatum consequuntur ipsa rem quisquam adipisci architecto quia
          nihil aspernatur neque minus, temporibus qui, dolor molestias
          exercitationem ipsum?
          <img
            className="moving"
            src="https://s3-media0.fl.yelpcdn.com/bphoto/24eqXo9YlvHwAArSEcqTBg/300s.jpg"
            alt="box picture"
          />
        </p>
        <br />

        <div className="starEmployees">
          <h2>Employees of the year</h2>

          <li>{listingArray}</li>
          <br />
        </div>
        <hr />
        <footer>We Drive, You Save! 2023 @Namkhang Tsamchoe </footer>
      </div>
    </>
  );
}

export default App;
