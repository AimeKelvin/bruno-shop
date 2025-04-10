
import React from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const FeaturedProducts: React.FC = () => {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-4xl mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
