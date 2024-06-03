import React, { useState } from 'react';
import axios from 'axios';

function AddMenuForm() {
  const [date, setDate] = useState('');
  const [options, setOptions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/menu/add', {
        date,
        options: options.split(',').map(option => option.trim()) // Convert comma-separated string to an array of options
      });

      console.log('Menu added successfully:', response.data);
      // Optionally, provide feedback to the user
    } catch (error) {
      console.error('Error adding menu:', error);
      // Optionally, display an error message to the user
    }
  };

  return (
    <div>
      <h2>Add Menu</h2>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <br />
        <label>Options (comma-separated):</label>
        <input type="text" value={options} onChange={(e) => setOptions(e.target.value)} required />
        <br />
        <button type="submit">Add Menu</button>
      </form>
    </div>
  );
}

export default AddMenuForm;
