import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import ImageEnlargeModal from './ImageEnlargeModal';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  gallery?: string[];
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState<{
    images: string[];
    currentIndex: number;
    category: string;
  } | null>(null);

  const projects: Project[] = [
    // Web Development Projects (10 items)
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web-development',
      image: '/images/portfolio/web-ecommerce-platform.jpg',
      description: 'A full-featured e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and advanced analytics dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Socket.io'],
      features: ['Real-time inventory', 'Payment processing', 'Admin dashboard', 'Order tracking', 'Customer reviews'],
      liveUrl: 'https://demo-ecommerce.example.com',
      githubUrl: 'https://github.com/knightappsdev/ecommerce-platform'
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      category: 'web-development',
      image: '/images/portfolio/web-saas-dashboard.jpg',
      description: 'A comprehensive SaaS dashboard with advanced data visualization, user management, and subscription handling built with Next.js and TypeScript.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Chart.js'],
      features: ['Data visualization', 'User management', 'Subscription billing', 'API integration', 'Real-time updates'],
      liveUrl: 'https://demo-saas.example.com',
      githubUrl: 'https://github.com/knightappsdev/saas-dashboard'
    },
    {
      id: 3,
      title: 'Learning Management System',
      category: 'web-development',
      image: '/images/portfolio/web-learning-management.jpg',
      description: 'An interactive learning platform with video streaming, progress tracking, and collaborative features for educational institutions.',
      technologies: ['React', 'Express.js', 'MySQL', 'AWS S3', 'WebRTC'],
      features: ['Video streaming', 'Progress tracking', 'Interactive quizzes', 'Discussion forums', 'Certificate generation'],
      liveUrl: 'https://demo-lms.example.com',
      githubUrl: 'https://github.com/knightappsdev/learning-management'
    },
    {
      id: 4,
      title: 'Real Estate Portal',
      category: 'web-development',
      image: '/images/portfolio/web-real-estate-portal.jpg',
      description: 'A modern real estate platform with advanced search filters, virtual tours, and integrated CRM for property management.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps API', 'Cloudinary'],
      features: ['Advanced search', 'Virtual tours', 'CRM integration', 'Property comparison', 'Mortgage calculator'],
      liveUrl: 'https://demo-realestate.example.com',
      githubUrl: 'https://github.com/knightappsdev/real-estate-portal'
    },
    {
      id: 5,
      title: 'Healthcare Management System',
      category: 'web-development',
      image: '/images/portfolio/web-healthcare-system.jpg',
      description: 'Comprehensive healthcare management platform with patient records, appointment scheduling, and telemedicine features.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'HIPAA Compliance'],
      features: ['Patient management', 'Appointment scheduling', 'Telemedicine', 'Medical records', 'Billing system'],
      liveUrl: 'https://demo-healthcare.example.com',
      githubUrl: 'https://github.com/knightappsdev/healthcare-system'
    },
    {
      id: 6,
      title: 'Financial Trading Platform',
      category: 'web-development',
      image: '/images/portfolio/web-trading-platform.jpg',
      description: 'Advanced trading platform with real-time market data, portfolio management, and risk analysis tools.',
      technologies: ['React', 'Node.js', 'WebSocket', 'Redis', 'Chart.js'],
      features: ['Real-time trading', 'Portfolio tracking', 'Risk analysis', 'Market data', 'Trading algorithms'],
      liveUrl: 'https://demo-trading.example.com',
      githubUrl: 'https://github.com/knightappsdev/trading-platform'
    },
    {
      id: 7,
      title: 'Event Management System',
      category: 'web-development',
      image: '/images/portfolio/web-event-management.jpg',
      description: 'Complete event management solution with ticketing, attendee management, and live streaming capabilities.',
      technologies: ['Next.js', 'Express.js', 'MongoDB', 'Stripe', 'WebRTC'],
      features: ['Event creation', 'Ticket sales', 'Attendee management', 'Live streaming', 'Analytics'],
      liveUrl: 'https://demo-events.example.com',
      githubUrl: 'https://github.com/knightappsdev/event-management'
    },
    {
      id: 8,
      title: 'Project Management Tool',
      category: 'web-development',
      image: '/images/portfolio/web-project-management.jpg',
      description: 'Collaborative project management platform with task tracking, team communication, and resource allocation.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'AWS'],
      features: ['Task management', 'Team collaboration', 'Resource planning', 'Time tracking', 'Reporting'],
      liveUrl: 'https://demo-projects.example.com',
      githubUrl: 'https://github.com/knightappsdev/project-management'
    },
    {
      id: 9,
      title: 'Content Management System',
      category: 'web-development',
      image: '/images/portfolio/web-cms.jpg',
      description: 'Flexible CMS with drag-and-drop page builder, multi-language support, and advanced SEO features.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Elasticsearch'],
      features: ['Page builder', 'Multi-language', 'SEO optimization', 'Media management', 'User roles'],
      liveUrl: 'https://demo-cms.example.com',
      githubUrl: 'https://github.com/knightappsdev/cms-platform'
    },
    {
      id: 10,
      title: 'Social Network Platform',
      category: 'web-development',
      image: '/images/portfolio/web-social-network.jpg',
      description: 'Full-featured social networking platform with messaging, groups, events, and content sharing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redis'],
      features: ['Social feeds', 'Messaging', 'Groups', 'Events', 'Content sharing'],
      liveUrl: 'https://demo-social.example.com',
      githubUrl: 'https://github.com/knightappsdev/social-network'
    },

    // Mobile App Development Projects (3 items)
    {
      id: 11,
      title: 'Fitness Tracking App',
      category: 'mobile-development',
      image: '/images/portfolio/mob-fitness-app.jpg',
      description: 'A comprehensive fitness app with workout tracking, nutrition planning, and social features built with React Native.',
      technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit', 'Google Fit'],
      features: ['Workout tracking', 'Nutrition planning', 'Social features', 'Progress analytics', 'Wearable integration'],
      githubUrl: 'https://github.com/knightappsdev/fitness-tracker'
    },
    {
      id: 12,
      title: 'Food Delivery App',
      category: 'mobile-development',
      image: '/images/portfolio/mob-food-delivery-app.jpg',
      description: 'A full-stack food delivery application with real-time tracking, payment integration, and restaurant management system.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe'],
      features: ['Real-time tracking', 'Payment integration', 'Restaurant dashboard', 'Order management', 'Push notifications'],
      githubUrl: 'https://github.com/knightappsdev/food-delivery'
    },
    {
      id: 13,
      title: 'Banking Mobile App',
      category: 'mobile-development',
      image: '/images/portfolio/mob-banking-app.jpg',
      description: 'A secure banking application with biometric authentication, transaction history, and financial planning tools.',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT', 'Biometric Auth'],
      features: ['Biometric login', 'Transaction history', 'Bill payments', 'Financial planning', 'Security alerts'],
      githubUrl: 'https://github.com/knightappsdev/banking-app'
    },

    // Digital Marketing Projects (6 items)
    {
      id: 14,
      title: 'E-commerce SEO Campaign',
      category: 'digital-marketing',
      image: '/images/portfolio/dig-seo-campaign.jpg',
      description: 'Comprehensive SEO strategy that increased organic traffic by 300% and improved conversion rates for a major e-commerce client.',
      technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Search Console', 'Schema Markup'],
      features: ['Keyword research', 'Technical SEO', 'Content optimization', 'Link building', 'Performance tracking']
    },
    {
      id: 15,
      title: 'Social Media Marketing',
      category: 'digital-marketing',
      image: '/images/portfolio/dig-social-media-marketing.jpg',
      description: 'Multi-platform social media campaign that generated 500K+ engagements and increased brand awareness by 250%.',
      technologies: ['Facebook Ads Manager', 'Instagram API', 'Hootsuite', 'Canva', 'Google Analytics'],
      features: ['Content strategy', 'Paid advertising', 'Community management', 'Influencer partnerships', 'Analytics reporting']
    },
    {
      id: 16,
      title: 'PPC Campaign Management',
      category: 'digital-marketing',
      image: '/images/portfolio/dig-ppc-campaign.jpg',
      description: 'Google Ads and Facebook Ads campaigns that achieved 400% ROAS and reduced cost-per-acquisition by 60%.',
      technologies: ['Google Ads', 'Facebook Ads', 'Google Tag Manager', 'Conversion Tracking', 'A/B Testing'],
      features: ['Campaign optimization', 'Audience targeting', 'Conversion tracking', 'Budget management', 'Performance analysis']
    },
    {
      id: 17,
      title: 'Content Marketing Strategy',
      category: 'digital-marketing',
      image: '/images/portfolio/dig-content-marketing.jpg',
      description: 'Content marketing strategy that increased website traffic by 400% and generated 200+ qualified leads monthly.',
      technologies: ['WordPress', 'Mailchimp', 'BuzzSumo', 'Canva', 'Google Analytics'],
      features: ['Content planning', 'Blog management', 'Email marketing', 'Lead generation', 'Performance tracking']
    },
    {
      id: 18,
      title: 'Influencer Marketing Platform',
      category: 'digital-marketing',
      image: '/images/portfolio/dig-influencer-platform.jpg',
      description: 'Platform connecting brands with influencers, featuring campaign management, analytics, and automated payments.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Social Media APIs'],
      features: ['Influencer matching', 'Campaign management', 'Performance analytics', 'Automated payments', 'Content approval']
    },
    {
      id: 19,
      title: 'Email Marketing Automation',
      category: 'digital-marketing',
      image: '/images/portfolio/dig-email-marketing.jpg',
      description: 'Advanced email marketing automation system with personalization, A/B testing, and detailed analytics.',
      technologies: ['Mailchimp API', 'SendGrid', 'Zapier', 'Google Analytics', 'Customer.io'],
      features: ['Email automation', 'Personalization', 'A/B testing', 'Segmentation', 'Analytics dashboard']
    },

    // Branding Projects (20 items)
    {
      id: 20,
      title: 'Tech Startup Branding',
      category: 'branding',
      image: '/images/portfolio/brd-tech-startup-branding.jpg',
      description: 'Complete brand identity design for a fintech startup, including logo, color palette, typography, and brand guidelines.',
      technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Adobe InDesign', 'Sketch'],
      features: ['Logo design', 'Brand guidelines', 'Color palette', 'Typography system', 'Marketing materials'],
      gallery: [
        '/images/portfolio/brd-tech-startup-branding.jpg',
        '/images/portfolio/brd-tech-startup-logo.jpg',
        '/images/portfolio/brd-tech-startup-colors.jpg',
        '/images/portfolio/brd-tech-startup-typography.jpg'
      ]
    },
    {
      id: 21,
      title: 'Restaurant Brand Identity',
      category: 'branding',
      image: '/images/portfolio/brd-restaurant-branding.jpg',
      description: 'Brand redesign for a restaurant chain that increased customer recognition by 80% and improved sales by 45%.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Canva', 'Print Design', 'Packaging Design'],
      features: ['Brand strategy', 'Visual identity', 'Menu design', 'Packaging design', 'Marketing collateral'],
      gallery: [
        '/images/portfolio/brd-restaurant-branding.jpg',
        '/images/portfolio/brd-restaurant-menu.jpg',
        '/images/portfolio/brd-restaurant-packaging.jpg',
        '/images/portfolio/brd-restaurant-signage.jpg'
      ]
    },
    {
      id: 22,
      title: 'Fashion Brand Campaign',
      category: 'branding',
      image: '/images/portfolio/brd-fashion-brand-campaign.jpg',
      description: 'Comprehensive branding campaign for a fashion retailer including brand positioning, visual identity, and marketing strategy.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Photography', 'Video Production', 'Social Media'],
      features: ['Brand positioning', 'Visual campaign', 'Photography direction', 'Social media assets', 'Brand guidelines'],
      gallery: [
        '/images/portfolio/brd-fashion-brand-campaign.jpg',
        '/images/portfolio/brd-fashion-lookbook.jpg',
        '/images/portfolio/brd-fashion-social.jpg',
        '/images/portfolio/brd-fashion-packaging.jpg'
      ]
    },
    {
      id: 23,
      title: 'Corporate Rebranding',
      category: 'branding',
      image: '/images/portfolio/brd-corporate-rebranding.jpg',
      description: 'Complete corporate rebranding project that modernized company image and improved market positioning.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Brand Strategy', 'Market Research', 'Design Systems'],
      features: ['Brand audit', 'Logo redesign', 'Brand guidelines', 'Website redesign', 'Marketing materials'],
      gallery: [
        '/images/portfolio/brd-corporate-rebranding.jpg',
        '/images/portfolio/brd-corporate-logo.jpg',
        '/images/portfolio/brd-corporate-stationery.jpg',
        '/images/portfolio/brd-corporate-website.jpg'
      ]
    },
    {
      id: 24,
      title: 'Luxury Hotel Brand Identity',
      category: 'branding',
      image: '/images/portfolio/brd-luxury-hotel-branding.jpg',
      description: 'Premium brand identity for a luxury hotel chain, including visual identity, marketing materials, and digital presence.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Photography', 'Print Design', 'Digital Marketing'],
      features: ['Luxury branding', 'Visual identity', 'Marketing collateral', 'Digital presence', 'Brand guidelines'],
      gallery: [
        '/images/portfolio/brd-luxury-hotel-branding.jpg',
        '/images/portfolio/brd-luxury-hotel-logo.jpg',
        '/images/portfolio/brd-luxury-hotel-amenities.jpg',
        '/images/portfolio/brd-luxury-hotel-marketing.jpg'
      ]
    },
    {
      id: 25,
      title: 'Healthcare Brand Design',
      category: 'branding',
      image: '/images/portfolio/brd-healthcare-branding.jpg',
      description: 'Trustworthy and professional brand identity for a healthcare provider, focusing on patient care and medical excellence.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Medical Illustration', 'Print Design', 'Digital Assets'],
      features: ['Medical branding', 'Patient materials', 'Professional identity', 'Digital assets', 'Compliance guidelines'],
      gallery: [
        '/images/portfolio/brd-healthcare-branding.jpg',
        '/images/portfolio/brd-healthcare-logo.jpg',
        '/images/portfolio/brd-healthcare-materials.jpg',
        '/images/portfolio/brd-healthcare-signage.jpg'
      ]
    },
    {
      id: 26,
      title: 'E-commerce Brand Strategy',
      category: 'branding',
      image: '/images/portfolio/brd-ecommerce-branding.jpg',
      description: 'Complete brand strategy for an online retailer, including visual identity, packaging, and digital marketing assets.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Packaging Design', 'E-commerce Design', 'Social Media'],
      features: ['Brand strategy', 'E-commerce design', 'Packaging', 'Digital marketing', 'Customer experience'],
      gallery: [
        '/images/portfolio/brd-ecommerce-branding.jpg',
        '/images/portfolio/brd-ecommerce-packaging.jpg',
        '/images/portfolio/brd-ecommerce-website.jpg',
        '/images/portfolio/brd-ecommerce-social.jpg'
      ]
    },
    {
      id: 27,
      title: 'Fitness Brand Identity',
      category: 'branding',
      image: '/images/portfolio/brd-fitness-branding.jpg',
      description: 'Energetic and motivational brand identity for a fitness center chain, inspiring healthy lifestyle choices.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Sports Photography', 'Print Design', 'Digital Marketing'],
      features: ['Fitness branding', 'Motivational design', 'Gym materials', 'Digital presence', 'Merchandise design'],
      gallery: [
        '/images/portfolio/brd-fitness-branding.jpg',
        '/images/portfolio/brd-fitness-logo.jpg',
        '/images/portfolio/brd-fitness-gym.jpg',
        '/images/portfolio/brd-fitness-merchandise.jpg'
      ]
    },
    {
      id: 28,
      title: 'Real Estate Brand Design',
      category: 'branding',
      image: '/images/portfolio/brd-realestate-branding.jpg',
      description: 'Professional and trustworthy brand identity for a real estate agency, emphasizing expertise and reliability.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Photography', 'Print Design', 'Digital Marketing'],
      features: ['Professional branding', 'Property marketing', 'Agent materials', 'Digital presence', 'Trust building'],
      gallery: [
        '/images/portfolio/brd-realestate-branding.jpg',
        '/images/portfolio/brd-realestate-logo.jpg',
        '/images/portfolio/brd-realestate-materials.jpg',
        '/images/portfolio/brd-realestate-signage.jpg'
      ]
    },
    {
      id: 29,
      title: 'Beauty Brand Campaign',
      category: 'branding',
      image: '/images/portfolio/brd-beauty-branding.jpg',
      description: 'Elegant and sophisticated brand identity for a beauty products company, emphasizing natural beauty and self-care.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Beauty Photography', 'Packaging Design', 'Social Media'],
      features: ['Beauty branding', 'Product packaging', 'Photography direction', 'Social campaigns', 'Influencer kits'],
      gallery: [
        '/images/portfolio/brd-beauty-branding.jpg',
        '/images/portfolio/brd-beauty-products.jpg',
        '/images/portfolio/brd-beauty-packaging.jpg',
        '/images/portfolio/brd-beauty-campaign.jpg'
      ]
    },
    {
      id: 30,
      title: 'Education Brand Identity',
      category: 'branding',
      image: '/images/portfolio/brd-education-branding.jpg',
      description: 'Inspiring and academic brand identity for an educational institution, promoting learning and growth.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Educational Design', 'Print Materials', 'Digital Assets'],
      features: ['Educational branding', 'Academic materials', 'Student resources', 'Digital presence', 'Campus signage'],
      gallery: [
        '/images/portfolio/brd-education-branding.jpg',
        '/images/portfolio/brd-education-logo.jpg',
        '/images/portfolio/brd-education-materials.jpg',
        '/images/portfolio/brd-education-campus.jpg'
      ]
    },
    {
      id: 31,
      title: 'Food & Beverage Branding',
      category: 'branding',
      image: '/images/portfolio/brd-food-branding.jpg',
      description: 'Appetizing and memorable brand identity for a food and beverage company, emphasizing quality and taste.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Food Photography', 'Packaging Design', 'Menu Design'],
      features: ['Food branding', 'Packaging design', 'Menu creation', 'Photography direction', 'Restaurant materials'],
      gallery: [
        '/images/portfolio/brd-food-branding.jpg',
        '/images/portfolio/brd-food-packaging.jpg',
        '/images/portfolio/brd-food-menu.jpg',
        '/images/portfolio/brd-food-photography.jpg'
      ]
    },
    {
      id: 32,
      title: 'Automotive Brand Design',
      category: 'branding',
      image: '/images/portfolio/brd-automotive-branding.jpg',
      description: 'Bold and dynamic brand identity for an automotive company, emphasizing performance and innovation.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Automotive Photography', 'Print Design', 'Digital Marketing'],
      features: ['Automotive branding', 'Vehicle graphics', 'Dealership materials', 'Digital presence', 'Performance focus'],
      gallery: [
        '/images/portfolio/brd-automotive-branding.jpg',
        '/images/portfolio/brd-automotive-logo.jpg',
        '/images/portfolio/brd-automotive-graphics.jpg',
        '/images/portfolio/brd-automotive-showroom.jpg'
      ]
    },
    {
      id: 33,
      title: 'Non-Profit Brand Identity',
      category: 'branding',
      image: '/images/portfolio/brd-nonprofit-branding.jpg',
      description: 'Compassionate and impactful brand identity for a non-profit organization, inspiring community support and action.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Social Impact Design', 'Print Materials', 'Digital Campaigns'],
      features: ['Non-profit branding', 'Impact storytelling', 'Fundraising materials', 'Community outreach', 'Volunteer resources'],
      gallery: [
        '/images/portfolio/brd-nonprofit-branding.jpg',
        '/images/portfolio/brd-nonprofit-logo.jpg',
        '/images/portfolio/brd-nonprofit-materials.jpg',
        '/images/portfolio/brd-nonprofit-campaign.jpg'
      ]
    },
    {
      id: 34,
      title: 'Legal Services Branding',
      category: 'branding',
      image: '/images/portfolio/brd-legal-branding.jpg',
      description: 'Professional and authoritative brand identity for a law firm, emphasizing expertise and client trust.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Professional Design', 'Print Materials', 'Digital Presence'],
      features: ['Legal branding', 'Professional materials', 'Client resources', 'Digital presence', 'Trust building'],
      gallery: [
        '/images/portfolio/brd-legal-branding.jpg',
        '/images/portfolio/brd-legal-logo.jpg',
        '/images/portfolio/brd-legal-materials.jpg',
        '/images/portfolio/brd-legal-office.jpg'
      ]
    },
    {
      id: 35,
      title: 'Travel & Tourism Branding',
      category: 'branding',
      image: '/images/portfolio/brd-travel-branding.jpg',
      description: 'Adventurous and inspiring brand identity for a travel company, encouraging exploration and discovery.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Travel Photography', 'Print Design', 'Digital Marketing'],
      features: ['Travel branding', 'Destination marketing', 'Travel materials', 'Digital campaigns', 'Experience design'],
      gallery: [
        '/images/portfolio/brd-travel-branding.jpg',
        '/images/portfolio/brd-travel-destinations.jpg',
        '/images/portfolio/brd-travel-materials.jpg',
        '/images/portfolio/brd-travel-campaigns.jpg'
      ]
    },
    {
      id: 36,
      title: 'Music & Entertainment Brand',
      category: 'branding',
      image: '/images/portfolio/brd-music-branding.jpg',
      description: 'Creative and vibrant brand identity for a music and entertainment company, capturing the energy of live performances.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Music Design', 'Event Materials', 'Digital Assets'],
      features: ['Music branding', 'Event design', 'Artist materials', 'Digital presence', 'Merchandise design'],
      gallery: [
        '/images/portfolio/brd-music-branding.jpg',
        '/images/portfolio/brd-music-logo.jpg',
        '/images/portfolio/brd-music-events.jpg',
        '/images/portfolio/brd-music-merchandise.jpg'
      ]
    },
    {
      id: 37,
      title: 'Pet Care Brand Identity',
      category: 'branding',
      image: '/images/portfolio/brd-petcare-branding.jpg',
      description: 'Friendly and caring brand identity for a pet care service, emphasizing love and professional care for pets.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Pet Photography', 'Print Design', 'Digital Marketing'],
      features: ['Pet care branding', 'Service materials', 'Pet photography', 'Digital presence', 'Care guidelines'],
      gallery: [
        '/images/portfolio/brd-petcare-branding.jpg',
        '/images/portfolio/brd-petcare-logo.jpg',
        '/images/portfolio/brd-petcare-services.jpg',
        '/images/portfolio/brd-petcare-materials.jpg'
      ]
    },
    {
      id: 38,
      title: 'Consulting Firm Branding',
      category: 'branding',
      image: '/images/portfolio/brd-consulting-branding.jpg',
      description: 'Strategic and professional brand identity for a business consulting firm, emphasizing expertise and results.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Business Design', 'Print Materials', 'Digital Presence'],
      features: ['Consulting branding', 'Professional materials', 'Client presentations', 'Digital presence', 'Thought leadership'],
      gallery: [
        '/images/portfolio/brd-consulting-branding.jpg',
        '/images/portfolio/brd-consulting-logo.jpg',
        '/images/portfolio/brd-consulting-materials.jpg',
        '/images/portfolio/brd-consulting-presentations.jpg'
      ]
    },
    {
      id: 39,
      title: 'Artisan Craft Branding',
      category: 'branding',
      image: '/images/portfolio/brd-artisan-branding.jpg',
      description: 'Handcrafted and authentic brand identity for an artisan craft business, celebrating traditional craftsmanship.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Craft Photography', 'Packaging Design', 'Artisan Materials'],
      features: ['Artisan branding', 'Craft packaging', 'Authentic design', 'Market materials', 'Heritage storytelling'],
      gallery: [
        '/images/portfolio/brd-artisan-branding.jpg',
        '/images/portfolio/brd-artisan-products.jpg',
        '/images/portfolio/brd-artisan-packaging.jpg',
        '/images/portfolio/brd-artisan-workshop.jpg'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: 'bi-grid' },
    { id: 'web-development', name: 'Web Development', icon: 'bi-code-slash' },
    { id: 'mobile-development', name: 'Mobile Apps', icon: 'bi-phone' },
    { id: 'digital-marketing', name: 'Digital Marketing', icon: 'bi-graph-up-arrow' },
    { id: 'branding', name: 'Branding', icon: 'bi-palette' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Show only first 8 projects initially, or all if showAll is true
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 8);
  const hasMoreProjects = filteredProjects.length > 8;

  // Add "View IG" card for branding category
  const shouldShowViewIGCard = activeFilter === 'branding' || activeFilter === 'all';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const fallbackUrls: { [key: string]: string } = {
      '/images/portfolio/web-ecommerce-platform.jpg': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      '/images/portfolio/web-saas-dashboard.jpg': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      '/images/portfolio/web-learning-management.jpg': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      '/images/portfolio/web-real-estate-portal.jpg': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      '/images/portfolio/web-healthcare-system.jpg': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      '/images/portfolio/web-trading-platform.jpg': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
      '/images/portfolio/web-event-management.jpg': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
      '/images/portfolio/web-project-management.jpg': 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      '/images/portfolio/web-cms.jpg': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      '/images/portfolio/web-social-network.jpg': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      '/images/portfolio/mob-fitness-app.jpg': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      '/images/portfolio/mob-food-delivery-app.jpg': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
      '/images/portfolio/mob-banking-app.jpg': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      '/images/portfolio/dig-seo-campaign.jpg': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      '/images/portfolio/dig-social-media-marketing.jpg': 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      '/images/portfolio/dig-ppc-campaign.jpg': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      '/images/portfolio/dig-content-marketing.jpg': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      '/images/portfolio/dig-influencer-platform.jpg': 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      '/images/portfolio/dig-email-marketing.jpg': 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop',
      '/images/portfolio/brd-tech-startup-branding.jpg': 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
      '/images/portfolio/brd-restaurant-branding.jpg': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      '/images/portfolio/brd-fashion-brand-campaign.jpg': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      '/images/portfolio/brd-corporate-rebranding.jpg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      '/images/portfolio/brd-luxury-hotel-branding.jpg': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      '/images/portfolio/brd-healthcare-branding.jpg': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      '/images/portfolio/brd-ecommerce-branding.jpg': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      '/images/portfolio/brd-fitness-branding.jpg': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      '/images/portfolio/brd-realestate-branding.jpg': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      '/images/portfolio/brd-beauty-branding.jpg': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop',
      '/images/portfolio/brd-education-branding.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
      '/images/portfolio/brd-food-branding.jpg': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      '/images/portfolio/brd-automotive-branding.jpg': 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
      '/images/portfolio/brd-nonprofit-branding.jpg': 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
      '/images/portfolio/brd-legal-branding.jpg': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
      '/images/portfolio/brd-travel-branding.jpg': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
      '/images/portfolio/brd-music-branding.jpg': 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      '/images/portfolio/brd-petcare-branding.jpg': 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop',
      '/images/portfolio/brd-consulting-branding.jpg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      '/images/portfolio/brd-artisan-branding.jpg': 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&h=400&fit=crop',
    };
    
    const fallbackUrl = fallbackUrls[target.src.split(window.location.origin)[1]] || 'https://placehold.co/600x400/1e293b/84cc16?text=Project+Image';
    target.src = fallbackUrl;
  };

  const getNextProject = () => {
    if (!selectedProject) return;
    
    const categoryProjects = projects.filter(p => p.category === selectedProject.category);
    const currentIndex = categoryProjects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % categoryProjects.length;
    
    setSelectedProject(categoryProjects[nextIndex]);
  };

  const hasNextProject = () => {
    if (!selectedProject) return false;
    
    const categoryProjects = projects.filter(p => p.category === selectedProject.category);
    return categoryProjects.length > 1;
  };

  const handleEnlargeImage = (project: Project) => {
    if (project.category === 'branding' && project.gallery) {
      setEnlargedImage({
        images: project.gallery,
        currentIndex: 0,
        category: project.category
      });
    }
  };

  const handleViewIG = () => {
    window.open('https://instagram.com/your_instagram_handle', '_blank');
  };

  return (
    <section id="portfolio" className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            My <span className="text-lime-400">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my best work across web development, mobile apps, 
            digital marketing, and branding projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveFilter(category.id);
                setShowAll(false);
              }}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === category.id
                  ? 'bg-lime-500 text-dark-900'
                  : 'bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-lime-400'
              }`}
            >
              <i className={`${category.icon} mr-2`}></i>
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-lime-400/50 transition-all duration-300 cursor-pointer transform hover:scale-105 animate-continuous-float"
              style={{ animationDelay: `${project.id * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center text-dark-900 hover:bg-lime-400 transition-colors"
                    >
                      <i className="bi bi-eye text-xl"></i>
                    </button>
                    {project.category === 'branding' && project.gallery && (
                      <button
                        onClick={() => handleEnlargeImage(project)}
                        className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white hover:bg-primary-400 transition-colors"
                      >
                        <i className="bi bi-arrows-fullscreen text-xl"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-dark-700 text-xs text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-lime-500/20 text-xs text-lime-400 rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* View IG Card for Branding Category */}
          {shouldShowViewIGCard && (activeFilter === 'branding' || (activeFilter === 'all' && (showAll || displayedProjects.length >= 8))) && (
            <div
              className="group bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl overflow-hidden border border-pink-400/50 hover:border-pink-400 transition-all duration-300 cursor-pointer transform hover:scale-105 animate-continuous-float"
              onClick={handleViewIG}
              style={{ animationDelay: '4s' }}
            >
              <div className="relative overflow-hidden h-48 flex items-center justify-center">
                <div className="text-center">
                  <i className="bi bi-instagram text-6xl text-white mb-4"></i>
                  <h3 className="text-2xl font-bold text-white">View IG</h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  Instagram Gallery
                </h3>
                <p className="text-pink-100 text-sm text-center">
                  See more of my branding work on Instagram
                </p>
              </div>
            </div>
          )}
        </div>

        {/* View More Button */}
        {hasMoreProjects && !showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-lime-500 to-lime-600 text-dark-900 font-semibold rounded-lg hover:from-lime-400 hover:to-lime-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-lime-500/25"
            >
              <i className="bi bi-plus-circle mr-2"></i>
              View More Projects
              <span className="ml-2 px-2 py-1 bg-dark-900/20 rounded-full text-xs">
                +{filteredProjects.length - 8}
              </span>
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showAll && hasMoreProjects && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center px-8 py-4 border-2 border-lime-400 text-lime-400 font-semibold rounded-lg hover:bg-lime-400 hover:text-dark-900 transform hover:scale-105 transition-all duration-200"
            >
              <i className="bi bi-dash-circle mr-2"></i>
              Show Less
            </button>
          </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onNext={getNextProject}
            hasNext={hasNextProject()}
            allProjects={projects}
          />
        )}

        {/* Image Enlarge Modal */}
        {enlargedImage && (
          <ImageEnlargeModal
            images={enlargedImage.images}
            currentIndex={enlargedImage.currentIndex}
            onClose={() => setEnlargedImage(null)}
            category={enlargedImage.category}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
