
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-playfair mb-6">Contact Us</h1>
          
          <p className="text-elegant-gray mb-12 max-w-2xl">
            We're here to help! Whether you have a question about our products, your order, or anything else, our team is ready to assist you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-medium mb-6">Get in Touch</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-elegant-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-elegant-navy/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-elegant-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-elegant-navy/50"
                      placeholder="Your email address"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border border-elegant-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-elegant-navy/50"
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full p-3 border border-elegant-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-elegant-navy/50"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full sm:w-auto flex items-center gap-2">
                  <Send size={16} />
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 text-elegant-navy flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Our Store</h3>
                    <p className="text-elegant-gray">
                      123 Elegance Street<br />
                      Fashion District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-4 text-elegant-navy flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-elegant-gray">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 text-elegant-navy flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-elegant-gray">
                      hello@elegance.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="mr-4 text-elegant-navy flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Hours</h3>
                    <p className="text-elegant-gray">
                      Monday - Friday: 9am - 6pm<br />
                      Saturday: 10am - 5pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-elegant-beige/30 p-6 rounded-lg">
                <h3 className="font-medium mb-2">Customer Support</h3>
                <p className="text-elegant-gray mb-4">
                  Need immediate assistance? Our customer support team is available to help you during business hours.
                </p>
                <Button variant="outline">Live Chat</Button>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden h-80 mb-12">
            {/* Placeholder for map - in a real app, would integrate with Google Maps or similar */}
            <div className="w-full h-full bg-elegant-beige/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-4 text-elegant-navy" />
                <p className="font-medium">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
          
          <div className="bg-elegant-beige/30 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-medium mb-4">Frequently Asked Questions</h2>
            <p className="text-elegant-gray mb-6">
              Find quick answers to common questions about our products, shipping, returns, and more.
            </p>
            <Button>View FAQ</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
