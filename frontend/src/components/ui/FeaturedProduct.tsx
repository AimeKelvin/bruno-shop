
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeaturedProductProps {
  title: string;
  description: string;
  image: string;
  link: string;
  position?: 'left' | 'right';
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ 
  title, 
  description, 
  image, 
  link,
  position = 'right'
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {/* Image */}
      <div className={`${position === 'left' ? 'md:order-1' : 'md:order-2'}`}>
        <div className="relative h-full">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            style={{ aspectRatio: '1/1' }}
          />
        </div>
      </div>
      
      {/* Content */}
      <div className={`${position === 'left' ? 'md:order-2' : 'md:order-1'} flex items-center`}>
        <div className="p-8 md:p-12 lg:p-16 max-w-md mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4">{title}</h2>
          <p className="text-charcoal-light mb-6">{description}</p>
          <Link 
            to={link} 
            className="inline-flex items-center space-x-2 border-b border-charcoal pb-1 text-charcoal hover:text-charcoal-light transition-colors"
          >
            <span>Discover</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
