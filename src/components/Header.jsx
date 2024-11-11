import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import "./Header.css";

function Header({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`}>
        <button className="nav__toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
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
