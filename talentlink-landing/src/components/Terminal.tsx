/**
 * Terminal — Log ficticio con efecto typewriter para la sección de seguridad.
 */
import { useState, useEffect } from 'react';
import styles from './Terminal.module.css';

const logLines = [
  '[2026-05-31 09:42:11] LOGIN  user@empresa.com (Chrome/Win · 190.25.x.x)',
  '[2026-05-31 09:43:02] JWT_ISSUED  session_id: a3f9b2c1...',
  '[2026-05-31 09:55:18] ROLE_SWITCH → role_empresa_ruc0912',
  '[2026-05-31 10:01:33] POSTULACION_CREATED  offer_id: 204',
  '[2026-05-31 10:15:00] AI_ANALYSIS  match: 87% | status: OK',
  '[2026-05-31 10:22:41] LOGOUT  session closed',
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (visibleLines >= logLines.length) return;

    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, 600);

    return () => clearTimeout(timer);
  }, [visibleLines]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <div className={styles.terminal}>
      <div className={styles.header}>
        <span className={styles.dot} style={{ background: '#ef4444' }} />
        <span className={styles.dot} style={{ background: '#f59e0b' }} />
        <span className={styles.dot} style={{ background: '#22c55e' }} />
        <span className={styles.title}>audit.log</span>
      </div>
      <div className={styles.body}>
        {logLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={styles.line}>
            {line}
          </div>
        ))}
        {visibleLines < logLines.length && (
          <span className={`${styles.cursor} ${showCursor ? styles.visible : ''}`}>▋</span>
        )}
      </div>
    </div>
  );
}
