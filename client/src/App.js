import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import EmployeePage from './pages/EmployeePage';

function App() {
  return (
    <>
        {/* Wrap your routes in a <Routes> component */}
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/menu" element={<MenuPage />} />
          <Route  path="/employee" component={<EmployeePage />} />
          {/* Add more routes for additional pages */}
        </Routes>
    </>
  );
}

export default App;
