
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Minus, Plus, Heart, Share2, ChevronLeft, Star, ShoppingBag, Truck, RefreshCw, Shield } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = products.find((p) => p.id === productId);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-medium mb-6">Product Not Found</h1>
          <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate("/shop")}>
            Continue Shopping
          </Button>
        </div>
      </Layout>
    );
  }
  
  const { 
    name, 
    price, 
    originalPrice, 
    description, 
    images, 
    category, 
    tags, 
    inStock, 
    rating 
  } = product;
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const handleAddToCart = () => {
    addItem(product, quantity);
  };
  
  // Find related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <Layout>
      <div className="container py-8 md:py-16">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center mb-8 hover:text-elegant-navy transition-colors"
        >
          <ChevronLeft size={18} className="mr-1" />
          Back
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-elegant-beige/20 mb-4 overflow-hidden">
              <img 
                src={images[selectedImage]} 
                alt={name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <button 
                  key={index}
                  className={`aspect-square bg-elegant-beige/20 ${index === selectedImage ? 'ring-2 ring-elegant-navy' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`${name} - view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <div className="mb-6">
              <div className="text-sm text-elegant-gray mb-1 uppercase tracking-wider">
                {category}
              </div>
              <h1 className="text-3xl md:text-4xl font-medium mb-3">{name}</h1>
              
              <div className="flex items-center mb-3">
                <div className="flex items-center mr-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={16} 
                      className={star <= Math.round(rating || 0) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="text-elegant-gray">{rating} ({Math.floor(Math.random() * 100) + 1} reviews)</span>
              </div>
              
              <div className="flex items-center mb-6">
                <span className="text-2xl font-medium">
                  ${price.toFixed(2)}
                </span>
                {originalPrice && (
                  <span className="ml-3 text-elegant-gray line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                )}
                {originalPrice && (
                  <span className="ml-3 bg-red-100 text-red-700 px-2 py-1 text-xs rounded-md">
                    Save ${(originalPrice - price).toFixed(2)}
                  </span>
                )}
              </div>
              
              <p className="text-elegant-gray mb-6">
                {description}
              </p>
              
              <div className={`mb-6 px-4 py-3 rounded-md ${inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {inStock ? 'In Stock - Ready to Ship' : 'Out of Stock'}
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="border border-elegant-gray/20 flex items-center rounded-md overflow-hidden">
                  <button 
                    className="p-3 hover:bg-elegant-beige/50"
                    onClick={decreaseQuantity}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button 
                    className="p-3 hover:bg-elegant-beige/50"
                    onClick={increaseQuantity}
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <div className="ml-4 text-elegant-gray">
                  {inStock ? `Only ${Math.floor(Math.random() * 20) + 1} left in stock` : 'Currently unavailable'}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="flex-1 md:flex-none md:min-w-[200px] flex items-center gap-2"
                  disabled={!inStock}
                  onClick={handleAddToCart}
                >
                  <ShoppingBag size={16} />
                  Add to Cart
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex-1 md:flex-none md:min-w-[200px] flex items-center gap-2"
                >
                  <Heart size={16} />
                  Add to Wishlist
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="p-2"
                >
                  <Share2 size={18} />
                </Button>
              </div>
            </div>
            
            <div className="border-t border-elegant-gray/20 pt-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start">
                  <Truck className="mr-3 text-elegant-navy flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sm">Free Shipping</h3>
                    <p className="text-elegant-gray text-xs">On orders over $100</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <RefreshCw className="mr-3 text-elegant-navy flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sm">Easy Returns</h3>
                    <p className="text-elegant-gray text-xs">30-day return policy</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="mr-3 text-elegant-navy flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sm">Secure Checkout</h3>
                    <p className="text-elegant-gray text-xs">SSL encrypted payment</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-elegant-gray/20 pt-6">
              <h3 className="font-medium mb-2">Product Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-elegant-beige/30 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs for Product Details */}
        <div className="mb-16">
          <div className="border-b border-elegant-gray/20 mb-6">
            <div className="flex overflow-x-auto">
              <button className="px-6 py-3 font-medium border-b-2 border-elegant-navy">
                Description
              </button>
              <button className="px-6 py-3 text-elegant-gray">
                Specifications
              </button>
              <button className="px-6 py-3 text-elegant-gray">
                Reviews
              </button>
              <button className="px-6 py-3 text-elegant-gray">
                Shipping & Returns
              </button>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p>
              {description}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, 
              nisl nunc euismod nisi, eu porttitor nisl nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur,
              nisl nunc euismod nisi, eu porttitor nisl nisl euismod nisi.
            </p>
            <p>
              Crafted from the finest materials, this product exemplifies our commitment to quality and sustainability.
              Each piece is meticulously inspected to ensure it meets our exacting standards before it reaches you.
            </p>
            <h3>Features</h3>
            <ul>
              <li>Premium quality materials</li>
              <li>Ethically sourced and manufactured</li>
              <li>Designed for durability and longevity</li>
              <li>Elegant, timeless design</li>
              <li>Versatile for various occasions</li>
            </ul>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-medium mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
