
import React from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

interface CartWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartWidget: React.FC<CartWidgetProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  
  const subtotal = getTotalPrice();
  
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Cart Sidebar */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-background z-50 shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Cart Header */}
          <div className="border-b border-border p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag size={20} />
              <h2 className="font-medium">Your Cart ({cartItems.length})</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-charcoal hover:text-charcoal-light transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={32} className="text-muted-foreground mb-2" />
                <p className="text-charcoal">Your cart is empty</p>
                <button 
                  onClick={onClose}
                  className="mt-4 text-sm underline text-charcoal-light hover:text-charcoal transition-colors"
                >
                  Continue shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex space-x-4 py-2 border-b border-border last:border-0">
                    <div className="w-20 h-20 bg-muted overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="flex items-center mt-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center border border-border"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center border border-border"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <p className="font-medium">${item.price.toFixed(2)}</p>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-charcoal-light hover:text-charcoal transition-colors"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Cart Footer */}
          <div className="border-t border-border p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-charcoal-light text-sm mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <Link 
              to="/cart"
              className="btn-primary w-full mb-2 block text-center"
              onClick={onClose}
            >
              View Cart
            </Link>
            <button 
              onClick={onClose}
              className="btn-outline w-full"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartWidget;
