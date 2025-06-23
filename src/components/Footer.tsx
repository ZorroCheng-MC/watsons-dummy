import React from 'react';
import { ArrowUp, Smartphone, Monitor } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Water & Beverage", href: "#" },
        { name: "Dispenser", href: "#" },
        { name: "Distilled Water", href: "#" },
        { name: "Mixer", href: "#" },
        { name: "Coconut Drink", href: "#" },
        { name: "Non-sweeten Tea", href: "#" },
        { name: "Watsons Caffé", href: "#" },
        { name: "Watsons Water Solution", href: "#" }
      ]
    },
    {
      title: "Promotions",
      links: [
        { name: "Latest Product", href: "#" },
        { name: "Latest News", href: "#" },
        { name: "Recycling Green Point Location Map", href: "#" }
      ]
    },
    {
      title: "About Us",
      links: [
        { name: "About Watsons Water", href: "#" },
        { name: "Milestone", href: "#" },
        { name: "Awards", href: "#" },
        { name: "Health Tips", href: "#" },
        { name: "Career", href: "#" },
        { name: "Sustainability", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", href: "#" },
        { name: "Useful Information", href: "#" },
        { name: "Contact Us", href: "#" }
      ]
    },
    {
      title: "Maintenance",
      links: [
        { name: "Maintenance", href: "#" }
      ]
    }
  ];

  const paymentMethods = [
    { name: "Visa", icon: "💳" },
    { name: "Mastercard", icon: "💳" },
    { name: "Alipay", icon: "💰" }
  ];

  const socialPlatforms = [
    { name: "LinkedIn", icon: "💼" },
    { name: "Facebook", icon: "📘" },
    { name: "YouTube", icon: "📺" }
  ];

  return (
    <footer className="bg-white border-t">
      {/* Payment Methods and Social Media */}
      <div className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-[#76B900] font-semibold">Payment Methods</span>
              <div className="flex space-x-3">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center space-x-1 bg-white px-3 py-1 rounded border">
                    <span className="text-lg">{method.icon}</span>
                    <span className="text-sm text-gray-600">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-[#76B900] font-semibold">Follow us on</span>
              <div className="flex space-x-3">
                {socialPlatforms.map((platform, index) => (
                  <a key={index} href="#" className="text-2xl hover:opacity-70 transition-opacity">
                    {platform.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Footer Navigation Columns */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-[#76B900] font-semibold text-lg mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-gray-600 hover:text-[#76B900] text-sm transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile Apps and Regional Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mobile Apps */}
              <div>
                <h3 className="text-[#76B900] font-semibold text-lg mb-4">
                  Mobile Apps
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#76B900] text-white p-3 rounded-lg">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Watsons Water App</h4>
                      <p className="text-sm text-gray-600">Order water on the go</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500 text-white p-3 rounded-lg">
                      <Monitor className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Drops of Fun</h4>
                      <p className="text-sm text-gray-600">Interactive water games</p>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-4">
                    <a href="#" className="inline-block">
                      <div className="bg-black text-white px-4 py-2 rounded flex items-center space-x-2">
                        <span className="text-sm">📱 App Store</span>
                      </div>
                    </a>
                    <a href="#" className="inline-block">
                      <div className="bg-green-600 text-white px-4 py-2 rounded flex items-center space-x-2">
                        <span className="text-sm">🤖 Google Play</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Regional Links and Features */}
              <div>
                <h3 className="text-[#76B900] font-semibold text-lg mb-4">
                  Other Regions & Services
                </h3>
                <div className="space-y-3">
                  <a href="#" className="block bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">🇨🇳</div>
                      <div>
                        <h4 className="font-medium text-gray-900">Watsons Water China</h4>
                        <p className="text-sm text-gray-600">中国大陆服务</p>
                      </div>
                    </div>
                  </a>
                  
                  <a href="#" className="block bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">🇲🇴</div>
                      <div>
                        <h4 className="font-medium text-gray-900">Watsons Water Macau</h4>
                        <p className="text-sm text-gray-600">澳門服務</p>
                      </div>
                    </div>
                  </a>
                  
                  <a href="#" className="block bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">📍</div>
                      <div>
                        <h4 className="font-medium text-gray-900">Dispenser Points of Sales</h4>
                        <p className="text-sm text-gray-600">Find authorized dealers</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="bg-[#76B900] rounded-lg p-6 text-white">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Stay Updated with Watsons Water
                </h3>
                <p className="mb-4 text-green-100">
                  Get exclusive offers, health tips, and product updates delivered to your inbox
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="bg-white text-[#76B900] px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#76B900] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <a href="#" className="hover:text-green-200 transition-colors">Terms and Conditions</a>
              <span className="text-green-300">|</span>
              <a href="#" className="hover:text-green-200 transition-colors">Privacy Policy</a>
              <span className="text-green-300">|</span>
              <a href="#" className="hover:text-green-200 transition-colors">Career</a>
              <span className="text-green-300">|</span>
              <a href="#" className="hover:text-green-200 transition-colors">Site Map</a>
              <span className="text-green-300">|</span>
              <a href="#" className="hover:text-green-200 transition-colors">Website Disclaimer</a>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 hover:text-green-200 transition-colors"
            >
              <span className="text-sm">Back To Top</span>
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-6 border-t border-green-600 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <p className="text-sm text-green-100">
                AS Watson Group (HK) Limited (incorporated in the British Virgin Islands with limited liability). 
                Copyright 2025 All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-green-100">Powered by</span>
                <div className="bg-white text-[#76B900] px-2 py-1 rounded text-xs font-bold">
                  CK Hutchison Holdings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
