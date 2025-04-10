
import React from "react";
import { Product } from "@/types";
import { useCart } from "@/hooks/useCart";
import { ShoppingBag, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "./Button";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { addItem } = useCart();
  
  const { name, price, originalPrice, images, new: isNew, bestseller } = product;
  
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
  
  const formattedOriginalPrice = originalPrice 
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(originalPrice)
    : null;

  return (
    <div 
      className={cn(
        "group relative flex flex-col transition-all duration-300 animate-fade-in",
        className
      )}
    >
      <div className="relative overflow-hidden mb-4">
        <div className="aspect-[3/4] bg-elegant-beige/20 relative">
          <img
            src={images[0]}
            alt={name}
            className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
          />
          
          {/* Product badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="text-xs uppercase tracking-wider bg-elegant-navy text-white px-2 py-1">
                New
              </span>
            )}
            {bestseller && (
              <span className="text-xs uppercase tracking-wider bg-elegant-gold text-white px-2 py-1">
                Bestseller
              </span>
            )}
            {originalPrice && (
              <span className="text-xs uppercase tracking-wider bg-red-500 text-white px-2 py-1">
                Sale
              </span>
            )}
          </div>
          
          {/* Quick actions */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-white bg-opacity-90 backdrop-blur-sm translate-y-full transition-transform duration-300 group-hover:translate-y-0 flex justify-between items-center">
            <Button 
              variant="primary" 
              size="sm" 
              onClick={() => addItem(product)}
              className="flex-1 mr-2 flex items-center justify-center gap-2"
            >
              <ShoppingBag size={16} />
              <span>Add to Cart</span>
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-10 h-10 flex items-center justify-center p-0"
            >
              <Heart size={16} />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <h3 className="font-medium text-lg mb-1 transition-colors group-hover:text-elegant-navy">{name}</h3>
        <div className="mt-auto flex items-center">
          <span className="text-lg font-medium">{formattedPrice}</span>
          {formattedOriginalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">{formattedOriginalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
