import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12130e] text-[#f4efe8] pt-20 pb-12 border-t border-cream-200/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Seasonal Promo Box in Footer */}
        <div className="bg-[#1c1d17] border border-[#2d2e26] p-6 sm:p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-burgundy-400 font-semibold block mb-1">
              Season Exclusive
            </span>
            <p className="text-sm sm:text-base text-cream-200 font-light">
              Celebrate the beauty of the season with 15% off your order — just use code <strong className="text-white font-semibold underline decoration-burgundy-500 underline-offset-2">WINTER15</strong> at checkout and let your signature scent tell a story of winter elegance.
            </p>
          </div>
          <Link
            to="/catalog"
            className="px-6 py-3 bg-burgundy-700 hover:bg-burgundy-800 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors shrink-0"
          >
            Shop With Discount
          </Link>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#24251f]">
          
          {/* Brand Info (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-cursive text-3xl sm:text-[34px] tracking-wide text-white font-normal block leading-none">
                Flowery Hues
              </span>
              <span className="text-[8.5px] tracking-[0.32em] uppercase text-taupe-400 block mt-1">
                Haute Parfumerie
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-cream-300/70 font-light leading-relaxed max-w-sm">
              Every fragrance tells a unique story, capturing moments that linger long after the day begins and fades. Handcrafted with ethically sourced botanicals and master craftsmanship.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1e2019] hover:bg-burgundy-700 text-cream-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/floweryhues_perfumery/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1e2019] hover:bg-burgundy-700 text-cream-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1e2019] hover:bg-burgundy-700 text-cream-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* About Links (col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm tracking-widest uppercase text-white font-medium">
              About
            </h4>
            <ul className="space-y-2 text-xs text-cream-300/70">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About us</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">Our Philosophy</Link>
              </li>
              <li>
                <Link to="/new-scent" className="hover:text-white transition-colors">New Scent</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Shop Links (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm tracking-widest uppercase text-white font-medium">
              Shop
            </h4>
            <ul className="space-y-2 text-xs text-cream-300/70">
              <li>
                <Link to="/best-sellers" className="hover:text-white transition-colors">Best Sellers</Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-white transition-colors">Catalog</Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-white transition-colors">Special Selections</Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm tracking-widest uppercase text-white font-medium">
              Atelier & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-cream-300/70">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-burgundy-500 shrink-0 mt-0.5" />
                <span>297 Civil Lines 19, Roorkee UK PIN 247667</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-burgundy-500 shrink-0" />
                <a href="tel:+12345678900" className="hover:text-white transition-colors">+91 9717967914</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-burgundy-500 shrink-0" />
                <a href="mailto:contact@floweryhues.com" className="hover:text-white transition-colors">Floweryhues@yahoo.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-300/50 gap-4">
          <p className="tracking-widest uppercase text-[11px]">
            © ALL RIGHTS RESERVED FLOWERY HUES
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-cream-300/70 hover:text-white transition-colors tracking-widest uppercase text-[11px]"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
