import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeePage = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [employeeName, setEmployeeName] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [todaysMenu, setTodaysMenu] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get('http://localhost:5000/menu/view');
        setMenu(response.data);
        setLoading(false);
        const today = new Date().toISOString().split('T')[0];
        const todayMenu = response.data.find((item) => item.date === today);
        setTodaysMenu(todayMenu);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const handleRowClick = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const handleMakeChoiceClick = () => {
    setShowForm(true);
  };

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter((item) => item !== option)
        : [...prevSelectedOptions, option]
    );
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/employee/select', {
        name: employeeName,
        lunchChoices: selectedOptions,
        date: new Date().toISOString().split('T')[0], // Use today's date
      });
      alert('Choices submitted successfully!');
      setShowForm(false);
      setEmployeeName('');
      setSelectedOptions([]);
    } catch (error) {
      alert('Error submitting choices. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Menu</h1>
      {loading && <p>Loading menu...</p>}
      {error && <p>Error fetching menu: {error.message}</p>}

      <h2>All Menu Options</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((item) => (
            <React.Fragment key={item.id}>
              <tr
                onClick={() => handleRowClick(item.id)}
                style={{ cursor: 'pointer' }}
              >
                <td>{item.date}</td>
                <td>{item.options.join(', ')}</td>
              </tr>
              {expandedRow === item.id && (
                <tr>
                  <td colSpan="2">
                    <ul className="list-group">
                      {item.options.map((option, index) => (
                        <li key={index} className="list-group-item">
                          {option}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <h2>Today's Menu</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {todaysMenu && (
            <tr>
              <td>{todaysMenu.date}</td>
              <td>{todaysMenu.options.join(', ')}</td>
            </tr>
          )}
        </tbody>
      </table>

      <button className="btn btn-primary my-4" onClick={handleMakeChoiceClick}>
        Make Choice
      </button>

      {showForm && todaysMenu && (
        <div className="card my-4">
          <div className="card-body">
            <h5 className="card-title">Make Your Choice</h5>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="employeeName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="employeeName"
                  value={employeeName}
                  onChange={(e) => setEmployeeName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Select Menu Options</label>
                {todaysMenu.options.map((option, index) => (
                  <div className="form-check" key={index}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`option-${index}`}
                      value={option}
                      checked={selectedOptions.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`option-${index}`}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeePage;
