
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-sand-light pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl mb-4">MAISON</h3>
            <p className="text-charcoal-light text-sm mb-4">
              Curated minimalist essentials for the modern home and wardrobe.
            </p>
          </div>
          
          {/* Shop */}
          <div>
            <h4 className="font-medium text-charcoal mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">All Products</Link></li>
              <li><Link to="/shop" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">Best Sellers</Link></li>
              <li><Link to="/shop" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">Sale</Link></li>
            </ul>
          </div>
          
          {/* Info */}
          <div>
            <h4 className="font-medium text-charcoal mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">About Us</Link></li>
              <li><Link to="/" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">Sustainability</Link></li>
              <li><Link to="/" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">Contact</Link></li>
              <li><Link to="/" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-medium text-charcoal mb-4">Newsletter</h4>
            <p className="text-sm text-charcoal-light mb-3">
              Subscribe for updates on new products and promotions.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 border border-border bg-white text-sm flex-1"
              />
              <button 
                type="submit" 
                className="btn-primary py-2 px-4 text-sm"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-charcoal-light">
            © {new Date().getFullYear()} MAISON. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-xs text-charcoal-light hover:text-charcoal transition-colors">Terms & Conditions</a>
            <a href="#" className="text-xs text-charcoal-light hover:text-charcoal transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-charcoal-light hover:text-charcoal transition-colors">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
