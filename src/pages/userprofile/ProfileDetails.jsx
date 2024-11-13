import { Edit2 } from "lucide-react";
import React from "react";

const ProfileDetails = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Navigation Tabs */}
      <div className="flex justify-center items-center">
        <div className="mb-6 p-8 max-w-md w-full ">
          <div className="flex gap-2 justify-center">
            <button className="px-4 py-2 border-b-2 border-emerald-500 text-emerald-500 bg-emerald-100 font-medium">
              Profile Details
            </button>
            <button className="px-4 py-2 text-gray-600">Saved Jobs</button>
          </div>
        </div>
      </div>

      {/* Profile Header */}
      <div className="flex items-center justify-between p-6 border rounded-lg mb-6">
        <div className="flex items-center gap-4">
          <img
            src="/api/placeholder/80/80"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">Phill Forden</h2>
            <div className="flex gap-8 mt-2 text-sm text-gray-600">
              <div>
                <span className="font-medium">Overall Exp.</span>
                <p>10-15 yrs</p>
              </div>
              <div>
                <span className="font-medium">Last Login</span>
                <p>5 hours ago</p>
              </div>
            </div>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-md">
          <Edit2 size={16} />
          Edit
        </button>
      </div>

      {/* Personal Information */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="flex items-center gap-2 text-lg font-medium">
            <span className="text-gray-600">Personal Information</span>
          </h3>
          <button className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-md">
            <Edit2 size={16} />
            Edit
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6 p-6 border rounded-lg">
          <div>
            <p className="text-sm text-gray-600 mb-1">First Name</p>
            <p className="font-medium">Phill</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Last Name</p>
            <p className="font-medium">Forden</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Age</p>
            <p className="font-medium">26 Years</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Email Address</p>
            <p className="font-medium">phillforden01@gmail.com</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Phone Number</p>
            <p className="font-medium">+49 1478 51478547</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Gender</p>
            <p className="font-medium">Male</p>
          </div>
        </div>
      </div>

      {/* Location Information */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="flex items-center gap-2 text-lg font-medium">
            <span className="text-gray-600">Location Information</span>
          </h3>
          <button className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-md">
            <Edit2 size={16} />
            Edit
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6 p-6 border rounded-lg">
          <div>
            <p className="text-sm text-gray-600 mb-1">Country</p>
            <p className="font-medium">Germany</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">City</p>
            <p className="font-medium">Berlin</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Zip Code</p>
            <p className="font-medium">10054</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Street</p>
            <p className="font-medium">Berliner Straße</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">House Number</p>
            <p className="font-medium">24</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Apartment</p>
            <p className="font-medium">3A</p>
          </div>
        </div>
      </div>

      {/* Account Information */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="flex items-center gap-2 text-lg font-medium">
            <span className="text-gray-600">Account Information</span>
          </h3>
          <button className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-md">
            <Edit2 size={16} />
            Edit
          </button>
        </div>
        <div className="p-6 border rounded-lg">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-block w-12 h-8 bg-gray-800 rounded"></span>
                <span className="font-medium">Account 01</span>
                <span className="text-gray-600">**** **** **** 1141</span>
                <span className="text-gray-600">12/26</span>
              </div>
              <button className="text-red-500">
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
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-block w-12 h-8 bg-gray-800 rounded"></span>
                <span className="font-medium">Account 02</span>
                <span className="text-gray-600">**** **** **** 1241</span>
                <span className="text-gray-600">12/26</span>
              </div>
              <button className="text-red-500">
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
