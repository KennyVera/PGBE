/**
 * Security — Medidas de seguridad con terminal animada de auditoría.
 */
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { fadeInLeft, fadeInRight, staggerContainer } from '../animations/variants';
import SectionHeader from './SectionHeader';
import Terminal from './Terminal';
import styles from './Security.module.css';

const measures = [
  'BCrypt + JWT con identificador de sesión único',
  'Registro de cada login: IP, navegador, dispositivo',
  'Cierre de sesión forzado por admin con modal de aviso en tiempo real',
  'AuthGuard en todas las rutas protegidas',
  'Interceptor HTTP que inyecta JWT automáticamente',
  'Alerta por correo al admin cuando un Administrador inicia sesión',
  'Multi-tenancy: la conexión de BD cambia al rol del usuario autenticado',
];

export default function Security() {
  return (
    <section className={styles.section} id="security">
      <div className={styles.container}>
        <SectionHeader
          page="page 08"
          eyebrow="Seguridad enterprise"
          title="Protección Total"
          subtitle="Cada usuario es un rol de base de datos. Cada sesión es trazada. Cada acción es auditada."
        />

        <div className={styles.grid}>
          <motion.ul
            className={styles.list}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {measures.map((item) => (
              <motion.li key={item} variants={fadeInLeft}>
                <Shield size={18} className={styles.icon} />
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
