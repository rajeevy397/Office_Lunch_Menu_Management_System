const { Menu, Employee } = require('../models');

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

// Delete a menu
const deleteMenu = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Find the menu to get its date
    const menu = await Menu.findOne({ where: { id } });

    if (!menu) {
      return res.status(404).json({ error: 'Menu not found' });
    }

    // Delete the menu
    await Menu.destroy({ where: { id } });

    // Delete the corresponding employee choices based on the menu's date
    await Employee.destroy({ where: { date: menu.date } });

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting menu:', error);
    res.status(500).json({ error: 'Failed to delete menu' });
  }
};


// Edit a menu
const editMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, options } = req.body;
    const updatedMenu = await Menu.update(
      { date, options },
      { where: { id }, returning: true, plain: true }
    );
    res.status(200).json(updatedMenu[1]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update menu' });
  }
};

module.exports = {
    addMenu,
    viewMenus,
    deleteMenu,
    editMenu
};
