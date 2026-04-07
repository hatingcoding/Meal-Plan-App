const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    itemname: { type: String, required: true },
    description: { type: String },
    category: { type: String },
    available: { type: Boolean, default: true }});

module.exports = mongoose.model('MenuItem', menuItemSchema);