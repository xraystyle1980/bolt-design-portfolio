'use client';

import { useRef, useEffect, useState } from 'react';
import { Group } from 'three';
import TokenFace from './TokenFace';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollingTokens() {
  const tokensRef = useRef<(Group | null)[]>([]);
  const [positions, setPositions] = useState({
    spread: 2,
    scale: 0.75,
    finalScale: 1.2
  });
  
  // Update positions based on screen size
  useEffect(() => {
    const updatePositions = () => {
      const width = window.innerWidth;
      let newSpread, newScale, newFinalScale;
      
      if (width < 400) {
        newSpread = 0.75;        // Mobile portrait values
        newScale = 0.5;
        newFinalScale = 0.7;
      } else if (width < 768) {
        newSpread = 1.25;      // Mobile landscape values
        newScale = 0.6;
        newFinalScale = 0.8;
      } else if (width < 1000) {
        newSpread = 1.75;      // Tablet values
        newScale = 0.7;
        newFinalScale = 0.9;
      } else if (width < 1200) {
        newSpread = 2.25;      // Desktop small values
        newScale = 0.75;
        newFinalScale = 1;
      } else {
        newSpread = 2.75;        // Desktop large values
        newScale = 0.8;
        newFinalScale = 1.1;
      }
      
      setPositions({
        spread: newSpread,
        scale: newScale,
        finalScale: newFinalScale
      });
    };

    // Set initial positions
    updatePositions();

    // Add resize listener
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  const initialPositions = [
    { x: -2 * positions.spread, y: -12, z: -2, scale: positions.scale, finalScale: positions.finalScale, speed: 0.8, rotation: { x: 0.2, y: -0.3, z: 0.1 } },
    { x: -0.75 * positions.spread, y: -15, z: -2, scale: positions.scale, finalScale: positions.finalScale * 0.9, speed: 1, rotation: { x: -0.3, y: 0.2, z: -0.2 } },
    { x: 2.5 * positions.spread, y: -14, z: -2, scale: positions.scale, finalScale: positions.finalScale, speed: 0.6, rotation: { x: 0.1, y: 0.3, z: 0.2 } }
  ];

  const finalPositions = [
    { x: -2.5 * positions.spread, y: 4, z: -2 },
    { x: -0.5 * positions.spread, y: 3, z: -2 },
    { x: 3 * positions.spread, y: 3.5, z: -2 }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      tokensRef.current.forEach((token, i) => {
        if (token) {
          const triggerElement = document.querySelector('#case-study-connect') || document.querySelector('#connect');
          
          if (!triggerElement) {
            console.warn('No trigger element found for ScrollTrigger');
            return;
          }

          const tl = gsap.timeline({
            paused: true,
            defaults: { duration: 1, ease: "power2.inOut" }
          });

          // Add all animations to the timeline
          tl.to(token.position, {
            y: finalPositions[i].y,
            x: finalPositions[i].x,
            z: finalPositions[i].z,
          }, 0);

          tl.to(token.scale, {
            x: initialPositions[i].finalScale,
            y: initialPositions[i].finalScale,
            z: initialPositions[i].finalScale,
          }, 0);

          tl.to(token.rotation, {
            x: initialPositions[i].rotation.x * -2,
            y: initialPositions[i].rotation.y * -2,
            z: initialPositions[i].rotation.z * -2,
          }, 0);

          // Create ScrollTrigger with adjusted trigger points
          ScrollTrigger.create({
            trigger: triggerElement,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            markers: false,
            onUpdate: (self) => {
              tl.progress(self.progress);
            }
          });
        }
      });
    });

    return () => {
      // Kill all ScrollTrigger instances first
      ScrollTrigger.getAll().forEach(st => st.kill());
      // Then revert the GSAP context
      ctx.revert();
    };
  }, [initialPositions, finalPositions]);

  return (
    <group position={[0, 0, 0]}>
      {/* Tokens */}
      {initialPositions.map((pos, i) => (
        <group 
          key={i}
          ref={el => {
            if (tokensRef.current) tokensRef.current[i] = el;
          }}
          position={[pos.x, pos.y, pos.z]}
          rotation={[pos.rotation.x, pos.rotation.y, pos.rotation.z]}
          scale={[pos.scale, pos.scale, pos.scale]}
        >
          <TokenFace />
          <pointLight position={[0, 2, 4]} intensity={15} color="#ff69b4" distance={6} />
          <mesh 
            position={[0, 0, 0]} 
            visible={true}
            raycast={() => null}
          >
            <planeGeometry args={[1.5, 1.5]} />
            <meshBasicMaterial transparent opacity={0} />
          </mesh>
        </group>
      ))}
    </group>
  );
} 