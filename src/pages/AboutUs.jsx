import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BrandHistory from '../components/BrandHistory';
import OurPhilosophy from '../components/OurPhilosophy';
import Benefits from '../components/Benefits';
import Newsletter from '../components/Newsletter';
import { ChevronRight, Sparkles, Award, ShieldCheck, Heart } from 'lucide-react';

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Editorial Header */}
      <div className="bg-[#181913] text-white py-16 sm:py-24 border-b border-[#2d2e26] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-cream-300/60 uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Our Heritage & Philosophy</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-[1px] w-6 bg-burgundy-500"></span>
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-cream-300 font-medium">
                artisanal heritage
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6 leading-tight">
              A Legacy of Intention, <br />
              <span className="italic text-cream-200">Bottled in Grasse & Roorkee</span>
            </h1>

            <p className="text-sm sm:text-base text-cream-200/80 font-light leading-relaxed mb-8">
              Founded on the belief that a scent should be as personal as a signature, Flowery Hues bridges century-old French extraction traditions with modern botanical storytelling.
            </p>

            <div className="flex flex-wrap gap-4 text-xs tracking-wider uppercase">
              <Link
                to="/catalog"
                className="px-6 py-3.5 bg-burgundy-700 hover:bg-burgundy-800 text-white font-medium transition-colors"
              >
                Explore The Archive
              </Link>
              <Link
                to="/new-scent"
                className="px-6 py-3.5 border border-white/20 hover:border-white text-white font-medium transition-colors"
              >
                Discover Our Notes
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Our Philosophy Section Component */}
      <OurPhilosophy />

      {/* Brand History & 4-Milestone Timeline Component */}
      <BrandHistory />

      {/* Benefits & Guarantees */}
      <Benefits />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}

