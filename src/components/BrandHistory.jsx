import React from 'react';
import { MILESTONES } from '../data/products';

export default function BrandHistory() {
  return (
    <section id="about-us" className="py-24 sm:py-32 bg-cream-150 relative overflow-hidden border-b border-[#e9e3da]">
      {/* Subtle background ambient typography */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-serif text-[180px] lg:text-[240px] font-bold text-taupe-500/5 select-none pointer-events-none leading-none">
        1920
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Storytelling Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 sm:mb-24">
          
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-[1px] w-6 bg-burgundy-700"></span>
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-burgundy-700 font-semibold">
                brand history
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink-900 leading-[1.18] tracking-tight">
              Years of Craft, <br />
              <span className="italic text-burgundy-700">Thousands</span> of Different Stories
            </h2>

            <p className="mt-6 text-sm uppercase tracking-widest text-taupe-500 font-medium">
              From subtle daytime — find a scent that moves with you.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-ink-900/80 leading-relaxed font-light text-base sm:text-lg lg:pl-6 border-l-0 lg:border-l border-[#ded8ce]">
            <p>
              Behind every bottle lies a legacy of artistry and intention. For years, we have been crafting fragrances that capture very best moments, emotions, and identity that fit to anyone.
            </p>
            <p>
              Our scents are born from meticulous blending, where tradition meets modern olfactory storytelling. Whether you're drawn to something soft or unforgettable, there's a story waiting to unfold — uniquely yours.
            </p>
            
            <div className="pt-4">
              <span className="text-xs uppercase tracking-[0.25em] text-ink-900 font-semibold block mb-1">
                Pick Your Own Scent Journey
              </span>
              <span className="text-sm text-taupe-500">
                Explore a selection of curated fragrance plans. Choose the one that fits your style and pace.
              </span>
            </div>
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="mt-12 pt-12 border-t border-[#ded8ce]">
          
          {/* Desktop Horizontal Timeline */}
          <div className="hidden md:grid md:grid-cols-4 gap-8 relative">
            {/* Horizontal continuous timeline line */}
            <div className="absolute top-[21px] left-6 right-6 h-[1.5px] bg-[#d5cec3] z-0" />

            {MILESTONES.map((item, index) => (
              <div key={item.year} className="relative z-10 flex flex-col items-start pr-4">
                {/* Year and indicator circle */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-cream-100 border-2 border-burgundy-700 flex items-center justify-center text-burgundy-700 shadow-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-burgundy-700"></span>
                  </div>
                  <span className="font-serif text-2xl font-bold text-burgundy-700 tracking-tight">
                    {item.year}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-medium text-ink-900 mb-2">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-taupe-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="md:hidden relative pl-6 border-l-2 border-burgundy-700/40 space-y-10 ml-3">
            {MILESTONES.map((item) => (
              <div key={item.year} className="relative">
                {/* Node indicator */}
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-burgundy-700 ring-4 ring-cream-150" />
                
                <span className="font-serif text-2xl font-bold text-burgundy-700 tracking-tight">
                  {item.year}
                </span>
                
                <h3 className="font-serif text-lg font-medium text-ink-900 mt-1 mb-1.5">
                  {item.title}
                </h3>
                
                <p className="text-sm text-taupe-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

