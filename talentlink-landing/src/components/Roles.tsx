/**
 * Roles — Grid 2×2 de cards por rol de usuario con hover 3D interactivo.
 */
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GraduationCap, Building2, ShieldCheck, UserCog } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../animations/variants';
import SectionHeader from './SectionHeader';
import styles from './Roles.module.css';

interface RoleCardData {
  title: string;
  icon: LucideIcon;
  accent: string;
  accentVar: string;
  features: string[];
}

const roles: RoleCardData[] = [
  {
    title: 'Postulante',
    icon: GraduationCap,
    accent: 'primary',
    accentVar: '--accent-primary',
    features: [
      'Perfil profesional con completitud',
      'Búsqueda interna + JSearch',
      'Drag & drop CV',
      'Análisis IA match/fortalezas/debilidades',
      'Seguimiento en tiempo real',
    ],
  },
  {
    title: 'Empresa',
    icon: Building2,
    accent: 'secondary',
    accentVar: '--accent-secondary',
    features: [
      'Publicación de vacantes con habilidades',
      'Revisión de candidatos completa',
      'Resultados IA por candidato',
      'Reportes con gráficos',
      'Dashboard KPIs',
    ],
  },
  {
    title: 'Administrador',
    icon: ShieldCheck,
    accent: 'gold',
    accentVar: '--accent-gold',
    features: [
      'Validación de empresas y ofertas',
      'Auditorías completas del sistema',
      'Gestión de catálogos',
      'Backups automáticos Azure',
      'Configuración de marca y correo',
    ],
  },
  {
    title: 'Supervisor / Gerente',
    icon: UserCog,
    accent: 'purple',
    accentVar: '--accent-purple',
    features: [
      'Acceso granular por módulo',
      'Permisos UI configurables',
      'Subconjunto de módulos admin',
      'Reportes según acceso asignado',
    ],
  },
];

function RoleCard({ role }: { role: RoleCardData }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = role.icon;

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${styles[`accent${role.accent.charAt(0).toUpperCase() + role.accent.slice(1)}`]}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        '--role-accent': `var(${role.accentVar})`,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={fadeInUp}
      whileHover={{ scale: 1.02 }}
    >
      <div className={styles.cardGlow} aria-hidden="true" />
      <div className={styles.cardHeader}>
        <div className={styles.iconWrap}>
          <Icon size={24} />
        </div>
        <h3 className={styles.cardTitle}>{role.title}</h3>
      </div>
      <ul className={styles.featureList}>
        {role.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Roles() {
  return (
    <section className={styles.section} id="roles">
      <div className={styles.container}>
        <SectionHeader
          page="page 04"
          eyebrow="Ecosistema completo"
          title="Roles de Usuario"
          subtitle="Cuatro perfiles con funcionalidades diseñadas para sus necesidades específicas."
        />

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={{ perspective: 1000 }}
        >
          {roles.map((role) => (
            <RoleCard key={role.title} role={role} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
