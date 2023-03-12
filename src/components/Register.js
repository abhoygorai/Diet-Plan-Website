import "../styles/Register.css";
import Navbar from "./Navbar";
import React from "react";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [user, setUser] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [password, setPassword] = useState();


  const submitForm = async (e) => {
    e.preventDefault();
    setUser({
      name: name,
      email: email,
      gender: gender,
      age: age,
      weight: weight,
      password: password,
    });

    try {
      // console.log(data)
      const apidata = await axios.post("http://localhost:4000/api/v1/auth/register",
        user,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (apidata.status === 200) {
        console.log(apidata)
      }
      // console.log(apidata);
    } catch (error) {
      // console.log(apidata);
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-page-main-portion">
        <form className="register-page-details-form">
          <p className="label" style={{ fontSize: "2rem" }}>
            Register
          </p>
          <p className="label">Name</p>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <p className="label">Email</p>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="register-page-small-div">
            <div className="">
              <p className="label">Gender</p>
              <input
                required
                type="text"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="">
              <p className="label">Age</p>
              <input
                required
                type="text"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
          <p className="label">Body Weight</p>
          <input
            required
            type="text"
            onChange={(e) => setWeight(e.target.value)}
          />
          <p className="label">Password</p>
          <input
            required
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button id="register-page-submit-button" onClick={submitForm}>
            Submit
          </button>
        </form>
        <img
          src="page-image.png"
          alt="food"
          className="register-page-hero-image"
        />
      </div>
    </>
  );
}

export default Register;
