import { Info, MapPin } from "lucide-react";
import React from "react";
import visa from "../../Images/Visa.png";
import pen from "../../Images/pen.png";
import userImg from "../../Images/userimg.png";
const ProfileDetails = () => {
  return (
    <div>
      {/* Navigation Tabs */}
      <div className="flex items-center justify-between p-6 border rounded-lg mb-6">
        {/* First Part: Image and Name */}
        <div className="flex items-center gap-4 w-1/4">
          <img src={userImg} alt="Profile" className="w-16 h-16 rounded-full" />
          <h2 className="text-xl font-semibold">Phill Forden</h2>
        </div>

        {/* Second Part: Overall Experience */}
        <div className="w-1/4 text-center">
          <span className="font-medium">Overall Exp.</span>
          <p>10-15 yrs</p>
        </div>

        {/* Third Part: Last Login */}
        <div className="w-1/4 text-center gap-4">
          <span className="font-medium">Last Login</span>
          <p>5 hours ago</p>
        </div>

        {/* Final Part: Edit Button */}
        <div className="ml-auto">
          <button className="flex items-center gap-2 px-4 py-2 text-white bg-[#049c64] rounded-md">
            <img src={pen} alt="Edit" className="w-4 h-4" />
            Edit
          </button>
        </div>
      </div>

      {/* Personal Information */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="flex items-center gap-2 text-lg font-medium">
            <Info className="text-gray-600" /> {/* Info icon before text */}
            <span className="text-gray-600">Personal Information</span>
          </h3>
        </div>

        <div className="relative p-6 border rounded-lg">
          {/* Edit Button: Positioned at the top right */}
          <div className="absolute top-6 right-6">
            <button className="flex items-center gap-2 px-4 py-2 text-white bg-[#049c64] rounded-md">
              <img src={pen} alt="Edit" className="w-4 h-4" />
              Edit
            </button>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-3 gap-6">
            {/* First Name */}
            <div>
              <p className="text-sm text-gray-600 mb-1">First Name</p>
              <p className="font-medium">Phill</p>
            </div>

            {/* Last Name */}
            <div>
              <p className="text-sm text-gray-600 mb-1">Last Name</p>
              <p className="font-medium">Forden</p>
            </div>

            {/* Age */}
            <div>
              <p className="text-sm text-gray-600 mb-1">Age</p>
              <p className="font-medium">26 Years</p>
            </div>

            {/* Email Address */}
            <div>
              <p className="text-sm text-gray-600 mb-1">Email Address</p>
              <p className="font-medium">phillforden01@gmail.com</p>
            </div>

            {/* Phone Number */}
            <div>
              <p className="text-sm text-gray-600 mb-1">Phone Number</p>
              <p className="font-medium">+49 1478 51478547</p>
            </div>

            {/* Gender */}
            <div>
              <p className="text-sm text-gray-600 mb-1">Gender</p>
              <p className="font-medium">Male</p>
            </div>
          </div>
        </div>
      </div>

      {/* Location Information */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="flex items-center gap-2 text-lg font-medium">
            <MapPin className="text-gray-600" />
            <span className="text-gray-600">Location Information</span>
          </h3>
        </div>
        <div className="relative p-6 border rounded-lg">
          {/* Edit Button: Positioned at the top right */}
          <div className="absolute top-6 right-6">
            <button className="flex items-left gap-2 px-4 py-2 text-white bg-[#049c64] rounded-md">
              <img src={pen} alt="Edit" className="w-4 h-4" />
              Edit
            </button>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-3 gap-6">
            {/* First Name */}
            <div>
              <p className="text-sm text-gray-600 mb-1">Country</p>
              <p className="font-medium">Germany</p>
            </div>

            {/* Last Name */}
            <div>
              <p className="text-sm text-gray-600 mb-1">City</p>
              <p className="font-medium">Berlin</p>
            </div>

            {/* Age */}
            <div>
              <p className="text-sm text-gray-600 mb-1">Zip Code</p>
              <p className="font-medium">10094</p>
            </div>

            {/* Email Address */}
            <div>
              <p className="text-sm text-gray-600 mb-1">Street</p>
              <p className="font-medium">Berliner Stralie</p>
            </div>

            {/* Phone Number */}
            <div>
              <p className="text-sm text-gray-600 mb-1">House Number</p>
              <p className="font-medium">24</p>
            </div>

            {/* Gender */}
            <div>
              <p className="text-sm text-gray-600 mb-1">Apartment</p>
              <p className="font-medium">3A</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 border rounded-lg">
        <div className="space-y-4">
          {/* Account 01 */}
          <div className="flex items-center">
            <div className="flex items-center gap-3 font-medium">
              <img src={visa} alt="Description" className="w-8 h-8 rounded" />
              <div className="flex flex-col">
                <span className="text-[#979797]">Account 01</span>
                <div className="flex items-center gap-4">
                  {" "}
                  {/* Added gap here */}
                  <span className="text-[#333333]">**** **** **** 1141</span>
                  <span className="text-[#333333]">12/26</span>
                </div>
              </div>
            </div>
            {/* Delete Icon - Moved to the left */}
            <div className="ml-[10%]">
              {" "}
              {/* Added margin-left */}
              <button className="text-red-500 border border-red-500 p-1 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
            <div className="flex items-center gap-3 font-medium">
              <img src={visa} alt="Description" className="w-8 h-8 rounded" />
              <div className="flex flex-col">
                <span className="text-[#979797]">Account 02</span>
                <div className="flex items-center gap-4">
                  {" "}
                  {/* Added gap here */}
                  <span className="text-[#333333]">**** **** **** 1241</span>
                  <span className="text-[#333333]">12/26</span>
                </div>
              </div>
            </div>
            {/* Delete Icon - Moved to the left */}
            <div className="ml-[10%]">
              {" "}
              {/* Added margin-left */}
              <button className="text-red-500 border border-red-500 p-1 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
