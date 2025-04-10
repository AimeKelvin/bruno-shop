
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import CartWidget from '../shop/CartWidget';
import { useCart } from '@/contexts/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems, clearCart, addToCart, removeFromCart } = useCart()
  const [totalCartItems, setTotalCartItems] = useState(0)

  useEffect(() => {
    const totalItems = getTotalItems()
    setTotalCartItems(totalItems)
  }, [addToCart, clearCart, removeFromCart])

  return (
    <header className="py-4 border-b border-border bg-background z-50 sticky top-0">
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Logo */}
          <div className="flex-1 lg:flex-initial text-center lg:text-left">
            <Link to="/" className="font-serif text-xl md:text-2xl">
              MAISON
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/shop" className="navbar-link">Shop</Link>
            <Link to="/shop" className="navbar-link">Collections</Link>
            <Link to="/shop" className="navbar-link">About</Link>
          </div>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="text-charcoal hover:text-charcoal-light transition-colors">
              <Search size={20} />
            </button>
            <button 
              aria-label="Cart" 
              className="text-charcoal hover:text-charcoal-light transition-colors relative"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-charcoal text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalCartItems}
              </span>
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/shop" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Shop</Link>
              <Link to="/shop" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Collections</Link>
              <Link to="/shop" className="navbar-link" onClick={() => setIsMenuOpen(false)}>About</Link>
            </div>
          </div>
        )}
      </div>
      
      {/* Cart Sidebar */}
      <CartWidget isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Navbar;
