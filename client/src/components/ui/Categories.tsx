
import React from "react";
import { categories } from "@/data/products";
import { ArrowRight } from "lucide-react";

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-elegant-beige/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/category/${category.slug}`}
              className="group block relative overflow-hidden bg-white rounded-md shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{category.name}</h3>
                <p className="text-elegant-gray mb-4">{category.description}</p>
                <div className="flex items-center text-elegant-navy font-medium group-hover:underline">
                  <span>View Products</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
