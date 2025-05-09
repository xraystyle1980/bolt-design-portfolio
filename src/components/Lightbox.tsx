'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import ReactPlayer from 'react-player';

interface Image {
  url: string;
  alt: string;
  caption?: string;
  videoUrl?: string;
  aspectRatio?: string;
}

interface LightboxProps {
  src?: string;
  alt?: string;
  className?: string;
  images?: Image[];
  containerHidden?: boolean;
  children?: React.ReactNode;
}

export function Lightbox({ src, alt, className, images, containerHidden, children }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  // If we have a single image via src/alt, convert it to our images format
  const normalizedImages = images || (src && alt ? [{ url: src, alt }] : []);

  if (normalizedImages.length === 0) return null;

  const gridClass = className?.includes("col-span-1") 
    ? "grid-cols-1" 
    : className?.includes("col-span-2") 
      ? "grid-cols-1 md:grid-cols-2" 
      : "grid-cols-1 md:grid-cols-3";

  // If children are provided, render them as the trigger
  if (children) {
    return (
      <>
        <span onClick={() => setIsOpen(true)} className="inline">
          {children}
        </span>
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
                {normalizedImages[selectedImage].videoUrl ? (
                  <div className="rounded-lg overflow-hidden" style={{ maxWidth: '1300px', maxHeight: '80vh', width: '90vw', aspectRatio: '16/9' }}>
                    <ReactPlayer
                      url={normalizedImages[selectedImage].videoUrl}
                      width="100%"
                      height="100%"
                      controls={true}
                      playing={true}
                      muted={false}
                      playsinline={true}
                      loop={true}
                      config={{
                        file: {
                          attributes: {
                            controlsList: 'nodownload'
                          }
                        }
                      }}
                    />
                  </div>
                ) : (
                  <img 
                    src={normalizedImages[selectedImage].url} 
                    alt={normalizedImages[selectedImage].alt} 
                    className="max-h-[85vh] w-auto object-contain rounded-lg"
                  />
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
      </>
    );
  }

  // Original grid view implementation
  return (
    <div className={cn(
      "grid gap-4",
      className,
      !className?.includes("w-full") && gridClass
    )}>
      {normalizedImages.map((image, index) => (
        <div key={index}>
          {image.videoUrl ? (
            <div 
              className={cn(
                "w-full relative cursor-pointer",
                containerHidden ? "bg-background" : "rounded-lg overflow-hidden shadow-lg"
              )}
              style={{ aspectRatio: image.aspectRatio || '16/10' }}
              onClick={() => {
                setSelectedImage(index);
                setIsOpen(true);
              }}
            >
              <div className="absolute inset-0">
                <ReactPlayer
                  url={image.videoUrl}
                  width="100%"
                  height="100%"
                  controls={false}
                  playing={true}
                  muted={true}
                  playsinline={true}
                  loop={true}
                  style={{ width: '100%', height: '100%' }}
                  config={{
                    file: {
                      attributes: {
                        controlsList: 'nodownload'
                      }
                    }
                  }}
                />
              </div>
            </div>
          ) : (
            <img 
              src={image.url} 
              alt={image.alt} 
              className={cn(
                "cursor-pointer w-full h-auto hover:scale-105 transition-transform duration-300 rounded-lg",
                !containerHidden && "shadow-lg"
              )}
              onClick={() => {
                setSelectedImage(index);
                setIsOpen(true);
              }}
            />
          )}
          {image.caption && (
            <p className="caption mt-2 text-center">{image.caption}</p>
          )}
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
              {normalizedImages[selectedImage].videoUrl ? (
                <div className="rounded-lg overflow-hidden" style={{ maxWidth: '1300px', maxHeight: '80vh', width: '90vw', aspectRatio: '16/9' }}>
                  <ReactPlayer
                    url={normalizedImages[selectedImage].videoUrl}
                    width="100%"
                    height="100%"
                    controls={true}
                    playing={true}
                    muted={false}
                    playsinline={true}
                    loop={true}
                    config={{
                      file: {
                        attributes: {
                          controlsList: 'nodownload'
                        }
                      }
                    }}
                  />
                </div>
              ) : (
                <img 
                  src={normalizedImages[selectedImage].url} 
                  alt={normalizedImages[selectedImage].alt} 
                  className="max-h-[85vh] w-auto object-contain rounded-lg"
                />
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
} 