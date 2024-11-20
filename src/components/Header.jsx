import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Use React Router's location
  const activePath = location.pathname; // Get the current path

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

  const isActive = (path) => {
    if (path === "/") {
      return activePath === path;
    }
    return activePath.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full flex justify-between items-center py-3 px-4 transition-all duration-300 
        ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="pl-4 pt-1">
        <img src="/logo.png" alt="Logo" className="h-8" />
      </div>

      <nav className="relative flex items-center">
        <button
          className="lg:hidden bg-transparent border-none absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-black p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>

        <ul
          className={`list-none flex lg:gap-6 m-0 p-0 lg:text-xs xl:text-sm transition-all duration-300
          ${isMenuOpen ? "flex" : "hidden"} 
          lg:flex flex-col lg:flex-row items-start lg:items-center 
          absolute lg:relative top-12 lg:top-0 right-0 
          bg-white lg:bg-transparent p-6 lg:p-0 
          rounded-lg shadow-lg lg:shadow-none 
          min-w-[400px] lg:min-w-0
          ${isScrolled ? "text-gray-800" : "text-black"}`}
        >
          <li className="w-full lg:w-auto">
            <a
              href="/"
              className={`block w-full lg:w-auto px-3 py-1 font-normal hover:text-emerald-600 transition-colors duration-300
                ${isActive("/") ? "text-emerald-600" : ""}`}
            >
              Home
            </a>
          </li>
          <li className="w-full lg:w-auto">
            <a
              href="/jobs"
              className={`block w-full lg:w-auto px-3 py-1 font-normal hover:text-emerald-600 transition-colors duration-300
                ${isActive("/jobs") ? "text-emerald-600" : ""}`}
            >
              Jobs
            </a>
          </li>
          <li className="w-full lg:w-auto">
            <a
              href="/Search"
              className={`block w-full lg:w-auto px-3 py-1 font-normal hover:text-emerald-600 transition-colors duration-300
                ${isActive("/Search") ? "text-emerald-600" : ""}`}
            >
              iSearch
            </a>
          </li>
          <li className="w-full lg:w-auto">
            <a
              href="#services"
              className={`block w-full lg:w-auto px-3 py-1 font-normal hover:text-emerald-600 transition-colors duration-300
                ${isActive("#services") ? "text-emerald-600" : ""}`}
            >
              About Us
            </a>
          </li>
          <li className="w-full lg:w-auto">
            <a
              href="#portfolio"
              className={`block w-full lg:w-auto px-3 py-1 font-normal hover:text-emerald-600 transition-colors duration-300
                ${isActive("#portfolio") ? "text-emerald-600" : ""}`}
            >
              Contact Us
            </a>
          </li>
          <li className="w-full lg:w-auto mt-3 lg:mt-0">
            <a
              href="/login"
              className={`block w-full lg:w-auto text-center lg:text-left bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1 rounded transition-colors duration-300
                ${isActive("/login") ? "bg-emerald-700" : ""}`}
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
