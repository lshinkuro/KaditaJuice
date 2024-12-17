import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLeaf, FaShoppingBasket, FaHeart } from 'react-icons/fa';

const features = [
  {
    icon: <FaLeaf className="w-6 h-6" />,
    title: '100% Alami',
    description: 'Terbuat dari buah segar pilihan'
  },
  {
    icon: <FaShoppingBasket className="w-6 h-6" />,
    title: 'Pesan Antar',
    description: 'Gratis pengantaran area tertentu'
  },
  {
    icon: <FaHeart className="w-6 h-6" />,
    title: 'Sehat',
    description: 'Tanpa pengawet & pemanis buatan'
  }
];

export const HeroContent: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div className="space-y-4">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Kadita Juice
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Nikmati kesegaran jus buah alami untuk hidup lebih sehat. Dibuat dengan buah-buahan segar pilihan untuk memberikan nutrisi terbaik bagi tubuh Anda.
        </motion.p>
      </div>

      <motion.div 
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          to="products"
          smooth={true}
          duration={500}
          className="inline-flex items-center px-8 py-3 rounded-lg bg-slate-950	 text-white hover:bg-green-600 transition-colors cursor-pointer"
        >
          Lihat Menu
        </Link>
        <a
          href="https://wa.me/6283824266702"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 rounded-lg border-2 border-white-500 text-slate-950 hover:bg-green-50 transition-colors"
        >
          Hubungi Kami
        </a>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="flex flex-col items-center text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-500 mb-3">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative hidden lg:block"
    >
      <div className="relative">
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEtAxFD_r55vK7KSBkmqhtENVTdclEJfwVHA&s"
          alt="Fresh Juices"
          className="w-full h-auto rounded-lg shadow-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <FaLeaf className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Buah Segar</p>
              <p className="text-sm text-gray-600">Dipetik langsung dari kebun</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </div>
);