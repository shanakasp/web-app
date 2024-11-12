import React, { useState } from "react";
import ProfileDetails from "./ProfileDetails";
import SavedJobs from "./SavedJobs";

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

      <main>
        {currentView === "savedJobs" ? <SavedJobs /> : <ProfileDetails />}
      </main>
    </div>
  );
};

export default App;
