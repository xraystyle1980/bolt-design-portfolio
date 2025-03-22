import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useEffect, useState, useRef } from 'react';
import { useTheme } from './ThemeProvider';

export function LottieLogo() {
  const [logoData, setLogoData] = useState<any>(null);
  const [blinkData, setBlinkData] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayedInitialAnimation, setHasPlayedInitialAnimation] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const blinkRef = useRef<LottieRefCurrentProps>(null);
  const { theme } = useTheme();

  // Load blink animation once
  useEffect(() => {
    fetch('/animations/blink.json')
      .then(response => response.json())
      .then(data => {
        setBlinkData(data);
      })
      .catch(error => console.error('Error loading blink animation:', error));
  }, []); // Only run once on mount

  // Load and update logo animation based on theme
  useEffect(() => {
    const logoFile = theme === 'dark' ? '/animations/logo-inverted.json' : '/animations/logo.json';
    fetch(logoFile)
      .then(response => response.json())
      .then(data => {
        setLogoData(data);
        // Reset animation state when logo changes
        setIsPlaying(false);
        setHasPlayedInitialAnimation(false);
      })
      .catch(error => console.error('Error loading logo animation:', error));
  }, [theme]); // Re-run when theme changes

  // Set animation speeds when refs are available
  useEffect(() => {
    if (blinkRef.current) {
      blinkRef.current.setSpeed(0.75); // Slower blink
    }
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1.5); // Faster logo
    }
  }, [blinkData, logoData]);

  const handleMouseEnter = () => {
    if (lottieRef.current && !isPlaying && hasPlayedInitialAnimation) {
      setIsPlaying(true);
      lottieRef.current.goToAndPlay(0);
    }
  };

  const handleComplete = () => {
    setIsPlaying(false);
    if (!hasPlayedInitialAnimation) {
      setHasPlayedInitialAnimation(true);
    }
    if (lottieRef.current) {
      lottieRef.current.goToAndStop(0);
    }
  };

//   if (!logoData) {
//     return (
//       <div className="flex items-center gap-2">
//         <img 
//           src="/images/logo-wip-token.svg" 
//           alt="Bolt Design" 
//           className="h-8 w-auto"
//         />
//         <img 
//           src="/images/blink-static.svg" 
//           alt="" 
//           className="h-10 w-auto"
//         />
//       </div>
//     );
//   }

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      className="cursor-pointer flex items-center"
    >
      {blinkData && (
        <Lottie
          lottieRef={blinkRef}
          animationData={blinkData}
          className="h-10 w-auto"
          loop={true}
          autoplay={true}
        />
      )}
      {logoData && (
        <Lottie
          lottieRef={lottieRef}
          animationData={logoData}
          className="h-8 w-auto"
          loop={false}
          autoplay={true}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
}