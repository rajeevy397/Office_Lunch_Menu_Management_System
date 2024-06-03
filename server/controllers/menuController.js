const { Menu } = require('../models');

// Add a new menu option
const addMenu = async (req, res) => {
    try {
        const { date, options } = req.body;
        const newMenu = await Menu.create({ date, options });
        res.status(201).json(newMenu);
    } catch (error) {
        console.error('Error adding menu:', error);
        res.status(500).json({ error: 'Failed to add menu' });
    }
};

// View all menu options
const viewMenus = async (req, res) => {
    try {
        const menus = await Menu.findAll();
        console.log(menus)
        res.status(200).json(menus);
    } catch (error) {
        console.error('Error retrieving menus:', error);
        res.status(500).json({ error: 'Failed to retrieve menus' });
    }
};

module.exports = {
    addMenu,
    viewMenus,
};
