import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-page-main-div">
        <div className="tittle-text-div">
          <p className="tittle-text">EAT HEALTHY</p>
          <p className="tittle-text">STAY HEALTHY</p>
          <Link to={"/register"}>
            <button className="get-started-button">Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
