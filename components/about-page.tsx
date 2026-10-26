"use client";

import { ArrowUpRight, Clock3, MapPin, ShieldCheck } from "lucide-react";
import SiteFrame from "./site-frame";
import TestimonialCarousel from "./testimonial-carousel";
import { BackHome, PageContact } from "./page-sections";

export default function AboutPage() {
  return <SiteFrame currentPage="about">{() => (
    <main id="main" className="inner-page about-page">
      <div className="container"><BackHome /></div>
      <section className="container inner-hero about-page-hero" aria-labelledby="illiana-title">
        <div className="inner-hero-copy">
          <h1 id="illiana-title">Hi, I’m Illiana.<br /><em>I’m glad you’re here.</em></h1>
          <p>I believe great therapy goes beyond building skills. It means empowering families, collaborating with educators, and helping every child feel confident, supported, and excited to learn.</p>
          <p>As a speech-language pathologist and founder of Lumina, I work with children and teens ages 4–18 and the families who know them best.</p>
          <div className="signature">Illiana Falkenstern<span>CCC-SLP · Founder, Lumina</span></div>
        </div>
        <div className="about-visual">
          <div className="about-photo"><img src="/images/illiana-about.jpeg" width="3000" height="2400" alt="Illiana Falkenstern, speech-language pathologist, smiling in a brown blazer" fetchPriority="high" /></div>
          <div className="about-photo-note"><span>Listening comes first.</span><em>We’ll build from there.</em></div>
        </div>
      </section>
      <div className="trust-strip"><div className="container trust-inner">
        <p>Expertise you can trust.<br /><em>Care you can feel.</em></p>
        <div><ShieldCheck aria-hidden="true" /><span>ASHA-certified<br /><strong>CCC-SLP</strong></span></div>
        <div><Clock3 aria-hidden="true" /><span>Experience that matters<br /><strong>13 years in practice</strong></span></div>
        <div><MapPin aria-hidden="true" /><span>Rooted in our community<br /><strong>Illinois licensed</strong></span></div>
      </div></div>
      <section className="container section inner-split" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Who I am.<br /><em>Here for your child.</em></h2>
        <div>
          <p>With 13 years of experience as a school-based and clinical speech-language pathologist, I bring a well-rounded understanding of how children develop communication skills across different environments.</p>
          <p>This breadth of experience helps me see the whole picture: your child’s strengths, areas of need, everyday challenges, and opportunities for meaningful progress.</p>
          <h3 className="source-subheading">Credentials & professional background</h3>
          <dl className="credential-list">
            <div><dt>CCC-SLP</dt><dd>Certificate of Clinical Competence in Speech-Language Pathology from the American Speech-Language-Hearing Association (ASHA).</dd></div>
            <div><dt>Illinois licensed</dt><dd>Licensed to practice speech-language pathology in the state of Illinois.</dd></div>
            <div><dt>TEFL certificate</dt><dd>Certified in Teaching English as a Foreign Language.</dd></div>
          </dl>
        </div>
      </section>
      <section className="care-band" id="my-approach" aria-labelledby="illiana-approach-heading"><div className="container care-layout">
        <div><h2 id="illiana-approach-heading">A bridge between<br /><em>home and school.</em></h2><p>Understanding school services and coordinating care can feel overwhelming. Having worked within the school system, I understand those challenges and want to help your family feel informed and supported.</p><a className="text-link" href="/services/">Explore how I can help <ArrowUpRight size={17} aria-hidden="true" /></a></div>
        <div className="approach-principles">
          <div><h3>Understanding the IEP process</h3><p>I help families navigate their child’s Individualized Education Program (IEP), understand their communication needs, and share concerns with the school team so they can advocate for meaningful support.</p></div>
          <div><h3>Reports with practical next steps</h3><p>My evaluation reports include clear, actionable recommendations that school-based therapists can use in the educational setting, connecting the findings to your child’s everyday needs.</p></div>
          <div><h3>Working together, with your permission</h3><p>With your permission, I can share reports with your child’s school therapist and collaborate with educators and other providers. Together, we can connect support across home, school, and therapy.</p></div>
        </div>
      </div></section>
      <section className="container section inner-split" aria-labelledby="engaging-heading">
        <h2 id="engaging-heading">Making therapy<br /><em>engaging & fun.</em></h2>
        <div>
          <p>My background includes four years as a teletherapist, combining clinical expertise with creative, technology-based approaches to learning. I come prepared with engaging digital resources, virtual games, and activities tailored to each child’s interests and goals.</p>
          <p>Whether we meet online or in your home, I want your child to feel comfortable, motivated, and excited to participate. Their individual communication style and strengths help shape our sessions, with a focus on skills they can use in everyday life.</p>
        </div>
      </section>
      <section className="testimonial-section about-testimonials" aria-labelledby="about-colleagues-heading"><div className="container testimonial-inner"><div className="testimonial-label"><h2 id="about-colleagues-heading">What colleagues say</h2></div><TestimonialCarousel /></div></section>
      <PageContact title={<>Your child’s progress<br /><em>is a team effort.</em></>}>You know your child best. I bring clinical experience, practical guidance, and a collaborative approach. Let’s find the next step together.</PageContact>
    </main>
  )}</SiteFrame>;
}
