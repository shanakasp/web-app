import React, { useState } from "react";
import ProfileDetails from "./ProfileDetails";

const App = () => {
  const [currentView, setCurrentView] = useState("savedJobs");

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div>
      <button onClick={() => handleViewChange("savedJobs")}>Saved Jobs</button>
      <button onClick={() => handleViewChange("profileDetails")}>
        Profile Details
      </button>

      <ProfileDetails />
    </div>
  );
};

export default App;
