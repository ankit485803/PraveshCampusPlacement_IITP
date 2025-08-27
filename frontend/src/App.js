


// App.js

import React from "react";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterInteractive from "./pages/RegisterInteractive"; // Adjust path if needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterInteractive />} />
      </Routes>
    </Router>
  );
}

export default App;
