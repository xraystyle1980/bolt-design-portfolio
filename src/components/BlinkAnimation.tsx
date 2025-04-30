import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useEffect, useState, useRef } from 'react';
import { cn } from "@/lib/utils";
import { useTheme } from './ThemeProvider';

interface AnimationData {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: Array<{
    id: string;
    w?: number;
    h?: number;
    u?: string;
    p?: string;
    e?: number;
  }>;
  layers: Array<{
    ty: number;
    nm: string;
    sr: number;
    ks: Record<string, unknown>;
    ao: number;
    shapes?: Array<{
      ty: string;
      nm: string;
      d: number;
      c?: {
        a: number;
        k: number[];
      };
    }>;
  }>;
}

interface BlinkAnimationProps {
  className?: string;
}

export function BlinkAnimation({ className }: BlinkAnimationProps) {
  const [blinkData, setBlinkData] = useState<AnimationData | null>(null);
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