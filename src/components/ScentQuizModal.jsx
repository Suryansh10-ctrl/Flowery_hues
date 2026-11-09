import React, { useState, useEffect } from 'react';
import { X, Sparkles, ArrowRight, RotateCcw, Check, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function ScentQuizModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    mood: '',
    timeOfDay: '',
    preference: ''
  });
  const [recommendation, setRecommendation] = useState(null);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  // Lock background scroll when modal is active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const moods = [
    { id: 'mysterious', title: 'Mysterious & Deep', desc: 'Resins, aged woods, smoky warmth' },
    { id: 'romantic', title: 'Romantic & Floral', desc: 'Damask rose, white petals, dewy honey' },
    { id: 'calm', title: 'Serene & Meditative', desc: 'Creamy sandalwood, clean tea, soft iris' },
    { id: 'fresh', title: 'Vibrant & Uplifting', desc: 'Solar citrus, sea mist, green botanical leaves' }
  ];

  const times = [
    { id: 'day', title: 'Daytime Serenity', desc: 'Airy, intimate, and comforting companion' },
    { id: 'evening', title: 'Evening Statement', desc: 'Enveloping, magnetic, and unforgettable presence' },
    { id: 'all-day', title: 'Second Skin Radiance', desc: 'Seamless transition from dawn till dusk' }
  ];

  const preferences = [
    { id: 'woody', title: 'Warm Sandalwood & Cedar', category: 'Signature' },
    { id: 'floral', title: 'Intoxicating Rose & Jasmine', category: 'Women' },
    { id: 'amber', title: 'Rich Bourbon Vanilla & Amber', category: 'Men' },
    { id: 'green', title: 'Crisp Green Tea & Bamboo', category: 'New' }
  ];

  const handleSelectMood = (mood) => {
    setAnswers({ ...answers, mood });
    setStep(2);
  };

  const handleSelectTime = (timeOfDay) => {
    setAnswers({ ...answers, timeOfDay });
    setStep(3);
  };

  const handleSelectPreference = (preference) => {
    const finalAnswers = { ...answers, preference };
    setAnswers(finalAnswers);

    // Calculate match
    let match;
    if (finalAnswers.mood === 'romantic' || preference === 'floral') {
      match = PRODUCTS.find(p => p.id === 'rose-eternelle') || PRODUCTS[1];
    } else if (finalAnswers.mood === 'mysterious' || preference === 'amber') {
      match = PRODUCTS.find(p => p.id === 'ambre-nocturne') || PRODUCTS[2];
    } else if (finalAnswers.mood === 'fresh' || preference === 'green') {
      match = PRODUCTS.find(p => p.id === 'the-vert-serenite') || PRODUCTS[3];
    } else {
      match = PRODUCTS.find(p => p.id === 'velvet-santal') || PRODUCTS[0];
    }

    setRecommendation(match);
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setAnswers({ mood: '', timeOfDay: '', preference: '' });
    setRecommendation(null);
  };

  const handleAddRecommendation = () => {
    if (recommendation) {
      addToCart(recommendation, 1, recommendation.volume);
      setAdded(true);
      setTimeout(() => {
        setAdded(false);
        onClose();
      }, 1200);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-hidden animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl max-h-[92vh] border border-[#ded8ce] shadow-2xl p-5 sm:p-8 md:p-10 my-auto overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream-150 hover:bg-burgundy-700 hover:text-white text-ink-900 flex items-center justify-center transition-colors"
          aria-label="Close scent profiler"
        >
          <X size={18} />
        </button>

        {/* Progress Bar */}
        {step < 4 && (
          <div className="mb-8">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-taupe-500 font-semibold mb-2">
              <span>Scent Diagnostic Diagnostic</span>
              <span>Step {step} of 3</span>
            </div>
            <div className="w-full h-1 bg-cream-200">
              <div
                className="h-1 bg-burgundy-700 transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Step 1: Mood */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center max-w-md mx-auto">
              <span className="text-[10px] uppercase tracking-[0.25em] text-burgundy-700 font-semibold block mb-1">
                Question 01
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink-900 font-normal">
                What feeling or mood do you want to evoke?
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {moods.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => handleSelectMood(m.id)}
                  className="p-5 text-left border border-[#ded8ce] bg-cream-100 hover:bg-white hover:border-burgundy-700 transition-all group"
                >
                  <h4 className="font-serif text-lg font-medium text-ink-900 group-hover:text-burgundy-700 transition-colors">
                    {m.title}
                  </h4>
                  <p className="text-xs text-taupe-500 mt-1">{m.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Time of Day */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center max-w-md mx-auto">
              <span className="text-[10px] uppercase tracking-[0.25em] text-burgundy-700 font-semibold block mb-1">
                Question 02
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink-900 font-normal">
                When will you wear this fragrance most often?
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-3.5 pt-2">
              {times.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => handleSelectTime(t.id)}
                  className="p-4 sm:p-5 text-left border border-[#ded8ce] bg-cream-100 hover:bg-white hover:border-burgundy-700 transition-all group flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-serif text-lg font-medium text-ink-900 group-hover:text-burgundy-700 transition-colors">
                      {t.title}
                    </h4>
                    <p className="text-xs text-taupe-500 mt-0.5">{t.desc}</p>
                  </div>
                  <span className="text-burgundy-700 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Preference */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center max-w-md mx-auto">
              <span className="text-[10px] uppercase tracking-[0.25em] text-burgundy-700 font-semibold block mb-1">
                Question 03
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink-900 font-normal">
                Which botanical notes draw you naturally?
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {preferences.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelectPreference(p.id)}
                  className="p-5 text-left border border-[#ded8ce] bg-cream-100 hover:bg-white hover:border-burgundy-700 transition-all group"
                >
                  <h4 className="font-serif text-base font-medium text-ink-900 group-hover:text-burgundy-700 transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-[11px] text-taupe-400 uppercase tracking-widest mt-1">
                    {p.category} Category
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Recommended Result */}
        {step === 4 && recommendation && (
          <div className="animate-fade-in space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 text-burgundy-700 bg-burgundy-50 px-3 py-1 text-xs uppercase tracking-widest font-semibold mb-2">
                <Sparkles size={14} /> Your Olfactory Match
              </div>
              <h3 className="font-serif text-3xl font-medium text-ink-900">
                {recommendation.name}
              </h3>
              <p className="text-xs text-taupe-500 italic mt-0.5">
                {recommendation.subtitle} • {recommendation.volume}
              </p>
            </div>

            {/* Match Box */}
            <div className="bg-cream-150 border border-[#e5dfd5] p-5 flex flex-col sm:flex-row gap-5 items-center">
              <img
                src={recommendation.image}
                alt={recommendation.name}
                className="w-28 h-36 object-cover bg-white border border-[#ded8ce] shrink-0"
              />
              <div className="space-y-2 text-left flex-1">
                <p className="text-xs text-ink-900/80 leading-relaxed font-light">
                  {recommendation.shortDescription}
                </p>
                <div className="text-xs space-y-1 pt-1 border-t border-[#ded8ce]">
                  <p><strong className="text-burgundy-700 font-medium">Key Notes:</strong> {recommendation.notes.top.slice(0, 2).join(', ')}, {recommendation.notes.heart[0]}, {recommendation.notes.base[0]}</p>
                  <p><strong className="text-burgundy-700 font-medium">Longevity:</strong> {recommendation.longevity}</p>
                </div>
                <div className="font-serif text-xl font-medium text-burgundy-700 pt-1">
                  ${recommendation.price.toFixed(2)}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleAddRecommendation}
                disabled={added}
                className="flex-1 py-3.5 bg-burgundy-700 hover:bg-burgundy-800 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2 shadow"
              >
                {added ? (
                  <>
                    <Check size={16} />
                    <span>Added to Basket</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    <span>Add to Bag • ${recommendation.price.toFixed(2)}</span>
                  </>
                )}
              </button>

              <Link
                to={`/product/${recommendation.id}`}
                onClick={onClose}
                className="px-6 py-3.5 border border-[#ded8ce] hover:border-burgundy-700 text-ink-900 text-xs uppercase tracking-wider font-semibold transition-colors text-center"
              >
                View Full Story
              </Link>

              <button
                type="button"
                onClick={handleReset}
                className="p-3.5 text-taupe-500 hover:text-ink-900 transition-colors flex items-center justify-center border border-[#ded8ce]"
                title="Retake diagnostic"
              >
                <RotateCcw size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

