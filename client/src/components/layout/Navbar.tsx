
import React, { useState, useEffect } from "react";
import { useCart } from "@/hooks/useCart";
import { ShoppingBag, Search, User, Menu, X } from "lucide-react";
import {Button} from "../ui/Button";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-playfair font-bold tracking-tight">
          Elegance
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a 
                href="/" 
                className="text-sm uppercase tracking-wide hover:text-elegant-navy transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/shop" 
                className="text-sm uppercase tracking-wide hover:text-elegant-navy transition-colors"
              >
                Shop
              </a>
            </li>
            <li>
              <a 
                href="/categories" 
                className="text-sm uppercase tracking-wide hover:text-elegant-navy transition-colors"
              >
                Categories
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                className="text-sm uppercase tracking-wide hover:text-elegant-navy transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                className="text-sm uppercase tracking-wide hover:text-elegant-navy transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex p-2 hover:bg-elegant-beige/50 rounded-full transition-colors">
            <Search size={20} />
          </button>
          <button className="hidden md:flex p-2 hover:bg-elegant-beige/50 rounded-full transition-colors">
            <User size={20} />
          </button>
          <button 
            className="relative p-2 hover:bg-elegant-beige/50 rounded-full transition-colors"
            onClick={toggleCart}
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-elegant-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button 
            className="md:hidden p-2 hover:bg-elegant-beige/50 rounded-full transition-colors"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-6 pb-6 animate-fade-in">
          <nav>
            <ul className="space-y-6">
              <li>
                <a 
                  href="/" 
                  className="text-xl font-medium block border-b border-elegant-beige pb-4"
                  onClick={toggleMobileMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/shop" 
                  className="text-xl font-medium block border-b border-elegant-beige pb-4"
                  onClick={toggleMobileMenu}
                >
                  Shop
                </a>
              </li>
              <li>
                <a 
                  href="/categories" 
                  className="text-xl font-medium block border-b border-elegant-beige pb-4"
                  onClick={toggleMobileMenu}
                >
                  Categories
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="text-xl font-medium block border-b border-elegant-beige pb-4"
                  onClick={toggleMobileMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="text-xl font-medium block border-b border-elegant-beige pb-4"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="mt-8 flex flex-col space-y-4">
              <Button 
                variant="primary" 
                className="w-full flex items-center justify-center gap-2"
                onClick={() => {
                  toggleMobileMenu();
                  toggleCart();
                }}
              >
                <ShoppingBag size={18} />
                View Cart ({totalItems})
              </Button>
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2"
              >
                <User size={18} />
                Account
              </Button>
              <Button 
                variant="secondary" 
                className="w-full flex items-center justify-center gap-2"
              >
                <Search size={18} />
                Search
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
