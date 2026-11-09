import React, { useState } from 'react';
import Hero from '../components/Hero';
import SignatureScents from '../components/SignatureScents';
import BrandHistory from '../components/BrandHistory';
import FirstOrderDiscount from '../components/FirstOrderDiscount';
import OurPhilosophy from '../components/OurPhilosophy';
import BestSellers from '../components/BestSellers';
import FragranceNotes from '../components/FragranceNotes';
import ProductCatalogue from '../components/ProductCatalogue';
import DiscoverBanner from '../components/DiscoverBanner';
import FAQ from '../components/FAQ';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import QuickViewModal from '../components/QuickViewModal';

export default function Home() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedCatalogCategory, setSelectedCatalogCategory] = useState('all');

  const handleSelectSignatureCategory = (category) => {
    setSelectedCatalogCategory(category);
  };

  return (
    <main className="w-full">
      {/* B. Hero Section */}
      <Hero />

      {/* C. Signature Scents */}
      <SignatureScents onSelectCategory={handleSelectSignatureCategory} />

      {/* D. Brand History */}
      <BrandHistory />

      {/* E. First Order Discount */}
      <FirstOrderDiscount />

      {/* F. Our Philosophy */}
      <OurPhilosophy />

      {/* G. Best Sellers */}
      <BestSellers onQuickView={setQuickViewProduct} />

      {/* H. New Scent / Fragrance Notes */}
      <FragranceNotes />

      {/* I. Product Catalogue */}
      <ProductCatalogue
        initialCategory={selectedCatalogCategory}
        onQuickView={setQuickViewProduct}
      />

      {/* J. Discover Your Scent */}
      <DiscoverBanner />

      {/* K. FAQ */}
      <FAQ />

      {/* L. Benefits Section */}
      <Benefits />

      {/* M. Testimonials */}
      <Testimonials />

      {/* N. Newsletter */}
      <Newsletter />

      {/* Quick View Modal Overlay */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </main>
  );
}

