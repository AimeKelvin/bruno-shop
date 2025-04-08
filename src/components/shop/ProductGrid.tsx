
import React from 'react';
import ProductCard, { Product } from '../ui/ProductCard';

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, columns = 3 }) => {
  let gridClass = "grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8";
  
  if (columns === 3) {
    gridClass = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8";
  } else if (columns === 4) {
    gridClass = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8";
  }
  
  return (
    <div className={gridClass}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
