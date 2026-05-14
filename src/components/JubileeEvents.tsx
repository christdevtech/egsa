import styles from "./JubileeEvents.module.css";
import { JubileeEvent } from "@/types";

export default function JubileeEvents({ events }: { events: JubileeEvent[] }) {
  return (
    <section id="jubilee" className={`section-padding ${styles.eventsSection}`}>
      <div className="container">
        <h2 className="heading-md text-center">70th Jubilee Events</h2>
        <p className={`text-lg text-center ${styles.subtext}`}>
          Join us for a week of celebration, reflection, and looking forward.
        </p>

        <div className={styles.timeline}>
          {events.map((event, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.date}>{event.date}</div>
                <h3 className={styles.title}>{event.title}</h3>
                
                {event.location && (
                  <div className={styles.detail}>
                    <strong>Location:</strong> {event.location}
                  </div>
                )}
                
                {event.status && (
                  <div className={styles.detail}>
                    <span className={styles.statusBadge}>{event.status}</span>
                  </div>
                )}

                {event.highlight && (
                  <div className={styles.highlight}>
                    <strong>Highlight:</strong> {event.highlight}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
