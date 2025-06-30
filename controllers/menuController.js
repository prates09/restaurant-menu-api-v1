const MenuItem = require('../models/MenuItem');

// GET all menu items
exports.getAllItems = async (req, res) => {
  const items = await MenuItem.find();
  res.json(items);
};

// POST new menu item
exports.createItem = async (req, res) => {
  const newItem = new MenuItem(req.body);
  await newItem.save();
  res.status(201).json(newItem);
};

// PUT update menu item
exports.updateItem = async (req, res) => {
  const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

// DELETE menu item
exports.deleteItem = async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item deleted' });
};
