import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const Header = () => {
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full flex justify-between items-center py-4 px-[2%] transition-all duration-300 
        ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="xl:pl-14 pt-2">
        <img src="/logo.png" alt="Logo" />
      </div>

      <nav className="relative flex items-center">
        <button
          className="xl:hidden bg-transparent border-none absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-black p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        <ul
          className={`list-none flex xl:gap-11 m-0 p-0 text-base sm:text-lg xl:text-xl transition-all duration-300
          ${isMenuOpen ? "flex" : "hidden"} 
          xl:flex flex-col xl:flex-row items-start xl:items-center 
          absolute xl:relative top-14 xl:top-0 right-0 
          bg-white xl:bg-transparent p-8 xl:p-0 
          rounded-lg shadow-lg xl:shadow-none 
          min-w-[380px] xl:min-w-0
          ${isScrolled ? "text-gray-800" : "text-black"}`}
        >
          <li className="w-full xl:w-auto">
            <a
              href="/"
              className={`block w-full xl:w-auto px-4 py-2 font-normal hover:text-emerald-600 transition-colors duration-300
                ${isActive("/") ? "text-emerald-600" : ""}`}
              onClick={() => handleNavClick("/")}
            >
              Home
            </a>
          </li>
          <li className="w-full xl:w-auto">
            <a
              href="/jobs"
              className={`block w-full xl:w-auto px-4 py-2 font-normal hover:text-emerald-600 transition-colors duration-300
                ${isActive("/jobs") ? "text-emerald-600" : ""}`}
              onClick={() => handleNavClick("/jobs")}
            >
              Jobs
            </a>
          </li>
          <li className="w-full xl:w-auto">
            <a
              href="/Search"
              className={`block w-full xl:w-auto px-4 py-2 font-normal hover:text-emerald-600 transition-colors duration-300
                ${isActive("/Search") ? "text-emerald-600" : ""}`}
              onClick={() => handleNavClick("/Search")}
            >
              iSearch
            </a>
          </li>
          <li className="w-full xl:w-auto">
            <a
              href="#services"
              className={`block w-full xl:w-auto px-4 py-2 font-normal hover:text-emerald-600 transition-colors duration-300
                ${isActive("#services") ? "text-emerald-600" : ""}`}
              onClick={() => handleNavClick("#services")}
            >
              About Us
            </a>
          </li>
          <li className="w-full xl:w-auto">
            <a
              href="#portfolio"
              className={`block w-full xl:w-auto px-4 py-2 font-normal hover:text-emerald-600 transition-colors duration-300
                ${isActive("#portfolio") ? "text-emerald-600" : ""}`}
              onClick={() => handleNavClick("#portfolio")}
            >
              Contact Us
            </a>
          </li>
          <li className="w-full xl:w-auto mt-4 xl:mt-0">
            <a
              href="/login"
              className={`block w-full xl:w-auto text-center xl:text-left bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded transition-colors duration-300
                ${isActive("/login") ? "bg-emerald-700" : ""}`}
              onClick={() => handleNavClick("/login")}
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
