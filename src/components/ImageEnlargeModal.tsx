import React, { useState, useEffect } from 'react';

interface ImageEnlargeModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  category: string;
}

const ImageEnlargeModal: React.FC<ImageEnlargeModalProps> = ({
  images,
  currentIndex: initialIndex,
  onClose,
  category
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const fallbackUrls: { [key: string]: string } = {
      '/images/portfolio/brd-tech-startup-branding.jpg': 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
      '/images/portfolio/brd-tech-startup-logo.jpg': 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      '/images/portfolio/brd-tech-startup-colors.jpg': 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop',
      '/images/portfolio/brd-tech-startup-typography.jpg': 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop',
      '/images/portfolio/brd-restaurant-branding.jpg': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
      '/images/portfolio/brd-restaurant-menu.jpg': 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&h=600&fit=crop',
      '/images/portfolio/brd-restaurant-packaging.jpg': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
      '/images/portfolio/brd-restaurant-signage.jpg': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    };
    
    const fallbackUrl = fallbackUrls[target.src.split(window.location.origin)[1]] || 'https://placehold.co/800x600/1e293b/84cc16?text=Gallery+Image';
    target.src = fallbackUrl;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 text-white">
          <div className="flex items-center space-x-4">
            <span className="px-3 py-1 bg-lime-500/20 text-lime-400 text-sm rounded-full flex items-center">
              <i className="bi bi-palette mr-1"></i>
              {category.charAt(0).toUpperCase() + category.slice(1)} Gallery
            </span>
            <span className="text-gray-400">
              {currentIndex + 1} of {images.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-dark-700 transition-colors"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Main Image */}
        <div className="flex-1 flex items-center justify-center px-6 relative">
          <img
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onError={handleImageError}
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-dark-700 transition-colors"
              >
                <i className="bi bi-chevron-left text-xl"></i>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-dark-700 transition-colors"
              >
                <i className="bi bi-chevron-right text-xl"></i>
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="p-6">
            <div className="flex justify-center space-x-2 overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentIndex
                      ? 'border-lime-400 opacity-100'
                      : 'border-dark-600 opacity-60 hover:opacity-80'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Keyboard Instructions */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm text-center">
          <div className="bg-dark-800/80 backdrop-blur-sm rounded-lg px-4 py-2">
            Use <kbd className="px-2 py-1 bg-dark-700 rounded text-xs">←</kbd> <kbd className="px-2 py-1 bg-dark-700 rounded text-xs">→</kbd> to navigate • <kbd className="px-2 py-1 bg-dark-700 rounded text-xs">ESC</kbd> to close
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEnlargeModal;
