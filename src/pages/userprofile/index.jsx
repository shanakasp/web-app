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
    <div className="max-w-full mt-[12%] lg:mt-[6%] xl:mt-[4%] sm:mt-[8%] ">
      <div className="w-6xl  mx-auto px-[7%] ">
        <hr class="relative left-1/2 right-1/2 -mx-[49vw] w-[98vw] border-t-2 border-gray-200 mt-3" />
        {/* Navigation Tabs */}
        <div className="flex justify-center items-center">
          <div className="pt-8 max-w-md w-full">
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => handleTabClick("profile")}
                className={`px-4 pt-2 border-b-2 text-base font-medium ${
                  activeTab === "profile"
                    ? "border-emerald-500 border-solid text-[#049c64] bg-emerald-100"
                    : "border-none text-[#979797]" // Non-selected button color
                }`}
              >
                Profile Details
              </button>
              <button
                onClick={() => handleTabClick("savedJobs")}
                className={`px-4 pt-2 border-b-2 text-base font-medium ${
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
        <hr class="relative left-1/2 right-1/2 -mx-[49vw] w-[98vw] border-t-2 border-gray-200 " />

        {/* Render the active component based on the state */}
        <div className="mt-6">
          {activeTab === "profile" && <ProfileDetails />}
          {activeTab === "savedJobs" && <SavedJobs />}
        </div>
      </div>
    </div>
  );
};

export default Index;
