import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function OurPhilosophy() {
  return (
    <section id="our-philosophy" className="py-24 sm:py-32 bg-cream-100 border-b border-[#e9e3da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Storytelling & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-[1px] w-6 bg-burgundy-700"></span>
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-burgundy-700 font-semibold">
                our philosophy
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink-900 leading-[1.18] tracking-tight">
              Fragrance With Meaning, <br />
              <span className="italic text-burgundy-700">Begin Your Story</span>
            </h2>

            <p className="text-sm uppercase tracking-widest text-taupe-500 font-medium">
              Crafted with care, inspired by emotion, designed to linger.
            </p>

            <p className="text-base sm:text-lg text-ink-900/80 font-light leading-relaxed">
              We use ethically sourced ingredients, work with master perfumers, and create in small batches to ensure integrity in every bottle — each scent thoughtfully blended to reflect personal stories and emotions.
            </p>

            {/* Three Pillar Cards */}
            <div className="space-y-4 pt-4">
              <div className="p-4 sm:p-5 bg-cream-150 border border-[#e5dfd5] flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-burgundy-700/10 text-burgundy-700 shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-ink-900">
                    Ethically Sourced Botanicals
                  </h3>
                  <p className="text-xs sm:text-sm text-taupe-500 mt-1 leading-relaxed">
                    Direct partnerships with generational growers in Grasse and Madagascar ensuring fair livelihoods and ecological stewardship.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-cream-150 border border-[#e5dfd5] flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-burgundy-700/10 text-burgundy-700 shrink-0">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-ink-900">
                    Small-Batch Slow Maturation
                  </h3>
                  <p className="text-xs sm:text-sm text-taupe-500 mt-1 leading-relaxed">
                    Each batch is macerated for 90 days in temperature-controlled dark cellars to allow complex notes to unfold seamlessly.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-cream-150 border border-[#e5dfd5] flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-burgundy-700/10 text-burgundy-700 shrink-0">
                  <HeartHandshake size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-ink-900">
                    Cruelty-Free & Transparent
                  </h3>
                  <p className="text-xs sm:text-sm text-taupe-500 mt-1 leading-relaxed">
                    100% vegan formulations free from parabens, phthalates, and synthetic dyes. Nothing hidden, ever.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-burgundy-700 hover:text-burgundy-900 border-b border-burgundy-700/40 pb-1 hover:border-burgundy-900 transition-colors"
              >
                <span>Explore the Collection</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main large image */}
              <div className="relative z-10 aspect-[4/5] overflow-hidden shadow-2xl border-8 border-white bg-[#e8e2d8]">
                <img
                  src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=1200&auto=format&fit=crop"
                  alt="Crafting Perfume in Atelier"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Offset secondary image */}
              <div className="hidden sm:block absolute -bottom-10 -left-10 z-20 w-48 lg:w-56 aspect-[3/4] overflow-hidden shadow-xl border-4 border-white bg-[#ece5dc]">
                <img
                  src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=600&auto=format&fit=crop"
                  alt="Fresh Jasmine Petals"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative stamp quote badge */}
              <div className="absolute -top-6 -right-6 z-20 bg-burgundy-700 text-white p-5 max-w-[180px] shadow-lg hidden sm:block">
                <span className="text-[10px] uppercase tracking-widest block text-cream-300 font-sans">Our Promise</span>
                <span className="font-serif italic text-sm mt-1 block">"Integrity in every single drop."</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

