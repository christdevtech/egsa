import styles from "./LegacyProjects.module.css";
import { LegacyProjectContent } from "@/types";
import { FaLaptopCode, FaBuilding } from "react-icons/fa";

export default function LegacyProjects({ content }: { content: LegacyProjectContent }) {
  return (
    <section id="legacy" className={`section-padding ${styles.legacySection}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="heading-md">Legacy Projects & Impact</h2>
          <p className="text-lg">
            Witness the transformation of our alma mater through strategic infrastructure and technology initiatives.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}><FaLaptopCode /></div>
              <h3>Empowering Through Technology</h3>
            </div>
            <p className={styles.purpose}>{content.purpose}</p>
            <ul className={styles.itList}>
              {content.itCenters.map((center, index) => (
                <li key={index}>
                  <strong>{center.name}</strong>
                  <span>Donated by: {center.donor}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}><FaBuilding /></div>
              <h3>Infrastructure & Security</h3>
            </div>
            
            <div className={styles.infraGroup}>
              <h4>The &quot;Safe Space&quot; Initiative</h4>
              <p>{content.infrastructure.safeSpace}</p>
            </div>

            <div className={styles.infraGroup}>
              <h4>Completed Projects</h4>
              <p>{content.infrastructure.completed}</p>
            </div>

            <div className={styles.infraGroup}>
              <h4>Upcoming</h4>
              <p className={styles.upcoming}>{content.infrastructure.upcoming}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
