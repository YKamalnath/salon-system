import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { ServicesView } from '../components/Services/ServicesView';
import { pageToPath } from '../routes/pageNavigation';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <ServicesView onNavigate={(page) => navigate(pageToPath(page))} />
      <Footer />
    </>
  );
};
