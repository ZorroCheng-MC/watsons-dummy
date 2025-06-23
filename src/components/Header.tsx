import React, { useState } from 'react';
import { ShoppingCart, User, ChevronDown, Search, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const mainNavigation = [
    {
      category: "Water & Beverage",
      subcategories: [
        { name: "Dispenser", link: "/dispenser" },
        {
          name: "Water",
          subitems: [
            { name: "All", link: "/water" },
            { name: "Distilled Water", link: "/distilled-water" },
            { name: "Mineral Water", link: "/mineral-water" },
            { name: "Functional Water", link: "/functional-water" },
            { name: "Sparkling Water", link: "/sparkling-water" }
          ]
        },
        {
          name: "Soda",
          subitems: [
            { name: "All", link: "/soda" },
            { name: "Mixer", link: "/mixer" },
            { name: "Other Soda Drink", link: "/other-soda" }
          ]
        },
        {
          name: "Juice & Others",
          subitems: [
            { name: "All", link: "/juice" },
            { name: "Coconut Drink", link: "/coconut" },
            { name: "Other Juice", link: "/other-juice" },
            { name: "Snack", link: "/snack" }
          ]
        },
        {
          name: "Tea & Coffee",
          subitems: [
            { name: "All", link: "/tea-coffee" },
            { name: "Non-sweeten Tea", link: "/non-sweeten-tea" },
            { name: "Fruity Tea", link: "/fruity-tea" },
            { name: "Coffee", link: "/coffee" }
          ]
        },
        {
          name: "Wellness",
          subitems: [
            { name: "All", link: "/wellness" },
            { name: "Chicken Essence", link: "/chicken-essence" },
            { name: "Probiotics", link: "/probiotics" },
            { name: "Wine", link: "/wine" }
          ]
        },
        {
          name: "Accessories",
          subitems: [
            { name: "All", link: "/accessories" },
            { name: "Paper Cup", link: "/paper-cup" },
            { name: "Cup Holder", link: "/cup-holder" }
          ]
        }
      ]
    },
    {
      category: "Watsons Water Solution",
      subcategories: [
        {
          name: "Water Filter Dispenser",
          subitems: [
            { name: "All", link: "/water-filter-dispenser" },
            { name: "Floorstand", link: "/floorstand" },
            { name: "Tabletop", link: "/tabletop-dispenser" }
          ]
        },
        {
          name: "Filter",
          subitems: [
            { name: "All", link: "/filter" },
            { name: "Tabletop", link: "/tabletop-filter" }
          ]
        }
      ]
    },
    {
      category: "About Us",
      subcategories: [
        { name: "About Watsons Water", link: "/about-us" },
        { name: "Milestone", link: "/milestone" },
        { name: "Awards", link: "/awards" },
        { name: "Health Tips", link: "/health-tips" },
        { name: "Career", link: "/career" },
        { name: "Sustainability", link: "/sustainability" }
      ]
    },
    {
      category: "More",
      subcategories: [
        { name: "Maintenance", link: "/maintenance" },
        { name: "Contact Us", link: "/contact-us" }
      ]
    }
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top Header Bar */}
      <div className="bg-[#76B900] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-white font-bold text-xl">
                watsons water
              </a>
            </div>

            {/* Right side utilities */}
            <div className="flex items-center space-x-6">
              {/* Currency */}
              <div className="flex items-center text-sm">
                <span className="bg-white text-[#76B900] px-2 py-1 rounded text-xs font-medium">
                  HKD
                </span>
              </div>

              {/* Language Toggle */}
              <div className="flex items-center">
                <button className="text-white hover:text-gray-200 text-sm">
                  中
                </button>
              </div>

              {/* Cart */}
              <div className="flex items-center">
                <button 
                  onClick={() => setIsCartModalOpen(true)}
                  className="flex items-center text-white hover:text-gray-200"
                >
                  <ShoppingCart className="h-5 w-5 mr-1" />
                  <span className="bg-red-500 text-white rounded-full text-xs px-2 py-1 ml-1">
                    0
                  </span>
                </button>
              </div>

              {/* Customer Type */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('customer')}
                  className="flex items-center text-white hover:text-gray-200 text-sm"
                >
                  <span>Household</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                {openDropdown === 'customer' && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Household</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Commercial</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Retail</a>
                    </div>
                  </div>
                )}
              </div>

              {/* Login */}
              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className="flex items-center text-white hover:text-gray-200 text-sm"
              >
                <User className="h-4 w-4 mr-1" />
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {mainNavigation.map((item, index) => (
                <div key={index} className="relative group">
                  <button 
                    className="flex items-center text-gray-900 hover:text-[#76B900] px-3 py-2 text-sm font-medium transition-colors"
                    onClick={() => toggleDropdown(item.category)}
                  >
                    {item.category}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {openDropdown === item.category && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 border">
                      <div className="py-2">
                        {item.subcategories.map((sub, subIndex) => (
                          <div key={subIndex} className="relative group/sub">
                            <a 
                              href={sub.link || '#'}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#76B900]"
                            >
                              {sub.name}
                            </a>
                            {'subitems' in sub && sub.subitems && (
                              <div className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg border ml-1 hidden group-hover/sub:block">
                                <div className="py-2">
                                  {sub.subitems.map((subitem, subitemIndex) => (
                                    <a 
                                      key={subitemIndex}
                                      href={subitem.link}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#76B900]"
                                    >
                                      {subitem.name}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#76B900] focus:border-transparent"
                />
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-[#76B900] p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-1">
              {mainNavigation.map((item, index) => (
                <div key={index}>
                  <button className="w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-[#76B900]">
                    {item.category}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">My Account Login</h2>
              <button 
                onClick={() => setIsLoginModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  User Login
                </label>
                <input 
                  type="text" 
                  placeholder="Please input Customer Code"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#76B900]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input 
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#76B900]"
                />
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-sm text-[#76B900] hover:underline">
                  Reset Password
                </a>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#76B900] text-white py-2 px-4 rounded-md hover:bg-[#6ba800] transition-colors"
              >
                Login
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-2">
                Haven't registered an account yet? Let's join us now and enjoy our discount offers.
              </p>
              <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors">
                Join Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {isCartModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Shopping Cart</h2>
              <button 
                onClick={() => setIsCartModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <div className="text-right">
                <p className="text-lg font-bold">Sub Total: HK$ 0</p>
              </div>
            </div>
            <button className="w-full bg-[#76B900] text-white py-2 px-4 rounded-md hover:bg-[#6ba800] transition-colors">
              Checkout
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              eCoupon, promotion code and bottle return will be processed in the next page.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
