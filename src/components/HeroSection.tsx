"use client";

import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import { HeroContent, StrategicPillar } from "@/types";

interface HeroSectionProps {
  content: HeroContent;
  pillars: StrategicPillar[];
}

export default function HeroSection({ content, pillars }: HeroSectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(content.countdownDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [content.countdownDate]);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <div className={styles.textContent}>
          <h1 className="heading-lg">{content.headline}</h1>
          <p className="text-lg">{content.subHeadline}</p>
          <div className={styles.actions}>
            <a href="#contact" className="btn-primary">{content.primaryCta}</a>
            <a href="#legacy" className="btn-secondary" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "white", borderColor: "white" }}>
              {content.secondaryCta}
            </a>
          </div>
        </div>

        <div className={styles.countdownCard}>
          <h3>Countdown to Grand Finale</h3>
          <div className={styles.timer}>
            <div className={styles.timeUnit}>
              <span className={styles.number}>{timeLeft.days}</span>
              <span className={styles.label}>Days</span>
            </div>
            <div className={styles.timeUnit}>
              <span className={styles.number}>{timeLeft.hours}</span>
              <span className={styles.label}>Hours</span>
            </div>
            <div className={styles.timeUnit}>
              <span className={styles.number}>{timeLeft.minutes}</span>
              <span className={styles.label}>Minutes</span>
            </div>
            <div className={styles.timeUnit}>
              <span className={styles.number}>{timeLeft.seconds}</span>
              <span className={styles.label}>Seconds</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.pillarsWrapper}>
        <div className={`container ${styles.pillars}`}>
          {pillars.map((pillar, index) => (
            <div key={index} className={styles.pillarCard}>
              <h4>{pillar.title}</h4>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
