
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductGrid from '../components/shop/ProductGrid';
import { Product } from '../components/ui/ProductCard';
import { Minus, Plus, Check } from 'lucide-react';
import { toast } from 'sonner';

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
  }
];

// Additional product details
const productDetails = {
  1: {
    description: "A minimalist ceramic vase with clean lines and a matte finish. Perfect for displaying single stems or small arrangements.",
    features: [
      "Handcrafted from high-quality ceramic",
      "Matte finish with textured detail",
      "Water-resistant interior glaze",
      "Dimensions: 8\" H x 4\" W",
      "Available in white, sand, and olive"
    ],
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593592023995-a802eccadb0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1531909867461-58fc9e8a2332?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ]
  },
  2: {
    description: "A handcrafted ceramic mug with a minimalist design and comfortable handle. Perfect for your morning coffee or tea.",
    features: [
      "Handcrafted from durable stoneware",
      "Holds 12 oz of your favorite beverage",
      "Microwave and dishwasher safe",
      "Minimalist design with comfortable handle",
      "Available in white, sand, and charcoal"
    ],
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577918373433-60c424a35820?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571724744722-aee51c92f25f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ]
  },
  3: {
    description: "A modern wall clock with a minimalist design. The perfect addition to any room in your home.",
    features: [
      "Clean, minimalist design",
      "Silent quartz movement",
      "Solid wood frame",
      "12\" diameter",
      "Requires 1 AA battery (included)"
    ],
    images: [
      "https://images.unsplash.com/photo-1594213114663-d94db9b17125?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596485206311-2a26a6e638ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dcdaa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ]
  },
  4: {
    description: "A linen throw pillow with a minimalist design. Perfect for adding comfort and style to your sofa or bed.",
    features: [
      "100% European linen",
      "Hidden zipper closure",
      "18\" x 18\" with feather down insert",
      "Available in sand, olive, and charcoal",
      "Machine washable (cold, gentle cycle)"
    ],
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1581541234783-0aa2f5d2f740?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ]
  }
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || '1');
  
  const product = allProducts.find(p => p.id === productId);
  const details = productDetails[productId as keyof typeof productDetails];
  
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('White');
  const [mainImage, setMainImage] = useState(details?.images[0] || '');
  
  const availableColors = ['White', 'Sand', 'Olive'];
  
  // Get related products (excluding current product)
  const relatedProducts = allProducts
    .filter(p => p.id !== productId && p.category === product?.category)
    .slice(0, 3);
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const addToCart = () => {
    toast.success(`${product?.name} added to cart`, {
      description: `${quantity} × ${selectedColor}`
    });
  };
  
  if (!product || !details) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
            <Link to="/shop" className="btn-primary">
              Back to Shop
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8 md:py-12">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <nav className="flex text-sm">
              <Link to="/" className="text-charcoal-light hover:text-charcoal transition-colors">Home</Link>
              <span className="mx-2 text-charcoal-light">/</span>
              <Link to="/shop" className="text-charcoal-light hover:text-charcoal transition-colors">Shop</Link>
              <span className="mx-2 text-charcoal-light">/</span>
              <span className="text-charcoal">{product.name}</span>
            </nav>
          </div>
          
          {/* Product Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div className="mb-4 aspect-[4/5] bg-muted">
                <img 
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {details.images.map((image, index) => (
                  <button 
                    key={index}
                    className={`aspect-square ${mainImage === image ? 'ring-2 ring-charcoal' : 'border border-border'}`}
                    onClick={() => setMainImage(image)}
                  >
                    <img 
                      src={image}
                      alt={`${product.name} - view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="font-serif text-2xl md:text-3xl mb-2">{product.name}</h1>
              <p className="text-xl font-medium mb-4">${product.price.toFixed(2)}</p>
              
              <div className="mb-6">
                <p className="text-charcoal-light">{details.description}</p>
              </div>
              
              {/* Color Selection */}
              <div className="mb-6">
                <p className="font-medium mb-2">Color: {selectedColor}</p>
                <div className="flex space-x-3">
                  {availableColors.map((color) => (
                    <button 
                      key={color}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        selectedColor === color ? 'ring-2 ring-charcoal ring-offset-2' : ''
                      }`}
                      style={{ 
                        backgroundColor: color === 'White' ? '#fff' : 
                                        color === 'Sand' ? '#E8E6DC' : 
                                        '#A0A984',
                        border: color === 'White' ? '1px solid #e2e2e2' : 'none'
                      }}
                      onClick={() => setSelectedColor(color)}
                      aria-label={`Select ${color} color`}
                    >
                      {selectedColor === color && <Check size={14} className={color === 'White' ? 'text-charcoal' : 'text-white'} />}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-6">
                <p className="font-medium mb-2">Quantity</p>
                <div className="flex border border-border w-max">
                  <button 
                    className="px-3 py-2 text-charcoal hover:bg-sand-light transition-colors"
                    onClick={decreaseQuantity}
                    aria-label="Decrease quantity"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <div className="w-12 flex items-center justify-center">
                    {quantity}
                  </div>
                  <button 
                    className="px-3 py-2 text-charcoal hover:bg-sand-light transition-colors"
                    onClick={increaseQuantity}
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              
              {/* Add to Cart */}
              <div className="mb-8">
                <button 
                  onClick={addToCart}
                  className="btn-primary w-full md:w-auto"
                >
                  Add to Cart
                </button>
              </div>
              
              {/* Features */}
              <div className="border-t border-border pt-6">
                <h3 className="font-medium mb-3">Features</h3>
                <ul className="space-y-2">
                  {details.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-charcoal-light mr-2">•</span>
                      <span className="text-charcoal-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-16 md:mt-24">
              <h2 className="font-serif text-2xl mb-8">You May Also Like</h2>
              <ProductGrid products={relatedProducts} />
            </section>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
