import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../../types/article';

interface RelatedArticlesProps {
  articles: Article[];
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {articles.map((article) => (
        <Link
          key={article.id}
          to={`/articles/${article.slug}`}
          className="block group"
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm">{article.excerpt}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};