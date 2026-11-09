import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';
import FirstOrderDiscount from '../components/FirstOrderDiscount';
import { ChevronRight, Award, Sparkles, ArrowRight } from 'lucide-react';

export default function BestSellersPage() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Editorial Header */}
      <div className="bg-[#181913] text-white py-16 sm:py-20 border-b border-[#2d2e26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-cream-300/60 uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Best Sellers</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-3">
            <Award size={15} className="text-burgundy-400" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-cream-300 font-medium">
              iconic creations
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4">
            Our Most-Loved <span className="italic text-cream-200">Fragrances</span>
          </h1>

          <p className="text-sm sm:text-base text-cream-200/80 font-light max-w-2xl leading-relaxed">
            Celebrated by critics and treasured by devoted wearers worldwide. Each creation is formulated with our highest concentration of pure botanical absolutes.
          </p>
        </div>
      </div>

      {/* Best Sellers Grid */}
      <section className="py-20 sm:py-28 bg-cream-100 border-b border-[#e9e3da]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#ded8ce]">
            <span className="text-xs text-taupe-500 uppercase tracking-wider font-medium">
              Showing <strong className="text-ink-900">{bestSellers.length}</strong> Signature Formulations
            </span>
            <Link
              to="/catalog"
              className="text-xs uppercase tracking-wider text-burgundy-700 hover:underline font-semibold flex items-center gap-1"
            >
              <span>View Full Catalog</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            {bestSellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* First Order Discount Promo */}
      <FirstOrderDiscount />

      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </div>
  );
}

