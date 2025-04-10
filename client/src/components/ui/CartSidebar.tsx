
import React from "react";
import { useCart } from "@/hooks/useCart";
import { X, ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import {Button} from "./Button";

const CartSidebar: React.FC = () => {
  const { 
    items, 
    isCartOpen, 
    toggleCart, 
    removeItem, 
    updateQuantity, 
    totalItems,
    subtotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity animate-fade-in" 
        onClick={toggleCart}
      />
      
      {/* Cart sidebar */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white z-50 shadow-xl flex flex-col transform transition-transform animate-slide-up">
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center">
            <ShoppingBag className="mr-2" size={20} />
            <h2 className="text-xl font-medium">Your Cart ({totalItems})</h2>
          </div>
          <button 
            onClick={toggleCart}
            className="p-2 hover:bg-elegant-beige/50 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={64} className="text-elegant-gray/50 mb-4" />
              <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
              <p className="text-elegant-gray mb-6">Looks like you haven't added anything to your cart yet.</p>
              <Button onClick={toggleCart} variant="primary">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => {
                const { product, quantity } = item;
                return (
                  <li key={product.id} className="flex border-b pb-4">
                    <div className="w-20 h-24 bg-elegant-beige/20 mr-4 flex-shrink-0">
                      <img 
                        src={product.images[0]} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{product.name}</h3>
                        <button 
                          onClick={() => removeItem(product.id)}
                          className="text-elegant-gray hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <p className="text-elegant-gray text-sm mb-2">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(product.price)}
                      </p>
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="p-1 border rounded-md hover:bg-elegant-beige/50 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="mx-2 w-8 text-center">{quantity}</span>
                        <button 
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="p-1 border rounded-md hover:bg-elegant-beige/50 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        
        {items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Subtotal</span>
              <span className="text-xl font-medium">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(subtotal)}
              </span>
            </div>
            <p className="text-sm text-elegant-gray">Shipping and taxes calculated at checkout</p>
            <Button className="w-full" size="lg">
              Checkout
            </Button>
            <Button variant="outline" className="w-full" size="lg" onClick={toggleCart}>
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
