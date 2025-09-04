import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`fixed bottom-24 right-6 z-40 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
    }`}>
      <button
        onClick={scrollToTop}
        className="w-12 h-12 bg-dark-800 hover:bg-lime-500 text-gray-400 hover:text-dark-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-dark-600 hover:border-lime-400 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <i className="bi bi-arrow-up text-lg"></i>
      </button>
    </div>
  );
};

export default ScrollToTop;
