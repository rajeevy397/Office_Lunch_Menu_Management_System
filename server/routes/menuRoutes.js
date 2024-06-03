const express = require('express');
const menuController = require('../controllers/menuController');

const router = express.Router();

// Route to add a new menu option
router.post('/add', menuController.addMenu);

// Route to view all menu options
router.get('/view', menuController.viewMenus);

// Route to delete a menu
router.delete('/delete/:id', menuController.deleteMenu);

// Route to edit a menu
router.put('/edit/:id', menuController.editMenu);

module.exports = router;
