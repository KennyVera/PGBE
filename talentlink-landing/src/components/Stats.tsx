/**
 * Stats — Barra de estadísticas con contadores animados y separadores con glow.
 */
import { motion } from 'framer-motion';
import { useCounterAnimation } from '../hooks/useCounterAnimation';
import { fadeInUp, staggerContainer } from '../animations/variants';
import styles from './Stats.module.css';

interface StatItemProps {
  target: number;
  suffix: string;
  label: string;
}

function StatItem({ target, suffix, label }: StatItemProps) {
  const { count, ref } = useCounterAnimation(target, 2000, true);

  return (
    <div className={styles.stat} ref={ref as React.RefObject<HTMLDivElement>}>
      <div className={styles.number}>
        <span>{count}</span>
        <span className={styles.suffix}>{suffix}</span>
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

const stats = [
  { target: 4, suffix: '+', label: 'Roles de usuario' },
  { target: 15, suffix: '+', label: 'Módulos del sistema' },
  { target: 100, suffix: '%', label: 'Análisis con IA' },
  { target: 3, suffix: ' capas', label: 'Seguridad multi-tenant' },
];

export default function Stats() {
  return (
    <section className={styles.stats}>
      <motion.div
        className={styles.container}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {stats.map((stat, i) => (
          <motion.div key={stat.label} className={styles.statWrapper} variants={fadeInUp}>
            <StatItem {...stat} />
            {i < stats.length - 1 && <div className={styles.separator} aria-hidden="true" />}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
