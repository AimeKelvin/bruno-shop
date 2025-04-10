
import React from "react";
import Button from "./Button";

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-elegant-navy text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Join Our Newsletter</h2>
          <p className="text-white/80 mb-8">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-elegant-dark bg-white focus:outline-none focus:ring-2 focus:ring-elegant-gold"
              required
            />
            <Button 
              type="submit" 
              className="bg-elegant-gold hover:bg-elegant-gold/90 text-elegant-dark font-medium"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
