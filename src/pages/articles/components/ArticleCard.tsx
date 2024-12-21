import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../../types/article';

interface ArticleCardProps {
  article: Article;
  isCompact?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, isCompact = false }) => {
  return (
    <Link
      to={`/articles/${article.slug}`}
      className="block group"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
        <img
          src={article.image}
          alt={article.title}
          className={`w-full object-cover ${isCompact ? 'h-40' : 'h-48'}`}
        />
        <div className={`p-${isCompact ? '4' : '6'}`}>
          <h2 className={`${isCompact ? 'text-lg' : 'text-xl'} font-semibold mb-2 group-hover:text-green-600`}>
            {article.title}
          </h2>
          {!isCompact && <p className="text-gray-600 mb-4">{article.excerpt}</p>}
          <div className="flex items-center text-sm text-gray-500">
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{article.readTime} min read</span>
          </div>
        </div>
      </div>
    </Link>
  );
};