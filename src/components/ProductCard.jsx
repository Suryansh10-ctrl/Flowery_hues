import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag, Star, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';

export default function ProductCard({ product, onQuickView }) {
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();

  const isFavorite = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.volume);
    setAdded(true);
    showToast(`Added ${product.name} to your Flacon Bag`, 'cart');
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    if (!isFavorite) {
      showToast(`Saved ${product.name} to your Wishlist`, 'heart');
    } else {
      showToast(`Removed ${product.name} from your Wishlist`, 'heart');
    }
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) onQuickView(product);
  };

  return (
    <div
      className="group bg-white border border-[#ece6dd] hover:border-burgundy-700/50 transition-all duration-300 flex flex-col justify-between relative shadow-sm hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image Box */}
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-150">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={isHovered && product.secondaryImage ? product.secondaryImage : product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Ribbons / Badges */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 z-10 pointer-events-none">
          {product.isBestSeller && (
            <span className="bg-burgundy-700 text-white text-[8.5px] sm:text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5">
              Best Seller
            </span>
          )}
          {product.isNew && (
            <span className="bg-ink-900 text-white text-[8.5px] sm:text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5">
              New Scent
            </span>
          )}
          {product.priceOld && (
            <span className="bg-[#a33d42] text-white text-[8.5px] sm:text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5">
              Save {Math.round(((product.priceOld - product.price) / product.priceOld) * 100)}%
            </span>
          )}
        </div>

        {/* Floating Quick Action Buttons (Wishlist & Quick View) */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex flex-col gap-1.5 z-10">
          <button
            onClick={handleWishlistToggle}
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-md ${
              isFavorite
                ? 'bg-burgundy-700 text-white'
                : 'bg-white/90 backdrop-blur-sm text-ink-900 hover:text-burgundy-700 hover:bg-white'
            }`}
            title={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}
            aria-label="Wishlist toggle"
          >
            <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={handleQuickView}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-sm text-ink-900 hover:text-burgundy-700 hover:bg-white flex items-center justify-center transition-all duration-200 shadow-md opacity-90 group-hover:opacity-100"
            title="Quick view product"
            aria-label="Quick view"
          >
            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Quick Add Overlay on Desktop Hover */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
          <button
            onClick={handleAddToCart}
            className="w-full py-2.5 bg-white hover:bg-burgundy-700 text-ink-900 hover:text-white text-xs uppercase tracking-widest font-semibold transition-colors duration-200 flex items-center justify-center gap-2 shadow"
          >
            {added ? (
              <>
                <Check size={14} className="text-green-600 group-hover:text-white" />
                <span>Added to Cart</span>
              </>
            ) : (
              <>
                <ShoppingBag size={14} />
                <span>Quick Add</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Details Content */}
      <div className="p-3 sm:p-5 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Category & Volume */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-taupe-500 uppercase tracking-widest mb-1 font-medium">
            <span className="truncate pr-1">{product.category}</span>
            <span className="shrink-0">{product.volume.split('/')[0]}</span>
          </div>

          {/* Product Name */}
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="font-serif text-sm sm:text-lg lg:text-xl font-medium text-ink-900 hover:text-burgundy-700 transition-colors line-clamp-1 leading-tight">
              {product.name}
            </h3>
          </Link>

          {/* Subtitle / Concentration */}
          <p className="text-[11px] sm:text-xs text-taupe-500 italic mb-1.5 truncate">
            {product.subtitle}
          </p>

          {/* Short Description (desktop) */}
          <p className="hidden sm:block text-xs text-ink-900/70 line-clamp-2 leading-relaxed mb-3 font-light">
            {product.shortDescription}
          </p>
        </div>

        <div className="pt-2 sm:pt-3 border-t border-[#f0eae1]">
          {/* Rating and Price */}
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <div className="flex items-center gap-1 text-amber-600 text-[11px] sm:text-xs font-semibold">
              <Star size={12} className="fill-amber-500 text-amber-500 shrink-0" />
              <span>{product.rating}</span>
            </div>

            <div className="flex items-baseline gap-1.5">
              {product.priceOld && (
                <span className="text-[10px] sm:text-xs text-taupe-400 line-through">
                  ${product.priceOld.toFixed(0)}
                </span>
              )}
              <span className="font-serif text-sm sm:text-lg lg:text-xl font-medium text-burgundy-700">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Mobile Full Add To Cart Button */}
          <div className="sm:hidden">
            <button
              onClick={handleAddToCart}
              className="w-full py-1.5 bg-burgundy-700 text-white text-[11px] uppercase tracking-wider font-medium flex items-center justify-center gap-1.5 shadow-sm"
            >
              {added ? <Check size={13} /> : <ShoppingBag size={13} />}
              <span>{added ? 'Added' : 'Add to Bag'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

