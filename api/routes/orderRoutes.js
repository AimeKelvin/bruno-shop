const express = require('express');
const router = express.Router();
const { createOrder, getAllOrders } = require('../controllers/orderController');
const { protect, admin } = require('../middleware/auth');

router.post('/', protect, createOrder);
router.get('/', protect, admin, getAllOrders);

module.exports = router;
