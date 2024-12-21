import React from 'react';
import { Article } from '../../../types/article';

interface ArticleContentProps {
  article: Article;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  return (
    <article className="prose lg:prose-xl mx-auto">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <h1>{article.title}</h1>
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        <span className="mx-2">•</span>
        <span>{article.readTime} min read</span>
      </div>
      <div 
        className="prose-lg"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  );
};