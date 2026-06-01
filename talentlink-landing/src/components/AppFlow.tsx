/**
 * AppFlow — Flujos horizontales del aplicativo con recuadros y flechas por proceso.
 */
import { motion } from 'framer-motion';
import {
  Building2, ShieldCheck, Briefcase, UserPlus, FileCheck,
  Search, Upload, Brain, Bell, ClipboardCheck, ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../animations/variants';
import SectionHeader from './SectionHeader';
import styles from './AppFlow.module.css';

interface FlowStep {
  label: string;
  desc: string;
  icon: LucideIcon;
}

interface FlowTrack {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  accent: string;
  steps: FlowStep[];
}

const flows: FlowTrack[] = [
  {
    title: 'Empresa y vacantes',
    subtitle: 'Desde el registro hasta la oferta publicada',
    icon: Building2,
    accent: 'green',
    steps: [
      { label: 'Registro empresa', desc: 'La empresa crea su cuenta en la plataforma', icon: UserPlus },
      { label: 'Revisión admin', desc: 'El administrador aprueba o rechaza el registro', icon: ShieldCheck },
      { label: 'Publica vacante', desc: 'Define puesto, habilidades y requisitos', icon: Briefcase },
      { label: 'Validación oferta', desc: 'Admin aprueba o rechaza la publicación', icon: FileCheck },
      { label: 'Oferta activa', desc: 'Visible para postulantes en el sistema', icon: ClipboardCheck },
    ],
  },
  {
    title: 'Postulante',
    subtitle: 'Del perfil al análisis inteligente de compatibilidad',
    icon: Search,
    accent: 'gold',
    steps: [
      { label: 'Registro postulante', desc: 'Crea cuenta y accede al ecosistema', icon: UserPlus },
      { label: 'Perfil y CV', desc: 'Completa datos y sube CV en PDF', icon: Upload },
      { label: 'Busca vacante', desc: 'Explora ofertas internas y JSearch', icon: Search },
      { label: 'Postulación', desc: 'Envía candidatura a la oferta elegida', icon: Briefcase },
      { label: 'Análisis Gemini', desc: 'IA calcula match, fortalezas y brechas', icon: Brain },
      { label: 'Notificación', desc: 'Resultado en tiempo real vía WebSocket', icon: Bell },
    ],
  },
  {
    title: 'Administrador',
    subtitle: 'Control, validación y trazabilidad del ecosistema',
    icon: ShieldCheck,
    accent: 'dark',
    steps: [
      { label: 'Inicio de sesión', desc: 'Auth JWT con registro de IP y dispositivo', icon: ShieldCheck },
      { label: 'Valida empresas', desc: 'Aprueba o rechaza registros pendientes', icon: Building2 },
      { label: 'Valida ofertas', desc: 'Supervisa vacantes antes de publicar', icon: FileCheck },
      { label: 'Auditoría', desc: 'Trazabilidad de acciones y sesiones', icon: ClipboardCheck },
    ],
  },
];

function FlowArrow() {
  return (
    <div className={styles.arrow} aria-hidden="true">
      <motion.div
        className={styles.arrowLine}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />
      <ArrowRight size={18} className={styles.arrowIcon} />
    </div>
  );
}

function FlowTrackRow({ track, index }: { track: FlowTrack; index: number }) {
  const TrackIcon = track.icon;

  return (
    <motion.article
      className={`${styles.track} ${styles[`accent${track.accent.charAt(0).toUpperCase() + track.accent.slice(1)}`]}`}
      variants={fadeInUp}
      custom={index}
    >
      <div className={styles.trackHeader}>
        <div className={styles.trackIconWrap}>
          <TrackIcon size={22} />
        </div>
        <div>
          <h3 className={styles.trackTitle}>{track.title}</h3>
          <p className={styles.trackSubtitle}>{track.subtitle}</p>
        </div>
      </div>

      <div className={styles.trackScroll}>
        <div className={styles.stepsRow}>
          {track.steps.map((step, i) => {
            const StepIcon = step.icon;
            return (
              <div key={step.label} className={styles.stepGroup}>
                <motion.div
                  className={styles.stepBox}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                  <div className={styles.stepIconWrap}>
                    <StepIcon size={20} />
                  </div>
                  <h4 className={styles.stepLabel}>{step.label}</h4>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </motion.div>
                {i < track.steps.length - 1 && <FlowArrow />}
              </div>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}

export default function AppFlow() {
  return (
    <section className={styles.section} id="flow">
      <div className={styles.container}>
        <SectionHeader
          page="page 05"
          eyebrow="Funcionalidades"
          title="Flujo del Aplicativo"
          subtitle="Recorre paso a paso cómo interactúan empresa, postulante y administrador dentro del sistema."
        />

        <motion.div
          className={styles.tracks}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {flows.map((track, i) => (
            <FlowTrackRow key={track.title} track={track} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
