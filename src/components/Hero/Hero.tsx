import React from 'react';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';


export const Hero: React.FC = () => (
  <section
    className="relative min-h-screen flex items-center bg-[url('https://images.unsplash.com/photo-1531025503751-fedbb2ad9de5?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat"
  >
    {/* Optional: Tambahkan overlay jika diperlukan */}
    <div className="absolute inset-0 bg-black opacity-20 -z-10" />

    <HeroBackground />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <HeroContent />
    </div>
  </section>
);