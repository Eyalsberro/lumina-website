"use client";

import { ArrowUpRight, Clock3, Laptop, MapPin, MessageCircle } from "lucide-react";
import { neighborhoods } from "../lib/practice";
import { fees, sessionPriceRange } from "../lib/fees";
import SiteFrame from "./site-frame";
import { BackHome, PageFaq } from "./page-sections";

export default function GetStartedPage() {
  return <SiteFrame currentPage="get-started">{() => (
    <main id="main" className="inner-page get-started-page">
      <div className="container"><BackHome /></div>
      <section className="container inner-hero getting-started-hero" aria-labelledby="start-title">
        <div className="inner-hero-copy"><h1 id="start-title">Intake &<br /><em>scheduling.</em></h1><p>Taking the first step toward speech-language services shouldn’t feel overwhelming. I’m happy to connect with you, learn more about your child’s needs, and discuss the best options for getting started.</p><a className="text-link" href="#next-steps">See what to expect <ArrowUpRight size={17} aria-hidden="true" /></a></div>
        <aside className="intake-panel" aria-labelledby="intake-heading">
          <MessageCircle size={32} strokeWidth={1.2} aria-hidden="true" />
          <h2 id="intake-heading">Let’s find<br /><em>the right fit.</em></h2><p>An initial intake call is a chance to discuss your concerns, your child’s needs, and whether Lumina Speech and Development is the right fit for your family.</p>
          <div className="intake-status"><strong>Your scheduling link goes here.</strong><p>Add your Cal.com or Calendly link here so families can book an intake call.</p></div>
          <a className="text-link" href="https://www.instagram.com/luminaspeechanddevelopment/" target="_blank" rel="noopener noreferrer">Visit Lumina on Instagram <ArrowUpRight size={17} aria-hidden="true" /></a>
          <p className="intake-footnote">Please keep social messages to general questions. Clinical details can be discussed during intake.</p>
        </aside>
      </section>
      <section className="container section next-steps-section" id="next-steps" aria-labelledby="next-heading">
        <div className="section-heading"><h2 id="next-heading">One step at a time.</h2><p className="section-intro">You don’t need to know exactly what your child needs before we talk. We’ll work that out together.</p></div>
        <ol className="intake-steps">
          <li><span className="step-number" aria-hidden="true">01</span><div><h3>Tell me what’s on your mind</h3><p>We’ll talk about your child’s communication, what’s going well, and where you’d like support. Bring your questions—we’ll also discuss care options, location, fees, and current availability.</p><p className="step-detail">Helpful to think about: your child’s age, what you’re noticing, and what you’d like everyday communication to feel like.</p></div></li>
          <li><span className="step-number" aria-hidden="true">02</span><div><h3>Understand the whole picture</h3><p>When an evaluation is appropriate, we’ll explore your child’s strengths and needs, then walk through the findings together. The initial evaluation includes formal and informal assessment, plus a written report delivered within {fees.evaluation.reportBusinessDays} business days.</p><p className="step-detail">Initial evaluation: {fees.evaluation.minutes} minutes · ${fees.evaluation.amount}</p></div></li>
          <li><span className="step-number" aria-hidden="true">03</span><div><h3>Build a plan that fits</h3><p>We’ll use that understanding to create a personalized therapy plan, with engaging sessions and practical guidance for your family. With your permission, collaboration with school teams can help connect care across environments.</p><a className="text-link" href="/services/">Explore our services <ArrowUpRight size={16} aria-hidden="true" /></a></div></li>
        </ol>
      </section>
      <section className="care-band" id="visit-details" aria-labelledby="visit-heading"><div className="container care-layout">
        <div><h2 id="visit-heading">Flexible<br /><em>service options.</em></h2><p>I offer both in-home and telehealth services to help families access individualized speech-language support in a setting that works for them.</p></div>
        <div className="care-options">
          <div><MapPin size={24} strokeWidth={1.3} aria-hidden="true" /><div><h3>In-home neighborhoods</h3><p>{neighborhoods.slice(0, -1).join(", ")}, and {neighborhoods.at(-1)}. Visits depend on location and scheduling.</p></div></div>
          <div><Clock3 size={24} strokeWidth={1.3} aria-hidden="true" /><div><h3>Evening & weekend options</h3><p>Tuesday and Thursday evenings. Saturday and Sunday mornings may be available upon request. We’ll confirm current availability during intake.</p></div></div>
          <div><Laptop size={25} strokeWidth={1.3} aria-hidden="true" /><div><h3>Telehealth</h3><p>With interactive games and engaging digital activities, I work to make online therapy fun, motivating, and tailored to your child’s goals. We’ll confirm your location and whether online sessions are suitable before scheduling.</p></div></div>
        </div>
      </div></section>
      <section className="container section inner-split" aria-labelledby="start-faq-heading">
        <div><h2 id="start-faq-heading">A few things<br /><em>you may be wondering.</em></h2><p>For a closer look at rates and payment, visit our <a className="prose-link" href="/fees/">Fees page</a>.</p></div>
        <PageFaq items={[
          { question: "Which ages do you work with?", answer: <p>Lumina provides speech-language services for children and teens ages 4–18. If your child needs a different type of support, Illiana can help guide you toward an appropriate provider.</p> },
          { question: "Do I need to know which service my child needs?", answer: <p>No. An intake conversation is a chance to share your concerns and ask questions. We’ll discuss the right starting point and whether an evaluation is appropriate.</p> },
          { question: "How much do sessions cost?", answer: <p>Therapy sessions range from {sessionPriceRange} for 30–60 minutes. The initial evaluation is ${fees.evaluation.amount} for {fees.evaluation.minutes} minutes and includes a written report. <a className="prose-link" href="/fees/">See the full fee breakdown</a>.</p> },
          { question: "Do you accept insurance?", answer: <p>Lumina is a private-pay practice. A superbill is available upon request for possible out-of-network reimbursement. Coverage depends on your plan and isn’t guaranteed.</p> },
          { question: "Can you collaborate with my child’s school?", answer: <p>Yes. With your permission, Illiana can share evaluation reports and collaborate with school therapists or other providers. Consultation and collaboration time is ${fees.consultation.amount} per {fees.consultation.minutes} minutes.</p> },
        ]} />
      </section>
      <section className="contact-section inner-contact" aria-labelledby="start-close-heading"><div className="container contact-inner"><h2 id="start-close-heading">Small steps.<br /><em>A world of possibility.</em></h2><p>Get to know the care behind Lumina while scheduling is being connected.</p><a className="button button-gold" href="/about/">Meet Illiana <ArrowUpRight size={18} aria-hidden="true" /></a></div></section>
    </main>
  )}</SiteFrame>;
}
