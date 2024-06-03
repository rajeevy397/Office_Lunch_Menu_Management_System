import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import officeimage from '../../src/img/office.jpg';

const HomePage = () => {
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setPassword('');
    setErrorMessage('');
  };

  const handleLogin = () => {
    if (password === 'admin') {
      // Password is correct, allow navigation to admin page
      window.location.href = '/admin'; // Or use React Router's history.push('/admin');
    } else {
      // Password is incorrect, display error message
      setErrorMessage('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1 className="mt-4">
        Welcome to the Office Lunch Menu Management System
      </h1>
      <p className="lead">
        Manage your office lunch menu efficiently with our system.
      </p>
      <div className="row">
        <div className="col-md-6">
          <img
            src={officeimage}
            width={400}
            alt="Office"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <p>
            This system provides a convenient way for employees to view the
            daily lunch menu and make their choices.
          </p>
          <p>
            Admins can easily manage the menu options and view employee choices.
          </p>
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-primary me-2"
            >
              I am an Admin
            </button>
            <Link to="/employee" className="btn btn-primary">
              I am an Employee
            </Link>
          </div>
        </div>
      </div>

      {/* Modal for password input */}
      {showModal && (
        <div
          className="modal show fade"
          tabIndex="-1"
          role="dialog"
          style={{ display: 'block', zIndex: '1050' }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Admin Login</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleModalClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                {errorMessage && (
                  <div className="alert alert-danger">{errorMessage}</div>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleModalClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Modal backdrop */}
      {showModal && (
        <div
          className="modal-backdrop fade show"
          style={{ zIndex: '1040' }}
        ></div>
      )}
    </div>
  );
};

export default HomePage;
