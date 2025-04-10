
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-elegant-beige/30 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-playfair">Elegance</h3>
            <p className="text-elegant-gray mb-6 max-w-xs">
              Curated collection of luxury products designed for the modern individual.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-white rounded-full hover:bg-elegant-navy hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white rounded-full hover:bg-elegant-navy hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white rounded-full hover:bg-elegant-navy hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <a href="/shop" className="text-elegant-gray hover:text-elegant-navy transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="/new-arrivals" className="text-elegant-gray hover:text-elegant-navy transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="/bestsellers" className="text-elegant-gray hover:text-elegant-navy transition-colors">
                  Bestsellers
                </a>
              </li>
              <li>
                <a href="/sale" className="text-elegant-gray hover:text-elegant-navy transition-colors">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-elegant-gray hover:text-elegant-navy transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-elegant-gray hover:text-elegant-navy transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/careers" className="text-elegant-gray hover:text-elegant-navy transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/stores" className="text-elegant-gray hover:text-elegant-navy transition-colors">
                  Stores
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <a href="/shipping" className="text-elegant-gray hover:text-elegant-navy transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="/faq" className="text-elegant-gray hover:text-elegant-navy transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-elegant-gray hover:text-elegant-navy transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-elegant-gray hover:text-elegant-navy transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-elegant-gray/20 pt-8 text-elegant-gray text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Elegance. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <a href="/privacy" className="hover:text-elegant-navy transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-elegant-navy transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
