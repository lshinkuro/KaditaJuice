import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { FaPlus, FaMinus } from 'react-icons/fa';

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
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.isBestSeller && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full">
            Best Seller
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        <div className="mt-2 text-green-600 font-bold">
          Rp {product.price.toLocaleString()}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={onRemove}
              disabled={quantity === 0}
              className="p-2 rounded-full bg-green-100 text-green-600 disabled:opacity-50"
            >
              <FaMinus size={12} />
            </button>
            <span className="font-medium">{quantity}</span>
            <button
              onClick={onAdd}
              className="p-2 rounded-full bg-green-100 text-green-600"
            >
              <FaPlus size={12} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};