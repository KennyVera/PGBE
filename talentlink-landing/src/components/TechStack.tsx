/**
 * TechStack — Tabla visual de tecnologías con logos del proyecto (Angular, Spring Boot, PostgreSQL).
 */
import { motion } from 'framer-motion';
import {
  Monitor, Server, Database, Radio, Cloud, Brain, Mail, Globe,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../animations/variants';
import SectionHeader from './SectionHeader';
import angularLogo from '../assets/icons/angular.png';
import springBootLogo from '../assets/icons/spring-boot.png';
import postgresqlLogo from '../assets/icons/postgresql.png';
import styles from './TechStack.module.css';

interface TechRow {
  layer: string;
  icon: LucideIcon;
  logo?: string;
  logoAlt?: string;
  techs: { name: string; color: string; glow?: boolean }[];
}

const stack: TechRow[] = [
  {
    layer: 'Frontend',
    icon: Monitor,
    logo: angularLogo,
    logoAlt: 'Angular',
    techs: [
      { name: 'Angular 21', color: 'angular' },
      { name: 'TypeScript', color: 'uteq' },
      { name: 'Tailwind CSS', color: 'green' },
      { name: 'RxJS', color: 'gold' },
      { name: 'Chart.js', color: 'green' },
    ],
  },
  {
    layer: 'Backend',
    icon: Server,
    logo: springBootLogo,
    logoAlt: 'Spring Boot',
    techs: [
      { name: 'Spring Boot', color: 'spring' },
      { name: 'Java 17', color: 'gold' },
      { name: 'Spring Security', color: 'spring' },
      { name: 'JPA', color: 'uteq' },
    ],
  },
  {
    layer: 'Base de datos',
    icon: Database,
    logo: postgresqlLogo,
    logoAlt: 'PostgreSQL',
    techs: [
      { name: 'PostgreSQL', color: 'postgres' },
      { name: 'Multi-esquema', color: 'uteq' },
      { name: 'Multi-tenant', color: 'green' },
    ],
  },
  {
    layer: 'Tiempo real',
    icon: Radio,
    techs: [
      { name: 'WebSocket', color: 'green' },
      { name: 'STOMP', color: 'uteq' },
      { name: 'SockJS', color: 'gold' },
    ],
  },
  {
    layer: 'Almacenamiento',
    icon: Cloud,
    techs: [
      { name: 'Azure Blob Storage', color: 'azure' },
      { name: 'Cloudinary', color: 'green' },
    ],
  },
  {
    layer: 'IA',
    icon: Brain,
    techs: [{ name: 'Google Gemini 2.0 Flash', color: 'ai', glow: true }],
  },
  {
    layer: 'Correo',
    icon: Mail,
    techs: [
      { name: 'SMTP', color: 'uteq' },
      { name: 'Gmail', color: 'gold' },
    ],
  },
  {
    layer: 'Empleos externos',
    icon: Globe,
    techs: [{ name: 'API JSearch', color: 'green' }],
  },
];

const featuredLogos = [
  { src: angularLogo, alt: 'Angular', label: 'Angular 21' },
  { src: springBootLogo, alt: 'Spring Boot', label: 'Spring Boot' },
  { src: postgresqlLogo, alt: 'PostgreSQL', label: 'PostgreSQL' },
];

export default function TechStack() {
  return (
    <section className={styles.section} id="stack">
      <div className={styles.container}>
        <SectionHeader
          page="page 07"
          title="Stack Técnico"
          subtitle="Construido con tecnología de producción."
        />

        <motion.div
          className={styles.logoShowcase}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {featuredLogos.map((item) => (
            <motion.div key={item.alt} className={styles.logoCard} variants={fadeInUp}>
              <img src={item.src} alt={item.alt} className={styles.logoImg} />
              <span className={styles.logoLabel}>{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.table}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {stack.map((row) => {
            const Icon = row.icon;
            return (
              <motion.div key={row.layer} className={styles.row} variants={fadeInUp}>
                <div className={styles.layerCell}>
                  {row.logo ? (
                    <img src={row.logo} alt={row.logoAlt} className={styles.rowLogo} />
                  ) : (
                    <Icon size={20} className={styles.layerIcon} />
                  )}
                  <span className={styles.layerName}>{row.layer}</span>
                </div>
                <div className={styles.badges}>
                  {row.techs.map((tech) => (
                    <span
                      key={tech.name}
                      className={`${styles.badge} ${styles[tech.color]} ${tech.glow ? styles.glow : ''}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
