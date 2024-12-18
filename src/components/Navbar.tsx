import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartItemsCount, onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const menuItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Products', to: 'products' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
      <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h3 className="font-semibold text-gray-900 mb-1">Joseph Juice</h3>
          </div>
    
          {/* Mobile Menu / Keranjang */}
          <div className="flex items-center space-x-4">
            {/* Keranjang belanja */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-green-500 md:hidden"
            >
              <FaShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
    
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-green-500"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`h-6 w-6 transform transition-transform duration-300 ${
                    isOpen ? 'rotate-90' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
    
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 sm:space-x-2">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-green-500 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
            {/* Keranjang belanja */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-green-500 hidden md:block"
            >
              <FaShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    
      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute bg-white w-full shadow-md`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-green-500"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>    
  );
};
