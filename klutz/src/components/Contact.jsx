// src/components/Contact.jsx

import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">

      {/* TOP */}

      <div className="contact-top">

        <div className="contact-left-heading">

          <span className="contact-tag">
            CONTACT KLTUZ
          </span>

          <h1>
            Let’s build
            immersive
            experiences.
          </h1>

        </div>

        <p className="contact-description">
          Reach out for collaborations,
          support, partnerships, or
          premium product inquiries.
        </p>

      </div>

      {/* MAIN */}

      <div className="contact-container">

        {/* LEFT INFO */}

        <div className="contact-info">

          <div className="info-card">
            <span>Email</span>
            <h3>support@kltuz.com</h3>
          </div>

          <div className="info-card">
            <span>Phone</span>
            <h3>+91 98765 43210</h3>
          </div>

          <div className="info-card">
            <span>Location</span>
            <h3>Mumbai, India</h3>
          </div>

        </div>

        {/* FORM */}

        <form className="contact-form">

          <div className="input-group">
            <label>Name</label>

            <input
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Message</label>

            <textarea
              rows="6"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}