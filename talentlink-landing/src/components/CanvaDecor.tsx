/**
 * CanvaDecor — Elementos decorativos del template Canva (semicírculos, dots, marco).
 */
import styles from './CanvaDecor.module.css';

interface CanvaDecorProps {
  variant?: 'light' | 'dark';
}

export default function CanvaDecor({ variant = 'light' }: CanvaDecorProps) {
  const v = variant === 'dark' ? styles.dark : styles.light;

  return (
    <>
      <div className={`${styles.semiLeft} ${v}`} aria-hidden="true" />
      <div className={`${styles.semiRight} ${v}`} aria-hidden="true" />
      <span className={`${styles.dot} ${styles.dotTL} ${v}`} aria-hidden="true" />
      <span className={`${styles.dot} ${styles.dotTR} ${v}`} aria-hidden="true" />
    </>
  );
}

export function CanvaDots({ count = 2, className = '' }: { count?: number; className?: string }) {
  return (
    <div className={`${styles.dotsRow} ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={styles.dotSolid} />
      ))}
    </div>
  );
}
