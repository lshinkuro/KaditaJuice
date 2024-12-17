import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { CartItem as CartItemType } from '../../types';

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: string) => void;
}

export const CartItemComponent: React.FC<CartItemProps> = ({ item, onRemove }) => (
  <div className="flex justify-between items-center border-b pb-2">
    <div>
      <h3 className="font-medium">{item.name}</h3>
      <p className="text-sm text-gray-500">
        {item.quantity} x Rp {item.price.toLocaleString()}
      </p>
    </div>
    <div className="flex items-center gap-4">
      <div className="font-medium">
        Rp {(item.price * item.quantity).toLocaleString()}
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        <FaTrash size={16} />
      </button>
    </div>
  </div>
);