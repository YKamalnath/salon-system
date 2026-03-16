import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Landing/Hero';
import { Features } from './components/Landing/Features';
import { Stats } from './components/Landing/Stats';
import { CTA } from './components/Landing/CTA';
import { ServicesView } from './components/Services/ServicesView';
import { ReviewsView } from './components/Reviews/ReviewsView';

// Dashboard Components (from previous implementation)
import { LayoutDashboard, Calendar, Users, Scissors, TrendingUp, Settings, LogOut, Sparkles, Search, Bell } from 'lucide-react';
import { cn } from './lib/utils';

type Page = 'landing' | 'services' | 'reviews' | 'dashboard' | 'booking';

// Dashboard Sidebar Component
const DashboardSidebar: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'services', label: 'Services', icon: Scissors },
    { id: 'clients', label: 'Clients', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="hidden lg:block w-72 h-screen glass-panel fixed left-0 top-0 m-4 flex-col">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('landing')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white font-display">LuxeSalon</h1>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all text-left"
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button 
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all text-left"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Exit Dashboard</span>
        </button>
      </div>
    </aside>
  );
};

// Dashboard View
const DashboardView: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-dark-900 lg:ml-80">
      <div className="p-4 lg:p-8 pt-20 lg:pt-8">
        <div className="glass-panel p-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-400">Welcome back, Admin</p>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full sm:w-64 bg-dark-700/50 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white"
              />
            </div>
            <button className="p-2 rounded-xl bg-dark-700/50 border border-white/10 relative">
              <Bell className="w-5 h-5 text-gray-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Revenue', value: '$48,520', change: '+12.5%', color: 'text-emerald-400' },
            { label: 'Appointments', value: '324', change: '+8.2%', color: 'text-emerald-400' },
            { label: 'New Clients', value: '45', change: '+15.3%', color: 'text-emerald-400' },
            { label: 'Satisfaction', value: '98%', change: '+2.1%', color: 'text-emerald-400' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <span className={`text-xs font-medium ${stat.color}`}>{stat.change}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Appointments</h3>
            <div className="space-y-3">
              {[
                { name: 'Sarah Johnson', service: 'Hair Coloring', time: '10:00 AM', status: 'confirmed' },
                { name: 'Mike Davis', service: 'Premium Cut', time: '11:30 AM', status: 'pending' },
                { name: 'Lisa Chen', service: 'Manicure', time: '2:00 PM', status: 'confirmed' },
              ].map((apt, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-dark-700/30">
                  <div>
                    <p className="font-medium text-white text-sm">{apt.name}</p>
                    <p className="text-xs text-gray-400">{apt.service}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">{apt.time}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      apt.status === 'confirmed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {apt.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Top Services</h3>
            <div className="space-y-4">
              {[
                { name: 'Hair Coloring', bookings: 156, percentage: 85 },
                { name: 'Premium Cut', bookings: 134, percentage: 72 },
                { name: 'Keratin Treatment', bookings: 89, percentage: 48 },
              ].map((service, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white">{service.name}</span>
                    <span className="text-gray-400">{service.bookings} bookings</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${service.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigate = (page: Page) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      {currentPage !== 'dashboard' && <Navbar 
     onNavigate={handleNavigate as (page: string) => void} 
      currentPage={currentPage} />}
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark-900"
          >
            <div className="w-16 h-16 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
          </motion.div>
        ) : (
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentPage === 'landing' && (
              <>
                <Hero onNavigate={handleNavigate as (page: string) => void}  />
                <Features />
                <Stats />
                <CTA onNavigate={handleNavigate as (page: string) => void}  />
                <Footer />
              </>
            )}
            
            {currentPage === 'services' && (
              <>
                <ServicesView onNavigate={handleNavigate as (page: string) => void} />
                <Footer />
              </>
            )}
            
            {currentPage === 'reviews' && (
              <>
                <ReviewsView />
                <Footer />
              </>
            )}
            
            {currentPage === 'dashboard' && (
              <>
                <DashboardSidebar onNavigate={handleNavigate} />
                <DashboardView onNavigate={handleNavigate} />
              </>
            )}
            
            {currentPage === 'booking' && (
              <div className="min-h-screen pt-24 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="heading-lg mb-4">Booking System</h1>
                  <p className="text-gray-400 mb-8">Coming Soon - Full booking integration</p>
                  <button 
                    onClick={() => handleNavigate('landing')}
                    className="premium-button"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;