const express = require('express');
const router = express.Router();
const { createCheckout } = require('../controllers/paymentController');
const { protect } = require('../middleware/auth');

router.post('/checkout', protect, createCheckout);

module.exports = router;
