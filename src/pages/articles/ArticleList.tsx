import React, { useState } from 'react';
import { useArticles } from '../../hooks/useArticles';
import { useCart } from '../../contexts/CartContext';

import { ArticleCard } from './components/ArticleCard';
import Navbar from '../../components/Navbar';
import Loading from '../../components/Loading/Loading';
import ErrorPage from '../../components/Error/ErrorPage';
import { Cart } from '../../components/Cart/Cart';

export const ArticleList: React.FC = () => {
  const { articles, loading, error } = useArticles();
  const { cartItems, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  if (loading) return <Loading />;
  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    
    <>
    <Navbar
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />
    
    <main className="pt-16"> {/* Add padding-top to account for fixed navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Artikel Seputar Jus</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </main>

    <Cart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={removeFromCart}
     />
  </>
  );
};