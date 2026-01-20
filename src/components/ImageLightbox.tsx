import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % images.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  useEffect(() => {
    setIsImageLoading(true);
  }, [currentIndex]);

  if (!isOpen || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl p-4 md:p-12"
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-6 right-6 z-[110] rounded-full hover:bg-muted transition-colors"
        >
          <X size={28} className="text-primary" />
        </Button>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-6 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
            className="rounded-full hover:bg-muted h-12 w-12"
          >
            <ChevronLeft size={32} className="text-primary" />
          </Button>
        </div>

        <div className="absolute inset-y-0 right-6 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
            className="rounded-full hover:bg-muted h-12 w-12"
          >
            <ChevronRight size={32} className="text-primary" />
          </Button>
        </div>

        {/* Image Display */}
        <div className="relative w-full h-full flex items-center justify-center max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-full"
            >
              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="w-8 h-8 animate-spin text-primary/30" />
                </div>
              )}
              <img
                src={images[currentIndex]}
                alt={`Project image ${currentIndex + 1}`}
                onLoad={() => setIsImageLoading(false)}
                className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-border/50"
              />
              <div className="mt-6 text-center">
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};