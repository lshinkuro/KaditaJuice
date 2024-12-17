import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { CartItem, UserDetails } from '../../types';
import { CartHeader } from './CartHeader';
import { CartItems } from './CartItems';
import { UserDetailsForm } from './UserDetailsForm';
import {
  calculateTotal,
  formatPrice,
  validateUserDetails,
  createWhatsAppMessage
} from '../../utils/cart';

interface CartProps {
  items: CartItem[];
  onClose: () => void;
  isOpen: boolean;
  onRemoveItem: (id: string) => void;
}

export const Cart: React.FC<CartProps> = ({
  items,
  onClose,
  isOpen,
  onRemoveItem
}) => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: '',
    phone: '',
    address: ''
  });
  const [error, setError] = useState('');

  const total = calculateTotal(items);

  const handleWhatsAppOrder = () => {
    const validationError = validateUserDetails(userDetails);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');

    const message = createWhatsAppMessage(items, userDetails);
    window.open(`https://wa.me/6283824266702?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
      className={`fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-lg z-50 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="p-4 h-full overflow-y-auto">
        <CartHeader onClose={onClose} />

        {items.length === 0 ? (
          <p className="text-gray-500 text-center mt-8">
            Keranjang masih kosong
          </p>
        ) : (
          <>
            <CartItems items={items} onRemoveItem={onRemoveItem} />
            
            <UserDetailsForm
              userDetails={userDetails}
              onChange={setUserDetails}
              error={error}
            />

            <div className="mt-8 border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">Total:</span>
                <span className="font-bold">
                  Rp {formatPrice(total)}
                </span>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-500 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-600"
              >
                <FaWhatsapp size={20} />
                <span>Pesan via WhatsApp</span>
              </button>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};