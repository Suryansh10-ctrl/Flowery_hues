import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { SlidersHorizontal, X, ChevronDown, ChevronUp, RotateCcw, Search, Heart, Tag } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCatalogue({ onQuickView, initialCategory = 'all' }) {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState(150);
  const [minPrice, setMinPrice] = useState(25);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [onlyWishlist, setOnlyWishlist] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    const filterParam = searchParams.get('filter');
    const catParam = searchParams.get('category');
    const searchParam = searchParams.get('search');
    if (filterParam === 'wishlist') {
      setOnlyWishlist(true);
    }
    if (catParam) {
      setSelectedCategory(catParam);
    }
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  useEffect(() => {
    if (mobileFilterOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileFilterOpen]);

  // Collapsible accordion states in sidebar
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [availabilityOpen, setAvailabilityOpen] = useState(true);

  const { isInWishlist, wishlistCount } = useWishlist();

  // Reset all filters
  const handleClearFilters = () => {
    setSelectedCategory('all');
    setPriceRange(150);
    setMinPrice(25);
    setSearchQuery('');
    setOnlyInStock(false);
    setOnlyWishlist(false);
    setSortBy('featured');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    priceRange < 150 ||
    minPrice > 25 ||
    searchQuery !== '' ||
    onlyInStock ||
    onlyWishlist;

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // Price filter
      if (product.price > priceRange || product.price < minPrice) {
        return false;
      }

      // Search query
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.notes.top.join(' ').toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // In stock filter
      if (onlyInStock && product.stock <= 0) {
        return false;
      }

      // Wishlist filter
      if (onlyWishlist && !isInWishlist(product.id)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // 'featured' keeps original curated order
    });
  }, [selectedCategory, priceRange, minPrice, searchQuery, onlyInStock, onlyWishlist, sortBy, isInWishlist]);

  // Sidebar Filter Content component (reused in desktop sidebar and mobile drawer)
  const FilterControls = () => (
    <div className="space-y-6">
      {/* Search Input */}
      <div>
        <label className="block text-xs uppercase tracking-wider text-taupe-500 font-medium mb-2">
          Search Scents
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Search notes, names..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-cream-100 border border-[#ded8ce] px-3.5 py-2 pl-9 text-xs focus:outline-none focus:border-burgundy-700 transition-colors"
          />
          <Search size={14} className="absolute left-3 top-2.5 text-taupe-400" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2.5 text-taupe-400 hover:text-ink-900"
            >
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Category Accordion */}
      <div className="border-t border-[#ded8ce] pt-4">
        <button
          type="button"
          onClick={() => setCategoryOpen(!categoryOpen)}
          className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-ink-900 mb-3"
        >
          <span>Category</span>
          {categoryOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {categoryOpen && (
          <div className="space-y-1.5 pl-1">
            {CATEGORIES.map((cat) => {
              const count =
                cat.id === 'all'
                  ? PRODUCTS.length
                  : PRODUCTS.filter((p) => p.category.toLowerCase() === cat.id.toLowerCase()).length;
              const isSelected = selectedCategory.toLowerCase() === cat.id.toLowerCase();

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full flex items-center justify-between py-1.5 px-2 text-xs transition-colors rounded ${
                    isSelected
                      ? 'bg-burgundy-700 text-white font-medium'
                      : 'text-ink-900/80 hover:bg-cream-150'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[11px] ${isSelected ? 'text-cream-200' : 'text-taupe-400'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Price Range Slider */}
      <div className="border-t border-[#ded8ce] pt-4">
        <button
          type="button"
          onClick={() => setPriceOpen(!priceOpen)}
          className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-ink-900 mb-3"
        >
          <span>Max Price: ${priceRange}</span>
          {priceOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {priceOpen && (
          <div className="px-1 space-y-3">
            <input
              type="range"
              min="25"
              max="150"
              step="5"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-burgundy-700 cursor-pointer"
            />
            <div className="flex items-center justify-between text-xs text-taupe-500">
              <span>$25.00</span>
              <span className="font-semibold text-burgundy-700">${priceRange}.00</span>
              <span>$150.00</span>
            </div>
          </div>
        )}
      </div>

      {/* Availability & Wishlist */}
      <div className="border-t border-[#ded8ce] pt-4">
        <button
          type="button"
          onClick={() => setAvailabilityOpen(!availabilityOpen)}
          className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-ink-900 mb-3"
        >
          <span>Special Filters</span>
          {availabilityOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {availabilityOpen && (
          <div className="space-y-2.5 pl-1 text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-ink-900/80 hover:text-ink-900">
              <input
                type="checkbox"
                checked={onlyInStock}
                onChange={(e) => setOnlyInStock(e.target.checked)}
                className="accent-burgundy-700 rounded cursor-pointer"
              />
              <span>In Stock Only</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-ink-900/80 hover:text-ink-900">
              <input
                type="checkbox"
                checked={onlyWishlist}
                onChange={(e) => setOnlyWishlist(e.target.checked)}
                className="accent-burgundy-700 rounded cursor-pointer"
              />
              <span className="flex items-center gap-1">
                <Heart size={12} className={onlyWishlist ? 'fill-burgundy-700 text-burgundy-700' : ''} />
                <span>Wishlist Only ({wishlistCount})</span>
              </span>
            </label>
          </div>
        )}
      </div>

      {/* Clear Filters Button */}
      {hasActiveFilters && (
        <button
          type="button"
          onClick={handleClearFilters}
          className="w-full py-2 border border-burgundy-700/40 text-burgundy-700 hover:bg-burgundy-50 text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1.5"
        >
          <RotateCcw size={13} />
          <span>Clear All Filters</span>
        </button>
      )}
    </div>
  );

  return (
    <section id="catalog" className="py-24 sm:py-32 bg-cream-100 border-b border-[#e9e3da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-[1px] w-6 bg-burgundy-700"></span>
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-burgundy-700 font-semibold">
              our products
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink-900 tracking-tight">
            Our <span className="italic text-burgundy-700">Scents</span> Catalog
          </h2>
          
          <p className="text-xs sm:text-sm text-taupe-500 mt-2 max-w-xl">
            We manufacture all kind of products that support small and micro businesses. Here are some of them:
          </p>
        </div>

        {/* Toolbar: Count, Mobile Filter Trigger, Sorting */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#ded8ce]">
          <div className="flex items-center gap-4">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden px-4 py-2 bg-cream-150 border border-[#ded8ce] hover:border-burgundy-700 text-ink-900 text-xs uppercase tracking-wider font-semibold flex items-center gap-2"
            >
              <SlidersHorizontal size={14} />
              <span>Filters {hasActiveFilters && '• Active'}</span>
            </button>

            <span className="text-xs text-taupe-500">
              Showing <strong className="text-ink-900 font-semibold">{filteredProducts.length}</strong> of {PRODUCTS.length} fragrances
            </span>
          </div>

          {/* Sorting Dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="sortSelect" className="text-xs uppercase tracking-wider text-taupe-500 font-medium hidden sm:inline">
              Sort by:
            </label>
            <select
              id="sortSelect"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-cream-150 border border-[#ded8ce] text-ink-900 text-xs px-3 py-2 uppercase tracking-wider font-medium focus:outline-none focus:border-burgundy-700 cursor-pointer"
            >
              <option value="featured">Featured Collection</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest Releases</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Main 2-Column E-commerce Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Desktop Sidebar (col-span-3) */}
          <aside className="hidden lg:block lg:col-span-3 bg-cream-150 border border-[#ded8ce] p-6 shadow-sm sticky top-28">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#ded8ce]">
              <span className="font-serif text-lg font-medium text-ink-900">Filters</span>
              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="text-[11px] text-burgundy-700 hover:underline uppercase tracking-wider font-semibold"
                >
                  Reset
                </button>
              )}
            </div>
            <FilterControls />
          </aside>

          {/* Right Product Grid (col-span-9) */}
          <div className="lg:col-span-9">
            {/* Active Filter Pills */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 mb-6 pb-4 border-b border-[#ded8ce] animate-fade-in">
                <span className="text-[11px] uppercase tracking-wider text-taupe-500 font-semibold mr-1">
                  Active Filters:
                </span>
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-burgundy-700/30 text-burgundy-700 text-xs uppercase tracking-wider font-medium">
                    Category: {selectedCategory}
                    <button onClick={() => setSelectedCategory('all')} className="hover:text-red-700 ml-1" title="Remove filter">
                      <X size={12} />
                    </button>
                  </span>
                )}
                {priceRange < 150 && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-burgundy-700/30 text-burgundy-700 text-xs uppercase tracking-wider font-medium">
                    Under ${priceRange}
                    <button onClick={() => setPriceRange(150)} className="hover:text-red-700 ml-1" title="Remove filter">
                      <X size={12} />
                    </button>
                  </span>
                )}
                {onlyInStock && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-burgundy-700/30 text-burgundy-700 text-xs uppercase tracking-wider font-medium">
                    In Stock
                    <button onClick={() => setOnlyInStock(false)} className="hover:text-red-700 ml-1" title="Remove filter">
                      <X size={12} />
                    </button>
                  </span>
                )}
                {onlyWishlist && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-burgundy-700/30 text-burgundy-700 text-xs uppercase tracking-wider font-medium">
                    Wishlist Only
                    <button onClick={() => setOnlyWishlist(false)} className="hover:text-red-700 ml-1" title="Remove filter">
                      <X size={12} />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-burgundy-700/30 text-burgundy-700 text-xs uppercase tracking-wider font-medium">
                    "{searchQuery}"
                    <button onClick={() => setSearchQuery('')} className="hover:text-red-700 ml-1" title="Remove filter">
                      <X size={12} />
                    </button>
                  </span>
                )}
                <button
                  onClick={handleClearFilters}
                  className="text-xs text-taupe-500 hover:text-burgundy-700 underline uppercase tracking-wider ml-1"
                >
                  Clear All
                </button>
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-cream-150 border border-[#ded8ce] p-8">
                <p className="font-serif text-2xl text-ink-900 mb-2">No fragrances match your filters</p>
                <p className="text-xs text-taupe-500 max-w-sm mx-auto mb-6">
                  Try adjusting your price range, clearing active filters, or exploring another category.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-2.5 bg-burgundy-700 text-white text-xs uppercase tracking-wider font-medium hover:bg-burgundy-800 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={onQuickView}
                  />
                ))}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Mobile Filters Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end lg:hidden animate-fade-in">
          <div className="w-full max-w-xs bg-white h-full overflow-y-auto p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#ded8ce]">
                <span className="font-serif text-xl font-medium text-ink-900">Refine Scents</span>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 text-ink-900 hover:text-burgundy-700"
                >
                  <X size={20} />
                </button>
              </div>

              <FilterControls />
            </div>

            <div className="pt-6 border-t border-[#ded8ce] mt-6">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 bg-burgundy-700 text-white text-xs uppercase tracking-widest font-semibold"
              >
                Apply Filters ({filteredProducts.length} Results)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

