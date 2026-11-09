import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import Benefits from '../components/Benefits';
import { ChevronRight, HelpCircle, MessageSquare, Phone, Mail, Clock } from 'lucide-react';

export default function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Editorial Header */}
      <div className="bg-[#181913] text-white py-16 sm:py-20 border-b border-[#2d2e26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-cream-300/60 uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Client Concierge & FAQ</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-3">
            <HelpCircle size={15} className="text-burgundy-400" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-cream-300 font-medium">
              assistance & care
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4">
            Frequently Asked <span className="italic text-cream-200">Questions</span>
          </h1>

          <p className="text-sm sm:text-base text-cream-200/80 font-light max-w-2xl leading-relaxed">
            Everything you need to know about our formulations, olfactory longevity, flacon care, discovery samples, and order delivery.
          </p>
        </div>
      </div>

      {/* Main FAQ Accordion Component */}
      <FAQ />

      {/* Concierge Assistance Box */}
      <section className="py-16 bg-cream-100 border-b border-[#e9e3da]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#ded8ce] p-8 sm:p-12 shadow-sm">
            <div className="max-w-3xl">
              <span className="text-[11px] uppercase tracking-widest text-burgundy-700 font-semibold block mb-1">
                Personal Consultation
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-ink-900 mb-3">
                Still have a question about choosing your scent?
              </h2>
              <p className="text-sm text-taupe-500 font-light leading-relaxed mb-6">
                Our in-house fragrance advisors are available Monday through Saturday to offer personalized guidance on notes, sillage, and gifting.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#eee8df] text-xs">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-burgundy-700 shrink-0" />
                  <div>
                    <span className="text-taupe-400 block">Telephone</span>
                    <a href="tel:+12345678900" className="text-ink-900 font-semibold hover:text-burgundy-700">+1 (234) 567 89 00</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-burgundy-700 shrink-0" />
                  <div>
                    <span className="text-taupe-400 block">Electronic Mail</span>
                    <a href="mailto:contact@floweryhues.com" className="text-ink-900 font-semibold hover:text-burgundy-700">contact@floweryhues.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-burgundy-700 shrink-0" />
                  <div>
                    <span className="text-taupe-400 block">Atelier Hours</span>
                    <span className="text-ink-900 font-semibold">10:00 – 19:00 IST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <Benefits />
    </div>
  );
}

