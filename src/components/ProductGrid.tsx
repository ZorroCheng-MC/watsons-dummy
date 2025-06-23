import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Eye } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description?: string;
  price: string;
  image: string;
  tag?: string;
  category: string;
}

const ProductGrid: React.FC = () => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const products: Product[] = [
    {
      id: 1,
      name: "WWS 18 Instant Heat Hot & Ambient Ultrafiltration Water Dispenser",
      price: "HK$ 1,488",
      image: "/images/water-dispenser-1.jpg",
      tag: "New",
      category: "Water Dispenser"
    },
    {
      id: 2,
      name: "Watsons Water Solution CF1 Advanced Pro Filter Set",
      description: "Set Include CF1 Advanced Pro Filter X 1 Set; Tube with diverter X 1 Set; Screw Cap X 2 Set; Adapter X 1 Unit.",
      price: "HK$ 1,888",
      image: "/images/filter-system.png",
      category: "Filter System"
    },
    {
      id: 3,
      name: "Watsons Water 800ml (Distilled)^",
      description: "1 Case x 24 Bottles",
      price: "HK$ 81",
      image: "/images/distilled-water-800ml.JPG",
      category: "Distilled Water"
    },
    {
      id: 4,
      name: "HC50L-UFD Upward Hot & Chilled Water Dispenser with 40 bottles 18L ecoupon Package",
      description: "Floorstand",
      price: "HK$ 6,888",
      image: "/images/hot-cold-dispenser.jpeg",
      category: "Water Dispenser"
    },
    {
      id: 5,
      name: "HC 118-UFD UVC Hot & Chilled Water Dispenser with 90 bottles 18L ecoupon Package",
      description: "Floorstand",
      price: "HK$ 15,888",
      image: "/images/water-dispenser-1.jpg",
      category: "Water Dispenser"
    },
    {
      id: 6,
      name: "Watsons Water 18L (with minerals)",
      description: "With mineral/1 bottle",
      price: "HK$ 81",
      image: "/images/water-bottle-18l.jpeg",
      category: "Mineral Water"
    },
    {
      id: 7,
      name: "Watsons Water 430ml (Distilled)^",
      description: "1 Case x 24 Bottles",
      price: "HK$ 72",
      image: "/images/distilled-water-800ml.JPG",
      category: "Distilled Water"
    },
    {
      id: 8,
      name: "Watson Soda Water 330ml x 24 ##*",
      description: "1 Case x 24 CANs",
      price: "HK$ 85",
      image: "/images/mineral-water.jpg",
      category: "Soda Water"
    }
  ];

  const updateQuantity = (productId: number, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) + change)
    }));
  };

  const addToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1;
    // In a real app, this would integrate with cart state management
    alert(`Added ${quantity} x ${product.name} to cart`);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium water solutions, from pure distilled water to advanced filtration systems
          </p>
        </div>

        {/* Order Process Guide */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-[#76B900]">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-[#76B900] mb-2">
                The Handiest Way to Order Water
              </h3>
              <div className="flex flex-wrap justify-center items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#76B900] text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <span>Choose Products</span>
                </div>
                <div className="text-gray-400">→</div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#76B900] text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <span>Add to Cart</span>
                </div>
                <div className="text-gray-400">→</div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#76B900] text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <span>Checkout</span>
                </div>
                <div className="text-gray-400">→</div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#76B900] text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <span>Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
              {/* Product Image */}
              <div className="relative bg-gray-50 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                {product.tag && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    {product.tag}
                  </div>
                )}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full shadow-md">
                    <Eye className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="mb-2">
                  <span className="text-xs text-[#76B900] font-medium bg-green-50 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
                  {product.name}
                </h3>
                
                {product.description && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                )}

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-[#76B900]">
                    {product.price}
                  </span>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">Quantity:</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(product.id, -1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                      disabled={!quantities[product.id] || quantities[product.id] === 0}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-medium">
                      {quantities[product.id] || 0}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-[#76B900] hover:bg-[#6ba800] text-white py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white hover:bg-gray-50 text-[#76B900] border-2 border-[#76B900] py-3 px-8 rounded-md font-semibold transition-colors duration-200">
            View All Products
          </button>
        </div>

        {/* Order Link */}
        <div className="text-center mt-8">
          <a 
            href="#" 
            className="inline-flex items-center text-[#76B900] hover:text-[#6ba800] font-medium"
          >
            Order (English) →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
