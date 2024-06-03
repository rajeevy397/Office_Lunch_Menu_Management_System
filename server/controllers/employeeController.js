const { Employee } = require('../models');

// Select a lunch choice
const selectLunch = async (req, res) => {
    try {
        const { name, lunchChoice, date } = req.body;
        const newChoice = await Employee.create({ name, lunchChoice, date });
        res.status(201).json(newChoice);
    } catch (error) {
        console.error('Error selecting lunch:', error);
        res.status(500).json({ error: 'Failed to select lunch' });
    }
};

// View all employee lunch choices
const viewChoices = async (req, res) => {
    try {
        const choices = await Employee.findAll();
        res.status(200).json(choices);
    } catch (error) {
        console.error('Error retrieving choices:', error);
        res.status(500).json({ error: 'Failed to retrieve choices' });
    }
};

module.exports = {
    selectLunch,
    viewChoices,
};
