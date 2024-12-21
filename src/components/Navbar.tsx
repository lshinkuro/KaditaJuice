import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';
import { Leaf } from 'lucide-react';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartItemsCount, onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const menuItems = [
    { name: 'Home', to: '', type: 'scroll' },
    // { name: 'About', to: 'about', type: 'route' },
    { name: 'Products', to: 'products', type: 'scroll' },
    { name: 'Testimonials', to: 'testimonials', type: 'scroll' },
    { name: 'Contact', to: 'contact', type: 'scroll' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-white/90'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-white-500" />
            <div className="flex flex-col">
              <h3 className="font-bold text-xl text-gray-800">
                Kadita Juice
              </h3>
              <span className="text-xs text-green-600 font-medium">Fresh & Natural</span>
            </div>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center space-x-4 md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-green-500"
            >
              <FaShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-gradient-to-r from-green-500 to-green-400 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 hover:bg-green-50 transition-colors"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="w-6 h-5 flex flex-col justify-between"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 },
                  }}
                  className="w-full h-0.5 bg-gray-600 rounded-full origin-left"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="w-full h-0.5 bg-gray-600 rounded-full"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 },
                  }}
                  className="w-full h-0.5 bg-gray-600 rounded-full origin-left"
                />
              </motion.div>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              item.type === 'scrol' ? (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="relative text-gray-600 hover:text-green-500 font-medium transition-colors group"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </ScrollLink>
              ): (
              <RouterLink
                key={item.to}
                to={item.to}
                className="relative text-gray-600 hover:text-green-500 font-medium transition-colors group"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </RouterLink>
              )
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCartClick}
              className="relative p-3 text-white bg-gradient-to-r from-green-500 to-green-400 rounded-full shadow-lg hover:shadow-green-200 transition-shadow"
            >
              <FaShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-yellow-400 text-white-500 rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold shadow-sm"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md"
      >
        <div className="px-4 py-6 space-y-4">
          {menuItems.map((item) => (
            item.type === 'scrol' ? (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="block px-4 py-3 rounded-xl text-gray-600 hover:text-green-500 hover:bg-green-50 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </ScrollLink>
            ): (
              <RouterLink
              key={item.to}
              to={item.to}
              className="block px-4 py-3 rounded-xl text-gray-600 hover:text-green-500 hover:bg-green-50 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </RouterLink>
            )
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;