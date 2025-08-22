

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import OfficerDashboard from "./pages/OfficerDashboard";
import Jobs from "./pages/Jobs";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

// import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Role-based dashboards */}
        <Route
          path="/student"
          element={<PrivateRoute><StudentDashboard /></PrivateRoute>}
        />
        <Route
          path="/recruiter"
          element={<PrivateRoute><RecruiterDashboard /></PrivateRoute>}
        />
        <Route
          path="/officer"
          element={<PrivateRoute><OfficerDashboard /></PrivateRoute>}
        />
        <Route
          path="/jobs"
          element={<PrivateRoute><Jobs /></PrivateRoute>}
        />
      </Routes>
    </Router>
  );
}

export default App;
