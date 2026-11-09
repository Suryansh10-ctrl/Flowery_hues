import React, { createContext, useContext, useState, useCallback } from 'react';
import { Check, Heart, ShoppingBag, Tag, Info, X } from 'lucide-react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, iconType = 'check', duration = 3000) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, iconType }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'heart':
        return <Heart size={15} className="fill-burgundy-700 text-burgundy-700" />;
      case 'cart':
        return <ShoppingBag size={15} className="text-burgundy-700" />;
      case 'tag':
        return <Tag size={15} className="text-burgundy-700" />;
      default:
        return <Check size={15} className="text-green-600" />;
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast Notification Container */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto bg-white/95 backdrop-blur-md border border-[#ded8ce] shadow-xl p-3.5 sm:p-4 text-xs text-ink-900 flex items-center justify-between gap-3 animate-fade-in transition-all duration-300"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="p-1.5 rounded-full bg-cream-150 shrink-0">
                {getIcon(toast.iconType)}
              </div>
              <span className="font-medium tracking-wide truncate">{toast.message}</span>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-taupe-400 hover:text-ink-900 shrink-0 p-1"
              aria-label="Close notification"
            >
              <X size={13} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

