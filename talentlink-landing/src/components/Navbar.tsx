/**
 * Navbar — Navegación principal sticky con blur, links de sección y menú mobile animado.
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Equipo', href: '#team' },
  { label: 'Proyecto', href: '#hero' },
  { label: 'Roles', href: '#roles' },
  { label: 'Flujos', href: '#flow' },
  { label: 'Características', href: '#features' },
  { label: 'IA', href: '#ai' },
  { label: 'Stack', href: '#stack' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(navLinks[0].href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1));

    const updateActive = () => {
      const offset = window.innerHeight * 0.35;
      let current = navLinks[0].href;

      for (const link of navLinks) {
        const section = document.getElementById(link.href.slice(1));
        if (section && section.getBoundingClientRect().top <= offset) {
          current = link.href;
        }
      }

      setActiveHref(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);

    const observer = new IntersectionObserver(updateActive, {
      rootMargin: '-35% 0px -55% 0px',
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveHref(href);
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <a href="#team" className={styles.logo}>
            <Briefcase size={22} className={styles.logoIcon} />
            <span className={styles.logoText}>TalentLink</span>
            <span className={styles.logoUteq}>UTEQ</span>
          </a>

          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeHref === link.href ? styles.linkActive : undefined}
                  onClick={() => handleLinkClick(link.href)}
                  aria-current={activeHref === link.href ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#notifications" className={styles.cta}>
            Ver Demo
          </a>

          <button
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              className={styles.drawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            >
              <ul className={styles.drawerLinks}>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <a
                      href={link.href}
                      className={activeHref === link.href ? styles.drawerLinkActive : undefined}
                      onClick={() => handleLinkClick(link.href)}
                      aria-current={activeHref === link.href ? 'page' : undefined}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a href="#notifications" className={styles.drawerCta} onClick={() => handleLinkClick('#notifications')}>
                Ver Demo
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
