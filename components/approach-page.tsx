"use client";

import { ArrowUpRight, Clock3, Heart, Laptop } from "lucide-react";
import { fees } from "../lib/fees";
import SiteFrame from "./site-frame";
import { BackHome, PageContact } from "./page-sections";

export default function ApproachPage() {
  return <SiteFrame currentPage="our-approach">{() => (
    <main id="main" className="inner-page approach-page">
      <div className="container"><BackHome /></div>
      <section className="container inner-hero" aria-labelledby="approach-title">
        <div className="inner-hero-copy">
          <h1 id="approach-title">Why Lumina?<br /><em>Care that fits your family.</em></h1>
          <p>Your family’s schedule, goals, and needs matter. At Lumina Speech and Development, I make accessing speech-language services simpler, more convenient, and personalized to your child.</p>
          <a className="button" href="/get-started/">Find the right fit <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
        <div className="inner-hero-visual">
          <img src="/images/social-communication.jpg" width="1024" height="1024" alt="Children and an adult taking turns in a game" fetchPriority="high" />
          <p>Personalized care. <em>Flexible options.</em></p>
        </div>
      </section>
      <section className="care-band" aria-labelledby="family-heading"><div className="container care-layout">
        <div><h2 id="family-heading">Therapy that fits<br /><em>your family.</em></h2><p>Between school, extracurricular activities, and family commitments, life gets busy. Therapy should fit into your family’s routine, not add more stress to it.</p></div>
        <div className="care-options">
          <div><Clock3 size={24} strokeWidth={1.3} aria-hidden="true" /><div><h3>Evening & weekend options</h3><p>Evening appointments accommodate busy school-day schedules. Weekend sessions are available upon request, based on availability.</p></div></div>
          <div><Heart size={24} strokeWidth={1.3} aria-hidden="true" /><div><h3>In-home care</h3><p>Therapy within my designated Chicago service area, in a familiar setting where your child may feel more relaxed and confident.</p></div></div>
          <div><Laptop size={25} strokeWidth={1.3} aria-hidden="true" /><div><h3>Interactive telehealth</h3><p>Virtual sessions from the comfort of home, with games and digital activities tailored to your child’s goals.</p><a className="text-link" href="/get-started/#visit-details">View locations & availability <ArrowUpRight size={16} aria-hidden="true" /></a></div></div>
        </div>
      </div></section>
      <section className="container section inner-split" aria-labelledby="simple-payment-heading">
        <h2 id="simple-payment-heading">Simple, transparent<br /><em>payment.</em></h2>
        <div><p>Lumina operates outside insurance networks and does not directly bill insurance providers. This keeps payment straightforward and the focus on your child’s individual needs and goals.</p><p>A superbill is available upon request for you to submit to your insurer for possible out-of-network reimbursement. Coverage is determined by your plan, and reimbursement is not guaranteed.</p><p>You’ll know the cost of services upfront, so you can make informed decisions about your child’s care.</p><a className="text-link" href="/fees/">See fees & insurance information <ArrowUpRight size={17} aria-hidden="true" /></a></div>
      </section>
      <section className="care-band" aria-labelledby="assessment-heading"><div className="container care-layout">
        <div><h2 id="assessment-heading">Evaluations from<br /><em>the comfort of home.</em></h2><p>Getting answers about your child’s speech and language needs shouldn’t have to mean navigating another complicated appointment.</p></div>
        <div><p>Using the Q-global and Q-interactive assessment platforms, I can provide in-home and virtual evaluations when appropriate, based on the assessment being administered and its testing requirements.</p><p>After the evaluation, I’ll discuss the findings and recommendations with you so we can determine whether services are appropriate and develop a plan tailored to your child’s needs.</p><p>Virtual and in-home assessment options depend on the specific evaluation, clinical considerations, and standardized administration requirements.</p><a className="text-link" href="/services/#evaluation">Learn about evaluations <ArrowUpRight size={17} aria-hidden="true" /></a></div>
      </div></section>
      <section className="container section source-photo-layout" aria-labelledby="consistent-heading">
        <figure className="source-photo"><img src="/images/phonemic-awareness.jpg" width="1024" height="1018" alt="A child matching wooden letters during a sound-awareness activity" loading="lazy" /></figure>
        <div><h2 id="consistent-heading">Plan ahead.<br /><em>Save on care.</em></h2><p>Consistency is an important part of progress. Lumina offers a {fees.packageDiscountPercent}% discount on eligible prepaid 12-week therapy packages to help families plan ahead and budget for ongoing care.</p><p>During intake, we’ll discuss a regular therapy schedule around your child’s individualized plan and confirm the package’s session count, session lengths, and makeup terms.</p><a className="text-link" href="/fees/#packages-heading">Explore 12-week therapy packages <ArrowUpRight size={17} aria-hidden="true" /></a></div>
      </section>
      <PageContact title={<>Care that works<br /><em>for your family.</em></>}>Every child’s journey is unique. My goal is to make care more accessible, flexible, and centered on your child’s growth and development.</PageContact>
    </main>
  )}</SiteFrame>;
}
