import React from 'react';
import { ReviewType } from '../types';

interface ReviewProps {
  review: ReviewType;
}

export const Review: React.FC<ReviewProps> = ({ review }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`text-xl ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          {renderStars(review.rating)}
        </div>
        <h3 className="text-lg font-semibold">{review.name}</h3>
      </div>
      <p className="text-gray-600 italic">"{review.comment}"</p>
    </div>
  );
};