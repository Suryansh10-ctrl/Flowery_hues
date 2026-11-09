import React from 'react';
import { TESTIMONIALS } from '../data/products';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-cream-150 border-b border-[#e9e3da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-burgundy-700"></span>
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-burgundy-700 font-semibold">
              customers about us
            </span>
            <span className="h-[1px] w-6 bg-burgundy-700"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink-900 tracking-tight">
            Why They Fell in Love <br />
            <span className="italic text-burgundy-700">at First Scent</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-taupe-500 font-light">
            We are a customer-oriented company, and our values drive us to achieve more.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#ded8ce] p-8 flex flex-col justify-between shadow-sm relative group hover:border-burgundy-700/50 transition-colors"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-500" />
                    ))}
                  </div>
                  <Quote size={24} className="text-cream-400 group-hover:text-burgundy-700/30 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-ink-900/80 leading-relaxed font-light italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#f0eae1] flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#ded8ce]"
                />
                <div>
                  <h4 className="font-serif text-base font-medium text-ink-900">
                    {item.name}
                  </h4>
                  <p className="text-[11px] uppercase tracking-wider text-taupe-500 font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

