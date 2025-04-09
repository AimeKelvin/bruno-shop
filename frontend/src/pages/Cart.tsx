
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useCart } from '../contexts/CartContext';
import { Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const isMobile = useIsMobile();
  const subtotal = getTotalPrice();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8 md:py-12">
        <div className="container-custom">
          <h1 className="font-serif text-3xl md:text-4xl mb-6">Your Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="py-16 text-center">
              <div className="flex justify-center mb-4">
                <ShoppingBag size={48} className="text-muted-foreground" />
              </div>
              <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-charcoal-light mb-6">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Link to="/shop" className="btn-primary">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="flex-1">
                <div className={`border border-border ${isMobile ? '' : 'overflow-hidden'}`}>
                  {/* Header (hidden on mobile) */}
                  {!isMobile && (
                    <div className="grid grid-cols-12 gap-4 p-4 bg-secondary border-b border-border">
                      <div className="col-span-6">
                        <h3 className="font-medium">Product</h3>
                      </div>
                      <div className="col-span-2 text-center">
                        <h3 className="font-medium">Price</h3>
                      </div>
                      <div className="col-span-2 text-center">
                        <h3 className="font-medium">Quantity</h3>
                      </div>
                      <div className="col-span-2 text-right">
                        <h3 className="font-medium">Total</h3>
                      </div>
                    </div>
                  )}
                  
                  {/* Cart Items */}
                  <ul>
                    {cartItems.map((item) => (
                      <li key={item.id} className="border-b border-border last:border-0">
                        {/* Desktop Layout */}
                        {!isMobile ? (
                          <div className="grid grid-cols-12 gap-4 p-4 items-center">
                            {/* Product */}
                            <div className="col-span-6 flex items-center space-x-4">
                              <div className="w-20 h-20 overflow-hidden bg-muted">
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-medium">{item.name}</h3>
                                <button 
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-charcoal-light hover:text-charcoal transition-colors text-sm flex items-center mt-1"
                                >
                                  <Trash2 size={14} className="mr-1" />
                                  <span>Remove</span>
                                </button>
                              </div>
                            </div>
                            
                            {/* Price */}
                            <div className="col-span-2 text-center">
                              <p>${item.price.toFixed(2)}</p>
                            </div>
                            
                            {/* Quantity */}
                            <div className="col-span-2">
                              <div className="flex items-center justify-center">
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-8 h-8 flex items-center justify-center border border-border"
                                >
                                  -
                                </button>
                                <span className="w-10 text-center">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-8 h-8 flex items-center justify-center border border-border"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            
                            {/* Total */}
                            <div className="col-span-2 text-right">
                              <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                          </div>
                        ) : (
                          /* Mobile Layout */
                          <div className="p-4">
                            <div className="flex space-x-4">
                              <div className="w-20 h-20 overflow-hidden bg-muted">
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-medium">{item.name}</h3>
                                <p className="text-sm text-charcoal-light">${item.price.toFixed(2)}</p>
                                
                                <div className="flex items-center justify-between mt-2">
                                  <div className="flex items-center">
                                    <button 
                                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                      className="w-7 h-7 flex items-center justify-center border border-border"
                                    >
                                      -
                                    </button>
                                    <span className="w-8 text-center">{item.quantity}</span>
                                    <button 
                                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                      className="w-7 h-7 flex items-center justify-center border border-border"
                                    >
                                      +
                                    </button>
                                  </div>
                                  
                                  <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-charcoal-light hover:text-charcoal transition-colors"
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                </div>
                                
                                <div className="flex justify-end mt-2">
                                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:w-96">
                <div className="border border-border p-6">
                  <h2 className="text-xl font-medium mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>Calculated at checkout</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes</span>
                      <span>Calculated at checkout</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button className="btn-primary w-full mb-3">
                    Proceed to Checkout
                  </button>
                  
                  <Link to="/shop" className="btn-outline w-full block text-center">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
