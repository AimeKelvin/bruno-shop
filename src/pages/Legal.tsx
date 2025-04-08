
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Legal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8 md:py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl mb-6">Legal Information</h1>
          
          <div className="space-y-10">
            {/* Terms of Service */}
            <section>
              <h2 className="font-serif text-2xl mb-4">Terms of Service</h2>
              <div className="prose prose-charcoal max-w-none">
                <p className="text-charcoal-light mb-4">
                  Last updated: April 8, 2025
                </p>
                <p className="mb-4">
                  Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use.
                </p>
                <p className="mb-4">
                  The term 'us' or 'we' refers to the owner of the website. The term 'you' refers to the user or viewer of our website.
                </p>
                <h3 className="font-medium text-lg mt-6 mb-3">Use of the Website</h3>
                <p className="mb-4">
                  The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                </p>
                <p className="mb-4">
                  Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                </p>
                <p className="mb-4">
                  Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
                </p>
              </div>
            </section>
            
            {/* Privacy Policy */}
            <section>
              <h2 className="font-serif text-2xl mb-4">Privacy Policy</h2>
              <div className="prose prose-charcoal max-w-none">
                <p className="text-charcoal-light mb-4">
                  Last updated: April 8, 2025
                </p>
                <p className="mb-4">
                  This privacy policy sets out how we use and protect any information that you give us when you use this website.
                </p>
                <p className="mb-4">
                  We are committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
                </p>
                <h3 className="font-medium text-lg mt-6 mb-3">Information We Collect</h3>
                <p className="mb-4">
                  We may collect the following information:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Name and contact information including email address</li>
                  <li>Demographic information such as address, postal code, preferences and interests</li>
                  <li>Other information relevant to customer surveys and/or offers</li>
                  <li>Information about your visit, including which pages you visit, how long you are on the site, and other actions</li>
                </ul>
                <h3 className="font-medium text-lg mt-6 mb-3">Cookies</h3>
                <p className="mb-4">
                  A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
                </p>
                <p className="mb-4">
                  We use traffic log cookies to identify which pages are being used. This helps us analyze data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
                </p>
              </div>
            </section>
            
            {/* Shipping & Returns */}
            <section>
              <h2 className="font-serif text-2xl mb-4">Shipping & Returns</h2>
              <div className="prose prose-charcoal max-w-none">
                <h3 className="font-medium text-lg mt-6 mb-3">Shipping Policy</h3>
                <p className="mb-4">
                  We ship to addresses within the United States and internationally. Shipping costs are calculated during checkout based on weight, dimensions, and destination.
                </p>
                <p className="mb-4">
                  Orders are typically processed within 1-2 business days. Shipping times are estimated and not guaranteed. We are not responsible for delays once the package has been handed over to the carrier.
                </p>
                <h3 className="font-medium text-lg mt-6 mb-3">Return Policy</h3>
                <p className="mb-4">
                  We accept returns up to 30 days after delivery for most items. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
                </p>
                <p className="mb-4">
                  To initiate a return, please contact our customer service team. If your return is approved, we will send you instructions on how and where to send your package. Items sent back to us without prior approval will not be accepted.
                </p>
                <p className="mb-4">
                  You are responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Legal;
