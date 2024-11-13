import {
  Briefcase,
  Calendar,
  Lock,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import React from "react";

const Index = () => {
  return (
    <div
      className="min-h-screen w-full p-4 md:p-8 flex items-center justify-center"
      style={{
        background: "linear-gradient(to right, #059669 50%, #dadaea 50%)",
      }}
    >
      <div className="w-full max-w-5xl rounded-3xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Full width on mobile, half on desktop */}
          <div className="relative bg-emerald-500 p-8 md:p-12 md:w-1/2">
            <div className="relative h-full flex flex-col justify-center py-8 md:py-0 opacity-80">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-4 text-center md:text-left">
                Step into
                <br />
                Your Future
              </h1>
              <p className="text-white text-lg md:text-xl text-center md:text-left">
                Every Journey Starts with a First Click!
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative p-8 md:p-12 md:w-1/2 bg-[#f5f6fa]">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-emerald-600 text-sm font-semibold">
                  CAREERS CENTRAL
                </h2>
                <p className="text-sm text-gray-600">
                  Connecting Talent With Opportunity
                </p>
              </div>

              <h2 className="text-xl font-semibold text-center mb-8">
                Welcome Back. We're Here to Help You Succeed!
              </h2>

              <form className="space-y-4">
                <div className="relative">
                  <label className="text-gray-600 mb-2 block">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter your First Name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-gray-600 mb-2 block">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter your Last Name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-gray-600 mb-2 block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Enter your Email Address"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-gray-600 mb-2 block">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select className="pl-3 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent w-24">
                      <option>+91</option>
                    </select>
                    <div className="relative flex-1">
                      <Phone className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                      <input
                        type="tel"
                        placeholder="Enter your Mobile Number"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label className="text-gray-600 mb-2 block">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none">
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <label className="text-gray-600 mb-2 block">
                    Age <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                    <input
                      type="number"
                      placeholder="Enter your Age"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-gray-600 mb-2 block">
                    Overall Exp. in Years{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none">
                      <option value="">Select your Experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <label className="text-gray-600 mb-2 block">
                    Residing State <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none">
                      <option value="">Select Residing State</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <label className="text-gray-600 mb-2 block">
                    Current Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none">
                      <option value="">Select Location</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <label className="text-gray-600 mb-2 block">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-gray-600 mb-2 block">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                    <input
                      type="password"
                      placeholder="Enter Confirm Password"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-600 block">
                    Send Notifications <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="notifications"
                        className="w-4 h-4 text-emerald-600"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="notifications"
                        className="w-4 h-4 text-emerald-600"
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

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-emerald-600 rounded"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to{" "}
                    <a href="#" className="text-emerald-600">
                      Terms and Conditions
                    </a>{" "}
                    &{" "}
                    <a href="#" className="text-emerald-600">
                      Privacy Policy
                    </a>{" "}
                    governing the use
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-500 transition-colors"
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
                  <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <img
                      src="/api/placeholder/24/24"
                      alt="Google"
                      className="h-6 w-6"
                    />
                  </button>
                  <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <img
                      src="/api/placeholder/24/24"
                      alt="Facebook"
                      className="h-6 w-6"
                    />
                  </button>
                  <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <img
                      src="/api/placeholder/24/24"
                      alt="Apple"
                      className="h-6 w-6"
                    />
                  </button>
                </div>

                <div className="text-center text-gray-600">
                  Already have an account?{" "}
                  <a href="#" className="text-emerald-600 hover:underline">
                    Login
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
