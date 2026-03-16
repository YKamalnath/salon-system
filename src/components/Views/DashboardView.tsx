import React from 'react';
import { DollarSign, Users, Calendar, TrendingUp } from 'lucide-react';
import { StatCard } from '../Dashboard/StatCard';
import { RecentAppointments } from '../Dashboard/RecentAppointments';
import { TopStylists } from '../Dashboard/TopStylists';
import { dashboardStats } from '../../data/mock';

export const DashboardView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Dashboard Overview</h2>
          <p className="text-gray-400 mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <button className="premium-button">
          + New Appointment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value={`$${dashboardStats.totalRevenue.toLocaleString()}`}
          change="+12.5%"
          icon={DollarSign}
          trend="up"
          delay={0}
        />
        <StatCard
          title="Appointments"
          value={dashboardStats.totalAppointments}
          change="+8.2%"
          icon={Calendar}
          trend="up"
          delay={0.1}
        />
        <StatCard
          title="Active Clients"
          value={dashboardStats.activeClients}
          change="+5.1%"
          icon={Users}
          trend="up"
          delay={0.2}
        />
        <StatCard
          title="Satisfaction"
          value={`${dashboardStats.satisfactionRate}%`}
          change="+2.3%"
          icon={TrendingUp}
          trend="up"
          delay={0.3}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentAppointments />
        <TopStylists />
      </div>
    </div>
  );
};