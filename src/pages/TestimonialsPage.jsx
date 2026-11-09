import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import { ChevronRight, Star, Heart, Quote, Check } from 'lucide-react';

export default function TestimonialsPage() {
  const [reviewsList, setReviewsList] = useState([
    {
      author: 'Marcus Vance',
      role: 'Architect & Collector',
      rating: 5,
      date: 'October 2025',
      text: 'Velvet Santal has become an integral part of my daily uniform. The transition from spicy cardamom to smoky iris is extraordinarily sophisticated. It has an architectural clarity I have not found anywhere else.'
    },
    {
      author: 'Amara Chen',
      role: 'Gallery Curator',
      rating: 5,
      date: 'November 2025',
      text: 'Rose Éternelle captures Grasse at 6 AM. It is not sweet or cloying—it is alive, green, peppery, and breathtaking. Everyone at the vernissage asked me what I was wearing.'
    },
    {
      author: 'David Sterling',
      role: 'Interior Designer',
      rating: 5,
      date: 'January 2026',
      text: 'The Storyteller Discovery Set arrived in the most exquisite presentation box. Every vial felt like a personal chapter. Ended up ordering full bottles of Ambre Nocturne and Cuir Sublime.'
    }
  ]);

  const [formOpen, setFormOpen] = useState(false);
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;

    setReviewsList([
      {
        author: author.trim(),
        role: role.trim() || 'Fragrance Enthusiast',
        rating,
        date: 'Just now',
        text: text.trim()
      },
      ...reviewsList
    ]);

    setAuthor('');
    setRole('');
    setText('');
    setFormOpen(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Editorial Header */}
      <div className="bg-[#181913] text-white py-16 sm:py-20 border-b border-[#2d2e26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-cream-300/60 uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Client Reflections</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-3">
            <Heart size={15} className="text-burgundy-400 fill-burgundy-400" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-cream-300 font-medium">
              connoisseur love
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4">
            Why They Fell in Love <br />
            <span className="italic text-cream-200">at First Scent</span>
          </h1>

          <p className="text-sm sm:text-base text-cream-200/80 font-light max-w-2xl leading-relaxed">
            Read intimate reflections from individuals who have made Flowery Hues their daily olfactory signature.
          </p>
        </div>
      </div>

      {/* Featured 3 Testimonials Component */}
      <Testimonials />

      {/* Extended Reviews Section */}
      <section className="py-20 sm:py-28 bg-cream-100 border-b border-[#e9e3da]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 pb-6 border-b border-[#ded8ce]">
            <div>
              <span className="text-xs uppercase tracking-widest text-burgundy-700 font-semibold block mb-1">
                Client Community
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-ink-900 font-normal">
                Authentic Olfactory Stories
              </h2>
            </div>

            <button
              onClick={() => setFormOpen(!formOpen)}
              className="px-6 py-3 bg-burgundy-700 hover:bg-burgundy-800 text-white text-xs uppercase tracking-widest font-semibold transition-colors self-start sm:self-auto"
            >
              {formOpen ? 'Cancel Form' : 'Submit Your Reflection'}
            </button>
          </div>

          {submitted && (
            <div className="p-4 bg-green-50 border border-green-200 text-green-800 text-xs flex items-center gap-2 mb-8 animate-fade-in">
              <Check size={16} />
              <span>Thank you! Your reflection has been published to our community archive.</span>
            </div>
          )}

          {/* Submission Form Modal/Dropdown */}
          {formOpen && (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 bg-white border border-[#ded8ce] mb-12 max-w-2xl shadow-sm animate-fade-in space-y-4">
              <h3 className="font-serif text-xl font-medium text-ink-900">
                Share Your Reflection
              </h3>

              <div className="flex items-center gap-3">
                <span className="text-xs text-taupe-500 font-semibold">Your Rating:</span>
                <div className="flex text-amber-500 cursor-pointer">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-0.5"
                    >
                      <Star size={18} className={star <= rating ? 'fill-amber-500' : 'text-gray-300'} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-taupe-500 font-semibold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Julian Ross"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full bg-cream-100 border border-[#ded8ce] px-3 py-2 text-xs focus:outline-none focus:border-burgundy-700"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-taupe-500 font-semibold mb-1">
                    Your Profession / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Writer, Milan"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-cream-100 border border-[#ded8ce] px-3 py-2 text-xs focus:outline-none focus:border-burgundy-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-taupe-500 font-semibold mb-1">
                  Your Scent Reflection
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us which perfume you wore and how it made you feel..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full bg-cream-100 border border-[#ded8ce] px-3 py-2 text-xs focus:outline-none focus:border-burgundy-700"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-burgundy-700 text-white text-xs uppercase tracking-widest font-semibold hover:bg-burgundy-800 transition-colors"
              >
                Publish Reflection
              </button>
            </form>
          )}

          {/* Extended Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviewsList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#ded8ce] p-8 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-amber-500" />
                      ))}
                    </div>
                    <span className="text-[11px] text-taupe-400 font-serif italic">{item.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-ink-900/80 leading-relaxed font-light italic mb-6">
                    "{item.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f0eae1]">
                  <h4 className="font-serif text-base font-medium text-ink-900">{item.author}</h4>
                  <p className="text-[11px] uppercase tracking-wider text-taupe-500 font-medium mt-0.5">{item.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}

