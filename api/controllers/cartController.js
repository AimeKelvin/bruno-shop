const Cart = require('../models/Cart');
const Product = require('../models/Product');

const getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
  res.json(cart || { items: [] });
};

const addToCart = async (req, res) => {
  const { productId, qty } = req.body;
  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  let cart = await Cart.findOne({ user: req.user._id });
  if (!cart) cart = new Cart({ user: req.user._id, items: [] });

  const index = cart.items.findIndex((item) => item.product.toString() === productId);
  if (index > -1) {
    cart.items[index].qty += qty;
  } else {
    cart.items.push({ product: productId, qty });
  }

  await cart.save();
  res.status(200).json(cart);
};

const removeFromCart = async (req, res) => {
  const { productId } = req.params;
  const cart = await Cart.findOne({ user: req.user._id });
  if (!cart) return res.status(404).json({ message: 'Cart not found' });

  cart.items = cart.items.filter((item) => item.product.toString() !== productId);
  await cart.save();

  res.json(cart);
};

const clearCart = async (req, res) => {
  await Cart.findOneAndDelete({ user: req.user._id });
  res.json({ message: 'Cart cleared' });
};

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  clearCart
};
