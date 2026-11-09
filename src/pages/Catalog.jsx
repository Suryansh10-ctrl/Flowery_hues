import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductCatalogue from '../components/ProductCatalogue';
import QuickViewModal from '../components/QuickViewModal';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function Catalog() {
  const [searchParams] = useSearchParams();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const initialCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Editorial Catalog Header */}
      <div className="bg-[#181913] text-white py-16 sm:py-20 border-b border-[#2d2e26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-cream-300/60 uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Fragrance Catalog</span>
          </nav>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4">
            The Haute Parfumerie <span className="italic text-cream-300">Archive</span>
          </h1>

          <p className="text-sm sm:text-base text-cream-200/80 font-light max-w-2xl leading-relaxed">
            Explore our complete repertoire of slow-matured perfumes, crafted with sacred botanicals, cold-pressed citrus, and deep balsamic resins.
          </p>
        </div>
      </div>

      {/* Product Catalogue Component with full filter capability */}
      <ProductCatalogue
        initialCategory={initialCategory}
        onQuickView={setQuickViewProduct}
      />

      {/* Quick View Modal Overlay */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </div>
  );
}

