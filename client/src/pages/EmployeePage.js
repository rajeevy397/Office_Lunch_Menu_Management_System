import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Employee from '../components/Employee';

function EmployeePage() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employee data from the backend when the component mounts
    axios.get('http://localhost:5000/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  return (
    <div>
      <h1>Employee Page</h1>
      {employees.map(employee => (
        <Employee key={employee.id} name={employee.name} lunchChoice={employee.lunchChoice} />
      ))}
    </div>
  );
}

export default EmployeePage;
