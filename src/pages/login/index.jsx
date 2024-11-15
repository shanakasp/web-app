import { Lock, Mail } from "lucide-react";
import React from "react";

const Index = () => {
  return (
    <div
      className="min-h-screen w-full p-4 md:p-8 flex items-center justify-center"
      style={{
        background: "linear-gradient(to right, #049D65 50%, #dadaea 50%)",
      }}
    >
      <div
        className="w-full max-w-6xl rounded-3xl overflow-hidden"
        style={{
          boxShadow: "0 8px 10px rgba(0, 0, 0, 0.3)", // Dark and highly spread shadow
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
            {/* Dot Grid Pattern Top */}
            <div className="absolute top-8 left-8">
              <div className="grid grid-cols-6 gap-2">
                {[...Array(24)].map((_, i) => (
                  <div
                    key={`top-${i}`}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "rgba(255, 255, 255, 0.3)", // Reduced opacity
                      boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)", // Reduced opacity
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Elongated Pill Shapes */}
            <div className="absolute -top-4 right-12">
              <div
                className="w-16 h-48 rounded-full transform rotate-12"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)", // Added opacity
                  backdropFilter: "blur(8px)",
                }}
              />
              <div
                className="w-16 h-48 rounded-full transform -rotate-12 translate-x-12 -translate-y-8"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)", // Added opacity
                  backdropFilter: "blur(8px)",
                }}
              />
            </div>

            {/* Small Circle with Ring */}
            <div className="absolute top-12 right-8">
              <div
                className="w-8 h-8 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.2)", // Added opacity
                  boxShadow: "0 0 20px rgba(255,255,255,0.1)", // Added opacity
                }}
              />
              <div className="absolute -top-1 -left-1 w-10 h-10 rounded-full border-2 border-white opacity-20" />
            </div>

            {/* Bottom Dot Grid */}
            <div className="absolute bottom-12 left-12">
              <div className="grid grid-cols-6 gap-2">
                {[...Array(24)].map((_, i) => (
                  <div
                    key={`bottom-${i}`}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "rgba(255, 255, 255, 0.3)", // Reduced opacity
                      boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)", // Reduced opacity
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Cross Mark */}
            <div className="absolute bottom-32 left-1/2">
              <div className="w-6 h-6 relative" style={{ opacity: 0.3 }}>
                <div className="absolute w-6 h-0.5 bg-white top-1/2 left-0 transform -translate-y-1/2 rotate-45"></div>
                <div className="absolute w-6 h-0.5 bg-white top-1/2 left-0 transform -translate-y-1/2 -rotate-45"></div>
              </div>
            </div>

            {/* Progress Circle */}
            <div className="absolute bottom-16 right-16">
              <div
                className="w-24 h-24 rounded-full border-4 border-white opacity-20"
                style={{
                  borderRightColor: "transparent",
                  transform: "rotate(45deg)",
                }}
              />
              <div
                className="absolute -top-1 -left-1 w-6 h-6 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.3)", // Added opacity
                  boxShadow: "0 0 20px rgba(255,255,255,0.2)", // Added opacity
                }}
              />
            </div>

            {/* Main Content */}
            <div className="relative h-full flex flex-col justify-center py-8 md:py-0">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-4 text-center md:text-left"
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
                <h2 className="text-emerald-600 text-sm font-semibold">
                  CAREERS CENTRAL
                </h2>
                <p className="text-sm text-gray-600">
                  Connecting Talent With Opportunity
                </p>
              </div>

              <h2 className="text-xl md:text-2xl font-semibold text-center mb-8 md:mb-12">
                Welcome Back. We're Here to Help You Succeed!
              </h2>

              <form className="space-y-6">
                <div className="relative">
                  <label className="text-gray-600 mb-2 block">Email</label>
                  <div className="relative">
                    <Mail className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
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
                    <Lock className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
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
                    className="text-emerald-600 hover:text-emerald-500"
                  >
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-500 transition-colors"
                >
                  Sign In
                </button>

                <div className="relative text-center">
                  <div className="absolute top-1/2 w-full h-px bg-gray-200" />
                  <span className="relative bg-white px-4 text-sm text-gray-500">
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
                      alt="GitHub"
                      className="h-6 w-6"
                    />
                  </button>
                </div>

                <div className="text-center text-gray-600">
                  Don't have an account?{" "}
                  <a href="#" className="text-emerald-600 hover:underline">
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
