import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { CTA } from '../components/Landing/CTA';
import { Features } from '../components/Landing/Features';
import { Hero } from '../components/Landing/Hero';
import { Stats } from '../components/Landing/Stats';
import { pageToPath } from '../routes/pageNavigation';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Hero onNavigate={(page) => navigate(pageToPath(page))} />
      <Features />
      <Stats />
      <CTA onNavigate={(page) => navigate(pageToPath(page))} />
      <Footer />
    </>
  );
};
