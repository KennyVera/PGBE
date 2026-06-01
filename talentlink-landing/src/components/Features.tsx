/**
 * Features — Grid 3×2 de feature cards con glassmorphism.
 */
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/variants';
import SectionHeader from './SectionHeader';
import styles from './Features.module.css';

const features = [
  {
    emoji: '🔒',
    title: 'Seguridad Multi-tenant',
    desc: 'Credenciales propias en PostgreSQL por usuario',
  },
  {
    emoji: '⚡',
    title: 'WebSockets en Tiempo Real',
    desc: 'STOMP + SockJS, campana de notificaciones',
  },
  {
    emoji: '☁️',
    title: 'Cloud Storage',
    desc: 'CVs en Azure Blob · Imágenes en Cloudinary',
  },
  {
    emoji: '📊',
    title: 'Auditoría Total',
    desc: 'Trazabilidad INSERT/UPDATE/DELETE + sesiones activas',
  },
  {
    emoji: '💾',
    title: 'Backups Automáticos',
    desc: 'Programados + manuales, restauración desde Azure',
  },
  {
    emoji: '🌐',
    title: 'Mercado Externo',
    desc: 'Ofertas de API JSearch integradas junto a las internas',
  },
];

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        <SectionHeader
          page="page 06"
          eyebrow="Capacidades"
          title="Infraestructura"
          subtitle="Cada módulo diseñado para escalar, auditar y operar en entornos reales."
        />

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              className={styles.card}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
            >
              <span className={styles.emoji}>{f.emoji}</span>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
