"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navigation.module.css";
import { NavItem } from "@/types";

interface NavigationProps {
  items: NavItem[];
}

export default function Navigation({ items }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/logo.png" 
            alt="EGSA 70th Anniversary" 
            width={80} 
            height={80} 
            className={styles.logoImage} 
          />
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            {items.map((item, index) => (
              <li key={index}>
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className={styles.mobileToggle} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`} />
        </button>
      </div>
    </header>
  );
}
