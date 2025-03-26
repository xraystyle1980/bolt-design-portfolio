import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

interface LightboxProps {
  images: {
    url: string;
    alt?: string;
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
            className="relative group cursor-pointer overflow-hidden"
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image.url}
              alt={image.alt || ""}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none">
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].alt || ""}
                className="w-full h-auto"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
} 