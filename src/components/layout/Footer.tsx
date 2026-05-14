import Link from "next/link";
import styles from "./Footer.module.css";
import { FooterContent, NavItem } from "@/types";

interface FooterProps {
  content: FooterContent;
  navItems: NavItem[];
}

export default function Footer({ content, navItems }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>
            EGSA <span className={styles.highlight}>@ 70</span>
          </h2>
          <p className={styles.motto}>&quot;{content.motto}&quot;</p>
        </div>

        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className="container flex-center" style={{ justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <p>{content.copyright}</p>
          <p>Designed & Developed by {content.developer}</p>
        </div>
      </div>
    </footer>
  );
}
