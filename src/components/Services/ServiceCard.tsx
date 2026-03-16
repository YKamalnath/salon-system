import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Check } from 'lucide-react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  index: number;
  onBook: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onBook }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass-card-hover overflow-hidden h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent" />
          
          {service.popular && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary-500 text-white text-xs font-semibold">
              Popular
            </div>
          )}
          
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium border border-white/20">
              {service.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
              {service.name}
            </h3>
            <div className="text-right">
              <p className="text-2xl font-bold text-gradient">${service.price}</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{service.description}</p>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Clock className="w-4 h-4" />
            <span>{service.duration} minutes</span>
          </div>

          <div className="space-y-2 mb-6 flex-1">
            {service.features.slice(0, 3).map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                <Check className="w-4 h-4 text-primary-400 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBook}
            className="w-full py-3 rounded-xl bg-white/5 hover:bg-primary-500/20 border border-white/10 hover:border-primary-500/30 text-white font-medium transition-all flex items-center justify-center gap-2 group/btn"
          >
            Book Now
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};