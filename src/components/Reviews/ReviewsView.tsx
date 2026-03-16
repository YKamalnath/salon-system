import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Filter, ThumbsUp, MessageCircle } from 'lucide-react';
import { reviews } from '../../data/mock';
import { ReviewCard } from './ReviewCard';

const filters = ['All', '5 Stars', '4 Stars', 'Hair', 'Nails', 'Skin'];

export const ReviewsView: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredReviews = reviews.filter((review) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === '5 Stars') return review.rating === 5;
    if (activeFilter === '4 Stars') return review.rating === 4;
    return review.service.toLowerCase().includes(activeFilter.toLowerCase());
  });

  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="section-padding">
        {/* Header Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-8 sm:p-12 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="text-5xl font-bold text-white">{averageRating.toFixed(1)}</span>
                <div className="flex flex-col">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(averageRating) ? 'text-gold-400 fill-gold-400' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">Based on {reviews.length} reviews</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-400">98%</p>
                <p className="text-sm text-gray-400">Would recommend</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-400">2.5K</p>
                <p className="text-sm text-gray-400">Total reviews</p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <button className="premium-button flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Write a Review
              </button>
            </div>
          </div>

          {/* Rating Bars */}
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-5 gap-4">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = reviews.filter((r) => r.rating === stars).length;
              const percentage = (count / reviews.length) * 100;
              return (
                <div key={stars} className="flex items-center gap-3">
                  <span className="text-sm text-gray-400 w-8">{stars}★</span>
                  <div className="flex-1 h-2 bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-gold-400 to-amber-500 rounded-full"
                    />
                  </div>
                  <span className="text-sm text-gray-500 w-8">{count}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review, index) => (
            <ReviewCard
              key={review.id}
              review={review}
              index={index}
              featured={index === 0}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="premium-button-outline">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};