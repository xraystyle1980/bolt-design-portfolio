import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useEffect, useState, useRef } from 'react';
import { cn } from "@/lib/utils";
import { useTheme } from './ThemeProvider';

interface BlinkAnimationProps {
  className?: string;
}

export function BlinkAnimation({ className }: BlinkAnimationProps) {
  const [blinkData, setBlinkData] = useState<any>(null);
  const blinkRef = useRef<LottieRefCurrentProps>(null);
  const { theme } = useTheme();

  // Load animation based on theme
  useEffect(() => {
    const animationPath = theme === 'light' 
      ? '/animations/logo-inverted.json'
      : '/animations/logo.json';

    fetch(animationPath)
      .then(response => response.json())
      .then(data => {
        setBlinkData(data);
      })
      .catch(error => console.error('Error loading logo animation:', error));
  }, [theme]); // Re-run when theme changes

  // Set animation speed when ref is available
  useEffect(() => {
    if (blinkRef.current) {
      blinkRef.current.setSpeed(0.75);
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