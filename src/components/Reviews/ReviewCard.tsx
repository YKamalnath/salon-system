import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { Review } from '../../types';

interface ReviewCardProps {
  review: Review;
  index: number;
  featured?: boolean;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, index, featured }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`glass-card-hover p-6 sm:p-8 relative ${featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}
    >
      <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-500/20" />
      
      <div className="flex items-start gap-4 mb-6">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-primary-500/30"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-white">{review.name}</h4>
            {review.verified && (
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            )}
          </div>
          <p className="text-sm text-gray-400">{review.service}</p>
          <p className="text-xs text-gray-500 mt-1">{review.date}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < review.rating ? 'text-gold-400 fill-gold-400' : 'text-gray-600'}`}
          />
        ))}
      </div>

      <p className={`text-gray-300 leading-relaxed ${featured ? 'text-lg' : 'text-sm'}`}>
        "{review.comment}"
      </p>
    </motion.div>
  );
};