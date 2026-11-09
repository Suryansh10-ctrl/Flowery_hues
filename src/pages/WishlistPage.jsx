import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';
import { Heart, ShoppingBag, ArrowRight, ChevronRight, Trash2 } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-taupe-500 uppercase tracking-widest mb-6">
          <Link to="/" className="hover:text-burgundy-700 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-burgundy-700 font-semibold">Saved Creations</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#ded8ce]">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <Heart size={16} className="text-burgundy-700 fill-burgundy-700" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-burgundy-700 font-semibold">
                your curated collection
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink-900 tracking-tight">
              Personal <span className="italic text-burgundy-700">Wishlist</span>
            </h1>
          </div>

          <span className="text-xs text-taupe-500 uppercase tracking-wider">
            {wishlist.length} {wishlist.length === 1 ? 'fragrance' : 'fragrances'} saved
          </span>
        </div>

        {/* Wishlist Items Grid */}
        {wishlist.length === 0 ? (
          <div className="bg-white border border-[#ded8ce] p-12 sm:p-20 text-center space-y-4 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-cream-150 border border-[#ded8ce] flex items-center justify-center text-taupe-400 mx-auto">
              <Heart size={28} />
            </div>
            <h2 className="font-serif text-2xl text-ink-900">Your wishlist is currently empty</h2>
            <p className="text-xs sm:text-sm text-taupe-500 max-w-sm mx-auto font-light">
              Tap the heart icon on any creation in our catalog to save it for your next fragrance ritual.
            </p>
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-burgundy-700 hover:bg-burgundy-800 text-white text-xs uppercase tracking-widest font-semibold transition-colors shadow-md mt-4"
            >
              <span>Explore The Archive</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            {wishlist.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        )}

      </div>

      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </div>
  );
}

