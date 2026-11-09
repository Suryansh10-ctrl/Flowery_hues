import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X, Instagram, Facebook, Youtube } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Best Sellers', path: '/best-sellers' },
    { name: 'New Scent', path: '/new-scent' },
    { name: 'Catalog', path: '/catalog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#12130e] text-cream-200 text-xs py-2 px-4 sm:px-6 lg:px-10 xl:px-14 border-b border-cream-200/10">
        <div className="w-full flex items-center justify-between">
          <div className="hidden sm:flex items-center space-x-4 text-[11px] uppercase tracking-wider text-cream-300/80">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <Facebook size={12} /> facebook
            </a>
            <span className="opacity-30">•</span>
            <a href="https://www.instagram.com/floweryhues_perfumery/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <Instagram size={12} /> instagram
            </a>
            <span className="opacity-30">•</span>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <Youtube size={12} /> youtube
            </a>
          </div>

          <div className="mx-auto sm:mx-0 text-center tracking-wide font-light text-[11px] sm:text-xs text-cream-200">
            <span>Celebrate winter with 15% off your order — use code <strong className="text-white font-semibold underline decoration-burgundy-500 underline-offset-2">WINTER15</strong></span>
          </div>

          <div className="hidden md:block text-[11px] tracking-widest uppercase text-cream-300/70">
            Free Shipping Over $50
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-100/95 backdrop-blur-md shadow-sm border-b border-[#e7e1d8] py-2.5 sm:py-3'
            : 'bg-cream-100/90 backdrop-blur-sm border-b border-[#ece6dd] py-3.5 sm:py-4'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 flex items-center justify-between">
          
          {/* Brand Logo: Cursive font style, shifted gracefully towards the right */}
          <Link
            to="/"
            className="flex flex-col items-start group shrink-0 ml-3 sm:ml-8 lg:ml-12 xl:ml-16"
          >
            <span className="font-cursive text-2xl sm:text-[27px] lg:text-[29px] text-burgundy-700 tracking-wide font-normal group-hover:text-burgundy-900 transition-colors leading-none">
              Flowery Hues
            </span>
            <span className="text-[8.5px] tracking-[0.32em] uppercase text-taupe-500 font-sans mt-0.5 ml-0.5">
              Haute Parfumerie
            </span>
          </Link>

          {/* Nav Links: Multi-page navigation using React Router Link */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-[12px] xl:text-[13px] tracking-wider uppercase font-medium ml-auto mr-6 xl:mr-10">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-1 whitespace-nowrap transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-burgundy-700 after:transition-all after:duration-300 ${
                    active
                      ? 'text-burgundy-700 font-semibold after:w-full'
                      : 'text-ink-900/80 hover:text-burgundy-700 after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action Icons: Positioned at the far right corner of the screen */}
          <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className={`relative p-2 transition-colors ${
                isActive('/wishlist') ? 'text-burgundy-700' : 'text-ink-900/80 hover:text-burgundy-700'
              }`}
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart size={21} className={wishlistCount > 0 ? "fill-burgundy-700 text-burgundy-700" : ""} />
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-burgundy-700 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-ink-900/80 hover:text-burgundy-700 transition-colors"
              title="Shopping Cart"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={21} />
              {totalItems > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-burgundy-700 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-ink-900 hover:text-burgundy-700 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Link tags */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-cream-150 border-t border-[#e2ddd4] px-6 py-6 animate-fade-in shadow-xl">
            <div className="flex flex-col space-y-3.5 text-sm tracking-wider uppercase font-medium">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 border-b border-[#e9e4dc] transition-colors flex items-center justify-between ${
                      active ? 'text-burgundy-700 font-bold' : 'text-ink-900/90 hover:text-burgundy-700'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-burgundy-700">→</span>
                  </Link>
                );
              })}

              <Link
                to="/wishlist"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#e9e4dc] text-ink-900/90 hover:text-burgundy-700 flex items-center justify-between"
              >
                <span>My Wishlist ({wishlistCount})</span>
                <Heart size={16} className={wishlistCount > 0 ? "fill-burgundy-700 text-burgundy-700" : ""} />
              </Link>
              
              <div className="pt-2 flex items-center justify-between text-xs text-taupe-500">
                <span>Direct Concierge: +1 (234) 567 89 00</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
