const express = require('express');
const router = express.Router();
const controller = require('../controllers/menuController');

router.get('/', controller.getAllItems);
router.post('/', controller.createItem);
router.put('/:id', controller.updateItem);
router.delete('/:id', controller.deleteItem);

module.exports = router;
