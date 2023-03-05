import "../styles/Register.css";
import Navbar from "./Navbar";
import React from "react";

function Register() {
  return (
    <>
      <Navbar />
      <div className="register-page-main-portion">
        <form className="register-page-details-form">
          <p className="label">Name</p>
          <input type="text" />
          <p className="label">Email</p>
          <input type="email" />
          <p className="label">Gender</p>
          
          <p className="label">Age</p>
          <input type="text" />
          <p className="label">Body Weight</p>
          <input type="text" />

          <button>Submit</button>
        </form>
      </div>

    </>
  );
}

export default Register;
