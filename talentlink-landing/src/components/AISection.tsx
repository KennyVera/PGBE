/**
 * AISection — Sección de IA con red neuronal SVG, flujo de análisis y resultados animados.
 */
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../animations/variants';
import styles from './AISection.module.css';

const flowSteps = [
  { emoji: '📄', title: 'Carga del CV', desc: 'Drag & drop PDF' },
  { emoji: '🔍', title: 'Extracción de texto', desc: 'Parsing del documento' },
  { emoji: '🧠', title: 'Análisis Gemini', desc: 'Valida CV + compara oferta' },
  { emoji: '📊', title: 'Resultado estructurado', desc: 'Score, fortalezas y gaps' },
];

const strengths = ['Spring Boot', 'PostgreSQL', 'REST APIs', 'Java'];
const improvements = ['Docker', 'Kubernetes'];

export default function AISection() {
  const circumference = 2 * Math.PI * 54;
  const matchPercent = 87;
  const strokeOffset = circumference - (matchPercent / 100) * circumference;

  return (
    <section className={styles.section} id="ai">
      <svg className={styles.neuralBg} viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#025a27" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#025a27" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[
          [100, 80], [250, 120], [400, 60], [550, 100], [700, 80],
          [150, 250], [350, 280], [500, 220], [650, 260],
        ].map(([cx, cy], i) => (
          <g key={i}>
            {i > 0 && (
              <motion.line
                x1={([100, 250, 400, 550, 700, 150, 350, 500, 650] as number[])[Math.max(0, i - 1)] ?? cx}
                y1={([80, 120, 60, 100, 80, 250, 280, 220, 260] as number[])[Math.max(0, i - 1)] ?? cy}
                x2={cx}
                y2={cy}
                stroke="rgba(59,130,246,0.2)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
              />
            )}
            <circle cx={cx} cy={cy} r="4" fill="url(#nodeGlow)" />
          </g>
        ))}
        <motion.path
          d="M100,80 L250,120 L400,60 L550,100 L700,80 M150,250 L350,280 L500,220 L650,260 M250,120 L350,280 M400,60 L500,220"
          fill="none"
          stroke="rgba(139,92,246,0.15)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </svg>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.chip}>🧠 Powered by Google Gemini 2.0 Flash</div>
          <h2 className={styles.title}>CV Inteligente con IA</h2>
          <p className={styles.subtitle}>
            No más postulaciones a ciegas. Google Gemini analiza tu CV, lo compara con la oferta
            y te dice exactamente qué tan compatible eres, cuáles son tus fortalezas y qué puedes mejorar.
          </p>
        </div>

        <motion.div
          className={styles.flow}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className={styles.flowLine} aria-hidden="true">
            <motion.div
              className={styles.flowLineFill}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </div>
          {flowSteps.map((step) => (
            <motion.div key={step.title} className={styles.flowStep} variants={scaleIn}>
              <div className={styles.flowIcon}>{step.emoji}</div>
              <h4 className={styles.flowTitle}>{step.title}</h4>
              <p className={styles.flowDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.results}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className={styles.resultCard} variants={fadeInUp}>
            <h4 className={styles.resultTitle}>Match Score</h4>
            <div className={styles.progressRing}>
              <svg viewBox="0 0 120 120" width="120" height="120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                <motion.circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="url(#scoreGrad)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset: strokeOffset }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
                  transform="rotate(-90 60 60)"
                />
                <defs>
                  <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#025a27" />
                    <stop offset="100%" stopColor="#ecb932" />
                  </linearGradient>
                </defs>
              </svg>
              <motion.span
                className={styles.scoreValue}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                87%
              </motion.span>
            </div>
          </motion.div>

          <motion.div className={styles.resultCard} variants={fadeInUp}>
            <h4 className={styles.resultTitle}>Fortalezas</h4>
            <div className={styles.badges}>
              {strengths.map((s, i) => (
                <motion.span
                  key={s}
                  className={styles.badgeGreen}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div className={styles.resultCard} variants={fadeInUp}>
            <h4 className={styles.resultTitle}>Áreas de mejora</h4>
            <div className={styles.badges}>
              {improvements.map((s, i) => (
                <motion.span
                  key={s}
                  className={styles.badgeOrange}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
