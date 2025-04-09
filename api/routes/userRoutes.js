const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { getOrdersByUser } = require('../controllers/orderController');

router.get('/orders', protect, getOrdersByUser);

module.exports = router;
