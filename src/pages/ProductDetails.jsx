import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';
import {
  Star,
  ShoppingBag,
  Heart,
  ChevronRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Droplets,
  Check,
  ArrowRight
} from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);

  const [activeImage, setActiveImage] = useState(product?.image);
  const [selectedSize, setSelectedSize] = useState('50ml');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const [activeTab, setActiveTab] = useState('experience');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviews, setReviews] = useState([
    {
      author: 'Camille L.',
      rating: 5,
      date: '2 weeks ago',
      comment: 'An absolute masterpiece. The subtle warmth lingers for over 12 hours on wool coats, and the transitions between top and base notes are effortlessly smooth.'
    },
    {
      author: 'Julian M.',
      rating: 5,
      date: '1 month ago',
      comment: 'Distinctive without being loud. I receive compliments every single time I wear this. Truly haute parfumerie quality.'
    }
  ]);
  const [reviewAuthor, setReviewAuthor] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!reviewAuthor.trim() || !reviewComment.trim()) return;
    setReviews([
      {
        author: reviewAuthor.trim(),
        rating: reviewRating,
        date: 'Just now',
        comment: reviewComment.trim()
      },
      ...reviews
    ]);
    setReviewAuthor('');
    setReviewComment('');
    setShowReviewForm(false);
  };

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setActiveImage(product.image);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-cream-100">
        <h1 className="font-serif text-3xl sm:text-4xl text-ink-900 mb-4">
          Fragrance Not Found
        </h1>
        <p className="text-sm text-taupe-500 mb-8 max-w-md">
          The perfume you are looking for might have been retired or moved into our seasonal archive.
        </p>
        <Link
          to="/catalog"
          className="px-8 py-3.5 bg-burgundy-700 text-white text-xs uppercase tracking-widest font-semibold hover:bg-burgundy-800 transition-colors"
        >
          Return to Catalog
        </Link>
      </div>
    );
  }

  const isFavorite = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.isBestSeller)
  ).slice(0, 4);

  return (
    <div className="bg-cream-100 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-taupe-500 uppercase tracking-widest mb-8">
          <Link to="/" className="hover:text-burgundy-700 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/catalog" className="hover:text-burgundy-700 transition-colors">Catalog</Link>
          <ChevronRight size={12} />
          <span className="text-burgundy-700 font-semibold">{product.name}</span>
        </nav>

        {/* Product Showcase: Left Gallery, Right Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start bg-white border border-[#ded8ce] p-4 sm:p-8 lg:p-10 shadow-sm mb-16 sm:mb-20">
          
          {/* Gallery (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[3/4] overflow-hidden bg-cream-150 border border-[#eee8df]">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-700"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                {product.isBestSeller && (
                  <span className="bg-burgundy-700 text-white text-[11px] uppercase tracking-wider font-semibold px-3 py-1">
                    Signature Best Seller
                  </span>
                )}
                {product.isNew && (
                  <span className="bg-ink-900 text-white text-[11px] uppercase tracking-wider font-semibold px-3 py-1">
                    New Release
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail selector */}
            {product.secondaryImage && (
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setActiveImage(product.image)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    activeImage === product.image ? 'border-burgundy-700' : 'border-[#ded8ce] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={product.image} alt="Flacon view 1" className="w-full h-full object-cover" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveImage(product.secondaryImage)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    activeImage === product.secondaryImage ? 'border-burgundy-700' : 'border-[#ded8ce] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={product.secondaryImage} alt="Flacon view 2" className="w-full h-full object-cover" />
                </button>
              </div>
            )}
          </div>

          {/* Details (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Category & Concentration */}
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-taupe-500 font-semibold mb-2">
                <span>{product.category} Collection • {product.gender}</span>
                <span>{product.volume}</span>
              </div>

              {/* Name */}
              <h1 className="font-serif text-3xl sm:text-5xl font-normal text-ink-900 tracking-tight mb-1">
                {product.name}
              </h1>

              {/* Concentration Subtitle */}
              <p className="text-base text-taupe-500 italic mb-4">
                {product.subtitle}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-[#eee8df]">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-ink-900">{product.rating}</span>
                <span className="text-xs text-taupe-400">({product.reviewsCount} customer reviews)</span>
              </div>

              {/* Price & Discounts */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-serif text-3xl sm:text-4xl font-medium text-burgundy-700">
                  ${product.price.toFixed(2)}
                </span>
                {product.priceOld && (
                  <span className="text-lg text-taupe-400 line-through">
                    ${product.priceOld.toFixed(2)}
                  </span>
                )}
                {product.priceOld && (
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 border border-green-200">
                    Save ${ (product.priceOld - product.price).toFixed(2) }
                  </span>
                )}
              </div>

              {/* Story & Description */}
              <div className="space-y-3 text-sm text-ink-900/80 leading-relaxed font-light mb-8">
                <p>{product.description}</p>
              </div>

              {/* Olfactory Notes Pyramid */}
              <div className="bg-cream-150 p-4 sm:p-6 border border-[#e5dfd5] mb-6 sm:mb-8 space-y-4">
                <h3 className="font-serif text-base font-medium text-ink-900 flex items-center gap-2">
                  <Droplets size={16} className="text-burgundy-700" />
                  <span>The Olfactory Pyramid</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs">
                  <div className="bg-white p-3 border border-[#ded8ce]">
                    <span className="text-[10px] uppercase tracking-wider text-burgundy-700 font-semibold block mb-1">
                      Top Notes
                    </span>
                    <p className="text-ink-900 font-medium leading-relaxed">{product.notes.top.join(', ')}</p>
                  </div>

                  <div className="bg-white p-3 border border-[#ded8ce]">
                    <span className="text-[10px] uppercase tracking-wider text-burgundy-700 font-semibold block mb-1">
                      Heart Notes
                    </span>
                    <p className="text-ink-900 font-medium leading-relaxed">{product.notes.heart.join(', ')}</p>
                  </div>

                  <div className="bg-white p-3 border border-[#ded8ce]">
                    <span className="text-[10px] uppercase tracking-wider text-burgundy-700 font-semibold block mb-1">
                      Base Notes
                    </span>
                    <p className="text-ink-900 font-medium leading-relaxed">{product.notes.base.join(', ')}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 pt-3 text-xs text-taupe-500 border-t border-[#ded8ce]">
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} className="shrink-0 text-burgundy-700" />
                    <span><strong className="text-ink-900 font-semibold">Longevity:</strong> {product.longevity}</span>
                  </span>
                  <span><strong className="text-ink-900 font-semibold">Sillage:</strong> {product.sillage}</span>
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-wider text-taupe-500 font-semibold mb-2">
                  Select Size
                </label>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 max-w-md">
                  {['50ml', '100ml'].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`py-2.5 px-2 sm:px-4 text-[11px] sm:text-xs uppercase tracking-wider font-semibold border transition-all text-center ${
                        selectedSize === size
                          ? 'border-burgundy-700 bg-burgundy-700 text-white shadow'
                          : 'border-[#ded8ce] text-ink-900 hover:border-burgundy-700 bg-white'
                      }`}
                    >
                      <span className="block font-bold">{size}</span>
                      <span className={`block text-[10px] normal-case tracking-normal opacity-85 ${selectedSize === size ? 'text-cream-200' : 'text-taupe-400'}`}>
                        {size === '50ml' ? 'Classic Flacon' : 'Grand Flacon'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Controls & Add to Cart */}
              <div className="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:gap-4 mb-8">
                {/* Mobile: Top Row with Quantity and Wishlist button */}
                <div className="flex items-center justify-between sm:justify-start gap-3">
                  <div className="flex items-center border border-[#ded8ce] bg-cream-100 h-12">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-full flex items-center justify-center text-ink-900 hover:text-burgundy-700 font-bold text-base"
                    >
                      -
                    </button>
                    <span className="w-10 text-center text-sm font-semibold">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-full flex items-center justify-center text-ink-900 hover:text-burgundy-700 font-bold text-base"
                    >
                      +
                    </button>
                  </div>

                  {/* Mobile Wishlist Button */}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(product)}
                    className={`sm:hidden h-12 px-4 border transition-colors flex items-center justify-center gap-2 ${
                      isFavorite
                        ? 'border-burgundy-700 bg-burgundy-700 text-white'
                        : 'border-[#ded8ce] text-ink-900 hover:border-burgundy-700 bg-cream-100'
                    }`}
                    title="Wishlist"
                  >
                    <Heart size={18} className={isFavorite ? 'fill-current' : ''} />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      {isFavorite ? 'Saved' : 'Wishlist'}
                    </span>
                  </button>
                </div>

                {/* Add to Basket CTA: full width on mobile, flexible on desktop */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={added}
                  className="w-full sm:flex-1 h-12 px-6 bg-burgundy-700 hover:bg-burgundy-800 text-white text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-medium transition-all shadow-md flex items-center justify-center gap-2.5 group"
                >
                  {added ? (
                    <>
                      <Check size={16} />
                      <span>Added to Basket</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} />
                      <span>Add to Basket • ${(product.price * quantity).toFixed(2)}</span>
                    </>
                  )}
                </button>

                {/* Desktop Wishlist Button */}
                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className={`hidden sm:flex h-12 w-12 border transition-colors shrink-0 items-center justify-center ${
                    isFavorite
                      ? 'border-burgundy-700 bg-burgundy-700 text-white'
                      : 'border-[#ded8ce] text-ink-900 hover:border-burgundy-700 bg-cream-100'
                  }`}
                  title="Wishlist"
                >
                  <Heart size={20} className={isFavorite ? 'fill-current' : ''} />
                </button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-6 border-t border-[#eee8df] text-xs text-taupe-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-burgundy-700 shrink-0" />
                  <span>30-Day Scent Guarantee with sample flacon</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-burgundy-700 shrink-0" />
                  <span>100% Cruelty-free & ethically harvested</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product In-Depth Editorial Tabs */}
        <div className="bg-white border border-[#ded8ce] p-4 sm:p-8 lg:p-10 mb-16 shadow-sm">
          {/* Tab Navigation */}
          <div className="flex gap-4 sm:gap-8 border-b border-[#ded8ce] pb-3 mb-6 sm:mb-8 text-xs sm:text-sm uppercase tracking-wider font-semibold overflow-x-auto whitespace-nowrap">
            <button
              onClick={() => setActiveTab('experience')}
              className={`pb-2 border-b-2 transition-all shrink-0 ${
                activeTab === 'experience'
                  ? 'border-burgundy-700 text-burgundy-700'
                  : 'border-transparent text-taupe-500 hover:text-ink-900'
              }`}
            >
              The Scent Ritual
            </button>
            <button
              onClick={() => setActiveTab('craft')}
              className={`pb-2 border-b-2 transition-all shrink-0 ${
                activeTab === 'craft'
                  ? 'border-burgundy-700 text-burgundy-700'
                  : 'border-transparent text-taupe-500 hover:text-ink-900'
              }`}
            >
              Artisanal Formulation
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-2 border-b-2 transition-all shrink-0 ${
                activeTab === 'reviews'
                  ? 'border-burgundy-700 text-burgundy-700'
                  : 'border-transparent text-taupe-500 hover:text-ink-900'
              }`}
            >
              Client Reviews ({reviews.length})
            </button>
          </div>

          {/* Tab 1: The Scent Ritual */}
          {activeTab === 'experience' && (
            <div className="space-y-6 animate-fade-in max-w-3xl">
              <h3 className="font-serif text-2xl font-medium text-ink-900">
                Application & Scent Evolution
              </h3>
              <p className="text-sm text-ink-900/80 leading-relaxed font-light">
                To experience the true depth of <strong className="font-medium text-ink-900">{product.name}</strong>, mist gently across warmth points: the hollow of your neck, wrists, and inner elbows. Avoid rubbing wrists together, which fractures delicate volatile top notes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#eee8df] text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-burgundy-700 font-semibold block mb-1">
                    First 30 Minutes
                  </span>
                  <p className="text-taupe-500 leading-relaxed">
                    Sparkling radiance opens with {product.notes.top.join(' and ')}, awakening your mood with fresh vibrancy.
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-burgundy-700 font-semibold block mb-1">
                    2 to 6 Hours
                  </span>
                  <p className="text-taupe-500 leading-relaxed">
                    Heart accords of {product.notes.heart.join(', ')} bloom into intimate warmth, marrying with your personal skin chemistry.
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-burgundy-700 font-semibold block mb-1">
                    8+ Hours Drydown
                  </span>
                  <p className="text-taupe-500 leading-relaxed">
                    Sensual foundation of {product.notes.base.join(' and ')} creates a lingering magnetic aura that stays into the night.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Artisanal Formulation */}
          {activeTab === 'craft' && (
            <div className="space-y-6 animate-fade-in max-w-3xl">
              <h3 className="font-serif text-2xl font-medium text-ink-900">
                Maceration & Ethical Harvesting
              </h3>
              <p className="text-sm text-ink-900/80 leading-relaxed font-light">
                Every batch of <strong className="font-medium text-ink-900">{product.name}</strong> undergoes an unhurried 90-day cold maturation process in our temperature-stabilized cellars. By allowing plant absolutes and organic grain alcohol to fuse naturally, we preserve the nuanced facets of each botanical essence.
              </p>

              <div className="p-5 bg-cream-150 border border-[#e5dfd5] text-xs text-ink-900/80 space-y-2">
                <p><strong>Ingredients:</strong> Alcohol Denat., Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Coumarin, Citronellol, Geraniol, Benzyl Benzoate, Eugenol.</p>
                <p><strong>Purity Standards:</strong> 100% Vegan • Cruelty-free • No Synthetic Dyes • Phthalate & Paraben-Free.</p>
              </div>
            </div>
          )}

          {/* Tab 3: Client Reviews */}
          {activeTab === 'reviews' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#ded8ce]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-medium text-burgundy-700">{product.rating}</span>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-taupe-500">Based on {reviews.length} authenticated connoisseur reviews</span>
                </div>

                <button
                  onClick={() => setShowReviewForm(!showReviewForm)}
                  className="px-6 py-2.5 bg-burgundy-700 text-white text-xs uppercase tracking-wider font-semibold hover:bg-burgundy-800 transition-colors self-start sm:self-auto"
                >
                  {showReviewForm ? 'Cancel Review' : 'Write a Review'}
                </button>
              </div>

              {/* Review Submission Form */}
              {showReviewForm && (
                <form onSubmit={handleAddReview} className="p-6 bg-cream-150 border border-[#ded8ce] space-y-4 max-w-xl animate-fade-in">
                  <h4 className="font-serif text-lg font-medium text-ink-900">
                    Share Your Fragrance Story
                  </h4>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-taupe-500 font-semibold">Your Rating:</span>
                    <div className="flex text-amber-500 cursor-pointer">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setReviewRating(star)}
                          className="p-0.5"
                        >
                          <Star size={18} className={star <= reviewRating ? 'fill-amber-500' : 'text-gray-300'} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-taupe-500 font-semibold mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Camille Laurent"
                      value={reviewAuthor}
                      onChange={(e) => setReviewAuthor(e.target.value)}
                      className="w-full bg-white border border-[#ded8ce] px-3 py-2 text-xs focus:outline-none focus:border-burgundy-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-taupe-500 font-semibold mb-1">
                      Your Review
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe the longevity, notes, and mood on your skin..."
                      value={reviewComment}
                      onChange={(e) => setReviewComment(e.target.value)}
                      className="w-full bg-white border border-[#ded8ce] px-3 py-2 text-xs focus:outline-none focus:border-burgundy-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-burgundy-700 text-white text-xs uppercase tracking-wider font-semibold hover:bg-burgundy-800 transition-colors"
                  >
                    Submit Review
                  </button>
                </form>
              )}

              {/* Review List */}
              <div className="space-y-6">
                {reviews.map((rev, idx) => (
                  <div key={idx} className="pb-6 border-b border-[#eee8df] last:border-b-0 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-base font-medium text-ink-900">{rev.author}</span>
                      <span className="text-xs text-taupe-400">{rev.date}</span>
                    </div>
                    <div className="flex text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={13} className="fill-current" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-ink-900/80 leading-relaxed font-light">
                      "{rev.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products Carousel / Grid */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#ded8ce]">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-burgundy-700 font-semibold block mb-1">
                You May Also Adore
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-ink-900 font-medium">
                Harmonious Pairings
              </h2>
            </div>
            <Link
              to="/catalog"
              className="text-xs uppercase tracking-wider text-burgundy-700 hover:underline font-semibold flex items-center gap-1"
            >
              <span>Explore All</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        </div>

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

