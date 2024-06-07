# Office Lunch Menu

This project is a full-stack application that allows employees to view and choose lunch options. The backend is built with Node.js, Express, and PostgreSQL, while the frontend is built with React.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm are installed on your machine.
- PostgreSQL is installed and running.
- Postman (optional, for testing API endpoints).

## Installation

Follow these steps to get your development environment set up:

### Backend

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/office-lunch-menu.git
    cd office-lunch-menu/backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up the PostgreSQL database:
    - Create a new PostgreSQL database named `office_lunch_menu_db`.
    - Update the `config/config.json` file with your PostgreSQL credentials:
      ```json
      {
        "development": {
          "username": "postgres",
          "password": "123456",
          "database": "office_lunch_menu_db",
          "host": "127.0.0.1",
          "dialect": "postgres"
        }
      }
      ```

4. Run database migrations to set up the tables:
    ```sh
    npx sequelize-cli db:migrate
    ```

5. Start the backend server:
    ```sh
    npm start
    ```

### Frontend

1. Navigate to the `frontend` directory:
    ```sh
    cd ../frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the frontend development server:
    ```sh
    npm start
    ```

## Running the Application

After setting up both the backend and frontend, you can access the application at `http://localhost:3000`.

## API Endpoints

### Menu

- **GET /menu**: Retrieve all menu options.
- **POST /menu/add**: Add a new menu option.

### Employees

- **GET /employees**: Retrieve all employees and their lunch choices.
- **POST /employees/add**: Add a new employee and their lunch choice.

## Folder Structure

### Backend
backend/
├── config/
│ └── config.json
├── controllers/
│ ├── menuController.js
│ └── employeeController.js
├── models/
│ ├── index.js
│ ├── menu.js
│ └── employee.js
├── routes/
│ ├── menuRoutes.js
│ └── employeeRoutes.js
├── migrations/
│ ├── YYYYMMDD-create-menu.js
│ └── YYYYMMDD-create-employee.js
├── server.js
└── package.json


### Frontend
frontend/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── Menu.js
│ │ └── Employee.js
│ ├── pages/
│ │ ├── Home.js
│ │ ├── MenuPage.js
│ │ └── EmployeePage.js
│ ├── App.js
│ ├── index.js
│ └── ...
└── package.json


## Usage

### Adding Menu Options

To add menu options, navigate to the `/menu/add` route and fill in the details of the menu option.

### Viewing Menu Options

To view the menu options, navigate to the `/menu` route. The menu options will be listed.

### Adding Employee Lunch Choices

To add employee lunch choices, navigate to the `/employees/add` route and fill in the employee's name and lunch choice.

### Viewing Employee Lunch Choices

To view the employee lunch choices, navigate to the `/employees` route. The list of employees and their lunch choices will be displayed.

## Technologies Used

- **Backend**: Node.js, Express, PostgreSQL, Sequelize
- **Frontend**: React, Axios
- **Tools**: Nodemon, Postman

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.


## Demo

Watch a demo of the application here:

[![Demo Video](https://img.youtube.com/vi/X3wkWX_XlsM/0.jpg)](https://youtu.be/X3wkWX_XlsM)

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



