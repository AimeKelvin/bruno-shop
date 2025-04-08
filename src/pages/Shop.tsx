
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductGrid from '../components/shop/ProductGrid';
import { Product } from '../components/ui/ProductCard';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';

// Mock product data
const allProducts: Product[] = [
  {
    id: 1,
    name: "Minimalist Ceramic Vase",
    price: 89.99,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    imageHover: "https://images.unsplash.com/photo-1593592023995-a802eccadb0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Handcrafted Ceramic Mug",
    price: 29.99,
    category: "Kitchenware",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    imageHover: "https://images.unsplash.com/photo-1577918373433-60c424a35820?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Modern Wall Clock",
    price: 149.99,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1594213114663-d94db9b17125?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    imageHover: "https://images.unsplash.com/photo-1596485206311-2a26a6e638ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Linen Throw Pillow",
    price: 49.99,
    category: "Textiles",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    imageHover: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Wooden Serving Bowl",
    price: 59.99,
    category: "Kitchenware",
    image: "https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    imageHover: "https://images.unsplash.com/photo-1525974160448-038dacadcc71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Minimalist Table Lamp",
    price: 119.99,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    imageHover: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Natural Cotton Throw",
    price: 79.99,
    category: "Textiles",
    image: "https://images.unsplash.com/photo-1566375721046-97c6e9e8ad25?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    imageHover: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Concrete Planter",
    price: 39.99,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    imageHover: "https://images.unsplash.com/photo-1591873109860-69aea4be9497?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "Marble Coasters Set",
    price: 34.99,
    category: "Kitchenware",
    image: "https://images.unsplash.com/photo-1616484585957-f673dba8e0d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    imageHover: "https://images.unsplash.com/photo-1563844051929-b01c2667b0ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

// Get unique categories
const categories = ['All', ...new Set(allProducts.map(p => p.category))];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  // Filter and sort products
  const filteredProducts = allProducts.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );
  
  let sortedProducts = [...filteredProducts];
  if (sortBy === 'price-low') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8 md:py-12">
        <div className="container-custom">
          {/* Page Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="font-serif text-3xl md:text-4xl mb-4">Shop All</h1>
            <p className="text-charcoal-light max-w-2xl">
              Explore our collection of thoughtfully designed, minimalist essentials for your home and lifestyle.
            </p>
          </div>
          
          {/* Mobile Filters Toggle */}
          <div className="md:hidden mb-6">
            <button 
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-border"
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            >
              <div className="flex items-center space-x-2">
                <Filter size={18} />
                <span>Filter & Sort</span>
              </div>
              {isMobileFiltersOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className={`md:w-64 ${isMobileFiltersOpen ? 'block' : 'hidden'} md:block`}>
              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-medium mb-3">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        className={`text-left w-full ${selectedCategory === category ? 'text-charcoal font-medium' : 'text-charcoal-light'}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-medium mb-3">Price</h3>
                <ul className="space-y-2">
                  <li>
                    <button 
                      className={`text-left w-full ${sortBy === 'price-low' ? 'text-charcoal font-medium' : 'text-charcoal-light'}`}
                      onClick={() => setSortBy('price-low')}
                    >
                      Price: Low to High
                    </button>
                  </li>
                  <li>
                    <button 
                      className={`text-left w-full ${sortBy === 'price-high' ? 'text-charcoal font-medium' : 'text-charcoal-light'}`}
                      onClick={() => setSortBy('price-high')}
                    >
                      Price: High to Low
                    </button>
                  </li>
                </ul>
              </div>
              
              {/* Sort Options for Mobile */}
              <div className="mb-8 md:hidden">
                <h3 className="font-medium mb-3">Sort By</h3>
                <ul className="space-y-2">
                  <li>
                    <button 
                      className={`text-left w-full ${sortBy === 'featured' ? 'text-charcoal font-medium' : 'text-charcoal-light'}`}
                      onClick={() => setSortBy('featured')}
                    >
                      Featured
                    </button>
                  </li>
                  <li>
                    <button 
                      className={`text-left w-full ${sortBy === 'name' ? 'text-charcoal font-medium' : 'text-charcoal-light'}`}
                      onClick={() => setSortBy('name')}
                    >
                      Name: A to Z
                    </button>
                  </li>
                </ul>
              </div>
            </aside>
            
            {/* Products Section */}
            <div className="flex-1">
              {/* Sort Options (Desktop) */}
              <div className="hidden md:flex justify-end mb-6">
                <div className="relative inline-block">
                  <select 
                    className="appearance-none px-4 py-2 pr-8 border border-border bg-white" 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name: A to Z</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-charcoal">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>
              
              {/* Products */}
              <ProductGrid products={sortedProducts} />
              
              {/* Empty State */}
              {sortedProducts.length === 0 && (
                <div className="py-12 text-center">
                  <p className="text-lg mb-4">No products found.</p>
                  <button 
                    onClick={() => setSelectedCategory('All')}
                    className="btn-outline"
                  >
                    View All Products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
