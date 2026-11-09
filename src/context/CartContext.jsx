import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('floweryhues_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState(() => {
    try {
      return localStorage.getItem('floweryhues_discount') || '';
    } catch {
      return '';
    }
  });
  const [discountPercent, setDiscountPercent] = useState(() => {
    try {
      return localStorage.getItem('floweryhues_discount') === 'WINTER15' ? 15 : 0;
    } catch {
      return 0;
    }
  });
  const [discountMessage, setDiscountMessage] = useState(
    discountPercent > 0 ? 'Promo code WINTER15 applied (-15%)' : ''
  );

  useEffect(() => {
    try {
      localStorage.setItem('floweryhues_cart', JSON.stringify(cart));
    } catch (err) {
      console.error('Failed to save cart to localStorage', err);
    }
  }, [cart]);

  const addToCart = (product, quantity = 1, size = '50ml') => {
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(
        item => item.id === product.id && item.size === size
      );

      if (existingIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingIndex].quantity += quantity;
        return newCart;
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            subtitle: product.subtitle,
            price: product.price,
            image: product.image,
            category: product.category,
            size: size || product.volume,
            quantity: quantity
          }
        ];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, size) => {
    setCart(prev => prev.filter(item => !(item.id === productId && (!size || item.size === size))));
  };

  const updateQuantity = (productId, newQuantity, size) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, size);
      return;
    }
    setCart(prev =>
      prev.map(item => {
        if (item.id === productId && (!size || item.size === size)) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyDiscount = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'WINTER15') {
      setDiscountCode('WINTER15');
      setDiscountPercent(15);
      setDiscountMessage('Promo code WINTER15 applied (-15%)');
      localStorage.setItem('floweryhues_discount', 'WINTER15');
      return { success: true, message: '15% discount applied!' };
    } else {
      return { success: false, message: 'Invalid promo code. Try WINTER15' };
    }
  };

  const removeDiscount = () => {
    setDiscountCode('');
    setDiscountPercent(0);
    setDiscountMessage('');
    localStorage.removeItem('floweryhues_discount');
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 9.99;
  const total = Math.max(0, subtotal - discountAmount + shipping);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

