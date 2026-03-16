import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

interface CTAProps {
  onNavigate: (page: string) => void;
}

export const CTA: React.FC<CTAProps> = ({ onNavigate }) => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-purple-500/10" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="heading-lg">Ready for Your <span className="text-gradient">Transformation?</span></h2>
            <p className="text-lg text-gray-400">
              Book your appointment today and experience the luxury you deserve. 
              First-time clients receive 20% off any service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate('booking')}
                className="premium-button flex items-center justify-center gap-2"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+15551234567"
                className="premium-button-outline flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};