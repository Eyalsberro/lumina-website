"use client";

import TestimonialCarousel from "./testimonial-carousel";
import SiteFrame from "./site-frame";
import { neighborhoods, serviceGroups } from "../lib/practice";
import { fees, sessionPriceRange } from "../lib/fees";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Clock3,
  Heart,
  Laptop,
  MapPin,
  MessageCircle,
  Plus,
  ShieldCheck,
} from "lucide-react";

export default function Homepage() {
  return (
    <SiteFrame>
      {() => (
        <main id="main">
          <section
            className="hero container"
            id="home"
            aria-labelledby="hero-heading"
          >
            <div className="hero-copy">
              <h1 id="hero-heading">
                <span className="hero-heading-line">A little support.</span>
                <br />A world of
                <br />
                <em>possibility.</em>
              </h1>
              <p className="hero-description">
                Helping children find their voice, build confidence, and connect
                with the world. Personalized speech-language therapy for ages
                4–18.
              </p>
              <div className="hero-actions">
                <a className="button" href="/get-started/">
                  Schedule an intake call <ArrowUpRight size={18} />
                </a>
                <a className="text-link" href="#services">
                  Explore our services <ArrowDown size={16} />
                </a>
              </div>
              <div className="hero-practical">
                <div className="hero-location">
                  <MapPin size={15} aria-hidden="true" />
                  <span>In-home care in Chicago</span>
                  <span className="tiny-dot" aria-hidden="true" />
                  <span>Telehealth available</span>
                </div>
                {/* <p className="hero-schedule">
                  <Clock3 size={15} aria-hidden="true" />
                  <span>
                    Tuesday & Thursday evenings. Weekend mornings may be available
                    upon request.
                  </span>
                </p>
                <details className="hero-neighborhoods">
                  <summary>
                    See in-home neighborhoods
                    <ChevronDown size={16} aria-hidden="true" />
                  </summary>
                  <p>
                    {neighborhoods.slice(0, -1).join(", ")}, and{" "}
                    {neighborhoods.at(-1)}. Visits depend on location and scheduling.
                  </p>
                </details> */}
              </div>
            </div>
            <div className="hero-visual">
              <div className="portrait-outline" aria-hidden="true" />
              <div className="portrait-arch">
                <img
                  src="/images/speech-practice.jpg"
                  width="1024"
                  height="927"
                  alt="A child practicing speech sounds with a therapist using a mirror and picture cards"
                  fetchPriority="high"
                />
              </div>
              <div className="portrait-caption">
                <span className="caption-icon">
                  <Heart size={21} strokeWidth={1.3} />
                </span>
                <div>
                  <strong>Small steps. Meaningful growth.</strong>
                  <span>Care centered on your child.</span>
                </div>
              </div>
            </div>
          </section>

          <div className="trust-strip">
            <div className="container trust-inner">
              <p>
                Expertise you can trust.
                <br />
                <em>Care you can feel.</em>
              </p>
              <div>
                <ShieldCheck />
                <span>
                  ASHA-certified
                  <br />
                  <strong>CCC-SLP</strong>
                </span>
              </div>
              <div>
                <Clock3 />
                <span>
                  Experience that matters
                  <br />
                  <strong>13 years in practice</strong>
                </span>
              </div>
              <div>
                <MapPin />
                <span>
                  Rooted in our community
                  <br />
                  <strong>Illinois licensed</strong>
                </span>
              </div>
            </div>
          </div>

          <section
            className="section services-section container"
            id="services"
            aria-labelledby="services-heading"
          >
            <div className="section-heading">
              <div>
                <h2 id="services-heading">How I can help</h2>
              </div>
              <p className="section-intro">
                Thoughtful support for the skills that help your child
                communicate, learn, and feel connected.
              </p>
            </div>
            <div className="service-grid">
              {serviceGroups.map((group) => (
                <article className="service-card" key={group.title}>
                  <div className="service-card-top">
                    <span className="service-icon">
                      <group.icon size={31} strokeWidth={1.2} />
                    </span>
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.intro}</p>
                  <div className="service-details">
                    {group.services.map((service) => (
                      <details key={service.title}>
                        <summary>
                          {service.title}
                          <Plus size={15} />
                        </summary>
                        <p>{service.text}</p>
                      </details>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <p className="services-note">
              <span>
                You don’t need to have all the answers. We’ll find the right
                starting point together.
              </span>
              <a
                href="/get-started/"
                aria-label="Talk with Illiana about the right starting point"
              >
                <ArrowRight size={20} />
              </a>
            </p>
          </section>

          <section
            className="about-section"
            id="about"
            aria-labelledby="about-heading"
          >
            <div className="container about-grid">
              <div className="about-visual">
                <div className="about-photo">
                  <img
                    src="/images/illiana-portrait.jpeg"
                    width="3000"
                    height="2400"
                    alt="Illiana Falkenstern, speech-language pathologist, smiling in a brown blazer"
                    loading="lazy"
                  />
                </div>
                <div className="about-photo-note">
                  <span>Clinician. Collaborator.</span>
                  <em>Your child’s champion.</em>
                </div>
              </div>
              <div className="about-copy">
                <h2 id="about-heading">
                  Hi, I’m Illiana.
                  <br />
                  <em>I’m glad you’re here.</em>
                </h2>
                <p>
                  I believe great therapy goes beyond building skills. It means
                  empowering families, collaborating with educators, and helping
                  every child feel confident, supported, and excited to learn.
                </p>
                <p>
                  With 13 years of school-based and clinical experience,
                  including four years as a teletherapist, I understand how
                  children develop communication skills across different environments.
                </p>
                <p>
                  You know your child best. Together, we can create a plan that
                  supports your child’s growth at home, at school, and beyond.
                </p>
                <div className="signature">
                  Illiana Falkenstern<span>CCC-SLP · Founder, Lumina</span>
                </div>
                <a className="text-link about-link" href="/about/">
                  Get to know me & my approach <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </section>

          <section
            className="section container approach-section"
            id="approach"
            aria-labelledby="approach-heading"
          >
            <div className="center-heading">
              <h2 id="approach-heading">Getting started</h2>
              <p>The first step is a conversation. Here’s what comes next.</p>
            </div>
            <div className="steps-grid">
              {[
                [
                  "01",
                  "Let’s have a conversation",
                  "We’ll discuss your concerns, your child’s needs, and whether Lumina is the right fit for your family. I’ll answer your questions and explain the next steps.",
                ],
                [
                  "02",
                  "Understand the whole picture",
                  "When an evaluation is appropriate, I’ll discuss the findings and recommendations with you so we can determine whether services are right for your child.",
                ],
                [
                  "03",
                  "Build a therapy plan",
                  "We’ll develop a plan tailored to your child’s needs, with individualized sessions and activities that support communication at home, at school, and beyond.",
                ],
              ].map(([number, title, text]) => (
                <article className="step" key={number}>
                  <div className="step-number">{number}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="approach-options">
              <span>
                <Heart size={17} /> In-home visits
              </span>
              <span>
                <Laptop size={18} /> Interactive telehealth
              </span>
              <span>
                <Clock3 size={17} /> Evening & weekend options
              </span>
            </div>
            <a className="text-link homepage-approach-link" href="/our-approach/">Why Lumina? Explore our approach <ArrowUpRight size={17} aria-hidden="true" /></a>
          </section>

          <section
            className="testimonial-section"
            aria-labelledby="colleagues-heading"
          >
            <div className="container testimonial-inner">
              <div className="testimonial-label">
                <h2 id="colleagues-heading">What colleagues say</h2>
              </div>
              <TestimonialCarousel />
            </div>
          </section>

          <section
            className="section container practical-section"
            id="fees"
            aria-labelledby="fees-heading"
          >
            <div className="fees-column">
              <h2 id="fees-heading">
                Thoughtful care.
                <br />
                <em>Straightforward fees.</em>
              </h2>
              <p className="fees-intro">
                Lumina is a private-pay practice. Here’s a quick look at the cost
                of care.
              </p>
              <div className="fee-list">
                <div>
                  <strong>Initial evaluation</strong>
                  <b>${fees.evaluation.amount}</b>
                </div>
                <div>
                  <span>
                    <strong>Therapy sessions</strong>
                    <small>30–60 minutes</small>
                  </span>
                  <b>{sessionPriceRange}</b>
                </div>
              </div>
              <a className="text-link fees-summary-link" href="/fees/">
                View all fees & payment details
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="faq-column">
              <h3>Common questions</h3>
              {[
                {
                  question: "Which ages do you work with?",
                  answer:
                    "I provide speech-language services for children and teens ages 4–18. If your child needs a different type of support, I’m happy to help guide you toward an appropriate provider.",
                },
                {
                  question: "Where are in-home visits available?",
                  answer: `In-home visits are available in select Chicago neighborhoods, including ${neighborhoods.slice(0, -1).join(", ")}, and ${neighborhoods.at(-1)}. Availability depends on location and scheduling.`,
                },
                {
                  question: "What does your schedule look like?",
                  answer:
                    "Appointments are available Tuesday and Thursday evenings. Saturday and Sunday mornings may be available upon request. We’ll discuss current availability during your intake call.",
                },
                {
                  question: "Can you work with my child’s school?",
                  answer:
                    "Yes. With your permission, I can share evaluation reports and collaborate with your child’s school therapist or other providers. Consultation and collaboration time is billed in 15-minute increments.",
                },
              ].map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>
                    {item.question}
                    <ChevronDown size={18} />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
              <div className="faq-note">
                <MessageCircle size={20} strokeWidth={1.4} />
                <p>
                  Still have a question?
                  <br />
                  <a className="inline-button" href="/get-started/">
                    Let’s talk it through <ArrowUpRight size={14} />
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section
            className="contact-section"
            id="contact"
            aria-labelledby="contact-heading"
          >
            <div className="container contact-inner">
              <h2 id="contact-heading">Talk with Illiana</h2>
              <p>
                You know your child best. Let’s find the support
                <br className="desktop-break" /> that feels right for your family.
              </p>
              <a className="button button-gold" href="/get-started/">
                Schedule an intake call <ArrowUpRight size={18} />
              </a>
              <span className="contact-location">
                <MapPin size={14} /> Chicago, Illinois · In-home & telehealth
              </span>
            </div>
          </section>
        </main>
      )}
    </SiteFrame>
  );
}
