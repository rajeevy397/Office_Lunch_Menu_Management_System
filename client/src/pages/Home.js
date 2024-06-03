import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import officeimage from '../../src/img/office.jpg'

const HomePage = () => {
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
            <Link to="/admin" className="btn btn-primary me-2">
              I am an Admin
            </Link>
            <Link to="/employee" className="btn btn-primary">
              I am an Employee
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
