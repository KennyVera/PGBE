/**
 * TeamIntro — Portada estilo Canva: foto del equipo, títulos bold y decoración geométrica.
 */
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../animations/variants';
import CanvaDecor, { CanvaDots } from './CanvaDecor';
import teamPhoto from '../assets/team-feria.png';
import angularLogo from '../assets/icons/angular.png';
import springBootLogo from '../assets/icons/spring-boot.png';
import postgresqlLogo from '../assets/icons/postgresql.png';
import styles from './TeamIntro.module.css';

const teamMembers = [
  'Kenny España Vera',
  'Jeremy Jaramillo',
  'Heiner Zambrano',
];

const techLogos = [
  { src: angularLogo, alt: 'Angular' },
  { src: springBootLogo, alt: 'Spring Boot' },
  { src: postgresqlLogo, alt: 'PostgreSQL' },
];

export default function TeamIntro() {
  return (
    <section className={styles.section} id="team">
      <CanvaDecor />

      <div className={styles.topMeta}>
        <span>TalentLink · UTEQ</span>
        <span>page 01</span>
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.inner}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.brandLine} variants={fadeInUp}>
            Universidad Técnica Estatal de Quevedo
          </motion.p>

          <motion.div className={styles.photoWrap} variants={fadeInUp}>
            <img
              src={teamPhoto}
              alt="Kenny España Vera, Jeremy Jaramillo y Heiner Zambrano en la Feria de Tecnología UTEQ"
              className={styles.teamPhoto}
            />
          </motion.div>

          <motion.h1 className={styles.title} variants={fadeInUp}>
            Bolsa de
            <br />
            Empleos
          </motion.h1>

          <motion.p className={styles.subLabel} variants={fadeInUp}>
            presentación · feria 2026
          </motion.p>

          <motion.ul className={styles.names} variants={fadeInUp}>
            {teamMembers.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </motion.ul>

          <motion.p className={styles.body} variants={fadeInUp}>
            Plataforma full-stack con inteligencia artificial para conectar postulantes,
            empresas y administradores. Desarrollada por estudiantes de la UTEQ en Quevedo, Ecuador.
          </motion.p>

          <motion.div className={styles.techRow} variants={fadeInUp}>
            {techLogos.map((logo) => (
              <div key={logo.alt} className={styles.techChip}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </motion.div>

          <motion.div className={styles.actions} variants={fadeInUp}>
            <a href="#hero" className="canva-btn-primary">Conocer el proyecto</a>
            <a href="#features" className="canva-btn-outline">Características</a>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.bottomMeta}>
        <CanvaDots count={2} />
        <span>Quevedo · Los Ríos</span>
      </div>
    </section>
  );
}
