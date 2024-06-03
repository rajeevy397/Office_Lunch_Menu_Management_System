const express = require('express');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

// Route to select a lunch choice
router.post('/select', employeeController.selectLunch);

// Route to view all employee lunch choices
router.get('/choices', employeeController.viewChoices);

module.exports = router;
