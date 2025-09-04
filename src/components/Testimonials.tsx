import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  testimonial: string;
  project: string;
}

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Solutions',
      rating: 5,
      testimonial: 'Olufemi delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise transformed our business operations completely.',
      project: 'E-commerce Platform Development'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'Digital Dynamics',
      rating: 5,
      testimonial: 'The digital marketing campaign Olufemi created increased our online presence by 400%. His strategic approach and execution were flawless from start to finish.',
      project: 'Digital Marketing Campaign'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'Creative Studio Pro',
      rating: 5,
      testimonial: 'Our brand identity redesign was absolutely stunning. Olufemi captured our vision perfectly and created a brand that truly represents our values and mission.',
      project: 'Brand Identity Design'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'CTO',
      company: 'FinTech Innovations',
      rating: 5,
      testimonial: 'The mobile banking app Olufemi developed is secure, user-friendly, and has received outstanding feedback from our customers. Exceptional work quality.',
      project: 'Mobile Banking Application'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Operations Manager',
      company: 'HealthCare Plus',
      rating: 5,
      testimonial: 'Our healthcare management system streamlined our operations significantly. Olufemi understood our complex requirements and delivered a perfect solution.',
      project: 'Healthcare Management System'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Restaurant Owner',
      company: 'Gourmet Bistro',
      rating: 5,
      testimonial: 'The restaurant branding and website Olufemi created brought our vision to life. Our bookings increased by 60% within the first month of launch.',
      project: 'Restaurant Branding & Website'
    },
    {
      id: 7,
      name: 'Amanda Foster',
      role: 'Real Estate Broker',
      company: 'Prime Properties',
      rating: 5,
      testimonial: 'The real estate portal Olufemi built revolutionized how we showcase properties. The virtual tours and advanced search features are game-changers.',
      project: 'Real Estate Portal Development'
    },
    {
      id: 8,
      name: 'Robert Kim',
      role: 'Fitness Entrepreneur',
      company: 'FitLife Gym',
      rating: 5,
      testimonial: 'The fitness app and branding package exceeded all expectations. Member engagement increased dramatically, and our brand now stands out in the market.',
      project: 'Fitness App & Brand Design'
    },
    {
      id: 9,
      name: 'Jennifer Martinez',
      role: 'E-learning Director',
      company: 'EduTech Academy',
      rating: 5,
      testimonial: 'Our learning management system transformed online education delivery. Students love the interactive features and intuitive design Olufemi created.',
      project: 'Learning Management System'
    },
    {
      id: 10,
      name: 'Thomas Anderson',
      role: 'Startup Founder',
      company: 'InnovateTech',
      rating: 5,
      testimonial: 'From concept to launch, Olufemi guided our entire digital transformation. His expertise in both development and marketing made our startup successful.',
      project: 'Complete Digital Solution'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    window.setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    window.setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    window.setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`bi bi-star${index < rating ? '-fill' : ''} text-yellow-400`}
      ></i>
    ));
  };

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Testimonial Display */}
        <div className="relative bg-dark-800 rounded-2xl p-8 sm:p-12 border border-dark-700 mb-8">
          <div className="text-center">
            {/* Quote Icon */}
            <div className="mb-6">
              <i className="bi bi-quote text-5xl text-lime-400/30"></i>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              {testimonials[currentSlide].testimonial}
            </blockquote>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {renderStars(testimonials[currentSlide].rating)}
            </div>

            {/* Client Info */}
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-white mb-2">
                {testimonials[currentSlide].name}
              </h4>
              <p className="text-lime-400 font-medium text-lg">
                {testimonials[currentSlide].role}
              </p>
              <p className="text-gray-400 text-lg">
                {testimonials[currentSlide].company}
              </p>
            </div>

            {/* Project Tag */}
            <div className="inline-flex items-center px-4 py-2 bg-lime-500/20 text-lime-400 rounded-full">
              <i className="bi bi-briefcase mr-2"></i>
              {testimonials[currentSlide].project}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-700 hover:bg-lime-500 text-gray-400 hover:text-dark-900 rounded-full transition-all duration-200 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <i className="bi bi-chevron-left text-xl"></i>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-700 hover:bg-lime-500 text-gray-400 hover:text-dark-900 rounded-full transition-all duration-200 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <i className="bi bi-chevron-right text-xl"></i>
          </button>
        </div>

        {/* Testimonial Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-lime-400 w-8'
                  : 'bg-dark-600 hover:bg-dark-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Client Names Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              className={`group relative p-3 rounded-xl transition-all duration-200 text-center ${
                index === currentSlide
                  ? 'bg-lime-500/20 border-2 border-lime-400'
                  : 'bg-dark-800 border-2 border-dark-700 hover:border-lime-400/50'
              }`}
            >
              <div className="text-center">
                <p className={`text-sm font-semibold ${
                  index === currentSlide ? 'text-lime-400' : 'text-white'
                }`}>
                  {testimonial.name}
                </p>
                <p className="text-gray-400 text-xs">{testimonial.company}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-lime-400 animate-pulse' : 'bg-gray-600'}`}></div>
            <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
