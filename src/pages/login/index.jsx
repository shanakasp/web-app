import { Lock, Mail } from "lucide-react";
import React from "react";
import topRight from "../../Images/Ellipse 3.png";
import bottomImage from "../../Images/RightBottom2.png";
import topImage from "../../Images/TopRight2.png";
import apple from "../../Images/apple.png";
import bottomRight from "../../Images/bottomRight.png";
import facebook from "../../Images/facebook.png";
import google from "../../Images/google.png";
import logo from "../../Images/logo.png";
const Index = () => {
  return (
    <div
      className="min-h-screen w-full p-4 md:p-8 flex items-center justify-center"
      style={{
        background: "linear-gradient(to right, #049D65 50%, #E0E1EF 50%)",
      }}
    >
      <img
        src={topRight}
        alt="Top Right Image"
        className="absolute top-0 right-0"
        style={{
          width: "22%", // You can adjust the width as per your needs
          height: "auto", // Or set a fixed height if you prefer
          objectFit: "cover", // Makes sure the image doesn't get stretched
        }}
      />
      <img
        src={bottomRight}
        alt="Bottom Right Image"
        className="absolute bottom-0 right-0 hidden md:block"
        style={{
          width: "26%",
          height: "auto",
          objectFit: "cover",
        }}
      />

      <div
        className="w-full xl:max-w-[1400px] mx-auto rounded-3xl overflow-hidden"
        style={{
          boxShadow: "0 8px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Full width on mobile, half on desktop */}
          <div
            className="relative p-8 md:p-12 md:w-1/2 overflow-hidden"
            style={{
              background: "#45AE89",
            }}
          >
            {/* Image Positioned Close to Top Border */}
            <img
              src={topImage}
              alt="Top Image"
              className="absolute top-0 left-1/2 transform -translate-x-1/2"
              style={{
                width: "70%",
                height: "auto",
                objectFit: "cover",
              }}
            />

            <img
              src={bottomImage}
              alt="Bottom Image"
              className="absolute bottom-0 left-16 xl:ml-6"
              style={{
                width: "78%",
                height: "auto",
                objectFit: "cover",
              }}
            />
            {/* Main Content */}
            <div className="relative h-full flex flex-col justify-center py-8 xl:px-[12%] md:py-0">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight mb-4 text-center md:text-left"
                style={{
                  textShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                Step into
                <br />
                Your Future
              </h1>
              <p className="text-white text-lg md:text-xl text-center md:text-left opacity-90">
                Every Journey Starts with a First Click!
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative p-8 md:p-12 md:w-1/2 bg-[#f5f6fa]">
            {/* Login Form */}
            <div className="max-w-md mx-auto relative">
              <div className="text-center mb-6 md:mb-8">
                <div className="flex flex-col items-center">
                  <img
                    src={logo}
                    alt="Careers Central"
                    className="w-auto h-auto max-w-xs"
                  />
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-semibold text-center mb-8 md:mb-12">
                Welcome Back. We're Here to Help You Succeed!
              </h2>

              <form className="space-y-6">
                <div className="relative">
                  <label className="text-gray-600 mb-2 block">Email</label>
                  <div className="relative">
                    <Mail
                      className="w-5 h-5 absolute left-3 top-3 text-[#049c64]
0"
                    />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-gray-600 mb-2 block">Password</label>
                  <div className="relative">
                    <Lock
                      className="w-5 h-5 absolute left-3 top-3 text-[#049c64]
"
                    />
                    <input
                      type="password"
                      placeholder="******************"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 border-gray-300 border-solid rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="remember" className="ml-2 text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-[#049c64]
 hover:text-emerald-500"
                  >
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#049c64]
 text-white py-3 rounded-lg hover:bg-emerald-500 transition-colors"
                >
                  Sign In
                </button>

                <div className="relative text-center">
                  <div className="absolute top-1/2 w-full h-px bg-gray-200" />
                  <span className="relative bg-[#f5f6fa] px-4 text-sm text-gray-500">
                    or
                  </span>
                </div>

                <div className="flex justify-center space-x-4">
                  <button className="p-2 border border-gray-200 rounded-lg hover:bg-emerald-100">
                    <img src={google} alt="Google" className="h-6 w-6" />
                  </button>
                  <button className="p-2 border border-gray-200 rounded-lg hover:bg-emerald-100">
                    <img src={facebook} alt="Facebook" className="h-6 w-6" />
                  </button>
                  <button className="p-2 border border-gray-200 rounded-lg  hover:bg-emerald-100">
                    <img src={apple} alt="GitHub" className="h-6 w-6" />
                  </button>
                </div>

                <div className="text-center text-gray-600">
                  Don't have an account?{" "}
                  <a
                    href="/register"
                    className="text-[#049c64]
 hover:underline"
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
