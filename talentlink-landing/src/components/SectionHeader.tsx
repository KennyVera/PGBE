/**
 * SectionHeader — Encabezado estilo Canva con label de página y título bold.
 */
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  page: string;
  brand?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeader({
  page,
  brand = 'TalentLink · UTEQ',
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
}: SectionHeaderProps) {
  return (
    <motion.header
      className={`${styles.header} ${styles[align]} ${dark ? styles.dark : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeInUp}
    >
      <div className={styles.meta}>
        <span className={styles.brand}>{brand}</span>
        <span className={styles.page}>{page}</span>
      </div>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.header>
  );
}
