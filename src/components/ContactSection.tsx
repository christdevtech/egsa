"use client";

import { useState } from "react";
import styles from "./ContactSection.module.css";
import { ContactContent } from "@/types";
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobe, FaMobileAlt } from "react-icons/fa";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactSection({ content }: { content: ContactContent }) {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<{success: boolean, message: string} | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setStatus(null);
    
    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);
    
    setStatus(result);
    setIsPending(false);
    
    if (result.success) {
      e.currentTarget.reset();
    }
  };

  return (
    <section id="contact" className={`section-padding ${styles.contactSection}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <h2 className="heading-md">Get in Touch</h2>
            <p className="text-lg" style={{ marginBottom: "2rem" }}>
              Have questions about the 70th Anniversary? We&apos;d love to hear from you.
            </p>
            
            <div className={styles.detailsList}>
              <div className={styles.detailItem}>
                <div className={styles.icon}><FaMapMarkerAlt /></div>
                <div>
                  <strong>Office Address</strong>
                  <p>{content.address}</p>
                </div>
              </div>
              
              <div className={styles.detailItem}>
                <div className={styles.icon}><FaPhoneAlt /></div>
                <div>
                  <strong>Phone</strong>
                  <p>{content.phone}</p>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.icon}><FaGlobe /></div>
                <div>
                  <strong>Website</strong>
                  <p>{content.web}</p>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.icon}><FaMobileAlt /></div>
                <div>
                  <strong>Socials</strong>
                  <p>{content.socials}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formWrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <h3>Send us a message</h3>
              
              {status && (
                <div className={`${styles.statusMessage} ${status.success ? styles.success : styles.error}`}>
                  {status.message}
                </div>
              )}
              
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required placeholder="John Doe" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required placeholder="john@example.com" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="How can we help?" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required rows={5} placeholder="Your message here..."></textarea>
              </div>

              <button type="submit" className="btn-primary" disabled={isPending} style={{ width: "100%" }}>
                {isPending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
