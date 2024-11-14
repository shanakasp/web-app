import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom"; // Importing necessary components from react-router-dom
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import LandingPage from "./pages/Landingpage/LandingPage";
import Jobs from "./pages/jobs/Jobs.jsx";
import LoginPage from "./pages/login/index.jsx";
import Register from "./pages/register/index.jsx";
import Search from "./pages/search/index.jsx";
import Profile from "./pages/userprofile/index.jsx";
function AppContent() {
  const location = useLocation(); // Get the current location/pathname

  // Check if the current route is the login page
  const showHeaderAndFooter =
    location.pathname !== "/login" && location.pathname !== "/register";

  return (
    <div>
      {showHeaderAndFooter && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />{" "}
        <Route path="/jobs" element={<Jobs />} />{" "}
        <Route path="/profile" element={<Profile />} />{" "}
        <Route path="/login" element={<LoginPage />} />{" "}
        <Route path="/iSearch" element={<Search />} />{" "}
        <Route path="/register" element={<Register />} />{" "}
      </Routes>
      {showHeaderAndFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
