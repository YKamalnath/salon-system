import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Premium Products',
    description: 'We use only the finest professional-grade products from renowned brands worldwide.',
  },
  {
    icon: Shield,
    title: 'Certified Experts',
    description: 'Our team consists of internationally certified stylists with years of experience.',
  },
  {
    icon: Clock,
    title: 'Flexible Booking',
    description: 'Book appointments 24/7 online. Easy rescheduling and cancellation options.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Voted Best Salon 2024 by Beauty Magazine and recognized industry-wide.',
  },
];

export const Features: React.FC = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-md mb-4">Why Choose <span className="text-gradient">LuxeSalon</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Experience the difference of true luxury and professional excellence</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card-hover p-8 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};