/**
 * Footer — Pie de página con créditos UTEQ, equipo y navegación.
 */
import { Briefcase, GraduationCap } from 'lucide-react';
import angularLogo from '../assets/icons/angular.png';
import springBootLogo from '../assets/icons/spring-boot.png';
import postgresqlLogo from '../assets/icons/postgresql.png';
import styles from './Footer.module.css';

const navLinks = [
  { label: 'Equipo', href: '#team' },
  { label: 'Proyecto', href: '#hero' },
  { label: 'Roles', href: '#roles' },
  { label: 'Flujos', href: '#flow' },
  { label: 'IA', href: '#ai' },
  { label: 'Stack', href: '#stack' },
  { label: 'Seguridad', href: '#security' },
];

const teamMembers = ['Kenny España Vera', 'Jeremy Jaramillo', 'Heiner Zambrano'];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Briefcase size={22} className={styles.logoIcon} />
            <span className={styles.logoText}>TalentLink</span>
          </div>
          <div className={styles.uteqLine}>
            <GraduationCap size={16} />
            <span>Universidad Técnica Estatal de Quevedo · UTEQ</span>
          </div>
          <p className={styles.credit}>
            Feria de Tecnología Universitaria 2026 · Quevedo, Ecuador
          </p>
          <p className={styles.team}>
            {teamMembers.join(' · ')}
          </p>
        </div>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.techIcons}>
          <img src={angularLogo} alt="Angular" className={styles.techIcon} />
          <img src={springBootLogo} alt="Spring Boot" className={styles.techIcon} />
          <img src={postgresqlLogo} alt="PostgreSQL" className={styles.techIcon} />
        </div>

        <p className={styles.bottom}>
          Construido con Angular · Spring Boot · PostgreSQL · Google Gemini
        </p>
        <a
          href="https://www.uteq.edu.ec/es/grado/carreras"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.uteqLink}
        >
          www.uteq.edu.ec
        </a>
      </div>
    </footer>
  );
}
