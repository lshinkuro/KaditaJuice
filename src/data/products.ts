import { Product } from '../types';


export const products: Product[] = [
  // Fresh Juices
  { id: 'alpukat', name: 'Alpukat', price: 10000, description: 'Jus alpukat segar',image:'https://img.okezone.com/content/2018/02/09/298/1857355/jus-martabe-minuman-nikmat-dan-khas-dari-sumatera-utara-oIHiKAu9H6.jpg', category: 'fresh-juices' },
  { id: 'apel', name: 'Apel', price: 10000, description: 'Jus apel segar',image:'https://img.okezone.com/content/2018/02/09/298/1857355/jus-martabe-minuman-nikmat-dan-khas-dari-sumatera-utara-oIHiKAu9H6.jpg',  category: 'fresh-juices' },
  { id: 'belimbing', name: 'Belimbing', price: 10000, description: 'Jus belimbing segar',image:'https://img.okezone.com/content/2018/02/09/298/1857355/jus-martabe-minuman-nikmat-dan-khas-dari-sumatera-utara-oIHiKAu9H6.jpg',  category: 'fresh-juices' },
  { id: 'buah-naga', name: 'Buah Naga', price: 10000, description: 'Jus buah naga segar',image:'https://img.okezone.com/content/2018/02/09/298/1857355/jus-martabe-minuman-nikmat-dan-khas-dari-sumatera-utara-oIHiKAu9H6.jpg',  category: 'fresh-juices' },
  { id: 'jeruk', name: 'Jeruk', price: 10000, description: 'Jus jeruk segar',image:'https://img.okezone.com/content/2018/02/09/298/1857355/jus-martabe-minuman-nikmat-dan-khas-dari-sumatera-utara-oIHiKAu9H6.jpg',  category: 'fresh-juices' },
  { id: 'jambu', name: 'Jambu', price: 10000, description: 'Jus jambu segar',image:'https://img.okezone.com/content/2018/02/09/298/1857355/jus-martabe-minuman-nikmat-dan-khas-dari-sumatera-utara-oIHiKAu9H6.jpg',  category: 'fresh-juices' },
  { id: 'lemon', name: 'Lemon', price: 10000, description: 'Jus lemon segar',image:'https://img.okezone.com/content/2018/02/09/298/1857355/jus-martabe-minuman-nikmat-dan-khas-dari-sumatera-utara-oIHiKAu9H6.jpg',  category: 'fresh-juices' },
  { id: 'mangga', name: 'Mangga', price: 10000, description: 'Jus mangga segar',image:'https://img.okezone.com/content/2018/02/09/298/1857355/jus-martabe-minuman-nikmat-dan-khas-dari-sumatera-utara-oIHiKAu9H6.jpg',  category: 'fresh-juices' },
  { id: 'melon', name: 'Melon', price: 10000, description: 'Jus melon segar',image:'https://img.okezone.com/content/2018/02/09/298/1857355/jus-martabe-minuman-nikmat-dan-khas-dari-sumatera-utara-oIHiKAu9H6.jpg',  category: 'fresh-juices' },
  { id: 'nanas', name: 'Nanas', price: 10000, description: 'Jus nanas segar',image:'https://img.okezone.com/content/2018/02/09/298/1857355/jus-martabe-minuman-nikmat-dan-khas-dari-sumatera-utara-oIHiKAu9H6.jpg',  category: 'fresh-juices' },
  { id: 'semangka', name: 'Semangka', price: 10000, description: 'Jus semangka segar',image:'https://img.okezone.com/content/2018/02/09/298/1857355/jus-martabe-minuman-nikmat-dan-khas-dari-sumatera-utara-oIHiKAu9H6.jpg',  category: 'fresh-juices' },
  { id: 'sirsak', name: 'Sirsak', price: 10000, description: 'Jus sirsak segar',image:'https://img.okezone.com/content/2018/02/09/298/1857355/jus-martabe-minuman-nikmat-dan-khas-dari-sumatera-utara-oIHiKAu9H6.jpg',  category: 'fresh-juices' },
  { id: 'wortel', name: 'Wortel', price: 10000, description: 'Jus wortel segar',image:'https://img.okezone.com/content/2018/02/09/298/1857355/jus-martabe-minuman-nikmat-dan-khas-dari-sumatera-utara-oIHiKAu9H6.jpg',  category: 'fresh-juices' },
  { id: 'strawberry', name: 'Strawberry', price: 12000, description: 'Jus strawberry segar',image:'https://img.okezone.com/content/2018/02/09/298/1857355/jus-martabe-minuman-nikmat-dan-khas-dari-sumatera-utara-oIHiKAu9H6.jpg',  category: 'fresh-juices' },
  { id: 'kiwi', name: 'Kiwi', price: 15000, description: 'Jus kiwi segar',image:'https://img.okezone.com/content/2018/02/09/298/1857355/jus-martabe-minuman-nikmat-dan-khas-dari-sumatera-utara-oIHiKAu9H6.jpg',  category: 'fresh-juices' },
  { id: 'sunkist', name: 'Sunkist', price: 15000, description: 'Jus sunkist segar',image:'https://img.okezone.com/content/2018/02/09/298/1857355/jus-martabe-minuman-nikmat-dan-khas-dari-sumatera-utara-oIHiKAu9H6.jpg',  category: 'fresh-juices' },
  { id: 'mix-2-buah', name: 'Mix 2 Buah', price: 15000, description: 'Jus campuran 2 buah',image:'https://img.okezone.com/content/2018/02/09/298/1857355/jus-martabe-minuman-nikmat-dan-khas-dari-sumatera-utara-oIHiKAu9H6.jpg',  category: 'fresh-juices' },

  // Alpukat Kocok
  { 
    id: 'alpucok-original', 
    name: 'Alpucok Original', 
    price: 10000, 
    description: 'Alpukat kocok original', 
    category: 'fresh-juices',
    image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/a267dcb5-06b3-4b52-ba23-7e764aa2caa3_Go-Biz_20210612_104047.jpeg',
    isBestSeller: true 
  },
  { 
    id: 'alpucok-milo', 
    name: 'Alpucok Milo', 
    price: 12000, 
    description: 'Alpukat kocok dengan milo', 
    image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/a267dcb5-06b3-4b52-ba23-7e764aa2caa3_Go-Biz_20210612_104047.jpeg',
    category: 'fresh-juices' 
  },
  { 
    id: 'alpucok-keju', 
    name: 'Alpucok Keju', 
    price: 12000, 
    description: 'Alpukat kocok dengan keju', 
    image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/a267dcb5-06b3-4b52-ba23-7e764aa2caa3_Go-Biz_20210612_104047.jpeg',
    category: 'fresh-juices' 
  },

  // New Menu
  { 
    id: 'es-teller-ori', 
    name: 'Es Teller Ori', 
    price: 13000, 
    description: 'Es teller original', 
    image: 'https://radarlambar.bacakoran.co/upload/94fa1c43645a1ae88fe052fe3a74fb92.jpeg',
    category: 'new-menu' 
  },
  { 
    id: 'es-teller-keju', 
    name: 'Es Teller Keju', 
    price: 15000, 
    description: 'Es teller dengan keju', 
    image: 'https://radarlambar.bacakoran.co/upload/94fa1c43645a1ae88fe052fe3a74fb92.jpeg',
    category: 'new-menu' 
  },
  { 
    id: 'es-teller-special', 
    name: 'Es Teller Special', 
    price: 18000, 
    description: 'Es teller spesial', 
    image: 'https://radarlambar.bacakoran.co/upload/94fa1c43645a1ae88fe052fe3a74fb92.jpeg',
    category: 'new-menu' 
  },

  // Sop Buah
  { 
    id: 'sop-buah', 
    name: 'Sop Buah', 
    price: 15000, 
    description: 'Sop buah segar', 
    image: 'https://radarlambar.bacakoran.co/upload/94fa1c43645a1ae88fe052fe3a74fb92.jpeg',
    category: 'sop-buah' 
  },
  { 
    id: 'sop-alpukat', 
    name: 'Sop Alpukat', 
    price: 15000, 
    description: 'Sop alpukat segar', 
    image: 'https://radarlambar.bacakoran.co/upload/94fa1c43645a1ae88fe052fe3a74fb92.jpeg',
    category: 'sop-buah' 
  },
  { 
    id: 'sop-kelapalpukat', 
    name: 'Sop Kelapalpukat', 
    price: 20000, 
    description: 'Sop kelapalpukat spesial', 
    image: 'https://radarlambar.bacakoran.co/upload/94fa1c43645a1ae88fe052fe3a74fb92.jpeg',
    category: 'sop-buah' 
  }
];