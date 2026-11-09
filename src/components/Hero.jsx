import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToCatalog = () => {
    const catalog = document.querySelector('#catalog');
    if (catalog) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = catalog.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center bg-[#f7f4ee] overflow-hidden">
      {/* Background with luxury editorial imagery and gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Perfume Flacon"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Soft elegant gradient overlays to ensure luxury editorial legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f4ee] via-[#f7f4ee]/85 to-transparent sm:w-3/4 lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f4ee] via-transparent to-[#f7f4ee]/30 sm:hidden" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Small introductory label */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-burgundy-700"></span>
            <span className="text-[12px] sm:text-xs uppercase tracking-[0.3em] text-burgundy-700 font-semibold">
              perfumes with soul
            </span>
            <span className="h-[1px] w-6 bg-burgundy-700"></span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.12] text-ink-900 tracking-tight mb-6">
            Scents That Tell <br className="hidden sm:inline" />
            <span className="italic font-normal text-burgundy-700">Your Story</span>
          </h1>

          {/* Short description about fragrances, emotions, and memories */}
          <p className="text-base sm:text-lg lg:text-xl text-ink-900/80 font-light leading-relaxed mb-10 max-w-lg">
            More than fragrance — each bottle holds a memory, a moment, a mood waiting to unfold on your skin.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/catalog"
              className="px-8 py-4 bg-burgundy-700 hover:bg-burgundy-800 text-white font-medium text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3 group"
            >
              <span>Find Your Scent</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/about"
              className="px-6 py-4 bg-cream-150/80 backdrop-blur-sm hover:bg-white text-ink-900 border border-[#ded8ce] hover:border-burgundy-700 font-medium text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 flex items-center justify-center gap-2 text-center"
            >
              Our Philosophy
            </Link>
          </div>

          {/* Subtle trust metrics */}
          <div className="mt-14 pt-8 border-t border-[#e5dfd5]/80 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-medium text-burgundy-700">100%</p>
              <p className="text-[11px] sm:text-xs text-taupe-500 uppercase tracking-wider mt-1">Cruelty-Free</p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-medium text-burgundy-700">20+</p>
              <p className="text-[11px] sm:text-xs text-taupe-500 uppercase tracking-wider mt-1">Years Mastery</p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-medium text-burgundy-700">14h+</p>
              <p className="text-[11px] sm:text-xs text-taupe-500 uppercase tracking-wider mt-1">Pure Longevity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

