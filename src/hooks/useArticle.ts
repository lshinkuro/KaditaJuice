import { useState, useEffect } from 'react';
import { Article } from '../types/article';
import { get } from '../network/ApiConfig';


export const useArticle = (slug: string) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [articleData, relatedData] = await Promise.all([
           get<{data:Article}>(`/articles/${slug}`,{}, undefined, false),
           get<{data:Article[]}>(`/articles/${slug}/related`)
        ]);
        setArticle(articleData.data);
        setRelatedArticles(relatedData.data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch article');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  return { article, relatedArticles, loading, error };
};