import React from "react";
import '../styles/Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <section id="header">
        <Link to={"/"}>
          <img src="logo.png" class="logo" alt="" style={{ height: 70 }} />
        </Link>
        <div>
          <ul id="navbar">
            <li>
              <a class="active" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <button href="signup.html" id="login-id-button">Login</button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Navbar;
