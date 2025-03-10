"use client"

import { useState } from "react"
import "../styles/TestimonialSection.css"

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Web Developer",
      image: "",
      text: "LearnHub completely transformed my career. The web development courses were comprehensive and practical. I landed my dream job just two months after completing the program!",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Data Scientist",
      image: "",
      text: "The data science track on LearnHub is exceptional. The instructors explain complex concepts in an easy-to-understand way. The hands-on projects helped me build a strong portfolio.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UX Designer",
      image: "",
      text: "As someone transitioning into UX design, LearnHub provided everything I needed. The course material was up-to-date with industry standards, and the community support was invaluable.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonial-section">
      <div className="section-header">
        <h2>What Our Students Say</h2>
        <p>Success stories from our community of learners</p>
      </div>

      <div className="testimonial-container">
        <button className="testimonial-nav prev" onClick={prevTestimonial}>
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="testimonial-content">
          <div className="testimonial-image">
            <img src={testimonials[activeIndex].image || "/placeholder.svg"} alt={testimonials[activeIndex].name} />
          </div>
          <div className="testimonial-text">
            <p>"{testimonials[activeIndex].text}"</p>
            <div className="testimonial-author">
              <h4>{testimonials[activeIndex].name}</h4>
              <p>{testimonials[activeIndex].role}</p>
            </div>
          </div>
        </div>

        <button className="testimonial-nav next" onClick={nextTestimonial}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection

