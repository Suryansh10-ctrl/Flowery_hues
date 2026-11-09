import React from 'react';
import { Leaf, Truck, PackageCheck, Sparkles } from 'lucide-react';
import { BENEFITS } from '../data/products';

export default function Benefits() {
  const getIcon = (name) => {
    switch (name) {
      case 'Leaf': return <Leaf size={24} />;
      case 'Truck': return <Truck size={24} />;
      case 'PackageCheck': return <PackageCheck size={24} />;
      case 'Sparkles': return <Sparkles size={24} />;
      default: return <Sparkles size={24} />;
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-cream-100 border-b border-[#e9e3da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BENEFITS.map((item, index) => (
            <div
              key={item.title}
              className="p-6 sm:p-8 bg-cream-150 border border-[#e5dfd5] hover:border-burgundy-700/40 transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-white border border-[#ded8ce] text-burgundy-700 flex items-center justify-center group-hover:bg-burgundy-700 group-hover:text-white transition-colors duration-300">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-burgundy-700 font-bold text-lg select-none">●</span>
                </div>

                <h3 className="font-serif text-xl font-medium text-ink-900 mb-2 group-hover:text-burgundy-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-taupe-500 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#ded8ce]/60 text-[10px] uppercase tracking-widest text-taupe-400">
                Guarantee #{index + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

