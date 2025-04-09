
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useIsMobile } from '../hooks/use-mobile';

// Sample data for demonstration
const salesData = [
  { name: 'Jan', sales: 4000, visitors: 2400 },
  { name: 'Feb', sales: 3000, visitors: 1398 },
  { name: 'Mar', sales: 2000, visitors: 9800 },
  { name: 'Apr', sales: 2780, visitors: 3908 },
  { name: 'May', sales: 1890, visitors: 4800 },
  { name: 'Jun', sales: 2390, visitors: 3800 },
  { name: 'Jul', sales: 3490, visitors: 4300 },
];

const topProducts = [
  { name: 'Minimalist Ceramic Vase', sales: 120 },
  { name: 'Handcrafted Ceramic Mug', sales: 98 },
  { name: 'Modern Wall Clock', sales: 86 },
  { name: 'Linen Throw Pillow', sales: 72 },
  { name: 'Wooden Serving Bowl', sales: 65 },
];

const Admin = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8 md:py-12">
        <div className="container-custom">
          <h1 className="font-serif text-3xl md:text-4xl mb-2">Admin Dashboard</h1>
          <p className="text-charcoal-light mb-8">Monitor sales, visitors, and store performance</p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-border p-6">
              <h3 className="text-charcoal-light mb-2">Total Sales</h3>
              <p className="text-3xl font-medium">$24,780</p>
              <p className="text-sm text-green-600 mt-2">+12% from last month</p>
            </div>
            
            <div className="bg-white border border-border p-6">
              <h3 className="text-charcoal-light mb-2">Total Orders</h3>
              <p className="text-3xl font-medium">316</p>
              <p className="text-sm text-green-600 mt-2">+8% from last month</p>
            </div>
            
            <div className="bg-white border border-border p-6">
              <h3 className="text-charcoal-light mb-2">Unique Visitors</h3>
              <p className="text-3xl font-medium">5,280</p>
              <p className="text-sm text-green-600 mt-2">+24% from last month</p>
            </div>
            
            <div className="bg-white border border-border p-6">
              <h3 className="text-charcoal-light mb-2">Conversion Rate</h3>
              <p className="text-3xl font-medium">3.8%</p>
              <p className="text-sm text-red-600 mt-2">-0.5% from last month</p>
            </div>
          </div>
          
          {/* Main Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Sales Chart */}
            <div className="bg-white border border-border p-6">
              <h2 className="text-xl font-serif mb-6">Monthly Sales</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={salesData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="#333333" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Visitors Chart */}
            <div className="bg-white border border-border p-6">
              <h2 className="text-xl font-serif mb-6">Website Traffic</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={salesData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="visitors" stroke="#A0A984" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          {/* Additional Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Products */}
            <div className="bg-white border border-border p-6">
              <h2 className="text-xl font-serif mb-6">Top Selling Products</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={topProducts}
                    layout={isMobile ? "vertical" : "horizontal"}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    {isMobile ? (
                      <>
                        <YAxis dataKey="name" type="category" width={150} />
                        <XAxis type="number" />
                      </>
                    ) : (
                      <>
                        <XAxis dataKey="name" type="category" />
                        <YAxis type="number" />
                      </>
                    )}
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#333333" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Google Analytics Integration Section */}
            <div className="bg-white border border-border p-6">
              <h2 className="text-xl font-serif mb-4">Google Analytics Integration</h2>
              <p className="mb-4">Connect your Google Analytics account to track detailed visitor statistics.</p>
              
              <div className="mb-6">
                <label className="block text-charcoal-light mb-2 text-sm">Google Analytics Tracking ID</label>
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="UA-XXXXXXXXX-X or G-XXXXXXXXXX" 
                    className="border border-border px-4 py-2 flex-1"
                  />
                  <button className="btn-primary whitespace-nowrap">Connect</button>
                </div>
              </div>
              
              <div className="p-4 bg-secondary border border-border">
                <h3 className="font-medium mb-2">How to set up Google Analytics:</h3>
                <ol className="list-decimal pl-5 text-sm text-charcoal-light space-y-1">
                  <li>Sign in to your Google Analytics account</li>
                  <li>Create a new property for your e-commerce store</li>
                  <li>Copy the tracking ID provided by Google</li>
                  <li>Paste it in the field above and click Connect</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
