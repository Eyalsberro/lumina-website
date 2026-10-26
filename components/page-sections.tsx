import { ArrowLeft, ArrowUpRight, ChevronDown, MapPin } from "lucide-react";
import type { ReactNode } from "react";

export function BackHome() {
  return <a className="text-link inner-back" href="/"><ArrowLeft size={16} aria-hidden="true" /> Back to Lumina</a>;
}

export function PageContact({ title, children }: { title: ReactNode; children: ReactNode }) {
  return (
    <section className="contact-section inner-contact" aria-labelledby="page-contact-heading">
      <div className="container contact-inner">
        <h2 id="page-contact-heading">{title}</h2>
        <p>{children}</p>
        <a className="button button-gold" href="/get-started/">Let’s get started <ArrowUpRight size={18} aria-hidden="true" /></a>
        <span className="contact-location"><MapPin size={14} aria-hidden="true" /> Chicago, Illinois · In-home & telehealth</span>
      </div>
    </section>
  );
}

export function PageFaq({ items }: { items: { question: string; answer: ReactNode }[] }) {
  return <div className="inner-faq">{items.map(({ question, answer }) => (
    <details className="faq-item" key={question}>
      <summary>{question}<ChevronDown size={18} aria-hidden="true" /></summary>
      <div className="inner-faq-answer">{answer}</div>
    </details>
  ))}</div>;
}
