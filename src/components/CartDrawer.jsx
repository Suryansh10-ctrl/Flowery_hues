import React, { useState, useEffect } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, Check, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
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

  useEffect(() => {
    if (isCartOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isCartOpen]);

  if (!isCartOpen) return null;

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
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fade-in flex justify-end">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-[#ded8ce]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#e5dfd5] flex items-center justify-between bg-cream-100">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-burgundy-700" />
            <h2 className="font-serif text-xl font-medium text-ink-900">
              Your Fragrance Flacons
            </h2>
            <span className="text-xs bg-burgundy-700 text-white font-bold px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          </div>
          
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-full hover:bg-cream-200 text-ink-900 transition-colors"
            aria-label="Close cart drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-cream-150 border border-[#ded8ce] flex items-center justify-center text-taupe-400 mx-auto">
                <ShoppingBag size={28} />
              </div>
              <p className="font-serif text-xl text-ink-900">Your flacon basket is empty</p>
              <p className="text-xs text-taupe-500 max-w-xs mx-auto">
                Discover your personal scent story from our curated artisanal fragrance collection.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  const catalog = document.querySelector('#catalog');
                  if (catalog) catalog.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-burgundy-700 text-white text-xs uppercase tracking-widest font-semibold hover:bg-burgundy-800 transition-colors"
              >
                <span>Browse Fragrances</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="p-3 bg-cream-100 border border-[#e5dfd5] flex gap-3.5 items-center relative"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-20 object-cover bg-white shrink-0 border border-[#ded8ce]"
                  />

                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={() => setIsCartOpen(false)}
                      className="font-serif text-sm font-medium text-ink-900 hover:text-burgundy-700 transition-colors block truncate"
                    >
                      {item.name}
                    </Link>
                    <p className="text-[11px] text-taupe-500 italic mb-1.5">
                      {item.size} • {item.category}
                    </p>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#ded8ce] bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.size)}
                          className="px-2 py-0.5 text-xs text-ink-900 hover:text-burgundy-700 font-bold"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                          className="px-2 py-0.5 text-xs text-ink-900 hover:text-burgundy-700 font-bold"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <span className="font-serif text-sm font-medium text-burgundy-700">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-taupe-400 hover:text-red-700 transition-colors p-1"
                    title="Remove item"
                    aria-label="Remove item"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}

              <div className="text-right">
                <button
                  onClick={clearCart}
                  className="text-[11px] text-taupe-400 hover:text-red-700 underline uppercase tracking-wider"
                >
                  Clear Bag
                </button>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer & Checkout Calculations */}
        {cart.length > 0 && (
          <div className="p-6 bg-cream-100 border-t border-[#e5dfd5] space-y-4">
            
            {/* Promo Code Box */}
            <form onSubmit={handleApplyPromo} className="space-y-1.5">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (e.g. WINTER15)"
                  value={inputCode}
                  onChange={(e) => {
                    setInputCode(e.target.value);
                    setPromoError('');
                  }}
                  className="flex-1 bg-white border border-[#ded8ce] px-3 py-2 text-xs uppercase tracking-wider placeholder:normal-case placeholder:tracking-normal focus:outline-none focus:border-burgundy-700"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-cream-200 border border-[#ded8ce] hover:border-burgundy-700 text-ink-900 text-xs uppercase tracking-wider font-semibold"
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

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-ink-900/80 pt-2 border-t border-[#e5dfd5]">
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

              <div className="flex justify-between pt-2 border-t border-[#ded8ce] text-base font-serif font-medium text-ink-900">
                <span>Total</span>
                <span className="text-burgundy-700">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout CTA */}
            <button
              onClick={() => setCheckoutModalOpen(true)}
              className="w-full py-3.5 bg-burgundy-700 hover:bg-burgundy-800 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-taupe-400 text-center">
              <ShieldCheck size={13} />
              <span>Complimentary insured shipping • 30-day scent guarantee</span>
            </div>
          </div>
        )}
      </div>

      {/* Checkout Integration Readiness Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in">
          <div
            className="bg-white max-w-lg w-full p-6 sm:p-8 border border-[#ded8ce] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setCheckoutModalOpen(false)}
              className="absolute top-4 right-4 text-ink-900 hover:text-burgundy-700"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-burgundy-50 text-burgundy-700 flex items-center justify-center mx-auto mb-3">
                <ShoppingBag size={22} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-ink-900">
                Checkout Preview
              </h3>
              <p className="text-xs text-taupe-500 mt-1">
                Order readiness summary • Gateway ready
              </p>
            </div>

            <div className="bg-cream-100 p-4 border border-[#e5dfd5] text-xs space-y-2 mb-6">
              <div className="flex justify-between font-semibold">
                <span>Items ({totalItems})</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-green-700">
                  <span>WINTER15 Promo</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Standard Delivery</span>
                <span>{shipping === 0 ? 'Complimentary' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="pt-2 border-t border-[#ded8ce] flex justify-between font-serif text-base font-bold text-burgundy-700">
                <span>Grand Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 text-amber-800 text-xs leading-relaxed mb-6">
              <strong>Notice:</strong> This frontend demonstration stores cart data locally in your browser and is prepared for secure payment gateway integration (Stripe / PayPal / Apple Pay). No real payment has been requested.
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setCheckoutModalOpen(false)}
                className="w-full py-3 bg-burgundy-700 text-white text-xs uppercase tracking-widest font-semibold hover:bg-burgundy-800 transition-colors"
              >
                Back to Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

