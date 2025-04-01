interface Image {
  url: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  images: Image[];
}

export function Lightbox({ images }: LightboxProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {images.map((image, index) => (
        <div key={index} className="flex flex-col gap-4">
          <img 
            src={image.url} 
            alt={image.alt}
            className="w-full h-auto rounded-2xl"
          />
          {image.caption && (
            <p className="text-body-sm text-muted-foreground text-center">
              {image.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
} 