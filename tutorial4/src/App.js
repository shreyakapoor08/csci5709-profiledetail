import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import ProfileListingPage from './ProfileListingPage';
import ProfileDetailPage from './ProfileDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<ProfileListingPage />} />
        <Route path="/profile/:id" element={<ProfileDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
