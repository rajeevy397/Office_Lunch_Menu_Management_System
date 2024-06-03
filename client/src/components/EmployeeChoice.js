import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeChoice = () => {
  const [allChoices, setAllChoices] = useState([]);
  const [todayChoices, setTodayChoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChoices = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/employee/choices'
        );
        setAllChoices(response.data);

        const today = new Date().toISOString().split('T')[0];
        const todayChoices = response.data.filter(
          (choice) => choice.date === today
        );
        setTodayChoices(todayChoices);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchChoices();
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Employee Choices</h1>
      {loading && <p>Loading choices...</p>}
      {error && <p>Error fetching choices: {error.message}</p>}

      <h2>All Employee Choices</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Choices</th>
          </tr>
        </thead>
        <tbody>
          {allChoices.map((choice, index) => (
            <tr key={index}>
              <td>{choice.name}</td>
              <td>{choice.date}</td>
              <td>
                <div className="d-flex flex-wrap">
                  {choice.lunchChoices.map((option, idx) => (
                    <span
                      key={idx}
                      className="badge rounded-pill bg-primary mx-1 my-1"
                    >
                      {option}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Today's Employee Choices</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Choices</th>
          </tr>
        </thead>
        <tbody>
          {todayChoices.map((choice, index) => (
            <tr key={index}>
              <td>{choice.name}</td>
              <td>{choice.date}</td>
              <td>
                <div className="d-flex flex-wrap">
                  {choice.lunchChoices.map((option, idx) => (
                    <span
                      key={idx}
                      className="badge rounded-pill bg-primary mx-1 my-1"
                    >
                      {option}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeChoice;
