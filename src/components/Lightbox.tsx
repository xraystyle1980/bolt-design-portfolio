'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

interface Image {
  url: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  src?: string;
  alt?: string;
  className?: string;
  images?: Image[];
}

export function Lightbox({ src, alt, className, images }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  // If we have a single image via src/alt, convert it to our images format
  const normalizedImages = images || (src && alt ? [{ url: src, alt }] : []);

  if (normalizedImages.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {normalizedImages.map((image, index) => (
        <div key={index} className="overflow-hidden content-center">
          <img 
            src={image.url} 
            alt={image.alt} 
            className={`cursor-pointer w-full h-auto hover:scale-105 transition-transform duration-300 ${className}`}
            onClick={() => {
              setSelectedImage(index);
              setIsOpen(true);
            }}
          />
        </div>
      ))}
      {isOpen && createPortal(
        <div 
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="fixed top-6 right-6 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:text-accent transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="h-full w-full flex items-center justify-center p-4">
            <div className="relative">
              <img 
                src={normalizedImages[selectedImage].url} 
                alt={normalizedImages[selectedImage].alt} 
                className="max-h-[85vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
} 