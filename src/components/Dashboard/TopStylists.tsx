import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp } from 'lucide-react';
import { stylists } from '../../data/mock';

export const TopStylists: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-card"
    >
      <div className="p-6 border-b border-white/10">
        <h3 className="text-lg font-semibold text-white">Top Stylists</h3>
        <p className="text-sm text-gray-400 mt-1">This month's performers</p>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {stylists.map((stylist, index) => (
            <motion.div
              key={stylist.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
            >
              <img
                src={stylist.image}
                alt={stylist.name}
                className="w-12 h-12 rounded-xl object-cover ring-2 ring-white/10"
              />
              <div className="flex-1">
                <h4 className="font-medium text-white text-sm">{stylist.name}</h4>
                <p className="text-xs text-gray-400">{stylist.role}</p>
              </div>
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">{stylist.rating}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="w-full mt-6 py-3 rounded-xl border border-white/10 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all">
          View All Stylists
        </button>
      </div>
    </motion.div>
  );
};