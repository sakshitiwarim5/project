import React from 'react';
import { Shield, ShieldOff } from 'lucide-react';

interface AdminButtonProps {
  isAdmin: boolean;
  onClick: () => void;
}

export const AdminButton: React.FC<AdminButtonProps> = ({ isAdmin, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center space-x-2 px-4 py-2 rounded-lg
        transition-all duration-200 ease-in-out
        ${isAdmin 
          ? 'bg-red-500 hover:bg-red-600' 
          : 'bg-white/10 hover:bg-white/20'
        }
      `}
    >
      {isAdmin ? (
        <>
          <ShieldOff className="w-5 h-5" />
          <span>Exit Admin</span>
        </>
      ) : (
        <>
          <Shield className="w-5 h-5" />
          <span>Admin Mode</span>
        </>
      )}
    </button>
  );
};