import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Tag, Check, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function FirstOrderDiscount() {
  const [copied, setCopied] = useState(false);
  const { applyDiscount, setIsCartOpen } = useCart();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleUseDiscount = () => {
    applyDiscount('WINTER15');
    setCopied(true);
    showToast('Promo code WINTER15 applied! Enjoy 15% off.', 'tag');
    setTimeout(() => setCopied(false), 3000);
    navigate('/catalog');
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-burgundy-950 text-white">
      {/* Background imagery with luxury overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Perfume Ingredients"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-950 via-burgundy-950/90 to-burgundy-950/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-cream-300"></span>
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-cream-300 font-medium">
              first order discount
            </span>
            <span className="h-[1px] w-6 bg-cream-300"></span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white mb-6">
            Use Your <br />
            <span className="italic text-cream-200">15% Discount</span>
          </h2>

          <p className="text-base sm:text-lg text-cream-200/90 font-light leading-relaxed mb-6">
            Discover your signature scent and enjoy a limited-time <strong className="text-white font-medium">15% discount</strong> on your very first purchase. Just choose, shop, and order.
          </p>

          <p className="text-xs sm:text-sm text-cream-300/80 mb-8 border-l border-cream-400/40 pl-4 py-1 italic">
            Celebrate the beauty of the season — use code <strong className="text-white not-italic tracking-wider font-semibold">WINTER15</strong> at checkout and let your signature scent tell a story of winter elegance.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={handleUseDiscount}
              className="px-8 py-4 bg-cream-100 hover:bg-white text-burgundy-900 font-medium text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-3 group"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-green-700" />
                  <span>Code Applied (15% Off)</span>
                </>
              ) : (
                <>
                  <Tag size={16} />
                  <span>Use a Discount (WINTER15)</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <Link
              to="/about"
              className="px-6 py-4 border border-cream-200/30 hover:border-cream-100 text-cream-200 hover:text-white font-medium text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 text-center"
            >
              Learn More
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

