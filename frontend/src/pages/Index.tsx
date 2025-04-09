
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FeaturedProduct from '../components/ui/FeaturedProduct';
import ProductGrid from '../components/shop/ProductGrid';
import { Product } from '../components/ui/ProductCard';

const featuredProducts: Product[] = [
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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] bg-sand">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Minimalist Home Interior" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6 md:p-8 bg-white/90 max-w-xl mx-auto">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">Essential Minimalism</h1>
              <p className="mb-6 text-charcoal-light mx-auto max-w-md">
                Curated collection of modern essentials for your home and lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/shop" className="btn-primary">
                  Shop Now
                </Link>
                <Link to="/shop" className="btn-outline">
                  View Collections
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 md:py-24 bg-sand-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl mb-4">Curated Categories</h2>
              <p className="text-charcoal-light max-w-xl mx-auto">
                Discover our thoughtfully selected collections of essential minimalist pieces.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category 1 */}
              <div className="relative group overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Home Decor" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ aspectRatio: '1/1.2' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-serif text-xl mb-1">Home Decor</h3>
                    <Link 
                      to="/shop" 
                      className="inline-flex items-center space-x-1 text-sm text-white/90 hover:text-white transition-colors"
                    >
                      <span>Shop Now</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Category 2 */}
              <div className="relative group overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1548382131-e0ebb1f0cdea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Kitchenware" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ aspectRatio: '1/1.2' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-serif text-xl mb-1">Kitchenware</h3>
                    <Link 
                      to="/shop" 
                      className="inline-flex items-center space-x-1 text-sm text-white/90 hover:text-white transition-colors"
                    >
                      <span>Shop Now</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Category 3 */}
              <div className="relative group overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Textiles" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ aspectRatio: '1/1.2' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-serif text-xl mb-1">Textiles</h3>
                    <Link 
                      to="/shop" 
                      className="inline-flex items-center space-x-1 text-sm text-white/90 hover:text-white transition-colors"
                    >
                      <span>Shop Now</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Product */}
        <section>
          <FeaturedProduct 
            title="The Essentials Collection"
            description="Timeless pieces designed for everyday living. Our essentials collection combines simplicity with quality craftsmanship."
            image="https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            link="/shop"
          />
        </section>
        
        {/* Featured Products */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-2">New Arrivals</h2>
                <p className="text-charcoal-light">Discover our latest additions</p>
              </div>
              <Link 
                to="/shop" 
                className="inline-flex items-center space-x-1 mt-4 md:mt-0 text-charcoal hover:text-charcoal-light transition-colors"
              >
                <span>View All</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            
            <ProductGrid products={featuredProducts} />
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-sand">
          <div className="container-custom">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl mb-4">Join Our Community</h2>
              <p className="text-charcoal-light mb-6">
                Subscribe to our newsletter for exclusive offers, new product announcements, and styling inspiration.
              </p>
              <form className="flex flex-col sm:flex-row max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 border border-border bg-white"
                  required
                />
                <button 
                  type="submit" 
                  className="btn-primary sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
