const express = require('express');
const menuController = require('../controllers/menuController');

const router = express.Router();

// Route to add a new menu option
router.post('/add', menuController.addMenu);

// Route to view all menu options
router.get('/view', menuController.viewMenus);

module.exports = router;
