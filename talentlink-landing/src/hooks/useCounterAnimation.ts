import { useEffect, useState } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

/**
 * Anima un contador numérico desde 0 hasta `target` con easing ease-out.
 * Solo inicia cuando el elemento entra al viewport si `startOnVisible` es true.
 */
export function useCounterAnimation(
  target: number,
  duration: number = 2000,
  startOnVisible: boolean = true
): { count: number; ref: React.RefObject<HTMLElement | null> } {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15, triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const shouldStart = startOnVisible ? isVisible : true;
    if (!shouldStart) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const easeOut = (t: number): number => 1 - Math.pow(1 - t, 3);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(easeOut(progress) * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, isVisible, startOnVisible]);

  return { count, ref };
}
