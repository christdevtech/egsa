import Image from "next/image";
import styles from "./Achievements.module.css";
import { Achievement } from "@/types";
import { FaTrophy } from "react-icons/fa";

interface AchievementsProps {
  achievements: Achievement[];
}

export default function Achievements({ achievements }: AchievementsProps) {
  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" className={`section-padding ${styles.achievements}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="heading-md">Achievements &amp; Milestones</h2>
          <p className={`text-lg ${styles.subtitle}`}>
            A track record of excellence that speaks for itself — recent accolades
            and transformative initiatives by EGSAOSA.
          </p>
        </div>

        <div className={styles.grid}>
          {achievements.map((item, idx) => (
            <div key={idx} className={styles.card}>
              {item.image && (
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
              <div className={styles.content}>
                <div className={styles.iconRow}>
                  <span className={styles.icon}><FaTrophy /></span>
                  {item.year && <span className={styles.year}>{item.year}</span>}
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
