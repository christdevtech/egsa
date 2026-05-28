import styles from "./AlumniSection.module.css";
import { AlumniContent } from "@/types";
import { FaUsers } from "react-icons/fa";

interface AlumniSectionProps {
  content: AlumniContent;
}

export default function AlumniSection({ content }: AlumniSectionProps) {
  if (!content || content.registeredSets.length === 0) return null;

  return (
    <section id="alumni" className={`section-padding ${styles.alumni}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="heading-md">Alumni Network</h2>
          <p className={`text-lg ${styles.subtitle}`}>{content.intro}</p>
        </div>

        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={styles.statIcon}><FaUsers /></span>
            <span className={styles.statNumber}>{content.registeredSets.length}</span>
            <span className={styles.statLabel}>Registered Sets</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>
              {content.registeredSets[content.registeredSets.length - 1] - content.registeredSets[0] + 1}+
            </span>
            <span className={styles.statLabel}>Years of Legacy</span>
          </div>
        </div>

        <div className={styles.setsGrid}>
          {content.registeredSets.map((year) => (
            <div key={year} className={styles.yearBadge}>
              <span className={styles.yearLabel}>Class of</span>
              <span className={styles.yearValue}>{year}</span>
            </div>
          ))}
        </div>

        <p className={styles.cta}>
          Is your set not listed? <strong>Get involved</strong> — register your
          set and join the EGSAOSA family today.
        </p>
      </div>
    </section>
  );
}
