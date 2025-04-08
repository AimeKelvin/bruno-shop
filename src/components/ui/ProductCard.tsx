
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  imageHover?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to product detail
    addToCart(product, 1);
  };
  
  return (
    <div className="group hover-trigger">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          {/* Main Image */}
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-0"
            style={{ aspectRatio: '3/4' }}
          />
          
          {/* Hover Image */}
          {product.imageHover && (
            <img 
              src={product.imageHover}
              alt={`${product.name} - alternative view`}
              className="w-full h-auto object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ aspectRatio: '3/4' }}
            />
          )}
          
          {/* Quick Add Button */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button 
              className="w-full flex items-center justify-center space-x-2 py-2 bg-charcoal text-white hover:bg-charcoal-light transition-colors"
              onClick={handleAddToCart}
            >
              <ShoppingBag size={16} />
              <span className="text-sm font-medium">Add to Cart</span>
            </button>
          </div>
        </div>
        
        <div className="mt-3 flex items-start justify-between">
          <div>
            <h3 className="text-charcoal font-medium">{product.name}</h3>
            <p className="text-charcoal-light text-sm">{product.category}</p>
          </div>
          <p className="text-charcoal font-medium">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
