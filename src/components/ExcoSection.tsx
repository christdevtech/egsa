import styles from "./ExcoSection.module.css";
import ExcoMemberCard from "./ExcoMemberCard";
import { ExcoMember } from "@/types";

interface ExcoSectionProps {
  members: ExcoMember[];
}

export default function ExcoSection({ members }: ExcoSectionProps) {
  if (!members || members.length === 0) return null;

  // First member is the president (featured)
  const [president, ...others] = members;

  return (
    <section id="exco" className={`section-padding ${styles.exco}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="heading-md">National Executive Committee</h2>
          <p className={`text-lg ${styles.subtitle}`}>
            Meet the dedicated leaders steering our association towards greater
            heights in this landmark jubilee year.
          </p>
        </div>

        {/* President — featured card, centered */}
        <div className={styles.presidentRow}>
          <ExcoMemberCard member={president} featured />
        </div>

        {/* Other officers */}
        <div className={styles.grid}>
          {others.map((member, idx) => (
            <ExcoMemberCard key={idx} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
