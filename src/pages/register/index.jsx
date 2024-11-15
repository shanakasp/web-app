import { ChevronDown, Phone } from "lucide-react";
import React from "react";
import topRight from "../../Images/Ellipse 3.png";
import bottomCenter from "../../Images/EllipseBottomOne.png";
import topImage from "../../Images/TopRight2.png";
import topImage3 from "../../Images/TopRight3.png";
import topImage4 from "../../Images/Topright4.png";
import apple from "../../Images/apple.png";
import bottomRight from "../../Images/cricle100.png";
import dots from "../../Images/dots.png";
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
import topImage6 from "../../Images/topRight5.png";
import topImage7 from "../../Images/topRight7.png";
const Index = () => {
  return (
    <div
      className="min-h-screen w-full px-4 pt-[10%]  md:p-8 flex items-center justify-center"
      style={{
        background: "linear-gradient(to right, #049D65 50%, #E0E1EF 50%)",
      }}
    >
      <img
        src={topRight}
        alt="Top Right Image"
        className="absolute top-0 right-0 hidden md:block"
        style={{
          width: "22%",
          height: "auto",
          objectFit: "cover",
        }}
      />
      <img
        src={bottomRight}
        alt="Bottom Right Image"
        className="absolute -bottom-44 right-0.5 hidden md:block"
        style={{
          width: "26%",
          height: "auto",
          objectFit: "cover",
        }}
      />
      <img
        src={dots}
        alt="Bottom Right Image"
        className="absolute bottom-20 right-[5%] hidden md:block"
        style={{
          width: "5%",
          height: "auto",
          objectFit: "cover",
        }}
      />

      <img
        src={bottomCenter}
        alt="Bottom Right Image"
        className="absolute -bottom-[88.2%] right-[20%] hidden md:block"
        style={{
          width: "60%",
          height: "auto",
          objectFit: "cover",
        }}
      />

      <div
        className="w-full xl:max-w-[1400px] mx-auto rounded-3xl overflow-hidden "
        style={{
          boxShadow: "0 8px 10px rgba(0, 0, 0, 0.3)",
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
            <img
              src={topImage}
              alt="Top Image"
              className="absolute top-10 left-1/2 transform -translate-x-1/2"
              style={{
                width: "70%",
                height: "auto",
                objectFit: "cover",
              }}
            />

            <img
              src={topImage2}
              alt="Top Image2"
              className="absolute top-[21%] left-[30%] transform -translate-x-1/2"
              style={{
                width: "25%",
                height: "auto",
                objectFit: "cover",
              }}
            />

            <img
              src={topImage3}
              alt="Top Image2"
              className="absolute top-[33%] left-[75%] transform -translate-x-1/2"
              style={{
                width: "27%",
                height: "auto",
                objectFit: "cover",
              }}
            />

            <img
              src={topImage4}
              alt="Top Image2"
              className="absolute top-[41%] left-[30%] transform -translate-x-1/2"
              style={{
                width: "15%",
                height: "auto",
                objectFit: "cover",
              }}
            />
            <img
              src={topImage2}
              alt="Top Image2"
              className="absolute top-[64%] left-[12.5%] transform -translate-x-1/2"
              style={{
                width: "25%",
                height: "auto",
                objectFit: "cover",
              }}
            />

            <img
              src={topImage6}
              alt="Top Image2"
              className="absolute top-[68%] left-[65.5%] transform -translate-x-1/2"
              style={{
                width: "25%",
                height: "auto",
                objectFit: "cover",
              }}
            />
            <img
              src={topImage3}
              alt="Bottom Image"
              className="absolute -bottom-[5.5%] left-10"
              style={{
                width: "27%",
                height: "auto",
                objectFit: "cover",
              }}
            />
            <img
              src={topImage4}
              alt="Top Image2"
              className="absolute top-[80%] left-[19%] transform -translate-x-1/2"
              style={{
                width: "12%",
                height: "auto",
                objectFit: "cover",
              }}
            />

            <img
              src={topImage7}
              alt="Top Image2"
              className="absolute top-[82%] left-[18%] transform -translate-x-1/2"
              style={{
                width: "15%",
                height: "auto",
                objectFit: "cover",
              }}
            />
            <img
              src={topImage2}
              alt="Top Image2"
              className="absolute top-[85%] left-[70%] transform -translate-x-1/2"
              style={{
                width: "25%",
                height: "auto",
                objectFit: "cover",
              }}
            />

            <div className="relative h-full flex flex-col justify-center py-8 xl:px-[12%] md:py-0 mt-[15%]">
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

              <h2 className="text-xl font-semibold text-center mb-8">
                Welcome Back. We're Here to Help You Succeed!
              </h2>

              <form className="space-y-4">
                <div className="relative">
                  <label className="text-[#3333333] mb-2 block">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={userIcon}
                      alt="User Icon"
                      className="w-5 h-5 absolute left-3 top-3.5 "
                    />

                    <input
                      type="text"
                      placeholder="Enter your First Name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className=" mb-2 block">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={userIcon}
                      alt="User Icon"
                      className="w-5 h-5 absolute left-3 top-3.5 "
                    />
                    <input
                      type="text"
                      placeholder="Enter your Last Name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="mb-2 block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={mailIcon}
                      alt="User Icon"
                      className="w-5 h-5 absolute left-3 top-3.5 "
                    />
                    <input
                      type="email"
                      placeholder="Enter your Email Address"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="mb-2 block">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select className="pl-3 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent w-24">
                      <option className="#979797">+91</option>
                    </select>
                    <div className="relative flex-1">
                      <Phone className="w-5 h-5 absolute left-3 top-3.5 icon-green" />
                      <input
                        type="tel"
                        placeholder="Enter your Mobile Number"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label className=" mb-2 block">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={user}
                      alt="User Icon"
                      className="w-5 h-5 absolute left-3 top-3.5 "
                    />
                    <select className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none text-[#979797]">
                      <option value="" className="text-[#979797]">
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="w-5 h-5 absolute right-3 top-3 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="relative">
                  <label className="mb-2 block">
                    Age <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={calenderIcon}
                      alt="User Icon"
                      className="w-5 h-5 absolute left-3 top-3.5 "
                    />
                    <input
                      type="number"
                      placeholder="Enter your Age"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="relative mb-4">
                  <label className="mb-2 block">
                    Overall Exp. in Years{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={expIcon}
                      alt="User Icon"
                      className="w-5 h-5 absolute left-3 top-3.5 "
                    />
                    <select className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none text-[#979797]">
                      <option value="">Select your Experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                    <ChevronDown className="w-5 h-5 absolute right-3 top-3 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="relative mb-4">
                  <label className=" mb-2 block">
                    Residing State <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={locationIcon}
                      alt="User Icon"
                      className="w-5 h-5 absolute left-3 top-3.5 "
                    />
                    <select className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none text-[#979797]">
                      <option value="">Select Residing State</option>
                    </select>
                    <ChevronDown className="w-5 h-5 absolute right-3 top-3 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="relative">
                  <label className="mb-2 block">
                    Current Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={locationIcon}
                      alt="User Icon"
                      className="w-5 h-5 absolute left-3 top-3.5 "
                    />
                    <select className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none text-[#979797]">
                      <option value="">Select Location</option>
                    </select>
                    <ChevronDown className="w-5 h-5 absolute right-3 top-3 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="relative">
                  <label className="mb-2 block">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={pwIcon}
                      alt="User Icon"
                      className="w-5 h-5 absolute left-3 top-3.5 "
                    />
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className=" mb-2 block">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <img
                      src={pwIcon}
                      alt="User Icon"
                      className="w-5 h-5 absolute left-3 top-3.5 "
                    />
                    <input
                      type="password"
                      placeholder="Enter Confirm Password"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block">
                    Send Notifications <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="notifications"
                        className="w-4 h-4 accent-[#049c64] focus:ring-[#049c64] focus:ring-offset-0"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="notifications"
                        className="w-4 h-4 accent-[#049c64] focus:ring-[#049c64] focus:ring-offset-0"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-600 block">
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                <div className="flex items-start gap-2 [&>input]:accent-[#049c64]">
                  <input
                    type="checkbox"
                    className="w-4 h-4 checked:bg-[#049c64] checked:border-[#049c64] focus:ring-[#049c64] focus:ring-offset-0 mt-0.5"
                    style={{ accentColor: "#049c64" }}
                  />
                  <span className="text-sm ">
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
                  className="w-full bg-[#049c64] text-white py-3 rounded-lg hover:bg-emerald-500 transition-colors"
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
