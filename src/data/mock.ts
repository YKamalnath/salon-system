import { Service, Review, Stylist, Stat } from '../types';

export const stats: Stat[] = [
  { value: '15', label: 'Years Experience', suffix: '+' },
  { value: '50', label: 'Expert Stylists', suffix: 'K+' },
  { value: '100', label: 'Happy Clients', suffix: 'K+' },
  { value: '4.9', label: 'Average Rating', suffix: '' },
];

export const services: Service[] = [
  {
    id: '1',
    name: 'Premium Haircut & Styling',
    description: 'Experience the art of precision cutting with our master stylists. Includes consultation, wash, cut, and professional styling.',
    duration: 60,
    price: 85,
    category: 'Hair',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop',
    features: ['Personalized Consultation', 'Premium Products', 'Hot Towel Treatment', 'Style Coaching'],
    popular: true,
  },
  {
    id: '2',
    name: 'Balayage & Color Melt',
    description: 'Custom hand-painted highlights that create natural, sun-kissed dimension. Perfect for a low-maintenance, high-impact look.',
    duration: 180,
    price: 250,
    category: 'Color',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop',
    features: ['Custom Color Mixing', 'Bond Builder Treatment', 'Toner Application', 'Aftercare Kit'],
    popular: true,
  },
  {
    id: '3',
    name: 'Keratin Smoothing Treatment',
    description: 'Transform frizzy, unruly hair into silky smooth perfection. Lasts up to 5 months with proper care.',
    duration: 240,
    price: 350,
    category: 'Treatment',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&h=600&fit=crop',
    features: ['Formaldehyde-Free', 'Deep Conditioning', 'Heat Protection', 'Home Care Guide'],
  },
  {
    id: '4',
    name: 'Luxury Mani-Pedi Experience',
    description: 'Indulge in our signature nail treatment with organic products, massage, and perfect polish application.',
    duration: 90,
    price: 120,
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop',
    features: ['Organic Products', 'Extended Massage', 'Nail Art Options', 'Paraffin Treatment'],
  },
  {
    id: '5',
    name: 'Revitalizing Facial',
    description: 'Rejuvenate your skin with our customized facial treatments using premium skincare products.',
    duration: 75,
    price: 150,
    category: 'Skin',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop',
    features: ['Skin Analysis', 'Deep Cleansing', 'Anti-Aging Serum', 'LED Therapy'],
  },
  {
    id: '6',
    name: 'Relaxation Massage',
    description: 'Melt away stress with our therapeutic massage combining Swedish and deep tissue techniques.',
    duration: 60,
    price: 110,
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop',
    features: ['Aromatherapy', 'Hot Stones', 'Custom Pressure', 'Relaxation Room'],
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    rating: 5,
    date: '2 days ago',
    service: 'Balayage & Color Melt',
    comment: 'Absolutely transformed my hair! The color is exactly what I envisioned. Emma understood my style perfectly and the whole experience was so relaxing.',
    verified: true,
  },
  {
    id: '2',
    name: 'James Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    rating: 5,
    date: '1 week ago',
    service: 'Premium Haircut',
    comment: 'Best barber experience in the city. Attention to detail is unmatched. The hot towel treatment and scalp massage were incredible additions.',
    verified: true,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    rating: 5,
    date: '2 weeks ago',
    service: 'Luxury Mani-Pedi',
    comment: 'The nail art options are endless and the quality is exceptional. My manicure lasted 3 weeks without chipping! Definitely coming back.',
    verified: true,
  },
  {
    id: '4',
    name: 'Michael Park',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    rating: 5,
    date: '3 weeks ago',
    service: 'Keratin Treatment',
    comment: 'Finally found a place that does keratin right. My hair has never been smoother. Worth every penny for the time it saves me daily.',
    verified: true,
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
    rating: 5,
    date: '1 month ago',
    service: 'Revitalizing Facial',
    comment: 'The facial was heavenly. My skin glowed for days after. The esthetician was knowledgeable and gave great skincare advice.',
    verified: true,
  },
  {
    id: '6',
    name: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
    rating: 4,
    date: '1 month ago',
    service: 'Relaxation Massage',
    comment: 'Great pressure and technique. The aromatherapy selection was impressive. Only wish it was longer!',
    verified: true,
  },
];

export const stylists: Stylist[] = [
  {
    id: '1',
    name: 'Emma Wilson',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
    rating: 4.9,
    experience: '12 years',
    specialties: ['Color Specialist', 'Balayage', 'Extensions'],
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Master Barber',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    rating: 4.9,
    experience: '8 years',
    specialties: ['Precision Cuts', 'Beard Design', 'Fades'],
  },
  {
    id: '3',
    name: 'Sofia Rodriguez',
    role: 'Nail Artist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
    rating: 5.0,
    experience: '6 years',
    specialties: ['Nail Art', 'Gel Extensions', 'Spa Treatments'],
  },
  {
    id: '4',
    name: 'Alexander Park',
    role: 'Color Specialist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
    rating: 4.8,
    experience: '10 years',
    specialties: ['Fashion Colors', 'Color Correction', 'Highlights'],
  },
];

export const dashboardStats = {
  totalRevenue: 25430,
  totalAppointments: 186,
  activeClients: 124,
  satisfactionRate: 98,
};

export const appointments = [
  {
    id: "1",
    client: "Sarah Johnson",
    service: "Haircut",
    stylist: "Emma Wilson",
    time: "10:00 AM",
    status: "confirmed"
  },
  {
    id: "2",
    client: "Michael Chen",
    service: "Hair Coloring",
    stylist: "Alexander Park",
    time: "11:30 AM",
    status: "pending"
  },
  {
    id: "3",
    client: "Lisa Thompson",
    service: "Manicure",
    stylist: "Sofia Rodriguez",
    time: "01:00 PM",
    status: "confirmed"
  },
  {
    id: "4",
    client: "David Kim",
    service: "Beard Trim",
    stylist: "Marcus Chen",
    time: "02:30 PM",
    status: "completed"
  }
];

