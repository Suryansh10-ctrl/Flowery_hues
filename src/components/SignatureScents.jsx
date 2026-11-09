import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SIGNATURE_CARDS } from '../data/products';

export default function SignatureScents({ onSelectCategory }) {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (onSelectCategory) {
      onSelectCategory(category.toLowerCase());
    }
    navigate(`/catalog?category=${category.toLowerCase()}`);
  };

  return (
    <section id="signature-scents" className="py-20 sm:py-28 bg-cream-100 border-b border-[#eee8df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#e5dfd5]">
          <div>
            <div className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-burgundy-700 font-semibold mb-2">
              Curated Selections
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink-900 font-normal tracking-tight">
              Meet Our Signature Scents
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-left md:text-right">
            <span className="text-sm uppercase tracking-widest text-taupe-500 font-medium">Starting</span>
            <div className="font-serif text-2xl sm:text-3xl text-burgundy-700 font-medium">
              from $29.99
            </div>
            <p className="text-xs text-taupe-500 mt-1">From subtle daytime — find a scent that moves with you.</p>
          </div>
        </div>

        {/* 4 Category Cards Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {SIGNATURE_CARDS.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCategoryClick(card.category)}
              className="group relative cursor-pointer overflow-hidden bg-cream-150 border border-[#e5dfd5] hover:border-burgundy-700/60 transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              {/* Product Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#eee8df]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Floating pill badge */}
                <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[11px] uppercase tracking-widest text-ink-900 font-semibold shadow-sm">
                  {card.title}
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-3 sm:p-5 lg:p-6 bg-cream-150 flex items-center justify-between transition-colors duration-300 group-hover:bg-cream-200">
                <div className="min-w-0 pr-1">
                  <h3 className="font-serif text-sm sm:text-xl lg:text-2xl text-ink-900 font-medium group-hover:text-burgundy-700 transition-colors leading-tight truncate sm:overflow-visible">
                    {card.title}
                  </h3>
                  <p className="hidden sm:block text-xs text-taupe-500 mt-1 line-clamp-1">
                    {card.description}
                  </p>
                </div>
                
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full border border-ink-900/20 flex items-center justify-center text-ink-900 group-hover:bg-burgundy-700 group-hover:text-white group-hover:border-burgundy-700 transition-all duration-300 transform group-hover:rotate-45 shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

