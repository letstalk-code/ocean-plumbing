export const siteConfig = {
    businessName: 'Pivotal Plumbing LLC',
    tagline: 'Guarding your peace of mind with expert plumbing solutions.',
    phoneNumber: '(727) 686-1001',
    email: 'pivotalplumbingfl@gmail.com',
    logoUrl: '/images/pivotal_plumbing_logo.png',
    brandColors: {
        primary: '#00CCFF', // Vibrant Cyan from logo
        secondary: '#005696', // Deep Blue from logo
        accent: '#00A3E0',   // Mid-tone Blue
        dark: '#003366'      // Darkest Blue/Navy
    },
    heroTitle: 'Guarding your peace of mind',
    heroFormTitle: 'Request Emergency Service',
    aboutTitle: 'Your Go-To Plumbing Experts in Pasco County, Florida',
    aboutPoints: [
        { title: 'Expertise & Quality', desc: 'Equipped with the latest tools to ensure long-lasting results.' },
        { title: '24/7 Availability', desc: 'From dripping pipes to large-scale projects, we are here for you.' },
        { title: 'Family-Owned Values', desc: 'Treating every home like our own with professional care.' },
        { title: 'Top-Rated Service', desc: '5.0 Rating with over 85+ verified reviews.' }
    ],
    featuredServices: [
        { title: 'Emergency Repair', desc: 'Fast and reliable 24/7 emergency plumbing services for bursts and leaks.', img: '/images/emergency-repair-plumber.jpg', size: 'large' },
        { title: 'Water Heaters', desc: 'Expert repair and replacement for all heater models and brands.', img: '/images/bathroom-plumber.jpg', size: 'small' },
        { title: 'Leak Detection', desc: 'Precision leak repairs for pipes, faucets, and high-tech fixtures.', img: '/images/plumber-action.png', size: 'small' },
        { title: 'Drain Cleaning', desc: 'Advanced clog removal and preventive maintenance for smooth drains.', img: '/images/plumber-tools.png', size: 'medium' },
        { title: 'Water Filtration', desc: 'Custom filtration systems for clean, healthy water throughout your home.', img: 'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=400', size: 'small' }
    ],



    neighborhoods: ['New Port Richey', 'Pasco County', 'Trinity', 'Odessa', 'Holiday'],
    testimonials: [
        { name: 'HomeAdvisor User', role: 'Verified Client', text: 'Very professional, courteous, fair price. We very much enjoyed working with them. They really know their trade!', rating: 5, photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100' },
        { name: 'Angie\'s List Client', role: 'Homeowner', text: 'Pivotal Plumbing did a thorough job replacing a broken toilet flange. A job well done! I would highly recommend them.', rating: 5, photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100' },
        { name: 'Google Reviewer', role: 'Local Business Owner', text: 'Excellent Service! The BEST! Very professional service! On time. Respectful.', rating: 5, photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100' }
    ],
    team: [
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=300',
        'https://images.unsplash.com/photo-1621905252507-b352220730d8?q=80&w=300'
    ],
    services: [
        { id: 'emergency', label: 'Emergency', icon: 'zap' },
        { id: 'leaks', label: 'Leak Repair', icon: 'droplet' },
        { id: 'heaters', label: 'Water Heaters', icon: 'thermometer' },
        { id: 'drains', label: 'Drain Cleaning', icon: 'wrench' }
    ]
};

