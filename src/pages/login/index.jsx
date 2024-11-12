import React from "react";
import topPartRight1 from "../../Images/Ellipse 3.png";
import topPart2 from "../../Images/Screenshot_1.png";
import topPart from "../../Images/Screenshot_2.png";
import topPartRight2 from "../../Images/Screenshot_4-removebg-preview.png";

const Index = () => {
  return (
    <div className="LoginComponent">
      <div className="flex h-screen">
        <div className="flex-1 bg-[#049c64]">
          <img src={topPart} alt="Top Part" />
          <span>
            Step into <br />
            your future
          </span>
          <span>Every journey starts a with First Click!</span>
          <img src={topPart2} alt="Top Part 2" />
        </div>
        <div className="flex-1 bg-[#dadaea] relative">
          <img
            src={topPartRight1}
            className="absolute top-0 right-0"
            alt="Top Right"
          />
          <img
            src={topPartRight2}
            className="absolute bottom-0 right-0"
            alt="Bottom Right"
          />
          <div className="flex items-center  h-screen xl:pr-5">
            <div className="bg-[#f5f6fa] shadow-lg p-8 w-4/5 h-4/5 opacity-95 rounded-tr-lg rounded-br-lg">
              <h2 className="text-2xl font-semibold  justify-center align-Item: center flex mb-6 text-[#000000]">
                Welcome Back. We're Here to Help You <br />
                Succeed!
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      className="mr-2"
                    />
                    <label htmlFor="remember" className="text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-[#00B03C] hover:underline">
                    Forgot Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="bg-[#00B03C] hover:bg-[#00973C] text-white font-medium py-2 px-4 rounded w-full"
                >
                  Sign In
                </button>
              </form>
              <div className="flex justify-center mt-4 space-x-4">
                <button className="text-gray-500 hover:text-gray-700">
                  <img src="/google.svg" alt="Google" className="h-6 w-6" />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <img src="/facebook.svg" alt="Facebook" className="h-6 w-6" />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <img src="/github.svg" alt="GitHub" className="h-6 w-6" />
                </button>
              </div>
              <div className="flex justify-center mt-4 text-gray-500">
                Don't have an account?{" "}
                <a href="#" className="text-[#00B03C] ml-1 hover:underline">
                  Create Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
