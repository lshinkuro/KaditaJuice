import { useState, useEffect } from 'react';
import { Product } from '../types';
import { get } from '../network/ApiConfig';


export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await get<{data:Product[]}>('/api/juices');
      setProducts(response.data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

//   const addProduct = async (product: Omit<Product, 'id'>) => {
//     try {
//       const newProduct = await productApi.create(product);
//       setProducts(prev => [...prev, newProduct]);
//       return newProduct;
//     } catch (err) {
//       throw err;
//     }
//   };

//   const updateProduct = async (id: number, product: Partial<Product>) => {
//     try {
//       const updatedProduct = await productApi.update(id, product);
//       setProducts(prev => 
//         prev.map(p => p.id === id ? updatedProduct : p)
//       );
//       return updatedProduct;
//     } catch (err) {
//       throw err;
//     }
//   };

//   const deleteProduct = async (id: number) => {
//     try {
//       await productApi.delete(id);
//       setProducts(prev => prev.filter(p => p.id !== id));
//     } catch (err) {
//       throw err;
//     }
//   };

  return {
    products,
    loading,
    error,
    // addProduct,
    // updateProduct,
    // deleteProduct,
    refreshProducts: fetchProducts,
  };
};