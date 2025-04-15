'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

export interface LightboxProps {
  src: string;
  alt: string;
  className?: string;
}

export function Lightbox({ src, alt, className }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img 
        src={src} 
        alt={alt} 
        className={`cursor-pointer ${className}`}
        onClick={() => setIsOpen(true)}
      />
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
                src={src} 
                alt={alt} 
                className="max-h-[85vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
} 