import React from 'react';
import { FeedbackStats } from '../types/feedback';
import { StarRating } from './StarRating';

interface StatsProps {
  stats: FeedbackStats;
}

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Feedback Overview</h2>
        <p className="text-gray-600">Based on {stats.totalReviews} reviews</p>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-gray-800 mb-2">
          {stats.averageRating.toFixed(1)}
        </div>
        <StarRating rating={stats.averageRating} readonly />
      </div>
    </div>
  );
};