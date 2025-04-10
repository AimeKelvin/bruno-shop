
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import Categories from "@/components/ui/Categories";
import Newsletter from "@/components/ui/Newsletter";
import CartSidebar from "@/components/ui/CartSidebar";
import Button from "@/components/ui/Button";
import { CartProvider } from "@/context/CartContext";
import { ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <CartSidebar />
        
        <main className="flex-1">
          {/* Hero section */}
          <section className="relative bg-elegant-beige/20 h-screen flex items-center">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop" 
                alt="Elegant shopping experience" 
                className="w-full h-full object-cover object-center opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/20" />
            </div>
            
            <div className="container relative z-10">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-6 animate-fade-in">
                  Elegance in Every Detail
                </h1>
                <p className="text-elegant-gray text-lg mb-8 max-w-md animate-slide-up">
                  Discover our curated collection of luxury products designed for the modern individual.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  <Button size="lg" className="font-medium">
                    Shop New Arrivals
                  </Button>
                  <Button variant="outline" size="lg" className="font-medium">
                    Explore Collections
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          {/* Quality badges */}
          <section className="py-12 bg-white">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-elegant-beige/50 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-elegant-navy">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Premium Quality</h3>
                  <p className="text-elegant-gray">Carefully selected materials to ensure lasting quality in every product.</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-elegant-beige/50 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-elegant-navy">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Free Shipping</h3>
                  <p className="text-elegant-gray">Enjoy free worldwide shipping on all orders over $150.</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-elegant-beige/50 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-elegant-navy">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Secure Payments</h3>
                  <p className="text-elegant-gray">Shop with confidence with our secure payment options.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* New Collection Banner */}
          <section className="py-16">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl md:text-4xl font-playfair mb-4">The Summer Collection</h2>
                  <p className="text-elegant-gray mb-6 max-w-md">
                    Discover our latest summer collection featuring lightweight fabrics and seasonal designs.
                  </p>
                  <Button className="flex items-center group">
                    Explore Collection
                    <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop" 
                      alt="Summer Collection" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Featured Products */}
          <FeaturedProducts />
          
          {/* Categories */}
          <Categories />
          
          {/* Newsletter */}
          <Newsletter />
        </main>
        
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
