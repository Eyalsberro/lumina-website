"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, MoveUpRight, X } from "lucide-react";

const instagram = "https://www.instagram.com/luminaspeechanddevelopment/";
const linkedin = "https://www.linkedin.com/in/illiana-falkenstern";

function Brand() {
  return (
    <a
      className="brand"
      href="/#home"
      aria-label="Lumina Speech and Development, home"
    >
      <img
        className="brand-logo"
        src="/images/lumina-logo.png"
        alt="Lumina Speech and Development"
        width="1254"
        height="1254"
      />
    </a>
  );
}

type SiteFrameProps = {
  children: () => ReactNode;
  currentPage?: "home" | "fees" | "services" | "about" | "our-approach" | "get-started";
};

export default function SiteFrame({
  children,
  currentPage = "home",
}: SiteFrameProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="announcement">
        <span>A brighter beginning for every voice.</span>
      </div>
      <header className="site-header" id="page-top">
        <div className="container header-inner">
          <Brand />
          <nav
            className={`navigation ${menuOpen ? "is-open" : ""}`}
            id="main-navigation"
            aria-label="Main navigation"
          >
            {[
              ["Services", "/services/"],
              ["Meet Illiana", "/about/"],
              ["Our approach", "/our-approach/"],
              ["Fees", "/fees/"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                aria-current={
                  href === `/${currentPage}/` ? "page" : undefined
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              className="button button-small nav-booking"
              href="/get-started/"
              aria-current={currentPage === "get-started" ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              Let’s connect <ArrowUpRight size={16} />
            </a>
          </nav>
          <button
            className="menu-toggle"
            id="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {children()}

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <Brand />
            <p>
              Helping every child find their voice.
              <br />
              And their own way to shine.
            </p>
            <div className="footer-socials" role="group" aria-label="Social profiles">
            <a
              className="social-link"
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lumina on Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
            <a
              className="social-link"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Illiana Falkenstern on LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8" cy="8" r="1" fill="currentColor" stroke="none" />
                <path d="M8 11v6m4 0v-6m0 3a3 3 0 0 1 6 0v3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Lumina Speech and Development
            </span>
            <span>Illiana Falkenstern, CCC-SLP</span>
            <a href="#page-top">
              Back to top <MoveUpRight size={13} />
            </a>
          </div>
        </div>
      </footer>


    </>
  );
}
