import React from 'react';
import { MessageSquareMore } from 'lucide-react';
import { AdminButton } from '../ui/AdminButton';

interface HeaderProps {
  isAdmin: boolean;
  onAdminToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isAdmin, onAdminToggle }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-6 px-4 shadow-lg">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <MessageSquareMore className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Feedback Portal</h1>
              <p className="text-blue-100">Share your thoughts with us</p>
            </div>
          </div>
          <AdminButton isAdmin={isAdmin} onClick={onAdminToggle} />
        </div>
      </div>
    </div>
  );
};