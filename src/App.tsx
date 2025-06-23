import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import FloatingChatbot from './components/FloatingChatbot';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroBanner />
        <ProductGrid />
      </main>
      <Footer />
      <FloatingChatbot />
    </div>
  );
}

export default App;
