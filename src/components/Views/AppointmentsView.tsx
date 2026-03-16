import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { appointments } from '../../data/mock';
import { cn } from '../../lib/utils';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const AppointmentsView: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(16);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Appointments</h2>
          <p className="text-gray-400 mt-1">Manage your schedule and bookings</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-xl bg-dark-700/50 border border-white/10 hover:bg-dark-700 transition-colors">
            <Filter className="w-5 h-5 text-gray-400" />
          </button>
          <button className="premium-button">+ New Booking</button>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">March 2026</h3>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-6">
          {days.map((day) => (
            <div key={day} className="text-center text-sm font-medium text-gray-400 py-2">
              {day}
            </div>
          ))}
          {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={cn(
                'aspect-square rounded-xl flex items-center justify-center text-sm font-medium transition-all',
                selectedDate === date
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'text-gray-300 hover:bg-white/5'
              )}
            >
              {date}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Today's Schedule</h3>
        {appointments.map((apt: any, index: number) => (
          <motion.div
            key={apt.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="glass-card p-4 flex items-center justify-between hover:from-white/15 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 text-center">
                <p className="text-lg font-bold text-white">{apt.time}</p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <h4 className="font-medium text-white">{apt.clientName}</h4>
                <p className="text-sm text-gray-400">{apt.service} • {apt.stylist}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold text-white">${apt.amount}</span>
              <span className={cn(
                'px-3 py-1 rounded-full text-xs font-medium border capitalize',
                apt.status === 'confirmed' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
                apt.status === 'pending' ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' :
                'bg-primary-500/20 text-primary-400 border-primary-500/30'
              )}>
                {apt.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};