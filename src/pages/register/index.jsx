import { Phone } from "lucide-react";
import React from "react";
import topRight from "../../Images/Ellipse 3.png";
import topImage from "../../Images/TopRight2.png";
import topImage3 from "../../Images/TopRight3.png";
import topImage4 from "../../Images/Topright4.png";
import apple from "../../Images/apple.png";
import bottomLast from "../../Images/backdrop.png";
import facebook from "../../Images/facebook.png";
import google from "../../Images/google.png";
import expIcon from "../../Images/icons/Business Time.png";
import calenderIcon from "../../Images/icons/Calendar.png";
import locationIcon from "../../Images/icons/Location.png";
import userIcon from "../../Images/icons/Name.png";
import mailIcon from "../../Images/icons/email.png";
import pwIcon from "../../Images/icons/password.png";
import user from "../../Images/icons/user.png";
import logo from "../../Images/logo.png";
import topImage2 from "../../Images/register2.png";
import bottomRight from "../../Images/rightCenter10.png";
import topImage6 from "../../Images/topRight5.png";
import topImage7 from "../../Images/topRight7.png";
const Index = () => {
  return (
    <div
      className="min-h-screen w-full px-4 p-[10%] lg:p-12 md:p-8 flex items-center justify-center relative min-h-screen"
      style={{
        background: "linear-gradient(to right, #049D65 50%, #E0E1EF 50%)",
      }}
    >
      {" "}
      <img
        src={bottomLast}
        alt="Bottom Right Image"
        className="absolute bottom-0 left-[49.8%] transform -translate-x-1/2 hidden md:block"
        style={{
          width: "90%",
          height: "auto",
          objectFit: "cover",
        }}
      />
      <img
        src={topRight}
        alt="Top Right Image"
        className="absolute top-0 right-0 hidden md:block w-[22%] xl:w-[18%]"
        style={{
          height: "auto",
          objectFit: "cover",
        }}
      />
      <img
        src={bottomRight}
        alt="Center Right Image"
        className="absolute hidden md:block w-[26%] xl:w-[18%]"
        style={{
          height: "auto",
          objectFit: "cover",
          right: 0, // Align to the right
          top: "50%", // Position at 50% from the top
          transform: "translateY(-50%)", // Adjust for vertical centering
          position: "absolute", // Ensure absolute positioning
        }}
      />
      {/* <img
        src={dots}
        alt="Bottom Right Image"
        className="absolute -bottom-10 right-[5%] hidden md:block"
        style={{
          width: "5%",
          height: "auto",
          objectFit: "cover",
        }}
      /> */}
      <div
        className="w-full md:max-w-[800px] xl:max-w-[1200px] mx-auto rounded-3xl overflow-hidden  z-20"
        style={{
          boxShadow: "0 -8px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div
            className="relative p-8 md:p-12 md:w-1/2 overflow-hidden"
            style={{
              background: "#45AE89",
            }}
          >
            <div className="hidden md:block absolute top-10 left-1/2 transform -translate-x-1/2 w-[70%]">
              <img
                src={topImage}
                alt="Top Image"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Top left cluster */}
            <div className="hidden md:block absolute top-[18%] left-[30%] transform -translate-x-1/2 w-1/4">
              <img
                src={topImage2}
                alt="Top Image 2"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Top right image */}
            <div className="hidden md:block absolute top-[28%] left-[75%] transform -translate-x-1/2 w-[27%]">
              <img
                src={topImage3}
                alt="Top Image 3"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Middle left image */}
            <div className="hidden md:block absolute top-[36%] left-[30%] transform -translate-x-1/2 w-[15%]">
              <img
                src={topImage4}
                alt="Top Image 4"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Middle cluster */}
            <div className="hidden md:block absolute top-[60%] left-[12.5%] transform -translate-x-1/2 w-1/4">
              <img
                src={topImage2}
                alt="Top Image 2 Repeat"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Middle right image */}
            <div className="hidden md:block absolute top-[70%] left-[65.5%] transform -translate-x-1/2 w-1/4">
              <img
                src={topImage6}
                alt="Top Image 6"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Bottom left image */}
            <div className="hidden md:block absolute -bottom-[3.5%] left-10 w-[27%]">
              <img
                src={topImage3}
                alt="Bottom Image"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Bottom small image */}
            <div className="hidden md:block absolute top-[80%] left-[19%] transform -translate-x-1/2 w-[12%]">
              <img
                src={topImage4}
                alt="Top Image 4 Repeat"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Bottom left cluster */}
            <div className="hidden md:block absolute top-[82%] left-[18%] transform -translate-x-1/2 w-[15%]">
              <img
                src={topImage7}
                alt="Top Image 7"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Bottom right image */}
            <div className="hidden md:block absolute top-[87%] left-[70%] transform -translate-x-1/2 w-1/4">
              <img
                src={topImage2}
                alt="Top Image 2 Final"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="relative h-full flex flex-col justify-center py-8 xl:px-[12%] md:py-0 ">
              <h1
                className="text-3xl md:text-5xl lg:text-4xl xl:text-7xl text-white font-bold leading-tight mb-4 text-center md:text-left"
                style={{
                  textShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                Step into
                <br />
                Your Future
              </h1>
              <p className="text-white text-base text-center md:text-left opacity-90">
                Every Journey Starts with a First Click!
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative p-8 md:p-12 md:w-1/2 bg-[#f5f6fa]">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-6">
                <div className="flex flex-col items-center">
                  <img
                    src={logo}
                    alt="Careers Central"
                    className="w-auto h-auto max-w-xs mb-4"
                  />
                </div>
              </div>

              <h2 className="text-xl lg:text-base sm:text-sm font-semibold text-center mb-8">
                Welcome Back. We're Here to Help You Succeed!
              </h2>

              <form className="space-y-4">
                <div className="relative">
                  <label className="text-[#3333333] mb-2 block lg:text-sm">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={userIcon}
                      alt="User Icon"
                      className="w-5 h-5 absolute left-3 top-1.5 "
                    />

                    <input
                      type="text"
                      placeholder="Enter your First Name"
                      className="w-full pl-10 pr-4 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm placeholder:text-xs"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className=" mb-2 block lg:text-sm">
                    Last Name <span className="text-red-500 ">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={userIcon}
                      alt="User Icon"
                      className="w-5 h-5 absolute left-3 top-1.5 "
                    />
                    <input
                      type="text"
                      placeholder="Enter your Last Name"
                      className="w-full pl-10 pr-4 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm placeholder:text-xs"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="mb-2 block lg:text-sm">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={mailIcon}
                      alt="User Icon"
                      className="w-5 h-5 absolute left-3 top-1.5 "
                    />
                    <input
                      type="email"
                      placeholder="Enter your Email Address"
                      className="w-full pl-10 pr-4 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm placeholder:text-xs"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="mb-2 block lg:text-sm">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-1">
                    <select className=" lg:text-sm  border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent w-20">
                      <option className="#979797 ">+91</option>
                    </select>
                    <div className="relative flex-1">
                      <Phone className="w-4 h-4 absolute left-3 top-1.5 icon-green" />
                      <input
                        type="tel"
                        placeholder="Enter your Mobile Number"
                        className="w-full pl-10 pr-4 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm placeholder:text-xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label className=" mb-2 block lg:text-sm">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={user}
                      alt="User Icon"
                      className="w-5 h-5 absolute left-3 top-1 "
                    />
                    <select className="w-full pl-10 pr-4 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm placeholder:text-xs text-[#979797] ">
                      <option value="" className="text-[#979797] lg:text-xs">
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <label className="mb-2 block lg:text-sm">
                    Age <span className="text-red-500 ">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={calenderIcon}
                      alt="User Icon"
                      className="w-4 h-4 absolute left-3 top-2 "
                    />
                    <input
                      type="number"
                      placeholder="Enter your Age"
                      className="w-full pl-10 pr-4 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm placeholder:text-xs"
                    />
                  </div>
                </div>

                <div className="relative mb-4">
                  <label className="mb-2 block lg:text-sm">
                    Overall Exp. in Years{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={expIcon}
                      alt="User Icon"
                      className="w-4 h-4 absolute left-3 top-1.5 "
                    />
                    <select className="w-full pl-10 pr-4 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm placeholder:text-xs text-[#979797] ">
                      <option value="">Select your Experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                  </div>
                </div>

                <div className="relative mb-4">
                  <label className=" mb-2 block lg:text-sm">
                    Residing State <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={locationIcon}
                      alt="User Icon"
                      className="w-4 h-4 absolute left-3 top-1.5 "
                    />
                    <select className="w-full pl-10 pr-4 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm placeholder:text-xs text-[#979797] ">
                      <option value="">Select Residing State</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <label className="mb-2 block lg:text-sm">
                    Current Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={locationIcon}
                      alt="User Icon"
                      className="w-4 h-4 absolute left-3 top-1.5 "
                    />
                    <select className="w-full pl-10 pr-4 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs placeholder:text-xs text-[#979797] ">
                      <option value="">Select Location</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <label className="mb-2 block lg:text-sm">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={pwIcon}
                      alt="User Icon"
                      className="w-4 h-4 absolute left-3 top-1.5 "
                    />
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="w-full pl-10 pr-4 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm placeholder:text-xs"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className=" mb-2 block lg:text-sm">
                    Confirm Password <span className="text-red-500 ">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={pwIcon}
                      alt="User Icon"
                      className="w-4 h-4 absolute left-3 top-1.5 "
                    />
                    <input
                      type="password"
                      placeholder="Enter Confirm Password"
                      className="w-full pl-10 pr-4 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm placeholder:text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className=" mb-2 block lg:text-sm">
                    Send Notifications <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="notifications"
                        className="w-3 h-3 accent-[#049c64] focus:ring-[#049c64] focus:ring-offset-0"
                      />
                      <span className="lg:text-xs">Yes</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="notifications"
                        className="w-3 h-3 accent-[#049c64] focus:ring-[#049c64] focus:ring-offset-0"
                      />
                      <span className="lg:text-xs">No</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-600 block lg:text-sm">
                    Captcha <span className="text-red-500">*</span>
                  </label>
                  <img
                    src="/api/placeholder/120/40"
                    alt="Captcha"
                    className="bg-blue-50 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Enter Captcha Code"
                    className="w-full pl-10 pr-4 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm placeholder:text-xs"
                  />
                </div>

                <div className="flex items-start gap-2 [&>input]:accent-[#049c64]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 checked:bg-[#049c64] checked:border-[#049c64] focus:ring-[#049c64] focus:ring-offset-0 mt-0.5"
                    style={{ accentColor: "#049c64" }}
                  />
                  <span className="text-xxs ">
                    I agree to{" "}
                    <a href="#" className="text-[#049c64] hover:underline">
                      Terms and Conditions
                    </a>{" "}
                    &{" "}
                    <a href="#" className="text-[#049c64] hover:underline">
                      Privacy Policy
                    </a>{" "}
                    governing the use
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#049c64] text-white py-1 rounded-lg hover:bg-emerald-500 transition-colors lg:text-sm"
                >
                  Create Account
                </button>
                <div className="relative text-center">
                  <div className="absolute top-1/2 w-full h-px bg-gray-200" />
                  <span className="relative bg-[#f5f6fa] px-4 text-sm text-gray-500">
                    or
                  </span>
                </div>

                <div className="flex justify-center space-x-4">
                  <button className="p-2 border border-gray-200 rounded-lg hover:bg-emerald-100">
                    <img src={google} alt="Google" className="h-4 w-4" />
                  </button>
                  <button className="p-2 border border-gray-200 rounded-lg hover:bg-emerald-100">
                    <img src={facebook} alt="Facebook" className="h-4 w-4" />
                  </button>
                  <button className="p-2 border border-gray-200 rounded-lg  hover:bg-emerald-100">
                    <img src={apple} alt="GitHub" className="h-4 w-4" />
                  </button>
                </div>

                <div className="text-center text-gray-600  lg:text-xs">
                  Already have an account?
                  <a
                    href="/login"
                    className="text-[#049c64]
 hover:underline ml-1"
                  >
                    Log in
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
