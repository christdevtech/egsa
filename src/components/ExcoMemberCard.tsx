import Image from "next/image";
import styles from "./ExcoMemberCard.module.css";
import { ExcoMember } from "@/types";

interface ExcoMemberCardProps {
  member: ExcoMember;
  featured?: boolean;
}

export default function ExcoMemberCard({ member, featured }: ExcoMemberCardProps) {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ""}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes={featured ? "(max-width: 768px) 160px, 200px" : "(max-width: 768px) 120px, 160px"}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.info}>
        <h4 className={styles.name}>{member.name}</h4>
        <span className={styles.role}>{member.role}</span>
        {member.bio && <p className={styles.bio}>{member.bio}</p>}
      </div>
    </div>
  );
}
