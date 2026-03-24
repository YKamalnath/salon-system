import React from 'react';
import { Footer } from '../components/Footer';
import { ReviewsView } from '../components/Reviews/ReviewsView';

export const ReviewsPage: React.FC = () => {
  return (
    <>
      <ReviewsView />
      <Footer />
    </>
  );
};
