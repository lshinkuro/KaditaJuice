import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { FaPlus, FaMinus, FaStar } from 'react-icons/fa';

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  quantity,
  onAdd,
  onRemove,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.isBestSeller && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-300 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
            <FaStar className="text-yellow-700" />
            <span className="text-yellow-800">Best Seller</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-5">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-800 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {product.description}
          </p>
          <div className="text-green-600 font-bold text-lg">
            Rp {product.price.toLocaleString()}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center space-x-3 bg-gray-50 p-1 rounded-lg">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onRemove}
              disabled={quantity === 0}
              className="p-2 rounded-md bg-white text-green-600 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-50 transition-colors duration-200"
            >
              <FaMinus size={14} />
            </motion.button>
            
            <span className="font-medium text-gray-800 w-8 text-center">
              {quantity}
            </span>
            
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onAdd}
              className="p-2 rounded-md bg-white text-green-600 shadow-sm hover:bg-green-50 transition-colors duration-200"
            >
              <FaPlus size={14} />
            </motion.button>
          </div>

          {/* <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
          >
            Add to Cart
          </motion.button> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;