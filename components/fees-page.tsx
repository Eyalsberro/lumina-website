"use client";

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { discountedSessions, fees } from "../lib/fees";
import SiteFrame from "./site-frame";

export default function FeesPage() {
  return (
    <SiteFrame currentPage="fees">
      {() => (
        <main id="main" className="fees-page">
          <div className="container fees-page-content">
            <a className="text-link fees-back-link" href="/#fees">
              <ArrowLeft size={16} aria-hidden="true" /> Back to Lumina
            </a>
            <header className="fees-page-intro">
              <h1>Fees & <em>payment.</em></h1>
              <p>
                I believe families deserve to understand the cost of services,
                what they’re paying for, and how progress will be measured.
                Here are the rates upfront so you can plan for your family’s needs.
              </p>
            </header>

            <div className="fees-page-grid">
              <section className="fees-rates" aria-labelledby="rates-heading">
                <h2 id="rates-heading">Evaluation & session fees</h2>
                <table className="fees-table" aria-labelledby="rates-heading">
                  <thead>
                    <tr>
                      <th scope="col">Service</th>
                      <th scope="col">Length</th>
                      <th scope="col">Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        Initial evaluation
                        <span>Formal and informal assessment; written report within {fees.evaluation.reportBusinessDays} business days</span>
                      </th>
                      <td>{fees.evaluation.minutes} minutes</td>
                      <td>${fees.evaluation.amount}</td>
                    </tr>
                    {fees.sessions.map((session) => (
                      <tr key={session.minutes}>
                        <th scope="row">Therapy session</th>
                        <td>{session.minutes} minutes</td>
                        <td>${session.amount}</td>
                      </tr>
                    ))}
                    <tr>
                      <th scope="row">Consultation & collaboration<span>Communication with school staff or other providers</span></th>
                      <td>Per {fees.consultation.minutes} minutes</td>
                      <td>${fees.consultation.amount}</td>
                    </tr>
                  </tbody>
                </table>
                <p className="fees-table-note">
                  With your permission, Illiana can share evaluation reports and
                  collaborate with your child’s school therapist or other
                  providers. Consultation and collaboration time is billed in{" "}
                  {fees.consultation.minutes}-minute increments.
                </p>

                <section className="fees-packages" aria-labelledby="packages-heading">
                  <h2 id="packages-heading">Save With a 12-Week Therapy Package</h2>
                  <p>
                    Consistency can help children build skills and apply them
                    across settings. A {fees.packageDiscountPercent}% discount
                    is available when eligible treatment sessions are purchased upfront in 12-week blocks.
                  </p>
                  <dl className="package-rates" aria-label="Discounted rates per prepaid treatment session">
                    {discountedSessions.map((session) => <div key={session.minutes}><dt>{session.minutes}-minute session</dt><dd>${session.amount} <span>/ session</span></dd></div>)}
                  </dl>
                  <p>During intake, we’ll discuss your child’s individualized treatment plan and confirm the package’s session count, session lengths, and makeup terms.</p>
                </section>
                <section className="fees-packages" aria-labelledby="progress-heading">
                  <h2 id="progress-heading">Measuring progress & planning next steps</h2>
                  <p>Therapy should have a purpose, clear goals, and a way to evaluate progress. Research and clinical experience suggest that many children can demonstrate measurable gains over a 12-week period, although progress varies depending on the child.</p>
                </section>
              </section>

              <aside className="fees-payment" aria-labelledby="payment-heading">
                <h2 id="payment-heading">Private pay & insurance</h2>
                <p>
                  Lumina is a private-pay practice and does not directly bill
                  insurance providers. A superbill is available upon request
                  for possible out-of-network reimbursement.
                </p>
                <h3>What is a superbill?</h3>
                <p>
                  It’s an itemized receipt you can submit to your insurance plan
                  when requesting reimbursement.
                </p>
                <p>
                  Coverage, eligibility, and reimbursement decisions are made
                  by your insurance provider. Reimbursement is not guaranteed.
                </p>
                <p>
                  Before beginning services, contact your insurer to understand
                  your out-of-network benefits, deductibles, and any limitations.
                </p>
              </aside>
            </div>
          </div>

          <section className="contact-section fees-contact" aria-labelledby="fees-contact-heading">
            <div className="container contact-inner">
              <h2 id="fees-contact-heading">
                Questions about care?
                <br />
                <em>Let’s talk them through.</em>
              </h2>
              <p>
                An intake call is a chance to discuss your child’s needs,
                <br className="desktop-break" /> ask questions, and explore the next step.
              </p>
              <a className="button button-gold" href="/get-started/">
                Schedule an intake call <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </section>
        </main>
      )}
    </SiteFrame>
  );
}
