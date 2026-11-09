import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, Check, ChevronRight } from 'lucide-react';

export default function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    discountCode,
    discountPercent,
    discountAmount,
    discountMessage,
    applyDiscount,
    removeDiscount,
    shipping,
    total,
    totalItems
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [promoError, setPromoError] = useState('');
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const result = applyDiscount(inputCode);
    if (!result.success) {
      setPromoError(result.message);
    } else {
      setPromoError('');
      setInputCode('');
    }
  };

  return (
    <div className="bg-cream-100 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-taupe-500 uppercase tracking-widest mb-6">
          <Link to="/" className="hover:text-burgundy-700 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-burgundy-700 font-semibold">Shopping Bag</span>
        </nav>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink-900 tracking-tight mb-8">
          Your Fragrance <span className="italic text-burgundy-700">Selection</span>
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white border border-[#ded8ce] p-12 sm:p-20 text-center space-y-4 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-cream-150 border border-[#ded8ce] flex items-center justify-center text-taupe-400 mx-auto">
              <ShoppingBag size={28} />
            </div>
            <h2 className="font-serif text-2xl text-ink-900">Your shopping bag is empty</h2>
            <p className="text-xs sm:text-sm text-taupe-500 max-w-sm mx-auto font-light">
              Explore our Haute Parfumerie collection and find a fragrance that speaks to your intimate narrative.
            </p>
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-burgundy-700 hover:bg-burgundy-800 text-white text-xs uppercase tracking-widest font-semibold transition-colors shadow-md mt-4"
            >
              <span>Explore Collection</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Items Column (lg:col-span-8) */}
            <div className="lg:col-span-8 bg-white border border-[#ded8ce] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#ded8ce]">
                <span className="font-serif text-xl font-medium text-ink-900">
                  Flacons in Bag ({totalItems})
                </span>
                <button
                  onClick={clearCart}
                  className="text-xs text-taupe-400 hover:text-red-700 uppercase tracking-wider underline"
                >
                  Clear Bag
                </button>
              </div>

              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#f0eae1] last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-24 object-cover bg-cream-150 border border-[#ded8ce]"
                      />
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          className="font-serif text-lg font-medium text-ink-900 hover:text-burgundy-700 transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs text-taupe-500 italic mt-0.5">
                          {item.size} • {item.category}
                        </p>
                        <p className="font-serif text-sm font-medium text-burgundy-700 mt-1">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#ded8ce] bg-cream-100">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.size)}
                          className="px-3 py-1.5 text-xs text-ink-900 hover:text-burgundy-700 font-bold"
                        >
                          -
                        </button>
                        <span className="px-3 text-xs font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                          className="px-3 py-1.5 text-xs text-ink-900 hover:text-burgundy-700 font-bold"
                        >
                          +
                        </button>
                      </div>

                      <div className="font-serif text-lg font-medium text-burgundy-700 min-w-[70px] text-right">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-taupe-400 hover:text-red-700 transition-colors p-1"
                        title="Remove"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary Column (lg:col-span-4) */}
            <div className="lg:col-span-4 bg-white border border-[#ded8ce] p-6 sm:p-8 shadow-sm space-y-6 sticky top-28">
              <h2 className="font-serif text-xl font-medium text-ink-900 pb-3 border-b border-[#ded8ce]">
                Order Summary
              </h2>

              {/* Promo Form */}
              <form onSubmit={handleApplyPromo} className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-taupe-500 font-semibold">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="WINTER15"
                    value={inputCode}
                    onChange={(e) => {
                      setInputCode(e.target.value);
                      setPromoError('');
                    }}
                    className="flex-1 bg-cream-100 border border-[#ded8ce] px-3 py-2 text-xs uppercase tracking-wider focus:outline-none focus:border-burgundy-700"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-cream-200 border border-[#ded8ce] hover:border-burgundy-700 text-ink-900 text-xs uppercase tracking-wider font-semibold"
                  >
                    Apply
                  </button>
                </div>

                {promoError && (
                  <p className="text-[11px] text-red-600">{promoError}</p>
                )}

                {discountPercent > 0 && (
                  <div className="flex items-center justify-between text-xs text-green-700 bg-green-50 p-2 border border-green-200">
                    <span className="flex items-center gap-1">
                      <Check size={13} /> {discountMessage}
                    </span>
                    <button
                      type="button"
                      onClick={removeDiscount}
                      className="text-red-600 hover:underline uppercase text-[10px]"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </form>

              {/* Breakdown */}
              <div className="space-y-2.5 text-xs text-ink-900/80 pt-4 border-t border-[#ded8ce]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>

                {discountPercent > 0 && (
                  <div className="flex justify-between text-green-700">
                    <span>15% Seasonal Discount</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-700 font-semibold uppercase text-[10px]">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between pt-3 border-t border-[#ded8ce] text-lg font-serif font-medium text-ink-900">
                  <span>Total</span>
                  <span className="text-burgundy-700 font-semibold">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => setCheckoutModalOpen(true)}
                className="w-full py-4 bg-burgundy-700 hover:bg-burgundy-800 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="pt-2 flex items-center justify-center gap-1.5 text-xs text-taupe-400 text-center">
                <ShieldCheck size={14} />
                <span>Secure payment gateway ready</span>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Checkout Preview Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white max-w-lg w-full p-8 border border-[#ded8ce] shadow-2xl space-y-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-burgundy-50 text-burgundy-700 flex items-center justify-center mx-auto mb-3">
                <ShoppingBag size={22} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-ink-900">
                Ready for Gateway Integration
              </h3>
              <p className="text-xs text-taupe-500 mt-1">
                Order Total: <strong className="text-burgundy-700 text-sm font-semibold">${total.toFixed(2)}</strong>
              </p>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 text-amber-800 text-xs leading-relaxed">
              This complete e-commerce experience is frontend-ready for Stripe, PayPal, or any custom merchant backend. Your cart contents are fully persisted in localStorage.
            </div>

            <button
              type="button"
              onClick={() => setCheckoutModalOpen(false)}
              className="w-full py-3 bg-burgundy-700 text-white text-xs uppercase tracking-widest font-semibold hover:bg-burgundy-800 transition-colors"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

