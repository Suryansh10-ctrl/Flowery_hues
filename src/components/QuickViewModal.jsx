import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Star, ShoppingBag, Heart, Check, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';

export default function QuickViewModal({ product, onClose }) {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('50ml');
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();

  const isFavorite = isInWishlist(product.id);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    setAdded(true);
    showToast(`Added ${quantity}x ${product.name} (${selectedSize}) to your Bag`, 'cart');
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  const handleWishlistToggle = () => {
    toggleWishlist(product);
    if (!isFavorite) {
      showToast(`Saved ${product.name} to your Wishlist`, 'heart');
    } else {
      showToast(`Removed ${product.name} from your Wishlist`, 'heart');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-hidden animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] shadow-2xl border border-[#ded8ce] flex flex-col md:flex-row overflow-hidden my-auto animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 shadow-md hover:bg-burgundy-700 hover:text-white text-ink-900 flex items-center justify-center transition-colors border border-[#ded8ce]"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        {/* Left Column: Image (compact on mobile, full side on desktop) */}
        <div className="relative w-full md:w-1/2 h-48 sm:h-64 md:h-auto shrink-0 bg-cream-150 overflow-hidden flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-1 z-10 pointer-events-none">
            {product.isBestSeller && (
              <span className="bg-burgundy-700 text-white text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold px-2 sm:px-2.5 py-0.5 shadow-sm">
                Best Seller
              </span>
            )}
            {product.isNew && (
              <span className="bg-ink-900 text-white text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold px-2 sm:px-2.5 py-0.5 shadow-sm">
                New Scent
              </span>
            )}
          </div>
        </div>

        {/* Right Column: Information & Interactions (single scrollable container) */}
        <div className="flex-1 p-5 sm:p-6 md:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Header info */}
            <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-taupe-500 font-semibold mb-1">
              {product.category} • {product.gender}
            </div>

            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-ink-900 font-normal leading-tight">
              {product.name}
            </h2>

            <p className="text-xs sm:text-sm text-taupe-500 italic mt-0.5">
              {product.subtitle}
            </p>

            {/* Rating & reviews */}
            <div className="flex items-center gap-2 mt-2 mb-3">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-ink-900">{product.rating}</span>
              <span className="text-[11px] text-taupe-400">({product.reviewsCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-3.5 pb-3.5 border-b border-[#eee8df]">
              <span className="font-serif text-2xl sm:text-3xl font-medium text-burgundy-700">
                ${product.price.toFixed(2)}
              </span>
              {product.priceOld && (
                <span className="text-xs sm:text-sm text-taupe-400 line-through">
                  ${product.priceOld.toFixed(2)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-ink-900/80 leading-relaxed font-light mb-4">
              {product.description}
            </p>

            {/* Olfactory Notes */}
            <div className="bg-cream-150 p-3 sm:p-4 border border-[#e8e2d8] mb-4 space-y-1 text-xs">
              <p><strong className="text-burgundy-700 uppercase tracking-wider font-semibold text-[10px] sm:text-xs">Top:</strong> {product.notes.top.join(', ')}</p>
              <p><strong className="text-burgundy-700 uppercase tracking-wider font-semibold text-[10px] sm:text-xs">Heart:</strong> {product.notes.heart.join(', ')}</p>
              <p><strong className="text-burgundy-700 uppercase tracking-wider font-semibold text-[10px] sm:text-xs">Base:</strong> {product.notes.base.join(', ')}</p>
            </div>

            {/* Size Selector */}
            <div className="mb-4">
              <label className="block text-[10px] sm:text-xs uppercase tracking-wider text-taupe-500 font-medium mb-1.5">
                Select Flacon Size
              </label>
              <div className="flex gap-2">
                {['50ml', '100ml'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium border transition-colors ${
                      selectedSize === size
                        ? 'border-burgundy-700 bg-burgundy-700 text-white'
                        : 'border-[#ded8ce] text-ink-900 hover:border-burgundy-700'
                    }`}
                  >
                    {size} ({size === '50ml' ? 'Standard' : 'Deluxe'})
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Add to Cart */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <div className="flex items-center border border-[#ded8ce] bg-cream-100 shrink-0">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2.5 py-2 text-ink-900 hover:text-burgundy-700 font-bold text-xs"
                >
                  -
                </button>
                <span className="px-2.5 py-2 text-xs font-semibold">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2.5 py-2 text-ink-900 hover:text-burgundy-700 font-bold text-xs"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                disabled={added}
                className="flex-1 py-2.5 sm:py-3 px-4 bg-burgundy-700 hover:bg-burgundy-800 text-white text-xs uppercase tracking-[0.16em] font-medium transition-colors flex items-center justify-center gap-1.5 shadow"
              >
                {added ? (
                  <>
                    <Check size={15} />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={15} />
                    <span>Add • ${(product.price * quantity).toFixed(2)}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleWishlistToggle}
                className={`p-2.5 sm:p-3 border transition-colors shrink-0 ${
                  isFavorite
                    ? 'border-burgundy-700 bg-burgundy-700 text-white'
                    : 'border-[#ded8ce] text-ink-900 hover:border-burgundy-700'
                }`}
                title="Wishlist"
              >
                <Heart size={16} className={isFavorite ? 'fill-current' : ''} />
              </button>
            </div>
          </div>

          {/* Footer link to full details */}
          <div className="pt-3 border-t border-[#eee8df] flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-taupe-500 text-[11px] sm:text-xs">
              <Clock size={13} />
              <span>{product.longevity}</span>
            </div>
            <Link
              to={`/product/${product.id}`}
              onClick={onClose}
              className="text-burgundy-700 hover:text-burgundy-900 font-semibold tracking-wider uppercase text-[11px] sm:text-xs underline underline-offset-2"
            >
              View Full Details →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
