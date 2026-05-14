import Image from "next/image";
import styles from "./AboutSection.module.css";
import { AboutContent } from "@/types";
import { FaQuoteLeft } from "react-icons/fa";

export default function AboutSection({ content }: { content: AboutContent }) {
  return (
    <section id="about" className={`section-padding ${styles.about}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="heading-md">Our Heritage</h2>
          <div className={styles.mottoBadge}>Motto: {content.motto}</div>
        </div>
        
        <p className={`text-lg ${styles.heritageText}`}>
          {content.heritage}
        </p>

        {content.image && (
          <div style={{ position: "relative", width: "100%", height: "400px", marginBottom: "4rem", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
            <Image src={content.image} alt="Leadership Team" fill style={{ objectFit: "cover" }} />
          </div>
        )}

        <h3 className={styles.leadershipHeading}>Leadership Messages</h3>
        
        <div className="grid-3">
          {content.leadershipMessages.map((msg, idx) => (
            <div key={idx} className={styles.messageCard}>
              <div className={styles.quoteIcon}><FaQuoteLeft /></div>
              <p className={styles.message}>&quot;{msg.message}&quot;</p>
              <div className={styles.author}>
                <h4>{msg.name}</h4>
                <span>{msg.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
