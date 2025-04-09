
import React from 'react';
import ProductCard, { Product } from '../ui/ProductCard';

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
  category?: string;
  priceRange?: [number, number] | null;
  searchTerm?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  columns = 3,
  category,
  priceRange,
  searchTerm
}) => {
  let filteredProducts = [...products];
  
  // Apply category filter
  if (category && category !== 'All') {
    filteredProducts = filteredProducts.filter(
      product => product.category === category
    );
  }
  
  // Apply price range filter
  if (priceRange) {
    const [min, max] = priceRange;
    filteredProducts = filteredProducts.filter(
      product => product.price >= min && product.price <= max
    );
  }
  
  // Apply search term filter
  if (searchTerm && searchTerm.trim() !== '') {
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();
    filteredProducts = filteredProducts.filter(
      product => 
        product.name.toLowerCase().includes(normalizedSearchTerm) ||
        product.category.toLowerCase().includes(normalizedSearchTerm)
    );
  }
  
  let gridClass = "grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8";
  
  if (columns === 3) {
    gridClass = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8";
  } else if (columns === 4) {
    gridClass = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8";
  }
  
  if (filteredProducts.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg mb-4">No products found.</p>
      </div>
    );
  }
  
  return (
    <div className={gridClass}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
