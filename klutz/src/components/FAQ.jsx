// src/components/FAQ.jsx

import "./FAQ.css";
import { useState } from "react";

export default function FAQ() {

  const faqData = [
    {
      question: "Does KLTUZ Aura X support Active Noise Cancellation?",
      answer:
        "Yes. Aura X features adaptive ANC technology that intelligently blocks external noise for a deeply immersive listening experience."
    },

    {
      question: "How long does the battery last?",
      answer:
        "Aura X delivers up to 40 hours of playback on a single charge with ANC enabled."
    },

    {
      question: "Is fast charging supported?",
      answer:
        "Yes. A quick 10-minute charge provides up to 6 hours of listening time."
    },

    {
      question: "Can I use Aura X for gaming and calls?",
      answer:
        "Absolutely. Low-latency audio and premium microphones ensure crystal-clear calls and smooth gaming performance."
    },

    {
      question: "Does it support both Android and iOS?",
      answer:
        "Yes. Aura X works seamlessly with Android, iOS, Windows, and macOS devices."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">

      {/* TOP */}

      <div className="faq-top">

        <span className="faq-tag">
          FAQS
        </span>

        <h1>
          Got questions?
          <br />
          We’ve got answers.
        </h1>

      </div>

      {/* FAQ LIST */}

      <div className="faq-container">

        {faqData.map((item, index) => (

          <div
            className={`faq-item ${
              activeIndex === index ? "active" : ""
            }`}
            key={index}
          >

            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >

              <h3>{item.question}</h3>

              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>

            </div>

            <div
              className={`faq-answer ${
                activeIndex === index ? "show" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}