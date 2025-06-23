import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BannerSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: string;
  buttonText: string;
  backgroundColor: string;
}

const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: BannerSlide[] = [
    {
      id: 1,
      title: "Members Only",
      subtitle: "Spend on any item",
      description: "WWS 18 Instant Heat Hot & Ambient Ultrafiltration Water Dispenser",
      price: "+$498",
      originalPrice: "Reference Price $1,688",
      image: "/images/water-dispenser-1.jpg",
      badge: "to redeem",
      buttonText: "Shop Now",
      backgroundColor: "bg-gradient-to-r from-black to-gray-800"
    },
    {
      id: 2,
      title: "Premium Quality",
      subtitle: "Water Solutions",
      description: "18L Mineral Water with Advanced Filtration Technology",
      price: "HK$ 81",
      image: "/images/water-bottle-18l.jpeg",
      buttonText: "Order Now",
      backgroundColor: "bg-gradient-to-r from-blue-600 to-blue-800"
    },
    {
      id: 3,
      title: "Health & Wellness",
      subtitle: "Pure Distilled Water",
      description: "800ml Premium Distilled Water - Perfect for Daily Hydration",
      price: "HK$ 81",
      image: "/images/distilled-water-800ml.JPG",
      buttonText: "Buy Now",
      backgroundColor: "bg-gradient-to-r from-green-600 to-[#76B900]"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div className={`w-full h-full ${slide.backgroundColor} flex items-center`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="text-white space-y-4 md:space-y-6">
                  {slide.badge && (
                    <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      {slide.title}
                    </div>
                  )}
                  
                  <div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-2">
                      {slide.subtitle}
                    </h1>
                    {slide.badge && (
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-4xl md:text-6xl font-bold text-red-400">
                          {slide.price}
                        </span>
                        {slide.badge && (
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                            {slide.badge}
                          </span>
                        )}
                      </div>
                    )}
                    {slide.originalPrice && (
                      <p className="text-gray-300 text-sm mb-4">
                        ({slide.originalPrice})
                      </p>
                    )}
                  </div>

                  <p className="text-lg md:text-xl text-gray-200 max-w-md">
                    {slide.description}
                  </p>

                  {!slide.badge && (
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      {slide.price}
                    </div>
                  )}

                  <button className="bg-[#76B900] hover:bg-[#6ba800] text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200 inline-flex items-center">
                    {slide.buttonText}
                  </button>

                  {slide.badge && (
                    <div className="text-xs text-gray-400 max-w-md">
                      Photos are for reference only and the goods are subject to the actual product.
                      Offer valid while stocks last.
                    </div>
                  )}
                </div>

                {/* Image */}
                <div className="flex justify-center md:justify-end">
                  <div className="relative">
                    <img
                      src={slide.image}
                      alt={slide.description}
                      className="w-64 h-64 md:w-80 md:h-80 object-contain"
                    />
                    {slide.badge && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-white text-black px-3 py-1 rounded-full text-sm font-bold">
                          Made in Korea
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
