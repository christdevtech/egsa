import Image from "next/image";
import styles from "./GiveBack.module.css";
import { GiveBackContent } from "@/types";

export default function GiveBack({ content }: { content: GiveBackContent }) {
  return (
    <section id="give-back" className={`section-padding ${styles.giveBack}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="heading-md">Give Back (Support)</h2>
          <p className="text-lg">
            Support our vision and show your pride with the 70th Anniversary
            merchandise.
          </p>
        </div>

        <div className={styles.endowmentCard}>
          <div className={styles.endowmentContent}>
            <h3>The Endowment Fund</h3>
            <p>{content.endowmentFund}</p>
            <button className="btn-primary" style={{ marginTop: "1.5rem" }}>
              Donate Now
            </button>
          </div>
          <div className={styles.endowmentImage} style={{ position: "relative", minHeight: "300px" }}>
            <Image src="/endowment.png" alt="Endowment Fund" fill style={{ objectFit: "cover" }} />
          </div>
        </div>

        <h3 className={styles.merchTitle}>Anniversary Merchandise</h3>
        <div className={styles.merchGrid}>
          {content.merchandise.map((item, index) => (
            <div key={index} className={styles.merchCard}>
              <div className={styles.merchImage}>
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div className={styles.placeholderBox}>[Image]</div>
                )}
                {item.backImage && (
                  <Image
                    src={item.backImage}
                    alt={`${item.name} back`}
                    fill
                    className={styles.backImage}
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <div className={styles.merchInfo}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <button className={styles.preOrderBtn}>Pre-order</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
