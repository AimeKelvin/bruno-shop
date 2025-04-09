const Order = require('../models/Order');

const createOrder = async (req, res) => {
  const { orderItems, totalPrice } = req.body;
  if (!orderItems || orderItems.length === 0)
    return res.status(400).json({ message: 'No order items' });

  const order = new Order({
    user: req.user._id,
    orderItems,
    totalPrice,
  });

  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
};

const getOrdersByUser = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate('orderItems.product');
  res.json(orders);
};

const getAllOrders = async (req, res) => {
  const orders = await Order.find({}).populate('user', 'name email');
  res.json(orders);
};

module.exports = {
  createOrder,
  getOrdersByUser,
  getAllOrders,
};
