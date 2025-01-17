import React from 'react';
import { Feedback } from '../types/feedback';
import { StarRating } from './StarRating';
import { MessageSquare, ThumbsUp, Clock } from 'lucide-react';

interface FeedbackListProps {
  feedback: Feedback[];
  isAdmin?: boolean;
  onApprove?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export const FeedbackList: React.FC<FeedbackListProps> = ({
  feedback,
  isAdmin = false,
  onApprove,
  onDelete,
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="space-y-4">
      {feedback.map((item) => (
        <div
          key={item.id}
          className={`bg-white rounded-lg shadow-md p-4 ${
            !item.approved && isAdmin ? 'border-l-4 border-yellow-400' : ''
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">{item.userName}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{formatDate(item.createdAt)}</span>
                </div>
              </div>
            </div>
            <StarRating rating={item.rating} readonly />
          </div>

          <p className="mt-3 text-gray-600">{item.comment}</p>

          {isAdmin && (
            <div className="mt-4 flex justify-end space-x-2">
              {!item.approved && (
                <button
                  onClick={() => onApprove?.(item.id)}
                  className="flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200"
                >
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  Approve
                </button>
              )}
              <button
                onClick={() => onDelete?.(item.id)}
                className="px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};