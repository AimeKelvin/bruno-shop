
import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductGrid from '../components/shop/ProductGrid';
import ProductFilter from '../components/shop/ProductFilter';
import { Product } from '../components/ui/ProductCard';
import { Filter, ChevronDown, ChevronUp, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { fetchProducts } from '@/services/productService';
import { Product as ProductTypes } from '@/utils/types';


const Shop = () => {
  const [allProducts, setAllProducts] = useState<ProductTypes[]>([])
  const categories = ['All', ...new Set(allProducts.map(p => p.category))];
  // const maxPrice = Math.max(...allProducts.map(p => p.price));
  const maxPrice = 999;

  const isMobile = useIsMobile();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false)

  const handleFetchProducts = async () => {
    setLoading(true)
    try {
      const products = await fetchProducts()
      setAllProducts(products)
      setLoading(false)
    } catch(error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    handleFetchProducts()
  }, [])
  


  // Update active filters when filters change
  useEffect(() => {
    const newActiveFilters: string[] = [];
    
    if (selectedCategory !== 'All') {
      newActiveFilters.push(`Category: ${selectedCategory}`);
    }
    
    if (priceRange[0] > 0 || priceRange[1] < maxPrice) {
      newActiveFilters.push(`Price: $${priceRange[0]} - $${priceRange[1]}`);
    }
    
    if (searchTerm) {
      newActiveFilters.push(`Search: ${searchTerm}`);
    }
    
    setActiveFilters(newActiveFilters);
  }, [selectedCategory, priceRange, searchTerm, maxPrice]);
  
  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategory('All');
    setPriceRange([0, maxPrice]);
    setSearchTerm('');
  };
  
  // Remove specific filter
  const removeFilter = (filter: string) => {
    if (filter.startsWith('Category:')) {
      setSelectedCategory('All');
    } else if (filter.startsWith('Price:')) {
      setPriceRange([0, maxPrice]);
    } else if (filter.startsWith('Search:')) {
      setSearchTerm('');
    }
  };
  
  // Sort products
  let sortedProducts = [...allProducts];
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
                {activeFilters.length > 0 && (
                  <span className="bg-charcoal text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {activeFilters.length}
                  </span>
                )}
              </div>
              {isMobileFiltersOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
          
          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-charcoal-light">Active Filters:</span>
              {activeFilters.map((filter, index) => (
                <div 
                  key={index}
                  className="flex items-center bg-secondary px-3 py-1 text-sm"
                >
                  <span>{filter}</span>
                  <button 
                    onClick={() => removeFilter(filter)}
                    className="ml-2 text-charcoal-light hover:text-charcoal"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
              <button 
                onClick={clearAllFilters}
                className="text-charcoal-light hover:text-charcoal text-sm underline ml-2"
              >
                Clear All
              </button>
            </div>
          )}
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className={`md:w-64 ${isMobileFiltersOpen ? 'block' : 'hidden'} md:block`}>
              <ProductFilter 
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                priceRange={priceRange}
                maxPrice={maxPrice}
                onPriceRangeChange={setPriceRange}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
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
              <ProductGrid 
                products={sortedProducts}
                category={selectedCategory !== 'All' ? selectedCategory : undefined}
                priceRange={priceRange[0] > 0 || priceRange[1] < maxPrice ? priceRange : null}
                searchTerm={searchTerm}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
