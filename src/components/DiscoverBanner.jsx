import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import ScentQuizModal from './ScentQuizModal';

export default function DiscoverBanner() {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <>
      <section className="relative py-28 sm:py-36 overflow-hidden bg-ink-900 text-white">
        {/* Background with luxury editorial imagery */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=2000&auto=format&fit=crop"
            alt="Refined Glass Perfume Flacon"
            className="w-full h-full object-cover object-center opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/80 to-ink-900/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="h-[1px] w-6 bg-cream-300"></span>
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-cream-300 font-medium">
              find your scent
            </span>
            <span className="h-[1px] w-6 bg-cream-300"></span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.15] tracking-tight mb-6">
            Discover the Essence <br />
            <span className="italic text-cream-200">That Defines You</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-cream-200/90 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Find a scent that speaks your truth — subtle or bold, familiar or unexplored. Let your fragrance reflect the feeling you want to carry.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setQuizOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-burgundy-700 hover:bg-burgundy-800 text-white font-medium text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-3 group"
            >
              <Sparkles size={16} />
              <span>Take Scent Diagnostic</span>
            </button>

            <Link
              to="/catalog"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-ink-900 border border-white/20 font-medium text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore All Fragrances</span>
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </section>

      {/* Scent Profiler Modal */}
      <ScentQuizModal isOpen={quizOpen} onClose={() => setQuizOpen(false)} />
    </>
  );
}
