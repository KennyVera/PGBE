/**
 * Hero — Layout split estilo Canva: texto izquierda, mockup derecha con imagen redondeada.
 */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInRight, fadeInLeft } from '../animations/variants';
import { CanvaDots } from './CanvaDecor';
import styles from './Hero.module.css';

const chartBars = [65, 85, 45, 72, 90, 58];

function CountUp({ target, delay, suffix = '' }: { target: number; delay: number; suffix?: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const startTime = performance.now();
      const duration = 1500;

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.floor(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, delay]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.topMeta}>
        <span>TalentLink · UTEQ</span>
        <span>page 02</span>
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span className={styles.eyebrow} variants={fadeInLeft}>
            feria de tecnología 2026
          </motion.span>

          <motion.h1 className={styles.title} variants={fadeInLeft}>
            Conecta
            <br />
            Talento
          </motion.h1>

          <motion.p className={styles.subtitle} variants={fadeInLeft}>
            Plataforma inteligente de bolsa de empleos con análisis de CV por IA,
            notificaciones en tiempo real y gestión completa para postulantes,
            empresas y administradores.
          </motion.p>

          <motion.div className={styles.actions} variants={fadeInLeft}>
            <a href="#features" className="canva-btn-primary">Explorar</a>
            <a href="#stack" className="canva-btn-outline">Stack técnico</a>
          </motion.div>

          <motion.div className={styles.dotsWrap} variants={fadeInLeft}>
            <CanvaDots count={2} />
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.mockupCol}
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.mockupFrame}>
            <div className={styles.laptop}>
              <div className={styles.laptopScreen}>
                <div className={styles.dashboard}>
                  <aside className={styles.sidebar}>
                    <div className={styles.sidebarLogo} />
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={styles.sidebarItem} style={{ opacity: 1 - i * 0.12 }} />
                    ))}
                  </aside>
                  <main className={styles.dashboardMain}>
                    <div className={styles.kpiRow}>
                      {[
                        { label: 'Postulaciones', value: 128, suffix: '' },
                        { label: 'Match IA', value: 87, suffix: '%' },
                        { label: 'Vacantes', value: 42, suffix: '' },
                      ].map((kpi) => (
                        <div key={kpi.label} className={styles.kpiCard}>
                          <span className={styles.kpiLabel}>{kpi.label}</span>
                          <span className={styles.kpiValue}>
                            <CountUp target={kpi.value} delay={800} suffix={kpi.suffix} />
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className={styles.chartArea}>
                      <div className={styles.chartBars}>
                        {chartBars.map((h, i) => (
                          <motion.div
                            key={i}
                            className={styles.bar}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                          />
                        ))}
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
