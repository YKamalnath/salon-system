import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="section-padding w-full relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20"
            >
              <Star className="w-4 h-4 text-primary-400 fill-primary-400" />
              <span className="text-sm font-medium text-primary-400">#1 Rated Salon in NYC</span>
            </motion.div>

            <h1 className="heading-xl">
              Where Beauty Meets{' '}
              <span className="text-gradient">Excellence</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed">
              Experience luxury hair and beauty services tailored to your unique style. 
              Our award-winning team brings your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate('booking')}
                className="premium-button flex items-center justify-center gap-2 group"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate('services')}
                className="premium-button-outline flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                View Services
              </motion.button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-white">15K+</p>
                <p className="text-sm text-gray-400">Happy Clients</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <p className="text-3xl font-bold text-white">4.9</p>
                <p className="text-sm text-gray-400">Google Rating</p>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="hidden sm:block">
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-sm text-gray-400">Expert Stylists</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=1000&fit=crop"
                alt="Luxury Salon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6 glass-panel p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map((i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt=""
                        className="w-10 h-10 rounded-full border-2 border-dark-800"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-white font-semibold">Booked 2,000+ times</p>
                    <p className="text-sm text-gray-400">This month</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl -z-10 blur-xl opacity-50" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-gold-400 to-amber-500 rounded-full -z-10 blur-xl opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};