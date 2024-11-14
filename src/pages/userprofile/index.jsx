import React, { useState } from "react";
import ProfileDetails from "./ProfileDetails"; // Assuming you have this component
import SavedJobs from "./SavedJobs"; // Assuming you have this component

const Index = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("profile");

  // Function to change active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-7xl mx-auto pt-[4%]">
      {/* Navigation Tabs */}
      <div className="flex justify-center items-center border-y-2">
        <div className="pt-8 max-w-md w-full">
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => handleTabClick("profile")}
              className={`px-4 pt-2 border-b-2 text-lg font-medium ${
                activeTab === "profile"
                  ? "border-emerald-500 border-solid text-[#049c64] bg-emerald-100"
                  : "border-none text-[#979797]" // Non-selected button color
              }`}
            >
              Profile Details
            </button>
            <button
              onClick={() => handleTabClick("savedJobs")}
              className={`px-4 pt-2 border-b-2 text-lg font-medium ${
                activeTab === "savedJobs"
                  ? "border-emerald-500 border-solid text-[#049c64] bg-emerald-100"
                  : "border-none text-[#979797]" // Non-selected button color
              }`}
            >
              Saved Jobs
            </button>
          </div>
        </div>
      </div>

      {/* Render the active component based on the state */}
      <div className="mt-6">
        {activeTab === "profile" && <ProfileDetails />}
        {activeTab === "savedJobs" && <SavedJobs />}
      </div>
    </div>
  );
};

export default Index;
