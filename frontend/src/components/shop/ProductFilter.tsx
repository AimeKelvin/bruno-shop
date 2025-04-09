
import React from 'react';
import { Slider } from '@/components/ui/slider';

interface ProductFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  maxPrice: number;
  onPriceRangeChange: (range: [number, number]) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  className?: string;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  maxPrice,
  onPriceRangeChange,
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
  className = ""
}) => {
  const handleSliderChange = (value: number[]) => {
    onPriceRangeChange([value[0], value[1]]);
  };
  
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Search */}
      <div>
        <h3 className="font-medium mb-3">Search</h3>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full border border-border px-4 py-2"
        />
      </div>
      
      {/* Categories */}
      <div>
        <h3 className="font-medium mb-3">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                className={`text-left w-full ${
                  selectedCategory === category 
                    ? 'text-charcoal font-medium' 
                    : 'text-charcoal-light'
                }`}
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Price Range */}
      <div>
        <h3 className="font-medium mb-3">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={[0, maxPrice]}
            value={[priceRange[0], priceRange[1]]}
            max={maxPrice}
            step={5}
            onValueChange={handleSliderChange}
            className="mb-6"
          />
          <div className="flex items-center justify-between text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
      
      {/* Sort Options */}
      <div>
        <h3 className="font-medium mb-3">Sort By</h3>
        <ul className="space-y-2">
          <li>
            <button 
              className={`text-left w-full ${sortBy === 'featured' ? 'text-charcoal font-medium' : 'text-charcoal-light'}`}
              onClick={() => onSortChange('featured')}
            >
              Featured
            </button>
          </li>
          <li>
            <button 
              className={`text-left w-full ${sortBy === 'price-low' ? 'text-charcoal font-medium' : 'text-charcoal-light'}`}
              onClick={() => onSortChange('price-low')}
            >
              Price: Low to High
            </button>
          </li>
          <li>
            <button 
              className={`text-left w-full ${sortBy === 'price-high' ? 'text-charcoal font-medium' : 'text-charcoal-light'}`}
              onClick={() => onSortChange('price-high')}
            >
              Price: High to Low
            </button>
          </li>
          <li>
            <button 
              className={`text-left w-full ${sortBy === 'name' ? 'text-charcoal font-medium' : 'text-charcoal-light'}`}
              onClick={() => onSortChange('name')}
            >
              Name: A to Z
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductFilter;
