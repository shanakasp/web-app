// Header.js
import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className="nav">
        <ul className="nav-items">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Jobs</a>
          </li>
          <li>
            <a href="#services">About Us</a>
          </li>
          <li>
            <a href="#portfolio">Contact Us</a>
          </li>
          <li>
            <div className="loginButton">
              <a href="#contact">Login</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
