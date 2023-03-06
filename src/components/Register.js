import "../styles/Register.css";
import Navbar from "./Navbar";
import React from "react";

function Register() {
  return (
    <>
      <Navbar />
      <div className="register-page-main-portion">
        <form className="register-page-details-form">
          <p className="label" style={{fontSize: '2rem'}}>Register</p>
          <p className="label">Name</p>
          <input type="text" />
          <p className="label">Email</p>
          <input type="email" />
          <div className="register-page-small-div">
            <div className="">
              <p className="label">Gender</p>
              <input type="text" />
            </div>
            <div className="">
              <p className="label">Age</p>
              <input type="text" />
            </div>
          </div>
          <p className="label">Body Weight</p>
          <input type="text" />

          <button id="register-page-submit-button">Submit</button>
        </form>
        <img src="page-image.png" className="register-page-hero-image" />
      </div>
    </>
  );
}

export default Register;
