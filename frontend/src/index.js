



// src/App.js

import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterDashboardInteractive from './pages/RegisterInteractive';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterDashboardInteractive />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
