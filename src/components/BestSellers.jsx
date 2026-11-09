import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/products';
import { ArrowRight } from 'lucide-react';

export default function BestSellers({ onQuickView }) {
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <section id="best-sellers" className="py-24 sm:py-32 bg-cream-150 border-b border-[#e9e3da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-[1px] w-6 bg-burgundy-700"></span>
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-burgundy-700 font-semibold">
                best sellers
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink-900 tracking-tight">
              Our <span className="italic text-burgundy-700">Most-Loved</span> Fragrances
            </h2>
            
            <p className="text-xs sm:text-sm text-taupe-500 mt-2 max-w-xl">
              Click on the image to see product details and click Buy to add a product to cart.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-burgundy-700 hover:text-burgundy-900 border-b border-burgundy-700/40 pb-1 hover:border-burgundy-900 transition-colors group"
            >
              <span>View Entire Collection</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {bestSellers.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

