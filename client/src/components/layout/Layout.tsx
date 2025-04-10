
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartSidebar from "../ui/CartSidebar";
import { CartProvider } from "@/context/CartContext";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <CartSidebar />
      </div>
    </CartProvider>
  );
};
