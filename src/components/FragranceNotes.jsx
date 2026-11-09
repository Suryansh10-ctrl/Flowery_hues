import React, { useState } from 'react';
import { FRAGRANCE_NOTES } from '../data/products';
import { Droplets, Sparkles } from 'lucide-react';

export default function FragranceNotes() {
  const [activeNote, setActiveNote] = useState(0);

  return (
    <section id="new-scent" className="py-24 sm:py-32 bg-cream-100 border-b border-[#e9e3da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-burgundy-700"></span>
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-burgundy-700 font-semibold">
              new scent
            </span>
            <span className="h-[1px] w-6 bg-burgundy-700"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink-900 tracking-tight leading-tight">
            Layers of Scent <br />
            <span className="italic text-burgundy-700">"Unfolding Like a Story"</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-taupe-500 font-light leading-relaxed">
            Every fragrance begins with a spark — a moment, a memory, a whisper of emotion.
          </p>
        </div>

        {/* 6 Notes Visual Grid / Interactive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FRAGRANCE_NOTES.map((note, index) => (
            <div
              key={note.name}
              onMouseEnter={() => setActiveNote(index)}
              className={`p-6 border transition-all duration-300 relative flex flex-col justify-between ${
                activeNote === index
                  ? 'bg-cream-150 border-burgundy-700 shadow-md scale-[1.01]'
                  : 'bg-white border-[#e6e0d6] hover:border-[#cfc7bc]'
              }`}
            >
              {/* Image & note sequence header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-burgundy-700 bg-burgundy-50 px-2.5 py-1">
                    {note.step}
                  </span>
                  <span className="text-xs text-taupe-400 font-serif italic">
                    Note 0{index + 1}
                  </span>
                </div>

                <div className="aspect-[4/3] overflow-hidden mb-5 bg-[#eee8de] relative">
                  <img
                    src={note.image}
                    alt={note.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50" />
                  <span className="absolute bottom-3 left-3 text-white text-xs font-serif italic">
                    {note.tagline}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-ink-900 font-medium mb-1">
                  {note.name}
                </h3>
                
                <p className="text-xs uppercase tracking-wider text-burgundy-700 font-semibold mb-3">
                  {note.tagline}
                </p>

                <p className="text-xs sm:text-sm text-ink-900/70 font-light leading-relaxed">
                  {note.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="pt-4 mt-4 border-t border-[#eee8df] flex items-center justify-between text-[11px] text-taupe-400">
                <span className="flex items-center gap-1">
                  <Droplets size={12} className="text-burgundy-700" /> Pure Botanical Essence
                </span>
                <span>Tier {index < 2 ? 'Top' : index < 4 ? 'Heart' : 'Base'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

