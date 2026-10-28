"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { ArrowUpRight } from "lucide-react";
import { instagramProfile, instagramWidgetId } from "../lib/instagram";
import styles from "./instagram-carousel.module.css";

function Instagram({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function InstagramCarousel() {
  const feed = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const [singlePost, setSinglePost] = useState(false);
  const showWidget = Boolean(instagramWidgetId) && !failed;

  useEffect(() => {
    const element = feed.current;
    if (!element) return;
    // Elfsight stretches a lone post across its full width. Keep that state
    // compact, while allowing the carousel to fill the section as posts arrive.
    const update = () => setSinglePost(
      element.querySelectorAll('img[alt="Instagram post by @luminaspeechanddevelopment"]').length === 1,
    );
    const observer = new MutationObserver(update);
    observer.observe(element, { childList: true, subtree: true });
    update();
    return () => observer.disconnect();
  }, [showWidget]);

  return (
    <section className={`section container ${styles.section}`} aria-labelledby="instagram-heading">
      <div className={styles.heading}>
        <div>
          <h2 id="instagram-heading">A little more <em>Lumina.</em></h2>
          <p>Keep up with the latest from Lumina on Instagram.</p>
        </div>
        <a className={`text-link ${styles.profile}`} href={instagramProfile} target="_blank" rel="noopener noreferrer">
          <Instagram size={18} />Follow Lumina <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
      {showWidget ? (
        <div ref={feed} className={`${styles.feed} ${singlePost ? styles.singlePost : ""}`} role="region" aria-label="Latest Instagram posts from Lumina">
          <div className={`elfsight-app-${instagramWidgetId}`} data-elfsight-app-lazy />
          <Script
            id="elfsight-platform"
            src="https://elfsightcdn.com/platform.js"
            strategy="lazyOnload"
            onError={() => setFailed(true)}
          />
          <noscript><p>Visit <a className="prose-link" href={instagramProfile}>Lumina on Instagram</a> to see the latest posts.</p></noscript>
        </div>
      ) : (
        <div className={styles.fallback}>
          <Instagram size={28} />
          <p>See what’s new at Lumina on Instagram.</p>
          <a className="text-link" href={instagramProfile} target="_blank" rel="noopener noreferrer">
            Visit @luminaspeechanddevelopment <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      )}
    </section>
  );
}
