import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { FeedbackForm, FeedbackList, Stats } from './components/feedback';
import { getFeedback, saveFeedback, calculateStats } from './utils/storage';

function App() {
  const [feedback, setFeedback] = useState(getFeedback());
  const [isAdmin, setIsAdmin] = useState(false);

  const handleFeedbackSubmit = () => {
    setFeedback(getFeedback());
  };

  const handleApprove = (id: string) => {
    const updatedFeedback = feedback.map(item =>
      item.id === id ? { ...item, approved: true } : item
    );
    saveFeedback(updatedFeedback);
    setFeedback(updatedFeedback);
  };

  const handleDelete = (id: string) => {
    const updatedFeedback = feedback.filter(item => item.id !== id);
    saveFeedback(updatedFeedback);
    setFeedback(updatedFeedback);
  };

  const stats = calculateStats(feedback);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAdmin={isAdmin} onAdminToggle={() => setIsAdmin(!isAdmin)} />
      
      <main className="max-w-4xl mx-auto py-8 px-4 space-y-8">
        <Stats stats={stats} />
        
        <section>
          <FeedbackForm onSubmit={handleFeedbackSubmit} />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {isAdmin ? 'Manage Feedback' : 'Recent Feedback'}
          </h2>
          <FeedbackList
            feedback={isAdmin ? feedback : feedback.filter(f => f.approved)}
            isAdmin={isAdmin}
            onApprove={handleApprove}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </div>
  );
}

export default App;