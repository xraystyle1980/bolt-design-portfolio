import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useEffect, useState, useRef } from 'react';
import { cn } from "@/lib/utils";

interface BlinkAnimationProps {
  className?: string;
}

export function BlinkAnimation({ className }: BlinkAnimationProps) {
  const [blinkData, setBlinkData] = useState<any>(null);
  const blinkRef = useRef<LottieRefCurrentProps>(null);

  // Load blink animation
  useEffect(() => {
    fetch('/animations/blink.json')
      .then(response => response.json())
      .then(data => {
        setBlinkData(data);
      })
      .catch(error => console.error('Error loading blink animation:', error));
  }, []); // Only run once on mount

  // Set animation speed when ref is available
  useEffect(() => {
    if (blinkRef.current) {
      blinkRef.current.setSpeed(0.75); // Same speed as in LottieLogo
    }
  }, [blinkData]);

  if (!blinkData) return null;

  return (
    <div className={cn("flex items-center", className)}>
      <Lottie
        lottieRef={blinkRef}
        animationData={blinkData}
        className="h-full"
        loop={true}
        autoplay={true}
      />
    </div>
  );
} 