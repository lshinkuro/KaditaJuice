import React from 'react';
import { useParams } from 'react-router-dom';
import { useArticle } from '../../hooks/useArticle';
import { ArticleContent } from './components/ArticleContent';
import { RelatedArticles } from './components/RelatedArticles';
import Loading from '../../components/Loading/Loading';

export const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { article, relatedArticles, loading, error } = useArticle(slug || '');

  if (loading) return <Loading />;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!article) return <div>Article not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ArticleContent article={article} />

      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">Artikel Lainnya</h2>
        <RelatedArticles articles={relatedArticles} />
      </div>
    </div>
  );
};