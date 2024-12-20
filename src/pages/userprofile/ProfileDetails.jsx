import { Info, MapPin } from "lucide-react";
import React from "react";
import visa from "../../Images/Visa.png";
import Payment from "../../Images/paymnet.png";
import pen from "../../Images/pen.png";
import userImg from "../../Images/userimg.png";

const ProfileDetails = () => {
  return (
    <div>
      {/* Navigation Tabs */}
      <div className="p-4 border border-[#049c64] rounded-lg mb-4 sm:p-6 sm:mb-6 sm:flex sm:items-center sm:justify-between">
        {/* First Part: Image and Name */}
        <div className="flex items-center gap-4 mb-4 sm:w-1/4 sm:mb-0">
          <img
            src={userImg}
            alt="Profile"
            className="w-10 h-10 rounded-full sm:w-12 sm:h-12"
          />
          <h2 className="text-sm font-semibold sm:text-sm">Phill Forden</h2>
        </div>

        {/* Second Part: Overall Experience */}
        <div className="text-center sm:w-1/4">
          <span className="font-medium">Overall Exp.</span>
          <p>10-15 yrs</p>
        </div>

        {/* Third Part: Last Login */}
        <div className="text-center sm:w-1/4">
          <span className="font-medium">Last Login</span>
          <p>5 hours ago</p>
        </div>

        {/* Final Part: Edit Button */}
        <div className="flex justify-end sm:ml-auto -mr-[1%] text-xs">
          <button className="flex items-center gap-2 px-2 py-1 text-white bg-[#049c64] rounded-md">
            <img src={pen} alt="Edit" className="w-2 h-2" />
            Edit
          </button>
        </div>
      </div>

      {/* Personal Information */}
      <div className="mb-4 sm:mb-6 border border-[#049c64] rounded-md p-3">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-base font-medium sm:text-base">
            <Info className="text-gray-600 w-5 h-5" />
            <span className="text-gray-600">Personal Information</span>
          </h3>
          <div>
            <button className="flex items-center gap-2 px-2 py-1 text-white text-xs bg-[#049c64] rounded-md">
              <img src={pen} alt="Edit" className="w-2 h-2" />
              Edit
            </button>
          </div>
        </div>

        <div className="py-4 rounded-lg relative sm:p-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {/* First Name */}
            <div>
              <p className="text-xs text-gray-600 mb-1">First Name</p>
              <p className="font-medium text-xs">Phill</p>
            </div>

            {/* Last Name */}
            <div>
              <p className="text-xs text-gray-600 mb-1">Last Name</p>
              <p className="font-medium text-xs">Forden</p>
            </div>

            {/* Age */}
            <div>
              <p className="text-xs text-gray-600 mb-1">Age</p>
              <p className="font-medium text-xs">26 Years</p>
            </div>

            {/* Email Address */}
            <div>
              <p className="text-xs text-gray-600 mb-1">Email Address</p>
              <p className="font-medium text-xs">phillforden01@gmail.com</p>
            </div>

            {/* Phone Number */}
            <div>
              <p className="text-xs text-gray-600 mb-1">Phone Number</p>
              <p className="font-medium text-xs">+49 1478 51478547</p>
            </div>

            {/* Gender */}
            <div>
              <p className="text-xs text-gray-600 mb-1">Gender</p>
              <p className="font-medium text-xs">Male</p>
            </div>
          </div>
        </div>
      </div>

      {/* Location Information */}
      <div className="mb-4 sm:mb-6 border border-[#049c64] rounded-md p-3">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-base font-medium sm:text-lg">
            <MapPin className="text-gray-600 w-5 h-5" />
            <span className="text-gray-600 text-base">
              Location Information
            </span>
          </h3>
          <div>
            <button className="flex items-center gap-2 px-2 py-1 text-white text-xs bg-[#049c64] rounded-md">
              <img src={pen} alt="Edit" className="w-2 h-2" />
              Edit
            </button>
          </div>
        </div>
        <div className="p-4 relative sm:p-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {/* Country */}
            <div>
              <p className=" text-gray-600 mb-1 text-xs">Country</p>
              <p className="font-medium text-xs">Germany</p>
            </div>

            {/* City */}
            <div>
              <p className="text-xs text-gray-600 mb-1">City</p>
              <p className="font-medium text-xs">Berlin</p>
            </div>

            {/* Zip Code */}
            <div>
              <p className="text-xs text-gray-600 mb-1">Zip Code</p>
              <p className="font-medium text-xs">10094</p>
            </div>

            {/* Street */}
            <div>
              <p className="text-xs text-gray-600 mb-1">Street</p>
              <p className="font-medium text-xs">Berliner Stralie</p>
            </div>

            {/* House Number */}
            <div>
              <p className="text-xs text-gray-600 mb-1">House Number</p>
              <p className="font-medium text-xs">24</p>
            </div>

            {/* Apartment */}
            <div>
              <p className="text-xs text-gray-600 mb-1">Apartment</p>
              <p className="font-medium text-xs">3A</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" border border-[#049c64] rounded-lg p-4 mb-[5%]">
        <div className="flex items-center justify-between mb-2 ">
          <h3 className="flex items-center gap-2 text-base font-medium sm:text-base">
            <img src={Payment} alt="Description" className="w-4 h-4 " />
            <span className="text-gray-600">Account Information</span>
          </h3>
          <div className="-mr-[1%]">
            <button className="flex items-center gap-2 px-2 py-1 text-white text-xs bg-[#049c64] rounded-md">
              <img src={pen} alt="Edit" className="w-2 h-2" />
              Edit
            </button>
          </div>
        </div>
        <div className="space-y-4 p-2">
          {/* Account 01 */}
          <div className="flex items-center">
            <div className="flex items-center gap-3 font-medium text-xs">
              <img src={visa} alt="Description" className="w-6 h-6 rounded" />
              <div className="flex flex-col">
                <span className="text-[#979797]">Account 01</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#333333]">**** **** **** 1141</span>
                  <span className="text-[#333333]">12/26</span>
                </div>
              </div>
            </div>
            <div className="ml-auto lg:ml-[10%]">
              <button className="text-red-500 border border-red-500 p-1 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Account 02 */}
          <div className="flex items-center">
            <div className="flex items-center gap-3 font-medium text-xs">
              <img src={visa} alt="Description" className="w-6 h-6 rounded" />
              <div className="flex flex-col">
                <span className="text-[#979797]">Account 02</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#333333]">**** **** **** 1241</span>
                  <span className="text-[#333333]">12/26</span>
                </div>
              </div>
            </div>
            <div className="ml-auto lg:ml-[10%]">
              <button className="text-red-500 border border-red-500 p-1 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
