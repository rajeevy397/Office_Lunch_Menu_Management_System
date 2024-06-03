require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const cors = require('cors');

// Import routes
const menuRoutes = require('./routes/menuRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:3000',
};
// Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));

// Routes
app.use('/menu', menuRoutes);
app.use('/employee', employeeRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Office Lunch Menu Management System');
});

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
