import React, { useState } from 'react';
import axios from 'axios';
import EmployeeChoice from '../components/EmployeeChoice';
import AdminMenuEdit from '../components/AdminMenuEdit';

function Admin() {
  const [date, setDate] = useState('');
  const [options, setOptions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/menu/add', {
        date,
        options: options.split(',').map((option) => option.trim()), // Convert comma-separated string to an array of options
      });

      console.log('Menu added successfully:', response.data);
      // Optionally, provide feedback to the user
    } catch (error) {
      console.error('Error adding menu:', error);
      // Optionally, display an error message to the user
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Add Menu</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date:
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="options" className="form-label">
                Options (comma-separated):
              </label>
              <input
                type="text"
                className="form-control"
                id="options"
                value={options}
                onChange={(e) => setOptions(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Menu
            </button>
          </form>
        </div>
        <div className="col-md-6"> {/* Adjust the size accordingly */}
          <AdminMenuEdit />
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-6">
          <EmployeeChoice />
        </div>
      </div>
    </div>
  );
}

export default Admin;
