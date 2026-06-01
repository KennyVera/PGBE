/**
 * WhatIs — Problema y solución con layout split estilo Canva.
 */
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { fadeInLeft, fadeInRight, staggerContainer } from '../animations/variants';
import SectionHeader from './SectionHeader';
import styles from './WhatIs.module.css';

const benefits = [
  'Conexión directa entre talento y empresas verificadas',
  'Análisis de compatibilidad con IA en cada postulación',
  'Notificaciones en tiempo real vía WebSocket',
  'Gestión multi-rol con seguridad enterprise',
];

const steps = [
  { emoji: '📝', title: 'Registro y verificación', num: 1 },
  { emoji: '🤖', title: 'Análisis IA del CV', num: 2 },
  { emoji: '✅', title: 'Match y contratación', num: 3 },
];

export default function WhatIs() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.wrap}>
        <SectionHeader
          page="page 03"
          eyebrow="¿Qué es TalentLink?"
          title="Problema y Solución"
          align="left"
        />

        <div className={styles.container}>
          <motion.div
            className={styles.textCol}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div className={styles.block} variants={fadeInLeft}>
              <h3 className={styles.blockTitle}>El problema</h3>
              <p className={styles.blockText}>
                Los postulantes envían CVs sin saber si realmente encajan con la oferta.
                Las empresas reciben cientos de candidatos sin herramientas para filtrar
                eficientemente. Los administradores carecen de visibilidad y control del ecosistema.
              </p>
            </motion.div>

            <motion.div className={styles.block} variants={fadeInLeft}>
              <h3 className={styles.blockTitle}>La solución</h3>
              <p className={styles.blockText}>
                TalentLink unifica postulantes, empresas y administradores en un ecosistema
                digital con IA integrada, auditoría completa y comunicación en tiempo real.
              </p>
              <ul className={styles.list}>
                {benefits.map((item) => (
                  <li key={item}>
                    <CheckCircle size={18} className={styles.checkIcon} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className={styles.glassCard}>
              <h4 className={styles.cardTitle}>Cómo funciona</h4>
              {steps.map((step, i) => (
                <div key={step.num} className={styles.step}>
                  <div className={styles.stepNum}>{step.num}</div>
                  <div className={styles.stepContent}>
                    <span className={styles.stepEmoji}>{step.emoji}</span>
                    <span className={styles.stepTitle}>{step.title}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={styles.stepArrow} aria-hidden="true">↓</div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
