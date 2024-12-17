import React from 'react';
import { motion } from 'framer-motion';

export const HeroBackground: React.FC = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-50" />
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-30" />
    </motion.div>
    
    {/* Decorative circles */}
    <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
      <div className="w-72 h-72 rounded-full bg-green-200 opacity-20 blur-3xl" />
    </div>
    <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
      <div className="w-72 h-72 rounded-full bg-green-300 opacity-20 blur-3xl" />
    </div>
  </div>
);