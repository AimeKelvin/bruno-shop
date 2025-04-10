
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";
import Button from "@/components/ui/Button";

const About: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-elegant-beige/30 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Our Story
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Founded with a passion for timeless elegance and contemporary fashion, we're dedicated to bringing you the finest selection of clothing and accessories that empower and inspire.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-playfair text-3xl font-bold">Our Mission</h2>
              <Separator className="my-6 w-24" />
              <p className="text-gray-700">
                At Elegance, we believe in the power of thoughtful design and quality craftsmanship. Our mission is to create beautiful, versatile pieces that seamlessly integrate into your lifestyle, helping you express your unique sense of style with confidence.
              </p>
              <p className="mt-4 text-gray-700">
                We're committed to sustainable practices and ethical production, ensuring that our fashion-forward approach never comes at the expense of our planet or its people.
              </p>
            </div>
            <div className="rounded-lg bg-elegant-beige/20 p-6">
              <h3 className="font-playfair text-xl font-semibold">Our Values</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 rounded-full bg-elegant-gold p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span><strong>Quality:</strong> We never compromise on materials or craftsmanship</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 rounded-full bg-elegant-gold p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span><strong>Sustainability:</strong> Environmentally conscious practices in all we do</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 rounded-full bg-elegant-gold p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span><strong>Inclusivity:</strong> Fashion that celebrates diversity and individuality</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 rounded-full bg-elegant-gold p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span><strong>Innovation:</strong> Constant evolution while honoring timeless design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-playfair text-3xl font-bold">Meet Our Team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-700">
            The passionate individuals behind Elegance bring diverse expertise and a shared commitment to excellence.
          </p>
          
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1">
              <div className="aspect-[4/5] bg-elegant-beige/20">
                <img
                  src="https://placehold.co/400x500"
                  alt="Founder"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold">Sophia Chen</h3>
                <p className="text-elegant-gold">Founder & Creative Director</p>
                <p className="mt-3 text-sm text-gray-600">
                  With over 15 years in luxury fashion, Sophia brings her vision of accessible elegance to every collection.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1">
              <div className="aspect-[4/5] bg-elegant-beige/20">
                <img
                  src="https://placehold.co/400x500"
                  alt="Designer"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold">Marcus Johnson</h3>
                <p className="text-elegant-gold">Head of Design</p>
                <p className="mt-3 text-sm text-gray-600">
                  Marcus's innovative approach seamlessly blends traditional craftsmanship with contemporary aesthetics.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1">
              <div className="aspect-[4/5] bg-elegant-beige/20">
                <img
                  src="https://placehold.co/400x500"
                  alt="Sustainability"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold">Olivia Martinez</h3>
                <p className="text-elegant-gold">Sustainability Officer</p>
                <p className="mt-3 text-sm text-gray-600">
                  Olivia ensures our commitment to ethical production and environmental responsibility across all operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-playfair text-3xl font-bold">Our Journey</h2>
          <div className="relative mt-12 pl-8">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-elegant-gold/30"></div>
            
            {/* Timeline items */}
            <div className="mb-12 relative">
              <div className="absolute -left-8 flex h-16 w-16 items-center justify-center rounded-full bg-elegant-gold text-white">
                2015
              </div>
              <div className="ml-12">
                <h3 className="font-playfair text-xl font-semibold">The Beginning</h3>
                <p className="mt-2 text-gray-700">
                  Elegance was founded in a small studio with a vision to create timeless yet accessible fashion.
                </p>
              </div>
            </div>
            
            <div className="mb-12 relative">
              <div className="absolute -left-8 flex h-16 w-16 items-center justify-center rounded-full bg-elegant-gold text-white">
                2018
              </div>
              <div className="ml-12">
                <h3 className="font-playfair text-xl font-semibold">Going Global</h3>
                <p className="mt-2 text-gray-700">
                  We expanded our reach to international markets and opened our first flagship store.
                </p>
              </div>
            </div>
            
            <div className="mb-12 relative">
              <div className="absolute -left-8 flex h-16 w-16 items-center justify-center rounded-full bg-elegant-gold text-white">
                2020
              </div>
              <div className="ml-12">
                <h3 className="font-playfair text-xl font-semibold">Sustainability Pledge</h3>
                <p className="mt-2 text-gray-700">
                  We committed to fully sustainable production methods and ethical sourcing practices.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-8 flex h-16 w-16 items-center justify-center rounded-full bg-elegant-gold text-white">
                2024
              </div>
              <div className="ml-12">
                <h3 className="font-playfair text-xl font-semibold">New Horizons</h3>
                <p className="mt-2 text-gray-700">
                  Today, we continue to innovate while staying true to our core values of quality, elegance, and responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-elegant-navy py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold">Join Our Journey</h2>
          <p className="mx-auto mt-4 max-w-2xl">
            Discover the Elegance difference and be part of our story. Explore our latest collections and experience thoughtfully designed fashion that stands the test of time.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/shop" className="bg-white text-elegant-navy hover:bg-gray-100">
              Shop Collection
            </Button>
            <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
