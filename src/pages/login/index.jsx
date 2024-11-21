import React from "react";
import topRight from "../../Images/Ellipse 3.png";
import bottomImage from "../../Images/RightBottom2.png";
import topImage from "../../Images/TopRight2.png";
import apple from "../../Images/apple.png";
import bottomRight from "../../Images/bottomRight.png";
import facebook from "../../Images/facebook.png";
import google from "../../Images/google.png";
import mailIcon from "../../Images/icons/email.png";
import passwordIcon from "../../Images/icons/password.png";
import logo from "../../Images/logo.png";

const Index = () => {
  return (
    <div
      className="min-h-screen w-full p-2 md:p-4 flex items-center justify-center"
      style={{
        background: "linear-gradient(to right, #049D65 50%, #E0E1EF 50%)",
        overflow: "hidden", // Prevent scrolling at higher zoom levels
      }}
    >
      {/* Top right background image */}
      <img
        src={topRight}
        alt="Top Right Image"
        className="absolute top-0 right-0 "
        style={{
          width: "16%", // Reduced size for better fit
          height: "auto",
          objectFit: "cover",
        }}
      />
      {/* Bottom right background image */}
      <img
        src={bottomRight}
        alt="Bottom Right Image"
        className="absolute bottom-0 right-0 "
        style={{
          width: "18%", // Reduced size for better fit
          height: "auto",
          objectFit: "cover",
        }}
      />

      <div
        className="w-full lg:max-w-[900px] lg:max-h-[600px] mx-auto rounded-2xl overflow-hidden"
        style={{
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div
            className="relative p-3 md:p-5 md:w-1/2 overflow-hidden"
            style={{
              background: "#45AE89",
            }}
          >
            <img
              src={topImage}
              alt="Top Image"
              className="w-2/3 hidden md:block h-auto object-cover absolute left-1/2 -translate-x-1/2 sm:left-auto sm:right-4 sm:top-4 sm:translate-x-0"
            />
            <img
              src={bottomImage}
              alt="Bottom Image"
              className="w-2/3 h-auto hidden md:block object-cover absolute bottom-0 left-8 xl:ml-4 sm:left-4 sm:bottom-4"
            />

            <div className="relative h-full flex flex-col justify-center py-3 lg:px-[15%] xl:pl-[15%] md:py-0  sm:px-[15%] ">
              <h1
                className=" md:text-2xl lg:text-4xl sm:text-2xl text-white font-bold leading-tight mb-2 text-center md:text-left"
                style={{
                  textShadow: "0 3px 6px rgba(0,0,0,0.1)",
                }}
              >
                Step into
                <br />
                Your Future
              </h1>
              <p className="text-white  text-sm md:text-md text-center md:text-left opacity-80">
                Every Journey Starts with a First Click!
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative p-3 md:p-5 md:w-1/2 bg-[#f5f6fa]">
            <div className="max-w-sm mx-auto relative">
              <div className="text-center mb-4 md:mb-5">
                <div className="flex flex-col items-center">
                  <img
                    src={logo}
                    alt="Careers Central"
                    className="w-auto h-auto max-w-[180px]" // Reduced max width for smaller view
                  />
                </div>
              </div>

              <h2 className="text-sm md:text-md font-semibold text-center mb-3 md:mb-4">
                Welcome Back. We're Here to Help You Succeed!
              </h2>

              <form className="space-y-3">
                <div className="relative">
                  <label className="text-gray-600 mb-1 block text-xs md:text-sm">
                    Email
                  </label>
                  <div className="relative">
                    <img
                      src={mailIcon}
                      alt="Mail Icon"
                      className="w-4 h-4 absolute left-2 top-2.5"
                    />
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      className="w-full pl-8 pr-3 py-1.5 text-xs md:text-sm placeholder:text-xxs border border-gray-200 border-solid rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-gray-600 mb-1 block text-xxs md:text-sm">
                    Password
                  </label>
                  <div className="relative">
                    <img
                      src={passwordIcon}
                      alt="Password Icon"
                      className="w-4 h-4 absolute left-2 top-2.5"
                    />
                    <input
                      type="password"
                      placeholder="******************"
                      className="w-full pl-8 pr-3 py-2 text-xs md:text-sm border border-gray-200 border-solid rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0 text-xs sm:text-sm">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-3 h-3 border-gray-300 border-solid rounded focus:ring-[#049c64]"
                      style={{ accentColor: "#049c64" }}
                    />
                    <label htmlFor="remember" className="ml-1 text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-[#049c64] hover:text-emerald-500 text-xs"
                  >
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#049c64] text-white py-2 rounded-md text-sm hover:bg-emerald-500 transition-colors"
                >
                  Sign In
                </button>

                <div className="relative text-center">
                  <div className="absolute top-1/2 w-full h-px bg-gray-200" />
                  <span className="relative bg-[#f5f6fa] px-3 text-xs text-gray-500">
                    or
                  </span>
                </div>

                <div className="flex justify-center space-x-3">
                  <button className="p-1.5 border border-gray-200 rounded-md hover:bg-emerald-100">
                    <img src={google} alt="Google" className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 border border-gray-200 rounded-md hover:bg-emerald-100">
                    <img src={facebook} alt="Facebook" className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 border border-gray-200 rounded-md hover:bg-emerald-100">
                    <img src={apple} alt="Apple" className="h-4 w-4" />
                  </button>
                </div>

                <div className="text-center text-gray-600 text-xs">
                  Don't have an account?{" "}
                  <a
                    href="/register"
                    className="text-[#049c64] hover:underline"
                  >
                    Create Account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
