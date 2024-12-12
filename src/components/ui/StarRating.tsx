import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  onRatingChange, 
  readonly = false,
  size = 'medium'
}) => {
  const stars = [1, 2, 3, 4, 5];
  
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  };

  return (
    <div className="flex gap-1">
      {stars.map((star) => (
        <button
          key={star}
          onClick={() => !readonly && onRatingChange?.(star)}
          disabled={readonly}
          className={`
            transition-transform duration-200
            ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'}
          `}
        >
          <Star 
            className={`
              ${sizeClasses[size]}
              transition-colors duration-200
              ${star <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300 hover:text-gray-400'}
            `}
          />
        </button>
      ))}
    </div>
  );
};