import { Feedback } from '../types/feedback';

const STORAGE_KEY = 'feedback_data';

export const getFeedback = (): Feedback[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveFeedback = (feedback: Feedback[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
};

export const addFeedback = (feedback: Omit<Feedback, 'id' | 'createdAt' | 'approved'>) => {
  const currentFeedback = getFeedback();
  const newFeedback: Feedback = {
    ...feedback,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    approved: false,
  };
  
  const updatedFeedback = [...currentFeedback, newFeedback];
  saveFeedback(updatedFeedback);
  return newFeedback;
};

export const calculateStats = (feedback: Feedback[]) => {
  const approvedFeedback = feedback.filter(f => f.approved);
  const totalReviews = approvedFeedback.length;
  const averageRating = totalReviews 
    ? approvedFeedback.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews 
    : 0;

  return {
    averageRating,
    totalReviews,
  };
};