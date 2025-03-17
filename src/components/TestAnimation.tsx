import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Container } from './ui/container';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

export function TestAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !textRef.current || !boxRef.current) return;

    // Create SplitText instance
    const splitText = new SplitText(textRef.current, {
      type: "chars,words",
      charsClass: "char",
      wordsClass: "word"
    });

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: true, // For debugging
      }
    });

    // Animate the text
    tl.from(splitText.chars, {
      opacity: 0,
      y: 50,
      rotateX: -90,
      stagger: 0.02,
      duration: 0.5,
    });

    // Animate the box
    tl.from(boxRef.current, {
      scale: 0,
      rotation: 360,
      duration: 1,
    }, "-=0.5");

    // Cleanup
    return () => {
      splitText.revert();
      tl.kill();
    };
  }, []);

  return (
    <Container>
      <div 
        ref={containerRef}
        className="py-24 md:py-32 flex flex-col items-center justify-center gap-8"
      >
        <div 
          ref={textRef}
          className="text-4xl md:text-6xl font-bold text-center"
        >
          GSAP Premium Animation Test
        </div>
        <div 
          ref={boxRef}
          className="w-32 h-32 bg-blue-500 rounded-lg"
        />
      </div>
    </Container>
  );
} 