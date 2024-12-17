import { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero/Hero';
import { ProductCard } from '../components/ProductCard';
import { Cart } from '../components/Cart/Cart';
import { products } from '../data/products';
import { Review } from '../components/Review';
import { reviews } from '../data/reviews';
import { CartItem, Product, ReviewType } from '../types';
import { Maps } from '../components/Maps/Maps';
import { Footer } from '../components/Footer/Footer';
import CarouselComponent from '../components/Carousel';
import { get } from '../network/ApiConfig';

const Home: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const [juices, setJuices] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

 

     // Example GET request
  const fetchData = async () => {
    try {
    const response = await get<Product[]>('/api/v1/menujuice');
    setJuices(response);
    } catch (error) {
        setError("Failed to fetch data");
        console.error('Error fetching data:', error);
    } finally {
        setLoading(false);
    }
  };

  // Call API on component mount
  useEffect(() => {
    // fetchData();
  }, []);


  const addToCart = (productId: string) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === productId);
      if (existingItem) {
        return prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      const product = products.find((p) => p.id === productId);
      if (product) {
        return [...prev, { ...product, quantity: 1 }];
      }
      return prev;
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === productId);
      if (existingItem?.quantity === 1) {
        return prev.filter((item) => item.id !== productId);
      }
      return prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const getQuantity = (productId: string) => {
    return cartItems.find((item) => item.id === productId)?.quantity || 0;
  };

  // Get top-selling products (based on a hypothetical sales metric)
  const topSellingProducts = [...products]
    .sort((a, b) => (b.salesCount || 0) - (a.salesCount || 0))
    .slice(0, 3);

   // Loading state
   if (loading) {
        return <div>Loading...</div>;
    }

    // Error state
    if (error) {
    return <div>{error}</div>;
    }

  return (
    <div className="min-h-screen bg-yellow-400">
      <Navbar
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />
      <Hero />
      
      <div className="w-full p-8">
        <CarouselComponent />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section id="products" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Menu Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                quantity={getQuantity(product.id)}
                onAdd={() => addToCart(product.id)}
                onRemove={() => removeFromCart(product.id)}
              />
            ))}
          </div>
        </section>

        {/* Top Selling Products Section */}
        <section id="top-selling" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Produk Terlaris</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topSellingProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                quantity={getQuantity(product.id)}
                onAdd={() => addToCart(product.id)}
                onRemove={() => removeFromCart(product.id)}
              />
            ))}
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section id="reviews" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Apa Kata Pelanggan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review: ReviewType) => (
              <Review key={review.id} review={review} />
            ))}
          </div>
        </section>
      </main>

      <Maps />
      <Footer />

      <Cart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
};

export default Home;
