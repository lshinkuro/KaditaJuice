import { CartItem, UserDetails } from '../types';

export const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

export const formatPrice = (price: number): string => {
  return price.toLocaleString();
};

export const validateUserDetails = (details: UserDetails): string => {
  if (!details.name.trim()) return 'Nama harus diisi';
  if (!details.phone.trim()) return 'Nomor telepon harus diisi';
  if (!details.address.trim()) return 'Alamat harus diisi';
  if (!/^[0-9]{10,13}$/.test(details.phone.replace(/[^0-9]/g, ''))) {
    return 'Nomor telepon tidak valid';
  }
  return '';
};

export const createWhatsAppMessage = (
  items: CartItem[],
  userDetails: UserDetails
): string => {
  const itemsList = items
    .map((item) => `${item.name} x${item.quantity} = Rp ${formatPrice(item.price * item.quantity)}`)
    .join('%0A');
  
  const total = calculateTotal(items);
  
  return `Halo Kadita Juice! Saya ingin memesan:%0A%0A` +
    `*Data Pemesan*%0A` +
    `Nama: ${userDetails.name}%0A` +
    `No. Telp: ${userDetails.phone}%0A` +
    `Alamat: ${userDetails.address}%0A%0A` +
    `*Pesanan*%0A${itemsList}%0A%0A` +
    `Total: Rp ${formatPrice(total)}`;
};