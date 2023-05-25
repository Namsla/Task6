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
        </header>
        <div className="topBar">
          <ul>
            <li>History</li>

            <li>Location</li>

            <li>Testimonial</li>

            <li>Service</li>

            <li>
              <button>Contact Us</button>
            </li>
          </ul>
        </div>
        <hr />
        <div className="starEmployees">
          <h2>Employees of the year</h2>
          <li>{listingArray}</li>
        </div>
        <hr />
        <footer>NamkhangTsamchoe@2023</footer>
      </div>
    </>
  );
}

export default App;
