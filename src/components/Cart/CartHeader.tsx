import React from 'react';

interface CartHeaderProps {
  onClose: () => void;
}

export const CartHeader: React.FC<CartHeaderProps> = ({ onClose }) => (
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-bold">Keranjang</h2>
    <button
      onClick={onClose}
      className="text-gray-500 hover:text-gray-700"
    >
      ✕
    </button>
  </div>
);