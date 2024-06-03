import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EmployeePage from './pages/EmployeePage';
import Admin from './pages/Admin';

function App() {
  return (
    <>
      {/* Wrap your routes in a <Routes> component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/employee" element={<EmployeePage />} />

        {/* Add more routes for additional pages */}
      </Routes>
    </>
  );
}

export default App;
