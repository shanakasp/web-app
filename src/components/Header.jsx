import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import "./Header.css";

// Add this CSS to your Header.css file:
/* Add these new styles to your existing CSS */
/*
.nav-items a.active {
  color: #049c64 !important;
}

.nav-items .loginButton a.active {
  background-color: #037249;
}
*/

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (path) => {
    setActivePath(path);
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === "/") {
      return activePath === path;
    }
    return activePath.startsWith(path);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""} `}>
      <div className="pl-14 pt-2">
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`}>
        <button className="nav__toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        <ul className="nav-items">
          <li>
            <a
              href="/"
              className={isActive("/") ? "active" : ""}
              onClick={() => handleNavClick("/")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/jobs"
              className={isActive("/jobs") ? "active" : ""}
              onClick={() => handleNavClick("/jobs")}
            >
              jobs
            </a>
          </li>

          <li>
            <a
              href="/iSearch"
              className={isActive("/Search") ? "active" : ""}
              onClick={() => handleNavClick("/Search")}
            >
              Search
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={isActive("#services") ? "active" : ""}
              onClick={() => handleNavClick("#services")}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={isActive("#portfolio") ? "active" : ""}
              onClick={() => handleNavClick("#portfolio")}
            >
              Contact Us
            </a>
          </li>
          <li>
            <div className="loginButton pr-5">
              <a
                href="/login"
                className={isActive("/login") ? "active" : ""}
                onClick={() => handleNavClick("/login")}
              >
                Login
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
