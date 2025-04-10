
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductGrid from '../components/shop/ProductGrid';
import { Product } from '../components/ui/ProductCard';
import { Minus, Plus, Check } from 'lucide-react';
import { toast } from 'sonner';
import { fetchSingleProduct, fetchProducts } from '@/services/productService';
import { Product as ProductTypes } from '@/utils/types';
import { useCart } from '@/contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const productId: number = parseInt(id || '67f615ed5a4edef3aa31c5b9');
  const [allProducts, setAllProducts] = useState<ProductTypes[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const { addToCart } = useCart()

  const [productDetails, setProductDetails] = useState<ProductTypes | undefined>(undefined)
  
  // const product = allProducts.find(p => p._id === productId);
  // const details = productDetails[productId as keyof typeof productDetails];
  
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('White');
  // const [mainImage, setMainImage] = useState(details?.image[0] || '');
  // const [mainImage, setMainImage] = useState(details?.image || '');

  
  const availableColors = ['White', 'Sand', 'Olive'];

  console.log(`Product info: ${productDetails}`)
  
  // Get related products (excluding current product)
  const relatedProducts = allProducts
    .filter(p => p._id !== productId && p.category === productDetails?.category)
    .slice(0, 3);
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  // const addToCart = () => {

  //   toast.success(`${productDetails?.name} added to cart`, {
  //     description: `${quantity} × ${selectedColor}`
  //   });
  // };

  const handleFetchCurrentSingleProduct = async (id: string) => {
    setLoading(true)
    try {
      const product = await fetchSingleProduct(id)
      setProductDetails(product)
      setLoading(false)
    } catch(error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    handleFetchCurrentSingleProduct(id)
  },[id])

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
  
  if (!productDetails) {
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
              <span className="text-charcoal">{productDetails.name}</span>
            </nav>
          </div>
          
          {/* Product Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div className="mb-4 aspect-[4/5] bg-muted">
                <img 
                  src={productDetails.image}
                  alt={productDetails.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnail Images */}
              {/* <div className="grid grid-cols-4 gap-2">
                {productDetails.image.map((image, index) => (
                  <button 
                    key={index}
                    className={`aspect-square ${productDetails.image === image ? 'ring-2 ring-charcoal' : 'border border-border'}`}
                    onClick={() => setMainImage(image)}
                  >
                    <img 
                      src={image}
                      alt={`${productDetails.name} - view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div> */}
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="font-serif text-2xl md:text-3xl mb-2">{productDetails.name}</h1>
              <p className="text-xl font-medium mb-4">${productDetails.price.toFixed(2)}</p>
              
              <div className="mb-6">
                <p className="text-charcoal-light">{productDetails.description}</p>
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
                  onClick={() => addToCart(id, quantity)}
                  className="btn-primary w-full md:w-auto"
                >
                  Add to Cart
                </button>
              </div>
              
              {/* Features */}
              {/* <div className="border-t border-border pt-6">
                <h3 className="font-medium mb-3">Features</h3>
                <ul className="space-y-2">
                  {details.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-charcoal-light mr-2">•</span>
                      <span className="text-charcoal-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div> */}
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
