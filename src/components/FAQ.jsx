import React, { useState } from 'react';
import { FAQS } from '../data/products';
import { ChevronDown, Plus, Minus, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState(FAQS[0].id);

  const toggleFAQ = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-cream-150 border-b border-[#e9e3da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Section Layout: Left Details, Right Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-[1px] w-6 bg-burgundy-700"></span>
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-burgundy-700 font-semibold">
                faq
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink-900 leading-[1.18] tracking-tight mb-4">
              Fragrances for <br />
              <span className="italic text-burgundy-700">Every Moment</span> of Your Day
            </h2>

            <p className="text-xs uppercase tracking-widest text-taupe-500 font-medium mb-6">
              From subtle daytime elegance to bold evening statements — find a scent that moves with you.
            </p>

            <div className="p-6 bg-white border border-[#ded8ce] space-y-3">
              <h3 className="font-serif text-lg font-medium text-ink-900">
                Do You Have Questions? We’ve Got Your Answers.
              </h3>
              <p className="text-xs sm:text-sm text-taupe-500 leading-relaxed font-light">
                Whether you're finding your signature scent or picking a gift, we're here to help. Explore answers about perfumes, orders, and samples — for a smooth, delightful experience.
              </p>
              <div className="pt-2">
                <a
                  href="mailto:moc.liame@rucsbonidraj"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-burgundy-700 hover:text-burgundy-900"
                >
                  <MessageCircle size={14} />
                  <span>Ask a Fragrance Specialist</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-[#ded8ce] bg-white transition-all duration-300 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base sm:text-lg font-medium text-ink-900 group-hover:text-burgundy-700 transition-colors">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-cream-150 flex items-center justify-center shrink-0 text-burgundy-700 group-hover:bg-burgundy-700 group-hover:text-white transition-colors">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-ink-900/80 leading-relaxed font-light border-t border-[#f0eae1] animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

