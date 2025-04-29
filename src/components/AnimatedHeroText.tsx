import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedHeroTextProps {
  greeting: string;
  title: string;
}

export function AnimatedHeroText({ greeting, title }: AnimatedHeroTextProps) {
  const greetingRef = useRef<HTMLSpanElement>(null);
  const titleWordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const emojiRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Set initial states
    gsap.set(greetingRef.current, {
      opacity: 0,
      y: 20
    });
    
    gsap.set(titleWordsRef.current, {
      opacity: 0,
      y: 20
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: greetingRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    // Add animations
    tl.to(greetingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
    .to(titleWordsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power4.out'
    }, '-=0.4');

    // Add hover animation for the emoji
    if (emojiRef.current) {
      const waveAnimation = gsap.to(emojiRef.current, {
        rotate: 20,
        duration: 0.2,
        repeat: 5,
        yoyo: true,
        ease: "power2.inOut",
        transformOrigin: "70% 70%",
        paused: true
      });

      const greetingElement = greetingRef.current;
      
      const onHover = () => waveAnimation.restart();
      greetingElement?.addEventListener('mouseenter', onHover);

      return () => {
        tl.kill();
        waveAnimation.kill();
        greetingElement?.removeEventListener('mouseenter', onHover);
      };
    }

    return () => {
      tl.kill();
    };
  }, []);

  // Split the greeting into emoji and text
  const [emoji, ...greetingText] = greeting.split(' ');
  
  // Split title into words while preserving spaces
  const titleWords = title.split(' ');

  return (
    <div className="flex flex-col items-start max-w-screen-xl">
      {/* Hidden SEO-friendly version */}
      <h1 className="sr-only">
        {greeting} {title}
      </h1>

      {/* Animated version */}
      <div 
        role="presentation"
        aria-hidden="true"
        className="flex flex-col items-start max-w-screen-xl"
      >
        <span 
          ref={greetingRef}
          className="font-normal block text-display-sm md:text-display-lg text-muted-foreground whitespace-nowrap"
        >
          <span 
            ref={emojiRef} 
            className="inline-block"
          >
            {emoji}
          </span>
          {' '}
          {greetingText.join(' ')}
        </span>
        <div 
          className="font-normal text-display-md md:text-display-3xl text-foreground pt-3 md:pt-4"
          style={{
            wordBreak: 'keep-all',
            wordWrap: 'normal',
            whiteSpace: 'normal',
            hyphens: 'none'
          }}
        >
          {titleWords.map((word, i) => (
            <span
              key={i}
              ref={el => titleWordsRef.current[i] = el}
              className="inline-block"
              style={{ marginRight: '0.25em' }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 