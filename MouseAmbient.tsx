import { useEffect, useRef } from 'react';

export default function MouseAmbient() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      glowRef.current.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-[1] opacity-60 hidden lg:block"
      style={{
        background: 'radial-gradient(circle, rgba(197,160,89,0.14) 0%, rgba(107,31,46,0.10) 50%, transparent 70%)',
        filter: 'blur(60px)',
        transition: 'transform 0.15s ease-out',
      }}
    />
  );
}
