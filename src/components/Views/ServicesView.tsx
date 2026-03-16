import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Clock, DollarSign, MoreVertical } from 'lucide-react';
import { services } from '../../data/mock';

export const ServicesView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Services</h2>
          <p className="text-gray-400 mt-1">Manage your salon services and pricing</p>
        </div>
        <button className="premium-button flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="glass-card group hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-400 border border-primary-500/30">
                  {service.category}
                </span>
                <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
              
              <div className="flex items-center gap-4 text-sm text-gray-400 mt-4">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {service.duration} min
                </span>
                <span className="flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4" />
                  {service.price}
                </span>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/10 flex gap-2">
                <button className="flex-1 py-2 rounded-lg bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                  Edit
                </button>
                <button className="flex-1 py-2 rounded-lg bg-primary-500/20 text-sm font-medium text-primary-400 hover:bg-primary-500/30 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};