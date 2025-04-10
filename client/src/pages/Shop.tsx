import React, { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import { Layout } from "@/components/layout/Layout";
import { ArrowUpDown, Filter, Grid3X3, List } from "lucide-react";
import {Button} from "@/components/ui/Button";

const Shop: React.FC = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "newest">("featured");
  const [filterOpen, setFilterOpen] = useState(false);

  const getSortedProducts = () => {
    let sortedProducts = [...products];
    
    switch (sortBy) {
      case "price-asc":
        return sortedProducts.sort((a, b) => a.price - b.price);
      case "price-desc":
        return sortedProducts.sort((a, b) => b.price - a.price);
      case "newest":
        return sortedProducts.filter(product => product.new).concat(
          sortedProducts.filter(product => !product.new)
        );
      case "featured":
      default:
        return sortedProducts.filter(product => product.featured).concat(
          sortedProducts.filter(product => !product.featured)
        );
    }
  };

  return (
    <Layout>
      <div className="container py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair mb-4">Shop All Products</h1>
          <p className="text-elegant-gray max-w-3xl">
            Browse our curated collection of luxury products designed for the modern individual.
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <Button 
            variant="outline" 
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:w-auto w-full flex justify-between md:justify-start"
          >
            <Filter size={16} className="mr-2" />
            Filter Products
            <span className="md:hidden ml-auto">{filterOpen ? "−" : "+"}</span>
          </Button>
          
          <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
            <div className="flex items-center mr-4">
              <span className="text-sm text-elegant-gray mr-2">Sort by:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-sm border rounded-md p-2 bg-white"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
            
            <div className="flex border rounded-md overflow-hidden">
              <button 
                className={`p-2 ${view === "grid" ? "bg-elegant-beige/50" : "bg-white"}`}
                onClick={() => setView("grid")}
              >
                <Grid3X3 size={18} />
              </button>
              <button 
                className={`p-2 ${view === "list" ? "bg-elegant-beige/50" : "bg-white"}`}
                onClick={() => setView("list")}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Filters Panel */}
        {filterOpen && (
          <div className="bg-white border rounded-md p-6 mb-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Clothing
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Accessories
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Bags
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Beauty
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Shoes
                </label>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Under $100
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  $100 - $200
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  $200 - $300
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  $300 - $500
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Over $500
                </label>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border rounded-full text-sm hover:bg-elegant-beige/50 cursor-pointer">
                  leather
                </span>
                <span className="px-3 py-1 border rounded-full text-sm hover:bg-elegant-beige/50 cursor-pointer">
                  minimal
                </span>
                <span className="px-3 py-1 border rounded-full text-sm hover:bg-elegant-beige/50 cursor-pointer">
                  summer
                </span>
                <span className="px-3 py-1 border rounded-full text-sm hover:bg-elegant-beige/50 cursor-pointer">
                  winter
                </span>
                <span className="px-3 py-1 border rounded-full text-sm hover:bg-elegant-beige/50 cursor-pointer">
                  cashmere
                </span>
                <span className="px-3 py-1 border rounded-full text-sm hover:bg-elegant-beige/50 cursor-pointer">
                  silk
                </span>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Availability</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  In Stock
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Out of Stock
                </label>
              </div>
              
              <div className="mt-6">
                <Button>Apply Filters</Button>
              </div>
            </div>
          </div>
        )}
        
        {/* Product Grid */}
        <div className={view === "grid" 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" 
          : "space-y-6"
        }>
          {getSortedProducts().map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              className={view === "list" ? "flex flex-row h-auto" : ""}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
