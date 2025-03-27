import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

interface LightboxProps {
  images: {
    url: string;
    alt?: string;
    caption?: string;
  }[];
}

export function Lightbox({ images }: LightboxProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer flex flex-col items-center"
            onClick={() => setSelectedImage(index)}
          >
            <div className="overflow-hidden w-full">
              <img
                src={image.url}
                alt={image.alt || ""}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            {image.caption && (
              <p className="text-body-caption text-muted-foreground mt-2 text-center w-[60%]">
                {image.caption}
              </p>
            )}
          </div>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-6 bg-background">
          {selectedImage !== null && (
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-full flex items-center justify-center">
                <img
                  src={images[selectedImage].url}
                  alt={images[selectedImage].alt || ""}
                  className="max-w-full max-h-[75vh] object-contain"
                />
              </div>
              {images[selectedImage].caption && (
                <p className="text-body-caption text-muted-foreground text-center w-[60%]">
                  {images[selectedImage].caption}
                </p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
} 