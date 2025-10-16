import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AnimatedBlob() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!blobRef.current) return;

    // Animate blob on scroll
    gsap.to(blobRef.current, {
      y: 400,
      scale: 1.2,
      rotation: 180,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    // Continuous floating animation
    gsap.to(blobRef.current, {
      x: "+=30",
      y: "+=30",
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Morphing animation
    gsap.to(blobRef.current, {
      borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        ref={blobRef}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-to-br from-purple-600/30 via-purple-500/20 to-pink-500/30 blur-3xl"
        style={{
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-purple-800/20 via-purple-600/10 to-blue-500/20 rounded-full blur-3xl"
      />
    </div>
  );
}
