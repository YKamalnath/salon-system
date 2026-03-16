export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  category: string;
  image: string;
  features: string[];
  popular?: boolean;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  experience: string;
  specialties: string[];
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}