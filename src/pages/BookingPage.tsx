import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BookingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center">
      <div className="text-center">
        <h1 className="heading-lg mb-4">Booking System</h1>
        <p className="text-gray-400 mb-8">Coming Soon - Full booking integration</p>
        <button onClick={() => navigate('/')} className="premium-button">
          Back to Home
        </button>
      </div>
    </div>
  );
};
