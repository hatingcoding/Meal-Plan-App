const express = require('express');
const router = express.Router();
const {getMenuItem, addMenuItem, updateMenuItem, deleteMenuItem} = require('../controllers/menuItemController');

// Read
router.get('/', getMenuItem);

// Create
router.post('/', addMenuItem);

// Update
router.put('/:id', updateMenuItem);

// Delete
router.delete('/:id', deleteMenuItem);

module.exports = router;
