
import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";
import { Edit, Trash2, Plus, Package, Users, ShoppingBag, FileText, Settings, BarChart3 } from "lucide-react";

type ActiveTab = "dashboard" | "products" | "categories" | "orders" | "customers" | "settings";

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("dashboard");

  return (
    <Layout>
      <div className="container py-8 md:py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64 space-y-1 flex-shrink-0">
            <h1 className="text-2xl font-medium mb-6">Admin Panel</h1>
            
            <button 
              className={`w-full text-left p-3 rounded-md flex items-center gap-3 ${activeTab === "dashboard" ? "bg-elegant-navy text-white" : "hover:bg-elegant-beige/50"}`}
              onClick={() => setActiveTab("dashboard")}
            >
              <BarChart3 size={18} />
              Dashboard
            </button>
            
            <button 
              className={`w-full text-left p-3 rounded-md flex items-center gap-3 ${activeTab === "products" ? "bg-elegant-navy text-white" : "hover:bg-elegant-beige/50"}`}
              onClick={() => setActiveTab("products")}
            >
              <Package size={18} />
              Products
            </button>
            
            <button 
              className={`w-full text-left p-3 rounded-md flex items-center gap-3 ${activeTab === "categories" ? "bg-elegant-navy text-white" : "hover:bg-elegant-beige/50"}`}
              onClick={() => setActiveTab("categories")}
            >
              <FileText size={18} />
              Categories
            </button>
            
            <button 
              className={`w-full text-left p-3 rounded-md flex items-center gap-3 ${activeTab === "orders" ? "bg-elegant-navy text-white" : "hover:bg-elegant-beige/50"}`}
              onClick={() => setActiveTab("orders")}
            >
              <ShoppingBag size={18} />
              Orders
            </button>
            
            <button 
              className={`w-full text-left p-3 rounded-md flex items-center gap-3 ${activeTab === "customers" ? "bg-elegant-navy text-white" : "hover:bg-elegant-beige/50"}`}
              onClick={() => setActiveTab("customers")}
            >
              <Users size={18} />
              Customers
            </button>
            
            <button 
              className={`w-full text-left p-3 rounded-md flex items-center gap-3 ${activeTab === "settings" ? "bg-elegant-navy text-white" : "hover:bg-elegant-beige/50"}`}
              onClick={() => setActiveTab("settings")}
            >
              <Settings size={18} />
              Settings
            </button>
          </aside>
          
          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "dashboard" && (
              <div>
                <h2 className="text-2xl font-medium mb-6">Dashboard</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-elegant-gray text-sm mb-2">Total Products</h3>
                    <p className="text-3xl font-medium">{products.length}</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-elegant-gray text-sm mb-2">Categories</h3>
                    <p className="text-3xl font-medium">{categories.length}</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-elegant-gray text-sm mb-2">Total Orders</h3>
                    <p className="text-3xl font-medium">0</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                  <h3 className="font-medium mb-4">Recent Activity</h3>
                  <p className="text-elegant-gray text-center py-8">No recent activity to display</p>
                </div>
              </div>
            )}
            
            {activeTab === "products" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-medium">Products</h2>
                  <Button className="flex items-center gap-2">
                    <Plus size={16} />
                    Add Product
                  </Button>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-elegant-beige/30 text-left">
                          <th className="p-4">Product</th>
                          <th className="p-4">Price</th>
                          <th className="p-4">Category</th>
                          <th className="p-4">Stock</th>
                          <th className="p-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => (
                          <tr key={product.id} className="border-t border-gray-100">
                            <td className="p-4">
                              <div className="flex items-center">
                                <div className="w-12 h-12 bg-elegant-beige/20 mr-3 flex-shrink-0">
                                  <img 
                                    src={product.images[0]} 
                                    alt={product.name} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <span>{product.name}</span>
                              </div>
                            </td>
                            <td className="p-4">
                              ${product.price.toFixed(2)}
                            </td>
                            <td className="p-4">
                              {product.category}
                            </td>
                            <td className="p-4">
                              <span className={`px-2 py-1 rounded-full text-xs ${product.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                                {product.inStock ? "In Stock" : "Out of Stock"}
                              </span>
                            </td>
                            <td className="p-4">
                              <div className="flex space-x-2">
                                <button className="p-1 hover:text-elegant-navy">
                                  <Edit size={18} />
                                </button>
                                <button className="p-1 hover:text-red-500">
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "categories" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-medium">Categories</h2>
                  <Button className="flex items-center gap-2">
                    <Plus size={16} />
                    Add Category
                  </Button>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-elegant-beige/30 text-left">
                        <th className="p-4">Category</th>
                        <th className="p-4">Description</th>
                        <th className="p-4">Slug</th>
                        <th className="p-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category) => (
                        <tr key={category.id} className="border-t border-gray-100">
                          <td className="p-4">
                            <div className="flex items-center">
                              <div className="w-12 h-12 bg-elegant-beige/20 mr-3 flex-shrink-0">
                                <img 
                                  src={category.image} 
                                  alt={category.name} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <span>{category.name}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            {category.description.length > 50 
                              ? `${category.description.substring(0, 50)}...` 
                              : category.description}
                          </td>
                          <td className="p-4">
                            {category.slug}
                          </td>
                          <td className="p-4">
                            <div className="flex space-x-2">
                              <button className="p-1 hover:text-elegant-navy">
                                <Edit size={18} />
                              </button>
                              <button className="p-1 hover:text-red-500">
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            {activeTab === "orders" && (
              <div>
                <h2 className="text-2xl font-medium mb-6">Orders</h2>
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                  <ShoppingBag size={48} className="mx-auto mb-4 text-elegant-gray/50" />
                  <h3 className="text-xl font-medium mb-2">No Orders Yet</h3>
                  <p className="text-elegant-gray mb-6">
                    Orders will appear here when customers make purchases.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === "customers" && (
              <div>
                <h2 className="text-2xl font-medium mb-6">Customers</h2>
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                  <Users size={48} className="mx-auto mb-4 text-elegant-gray/50" />
                  <h3 className="text-xl font-medium mb-2">No Customers Yet</h3>
                  <p className="text-elegant-gray mb-6">
                    Customer information will appear here after they register or place orders.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === "settings" && (
              <div>
                <h2 className="text-2xl font-medium mb-6">Settings</h2>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                  <h3 className="font-medium mb-4">Store Information</h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="store-name" className="block text-sm font-medium mb-1">
                        Store Name
                      </label>
                      <input
                        type="text"
                        id="store-name"
                        defaultValue="Elegance"
                        className="w-full p-3 border border-elegant-gray/20 rounded-md"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="store-email" className="block text-sm font-medium mb-1">
                        Contact Email
                      </label>
                      <input
                        type="email"
                        id="store-email"
                        defaultValue="hello@elegance.com"
                        className="w-full p-3 border border-elegant-gray/20 rounded-md"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="store-address" className="block text-sm font-medium mb-1">
                        Store Address
                      </label>
                      <textarea
                        id="store-address"
                        defaultValue="123 Elegance Street, Fashion District, New York, NY 10001"
                        className="w-full p-3 border border-elegant-gray/20 rounded-md"
                        rows={3}
                      ></textarea>
                    </div>
                    
                    <Button className="mt-2">Save Changes</Button>
                  </form>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-medium mb-4">API Configuration</h3>
                  <p className="text-elegant-gray mb-4">
                    Configure API settings for integrating with external services.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="api-key" className="block text-sm font-medium mb-1">
                        API Key
                      </label>
                      <input
                        type="text"
                        id="api-key"
                        placeholder="Enter API key"
                        className="w-full p-3 border border-elegant-gray/20 rounded-md"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="api-endpoint" className="block text-sm font-medium mb-1">
                        API Endpoint
                      </label>
                      <input
                        type="text"
                        id="api-endpoint"
                        placeholder="https://api.example.com/v1"
                        className="w-full p-3 border border-elegant-gray/20 rounded-md"
                      />
                    </div>
                    
                    <Button className="mt-2">Save API Configuration</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
