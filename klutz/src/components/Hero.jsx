// src/components/Hero.jsx

import "./Hero.css";
import headphone from "../assets/headphone.png";

import { useEffect, useRef } from "react";

export default function Hero() {
  const headphoneRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 35;
      const y = (window.innerHeight / 2 - e.clientY) / 35;

      if (headphoneRef.current) {
        headphoneRef.current.style.transform = `
          translate(${x}px, ${y}px)
          rotateY(${x}deg)
          rotateX(${-y}deg)
        `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <section className="hero">

      {/* BACKGROUND GLOW */}
      <div className="hero-bg-circle"></div>

      {/* HUGE TYPOGRAPHY */}
      <div className="hero-text">
        <h1>IMMERSIVE SOUND</h1>

        <h2>ultimate comfort</h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="hero-content">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <span>NEW ARRIVAL</span>

          <h3>KLTUZ AURA X</h3>

          <p>
            High-fidelity sound with luxurious
            comfort and advanced noise cancellation.
          </p>

          <div className="hero-buttons">

            <button className="buy-btn">
              Buy Now
            </button>

                        <a
            href="#features"
            className="explore-btn"
            >
            Explore Features
            </a>

          </div>
        </div>

        {/* HEADPHONE IMAGE */}
        <div className="hero-image-wrapper">

          <img
            ref={headphoneRef}
            src={headphone}
            alt="KLTUZ Headphone"
            className="hero-headphone"
          />

        </div>

        {/* RIGHT STATS */}
        <div className="hero-right">

          <div className="hero-stat">
            <h4>40H</h4>
            <p>Battery Life</p>
          </div>

          <div className="divider"></div>

          <div className="hero-stat">
            <h4>ANC</h4>
            <p>Noise Canceling</p>
          </div>

          <div className="divider"></div>

          <div className="hero-stat">
            <h4>Hi-Fi</h4>
            <p>Premium Sound</p>
          </div>

        </div>
      </div>

      {/* SCROLL TEXT */}
      <div className="scroll-text">

        <span>SCROLL TO EXPLORE</span>

        <div className="scroll-arrow">
          ↓
        </div>

      </div>
    </section>
  );
}