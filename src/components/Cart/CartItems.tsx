import React from 'react';
import { CartItem as CartItemType } from '../../types';
import { CartItemComponent } from './CartItem';

interface CartItemsProps {
  items: CartItemType[];
  onRemoveItem: (id: number) => void;
}

export const CartItems: React.FC<CartItemsProps> = ({ items, onRemoveItem }) => (
  <div className="space-y-4">
    {items.map((item) => (
      <CartItemComponent
        key={item.id}
        item={item}
        onRemove={onRemoveItem}
      />
    ))}
  </div>
);