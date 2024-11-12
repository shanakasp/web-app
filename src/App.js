import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Importing necessary components from react-router-dom
import Header from "./components/Header.jsx";
import LandingPage from "./pages/Landingpage/LandingPage";
import Jobs from "./pages/jobs/Jobs.jsx"; // Assuming you have a Jobs component

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />{" "}
          <Route path="/jobs" element={<Jobs />} />{" "}
          {/* Using element prop for Route */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
