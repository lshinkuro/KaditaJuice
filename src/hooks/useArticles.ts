import { useState, useEffect } from 'react';
import { Article } from '../types/article';
import { get } from '../network/ApiConfig';

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      setLoading(true);
      const response = await get<Article[]>('/articles',{}, undefined, false);
      console.log("resp", response)
      setArticles(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch articles');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return { articles, loading, error };
};