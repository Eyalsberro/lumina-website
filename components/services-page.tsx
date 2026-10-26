"use client";

import { ArrowDown, ArrowUpRight, Heart, Laptop } from "lucide-react";
import { referralGuidance, serviceGroups } from "../lib/practice";
import { fees } from "../lib/fees";
import SiteFrame from "./site-frame";
import { BackHome, PageContact, PageFaq } from "./page-sections";

export default function ServicesPage() {
  return <SiteFrame currentPage="services">{() => (
    <main id="main" className="inner-page services-page">
      <div className="container"><BackHome /></div>
      <section className="container inner-hero" aria-labelledby="services-title">
        <div className="inner-hero-copy">
          <h1 id="services-title">Services &<br /><em>specialties.</em></h1>
          <p>I provide individualized speech-language services for children and teens ages 4–18, with a focus on communication, language, literacy-related skills, and social connection.</p>
          <p>Every child has unique strengths and challenges. My goal is to help each one make meaningful progress in a supportive, engaging environment.</p>
          <a className="button" href="/get-started/">Find your starting point <ArrowUpRight size={18} aria-hidden="true" /></a>
          <a className="text-link inner-explore" href="#support">Explore our services <ArrowDown size={16} aria-hidden="true" /></a>
        </div>
        <div className="inner-hero-visual">
          <img src="/images/reading-support.jpg" width="1212" height="860" alt="A child and an adult reading a book together" fetchPriority="high" />
          <p>Find their voice. <em>Build their confidence.</em></p>
        </div>
      </section>
      <section className="container section support-section" id="support" aria-labelledby="support-heading">
        <div className="section-heading"><h2 id="support-heading">What I treat</h2><p className="section-intro">Helping children communicate clearly, understand language, become confident learners, and build meaningful relationships.</p></div>
        <div className="support-groups">{serviceGroups.map((group) => (
          <section className="support-group" key={group.title} aria-labelledby={group.title.split(" ")[0].toLowerCase() + "-heading"}>
            <div className="support-group-intro"><group.icon size={32} strokeWidth={1.2} aria-hidden="true" /><h3 id={group.title.split(" ")[0].toLowerCase() + "-heading"}>{group.title}</h3><p>{group.intro}</p></div>
            <div className="support-descriptions">{group.services.map((service) => <div key={service.title}><h4>{service.title}</h4><p>{service.text}</p></div>)}</div>
          </section>
        ))}</div>
      </section>
      <section className="care-band" id="evaluation" aria-labelledby="evaluation-heading">
        <div className="container source-photo-layout">
          <figure className="source-photo source-photo-portrait"><img src="/images/language-evaluation.jpg" width="455" height="607" alt="A child identifying pictures with an adult during a language assessment" loading="lazy" /></figure>
          <div><h2 id="evaluation-heading">Evaluations in<br /><em>a familiar setting.</em></h2><p>Using the Q-global and Q-interactive assessment platforms, I can provide in-home and virtual evaluations when appropriate, based on the assessment and its testing requirements.</p><p>The initial evaluation includes {fees.evaluation.minutes} minutes of formal and informal assessment and a written report delivered within {fees.evaluation.reportBusinessDays} business days. I’ll discuss the findings and recommendations with you so we can decide whether services are appropriate and plan the next steps.</p><p>Virtual and in-home assessment options depend on the specific evaluation, clinical considerations, and standardized administration requirements.</p><a className="text-link" href="/fees/">View evaluation & treatment fees <ArrowUpRight size={17} aria-hidden="true" /></a></div>
        </div>
      </section>
      <section className="section" aria-labelledby="care-heading"><div className="container care-layout">
        <div><h2 id="care-heading">Thoughtful care.<br /><em>In a familiar space.</em></h2><p>In-home and telehealth options bring support into your child’s everyday life. We’ll discuss which format fits your child’s needs and your family’s schedule.</p></div>
        <div className="care-options">
          <div><Heart size={24} strokeWidth={1.3} aria-hidden="true" /><div><h3>In-home visits</h3><p>Care in select Chicago neighborhoods, with opportunities to connect practice to your child’s own environment.</p><a className="text-link" href="/get-started/#visit-details">See locations & availability <ArrowUpRight size={16} aria-hidden="true" /></a></div></div>
          <div><Laptop size={26} strokeWidth={1.3} aria-hidden="true" /><div><h3>Interactive telehealth</h3><p>Speech-language support online. We’ll confirm your location, availability, and whether telehealth is a suitable option during intake.</p></div></div>
        </div>
      </div></section>
      <section className="container section inner-split" aria-labelledby="fit-heading">
        <div><h2 id="fit-heading">Finding the<br /><em>right fit matters.</em></h2><p>Every child deserves care that matches their needs. Some concerns are best addressed by a specialist or a team of professionals. If your child’s needs fall outside my primary areas of practice, I can help guide you toward an appropriate provider.</p></div>
        <div><h3 className="source-subheading">When another specialist may be a better fit</h3><PageFaq items={referralGuidance.map((item) => ({ question: item.title, answer: <p>{item.text}</p> }))} /></div>
      </section>
      <PageContact title={<>You don’t need all the answers.<br /><em>Just a place to begin.</em></>}>Let’s talk about your child and find the right starting point together.</PageContact>
    </main>
  )}</SiteFrame>;
}
