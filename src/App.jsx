import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ToastProvider } from './context/ToastContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import BestSellersPage from './pages/BestSellersPage';
import NewScentPage from './pages/NewScentPage';
import Catalog from './pages/Catalog';
import FAQPage from './pages/FAQPage';
import TestimonialsPage from './pages/TestimonialsPage';
import WishlistPage from './pages/WishlistPage';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <ToastProvider>
          <Router>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col bg-cream-100 text-ink-900 selection:bg-burgundy-700 selection:text-white">
              <Navbar />
              
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/best-sellers" element={<BestSellersPage />} />
                  <Route path="/new-scent" element={<NewScentPage />} />
                  <Route path="/catalog" element={<Catalog />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/testimonials" element={<TestimonialsPage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </div>

              <Footer />
              <CartDrawer />
            </div>
          </Router>
        </ToastProvider>
      </WishlistProvider>
    </CartProvider>
  );
}
