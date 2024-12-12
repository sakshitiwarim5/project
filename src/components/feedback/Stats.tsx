import React from 'react';
import { Star, Users } from 'lucide-react';
import { FeedbackStats } from '../../types/feedback';
import { Card } from '../ui/Card';
import { StarRating } from '../ui/StarRating';

interface StatsProps {
  stats: FeedbackStats;
}

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="flex items-center space-x-4">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Star className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Average Rating</p>
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-gray-800">
              {stats.averageRating.toFixed(1)}
            </span>
            <StarRating rating={stats.averageRating} readonly size="small" />
          </div>
        </div>
      </Card>

      <Card className="flex items-center space-x-4">
        <div className="p-3 bg-indigo-100 rounded-lg">
          <Users className="w-8 h-8 text-indigo-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Total Reviews</p>
          <p className="text-3xl font-bold text-gray-800">{stats.totalReviews}</p>
        </div>
      </Card>
    </div>
  );
};