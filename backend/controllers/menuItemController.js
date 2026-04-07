const MenuItem = require('../models/MenuItem');

// Read Menu Item
const getMenuItem = async (req, res) => {
  try {
    const menuItem = await MenuItem.find();
    res.json(menuItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Menu Item
const addMenuItem = async (req, res) => {
    const { name, description, price, category, available, date } = req.body;

    try {const menuItem = await MenuItem.create({
        name,
        description,
        price,
        category,
        available,
        date
        });
        res.status(201).json(menuItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Menu Item
const updateMenuItem = async (req, res) => {
    const { name, description, price, category, available, date } = req.body;

    try {
        const menuItem = await MenuItem.findById(req.params.id);
        if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });

        menuItem.name = name || menuItem.name;
        menuItem.description = description || menuItem.description;
        menuItem.price = price ?? menuItem.price;
        menuItem.category = category || menuItem.category;
        menuItem.available = available ?? menuItem.available;
        menuItem.date = date || menuItem.date;

        const updatedMenuItem = await menuItem.save();
        res.json(updatedMenuItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Menu Item
const deleteMenuItem = async (req, res) => {
    try {
        const menuItem = await MenuItem.findById(req.params.id);
        if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });

        await menuItem.deleteOne();
        res.json({ message: 'Menu item deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {getMenuItem, addMenuItem, updateMenuItem, deleteMenuItem
};