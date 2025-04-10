
export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  category: string;
  tags: string[];
  inStock: boolean;
  featured?: boolean;
  new?: boolean;
  bestseller?: boolean;
  rating?: number;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
