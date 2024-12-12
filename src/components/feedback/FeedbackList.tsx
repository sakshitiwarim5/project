import React from 'react';
import { Feedback } from '../../types/feedback';
import { StarRating } from '../ui/StarRating';
import { MessageSquare, ThumbsUp, Clock, Trash2 } from 'lucide-react';
import { Card } from '../ui/Card';

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

  if (feedback.length === 0) {
    return (
      <Card className="text-center py-12">
        <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-500">No feedback available yet</p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {feedback.map((item) => (
        <Card
          key={item.id}
          className={`transform transition-all duration-200 hover:shadow-lg ${
            !item.approved && isAdmin ? 'border-l-4 border-yellow-400' : ''
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{item.userName}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{formatDate(item.createdAt)}</span>
                </div>
              </div>
            </div>
            <StarRating rating={item.rating} readonly size="medium" />
          </div>

          <p className="mt-4 text-gray-600">{item.comment}</p>

          {isAdmin && (
            <div className="mt-4 flex justify-end space-x-2">
              {!item.approved && (
                <button
                  onClick={() => onApprove?.(item.id)}
                  className="flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors duration-200"
                >
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Approve
                </button>
              )}
              <button
                onClick={() => onDelete?.(item.id)}
                className="flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-200"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </button>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};