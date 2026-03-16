import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, Scissors } from 'lucide-react';
import { appointments } from '../../data/mock';
import { cn } from '../../lib/utils';

const statusColors = {
  pending: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  confirmed: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  completed: 'bg-primary-500/20 text-primary-400 border-primary-500/30',
  cancelled: 'bg-red-500/20 text-red-400 border-red-500/30',
};

export const RecentAppointments: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-card col-span-2"
    >
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Recent Appointments</h3>
          <p className="text-sm text-gray-400 mt-1">Today's schedule overview</p>
        </div>
        <button className="text-primary-400 text-sm font-medium hover:text-primary-300 transition-colors">
          View All
        </button>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {appointments.slice(0, 4).map((apt, index) => (
            <motion.div
              key={apt.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center justify-between p-4 rounded-xl bg-dark-700/30 hover:bg-dark-700/50 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center text-primary-400 font-semibold">
                  {apt.time.split(' ')[0]}
                </div>
                <div>
                  {/* <h4 className="font-medium text-white group-hover:text-primary-400 transition-colors">
                    {apt.clientName}
                  </h4> */}
                  <div className="flex items-center gap-3 mt-1 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Scissors className="w-3.5 h-3.5" />
                      {apt.service}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {apt.stylist}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-white">${apt.amount}</span>
                <span className={cn(
                  'px-3 py-1 rounded-full text-xs font-medium border capitalize',
                  statusColors[apt.status]
                )}>
                  {apt.status}
                </span>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};