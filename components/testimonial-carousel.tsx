"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Iesha Smith",
    role: "Student Services Monitor",
    paragraphs: [
      "I had the pleasure of working alongside Illiana Falkenstern and witnessing her dedication to helping children succeed. She consistently demonstrated professionalism, patience, and compassion while creating an engaging and supportive virtual learning environment. Her ability to connect with students and build their confidence in communication is truly remarkable. Illiana’s passion and commitment to providing quality speech and language services make her an excellent choice for any family. I highly recommend her!",
    ],
  },
  {
    name: "Liza Woodward, OTR, IBCLC, M.EDI",
    role: "Occupational Therapist",
    paragraphs: [
      "I had the pleasure of working with Illiana as part of a multidisciplinary team. She is a clinically strong and knowledgeable therapist who approaches her work with professionalism and a clear focus on meeting each child’s individual needs. Her ability to collaborate effectively with other professionals is a real strength.",
    ],
  },
  {
    name: "Sabrina Muhammad",
    role: "Former Virtual Speech Facilitator",
    paragraphs: [
      "I had the pleasure of working alongside Illiana Falkenstern in my role as a Virtual Speech Facilitator. Illiana consistently demonstrated professionalism, patience, compassion, and a genuine dedication to helping students develop their communication skills. Her ability to connect with students, create a positive learning environment, and meet their individual needs made her a wonderful speech-language pathologist to work with.",
      "I truly enjoyed our time working together and would highly recommend her services to families seeking a knowledgeable, caring, and dedicated speech-language pathologist.",
    ],
  },
  {
    name: "Sabrina Diaz, OT",
    role: "Professional colleague",
    paragraphs: [
      "I had the pleasure of working alongside Illiana and can honestly say she is an amazing speech-language pathologist and a wonderful teammate. Her knowledge and experience working within a multidisciplinary team really stand out. She was always someone you could turn to for advice, support, or a helping hand. Her kindness, professionalism, and dedication to her patients made her such a valued colleague. I truly enjoyed working with her and would wholeheartedly recommend her to anyone looking for a knowledgeable and compassionate speech-language pathologist.",
    ],
  },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const move = (direction: number) =>
    setActive(
      (current) =>
        (current + direction + testimonials.length) % testimonials.length,
    );

  return (
    <div
      className="testimonial-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Colleague testimonials"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowRight" ? 1 : -1);
        }
      }}
      onTouchStart={(event) => {
        const touch = event.touches[0];
        touchStart.current = touch
          ? { x: touch.clientX, y: touch.clientY }
          : null;
      }}
      onTouchEnd={(event) => {
        const touch = event.changedTouches[0];
        const start = touchStart.current;
        touchStart.current = null;
        if (!touch || !start) return;
        const dx = touch.clientX - start.x;
        const dy = touch.clientY - start.y;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy))
          move(dx < 0 ? 1 : -1);
      }}
    >
      <div className="testimonial-slides" aria-live="polite" aria-atomic="true">
        {testimonials.map((testimonial, slideIndex) => (
          <div
            className={`testimonial testimonial-slide ${slideIndex === active ? "is-active" : ""}`}
            key={testimonial.name}
            role="group"
            aria-roledescription="slide"
            aria-label={`${slideIndex + 1} of ${testimonials.length}`}
            aria-hidden={slideIndex !== active}
          >
            <Quote size={32} strokeWidth={1} aria-hidden="true" />
            <blockquote>
              {testimonial.paragraphs.map((paragraph, index) => (
                <p key={paragraph}>
                  {index === 0 ? "“" : ""}
                  {paragraph}
                  {index === testimonial.paragraphs.length - 1 ? "”" : ""}
                </p>
              ))}
            </blockquote>
            <p className="testimonial-author">
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="testimonial-controls">
        <div
          className="testimonial-pagination"
          aria-label="Choose a testimonial"
        >
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial from ${item.name}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => setActive(index)}
            >
              <span />
            </button>
          ))}
        </div>
        <span className="testimonial-counter" aria-hidden="true">
          {active + 1} / {testimonials.length}
        </span>
        <div className="testimonial-arrows">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => move(-1)}
          >
            <ArrowLeft size={19} />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => move(1)}
          >
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
    </div>
  );
}
