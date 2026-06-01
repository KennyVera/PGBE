/**
 * Notifications — Mockup de panel de notificaciones con campana animada y slide-in.
 */
import { motion, AnimatePresence } from 'framer-motion';
import { Bell } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SectionHeader from './SectionHeader';
import styles from './Notifications.module.css';

const notifications = [
  {
    emoji: '✅',
    text: 'Tu postulación fue aceptada para Dev Backend en TechCorp',
    time: 'Hace 2 min',
  },
  {
    emoji: '🔔',
    text: 'Nueva oferta en Guayaquil: Diseñador UX Senior',
    time: 'Hace 15 min',
  },
  {
    emoji: '⏰',
    text: 'Última oportunidad: La oferta cierra en menos de 24h',
    time: 'Hace 1 h',
  },
  {
    emoji: '🏢',
    text: "Empresa 'InnovateSA' pendiente de aprobación",
    time: 'Hace 2 h',
  },
  {
    emoji: '📧',
    text: 'Configuración de correo SMTP actualizada correctamente',
    time: 'Hace 3 h',
  },
];

export default function Notifications() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15, triggerOnce: true });

  return (
    <section className={styles.section} id="notifications">
      <div className={styles.container}>
        <SectionHeader
          page="page 09"
          eyebrow="Tiempo real"
          title="Notificaciones"
          subtitle="WebSocket STOMP mantiene a cada usuario informado al momento, sin recargar la página."
        />

        <div className={styles.panel} ref={ref as React.RefObject<HTMLDivElement>}>
          <div className={styles.panelHeader}>
            <div className={styles.bellWrap}>
              <Bell size={22} />
              <span className={styles.badge}>5</span>
            </div>
            <span className={styles.panelTitle}>Notificaciones</span>
          </div>

          <div className={styles.list}>
            <AnimatePresence>
              {isVisible &&
                notifications.map((n, i) => (
                  <motion.div
                    key={n.text}
                    className={styles.notifCard}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
                    whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                  >
                    <span className={styles.notifEmoji}>{n.emoji}</span>
                    <div className={styles.notifContent}>
                      <p className={styles.notifText}>{n.text}</p>
                      <span className={styles.notifTime}>{n.time}</span>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
