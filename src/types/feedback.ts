export interface Feedback {
  id: string;
  rating: number;
  comment: string;
  userName: string;
  createdAt: string;
  approved: boolean;
}

export interface FeedbackStats {
  averageRating: number;
  totalReviews: number;
}