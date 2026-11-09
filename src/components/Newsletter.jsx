import React, { useState } from 'react';
import { Mail, Check, AlertCircle, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const clean = email.trim();

    if (!clean) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(clean)) {
      setStatus('error');
      setErrorMessage("Can't send form. Please provide a valid email format.");
      return;
    }

    // Success response
    setStatus('success');
    setEmail('');
  };

  const resetModal = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section className="py-24 sm:py-28 bg-cream-100 border-b border-[#e9e3da] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Label */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-[1px] w-6 bg-burgundy-700"></span>
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-burgundy-700 font-semibold">
            newsletter
          </span>
          <span className="h-[1px] w-6 bg-burgundy-700"></span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink-900 tracking-tight mb-4">
          Subscribe to Our <span className="italic text-burgundy-700">Newsletter</span>
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-sm text-taupe-500 max-w-xl mx-auto mb-8 font-light leading-relaxed">
          Celebrate the beauty of the season with 15% off your order — just use code <strong className="text-burgundy-700 font-semibold">WINTER15</strong> at checkout and let your signature scent tell a story of winter elegance.
        </p>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row items-stretch gap-2 bg-cream-150 p-1.5 border border-[#ded8ce] focus-within:border-burgundy-700 transition-colors shadow-sm">
            <div className="relative flex-1 flex items-center">
              <Mail size={16} className="text-taupe-400 ml-3 mr-1 shrink-0" />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent px-2.5 py-3 text-xs sm:text-sm text-ink-900 placeholder:text-taupe-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-burgundy-700 hover:bg-burgundy-800 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors shrink-0 flex items-center justify-center gap-2"
            >
              <span>Subscribe</span>
              <ArrowRight size={14} />
            </button>
          </div>
          <p className="text-[11px] text-taupe-400 mt-2">
            No spam, ever. Unsubscribe at any time with a single click.
          </p>
        </form>

        {/* Success Modal / Feedback Popup */}
        {status === 'success' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
            <div className="bg-white p-8 max-w-sm w-full border border-[#ded8ce] text-center shadow-2xl space-y-4">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 mx-auto flex items-center justify-center">
                <Check size={24} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-ink-900">
                Thank you!
              </h3>
              <p className="text-sm text-taupe-500">
                We will contact you shortly with your private invitation and season code.
              </p>
              <button
                type="button"
                onClick={resetModal}
                className="w-full py-2.5 bg-burgundy-700 hover:bg-burgundy-800 text-white text-xs uppercase tracking-widest font-semibold transition-colors mt-2"
              >
                Ok
              </button>
            </div>
          </div>
        )}

        {/* Error Modal / Feedback Popup */}
        {status === 'error' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
            <div className="bg-white p-8 max-w-sm w-full border border-[#ded8ce] text-center shadow-2xl space-y-4">
              <div className="w-12 h-12 rounded-full bg-red-100 text-burgundy-700 mx-auto flex items-center justify-center">
                <AlertCircle size={24} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-ink-900">
                Can't send form
              </h3>
              <p className="text-sm text-taupe-500">
                {errorMessage || 'Please try again later.'}
              </p>
              <button
                type="button"
                onClick={resetModal}
                className="w-full py-2.5 bg-burgundy-700 hover:bg-burgundy-800 text-white text-xs uppercase tracking-widest font-semibold transition-colors mt-2"
              >
                Ok
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

