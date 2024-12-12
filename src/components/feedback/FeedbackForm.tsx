import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { StarRating } from '../ui/StarRating';
import { Card } from '../ui/Card';
import { addFeedback } from '../../utils/storage';

interface FeedbackFormProps {
  onSubmit: () => void;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;

    addFeedback({ rating, comment, userName });
    setRating(0);
    setComment('');
    setUserName('');
    onSubmit();
  };

  return (
    <Card className="transform transition-all duration-300 hover:shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Share Your Experience</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <StarRating rating={rating} onRatingChange={setRating} size="large" />
        </div>

        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter your name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Your Feedback
          </label>
          <textarea
            id="comment"
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Tell us what you think..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
        >
          <Send className="w-5 h-5" />
          <span>Submit Feedback</span>
        </button>
      </form>
    </Card>
  );
};