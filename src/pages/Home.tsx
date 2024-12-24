import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero/Hero';
import { ProductCard } from '../components/ProductCard';
import { Cart } from '../components/Cart/Cart';
import { Review } from '../components/Review';
import { reviews } from '../data/reviews';
import { ReviewType } from '../types';

import { Maps } from '../components/Maps/Maps';
import { Footer } from '../components/Footer/Footer';
import CarouselComponent from '../components/Carousel';
import Loading from '../components/Loading/Loading';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../contexts/CartContext';

const Home: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { products, loading, error } = useProducts();
  const { cartItems, addToCart, removeFromCart } = useCart();

  if (loading) {
    return (
    <div>
      <Loading/>
    </div>)
  }

  if (error) {
    return <div>{error}</div>;
  }

  const getQuantity = (productId: number) => {
    return cartItems.find((item) => item.id === productId)?.quantity ?? 0;
  };

  const topSellingProducts = products.filter(product => product.isBestSeller).slice(0,4);


  return (
    <div className="min-h-screen">
      <Navbar
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />
      <div id="home">
        <Hero />
      </div>
      
      <div className="w-full p-8">
        <CarouselComponent />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      <section id="top-selling" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Produk Terlaris</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topSellingProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                quantity={getQuantity(product.id)}
                onAdd={() => addToCart({ ...product, quantity: 1 })}
                onRemove={() => removeFromCart(product.id)}
              />
            ))}
          </div>
        </section>

      <section id="products" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Menu Kami</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={getQuantity(product.id)}
              onAdd={() => addToCart({ ...product, quantity: 1 })}
              onRemove={() => removeFromCart(product.id)}
            />
          ))}
        </div>
      </section>

   

        <section id="testimonials" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Apa Kata Pelanggan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review: ReviewType) => (
              <Review key={review.id} review={review} />
            ))}
          </div>
        </section>
      </main>

      <div id="contact">
        <Maps />
      </div>
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


