import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { BookingPage } from '../pages/BookingPage';
import { DashboardPage } from '../pages/DashboardPage';
import { LandingPage } from '../pages/LandingPage';
import { ReviewsPage } from '../pages/ReviewsPage';
import { ServicesPage } from '../pages/ServicesPage';
import { pageToPath, pathToPage } from './pageNavigation';

const RoutedLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = pathToPage(location.pathname);
  const showNavbar = currentPage !== 'dashboard';

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      {showNavbar && (
        <Navbar
          currentPage={currentPage}
          onNavigate={(page) => {
            navigate(pageToPath(page));
            window.scrollTo(0, 0);
          }}
        />
      )}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export const AppRoutes: React.FC = () => {
  return <RoutedLayout />;
};
