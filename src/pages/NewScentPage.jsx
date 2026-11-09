import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FragranceNotes from '../components/FragranceNotes';
import DiscoverBanner from '../components/DiscoverBanner';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';
import { PRODUCTS } from '../data/products';
import { ChevronRight, Sparkles, Droplets } from 'lucide-react';

export default function NewScentPage() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const newReleases = PRODUCTS.filter((p) => p.isNew);

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
            <span className="text-white">New Scent & Olfactory Notes</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles size={15} className="text-burgundy-400" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-cream-300 font-medium">
              seasonal harvests
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4">
            Layers of Scent, <br />
            <span className="italic text-cream-200">"Unfolding Like a Story"</span>
          </h1>

          <p className="text-sm sm:text-base text-cream-200/80 font-light max-w-2xl leading-relaxed">
            Every creation begins with a whisper of raw botanicals. Explore our sacred notes and the latest contemporary compositions from our master perfumer's bench.
          </p>
        </div>
      </div>

      {/* Fragrance Notes In-Depth Breakdown */}
      <FragranceNotes />

      {/* New Seasonal Releases Product Grid */}
      <section className="py-20 sm:py-28 bg-cream-150 border-b border-[#e9e3da]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-burgundy-700 font-semibold mb-2">
              Recent Compositions
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 font-normal">
              New Olfactory <span className="italic text-burgundy-700">Arrivals</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            {newReleases.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Discover Scent Diagnostic Banner */}
      <DiscoverBanner />

      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </div>
  );
}

