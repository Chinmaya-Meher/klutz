
import "./Features.css";
import headphone from "../assets/headphone.png";

export default function FeatureShowcase() {
  return (
    <section className="feature-showcase">

      {/* TOP */}

      <div className="showcase-top">

        <span>
          FEATURES
        </span>

        <h2>
          Crafted for immersive listening.
        </h2>

      </div>

      {/* MAIN LAYOUT */}

      <div className="showcase-container">

        {/* LEFT FEATURES */}

        <div className="showcase-side left">

          <div className="showcase-item">
            <div className="line"></div>

            <div className="showcase-content">
              <h3>Wireless Freedom</h3>

              <p>
                Advanced Bluetooth 5.3 with
                ultra-low latency performance.
              </p>
            </div>
          </div>

          <div className="showcase-item">
            <div className="line"></div>

            <div className="showcase-content">
              <h3>Premium Audio</h3>

              <p>
                Deep bass and crystal-clear highs
                for studio-grade listening.
              </p>
            </div>
          </div>

          <div className="showcase-item">
            <div className="line"></div>

            <div className="showcase-content">
              <h3>AI Microphone</h3>

              <p>
                Noise-isolated voice pickup for
                calls and gaming.
              </p>
            </div>
          </div>

        </div>

        {/* CENTER */}

        <div className="showcase-center">

          <div className="showcase-glow"></div>

          <img
            src={headphone}
            alt="headphone"
            className="showcase-headphone"
          />

        </div>

        {/* RIGHT FEATURES */}

        <div className="showcase-side right">

          <div className="showcase-item">

            <div className="showcase-content">
              <h3>Noise Cancelling</h3>

              <p>
                Adaptive ANC blocks distractions
                for immersive listening.
              </p>
            </div>

            <div className="line"></div>

          </div>

          <div className="showcase-item">

            <div className="showcase-content">
              <h3>Bluetooth 5.3</h3>

              <p>
                Faster pairing and seamless
                multi-device connectivity.
              </p>
            </div>

            <div className="line"></div>

          </div>

          <div className="showcase-item">

            <div className="showcase-content">
              <h3>Touch Controls</h3>

              <p>
                Smooth touch gestures for music,
                calls and voice assistant.
              </p>
            </div>

            <div className="line"></div>

          </div>

        </div>

      </div>

      {/* PREMIUM CARDS */}

      <div className="premium-cards">

        <div className="premium-card">
          <div className="premium-icon">✦</div>

          <div>
            <h4>Free Shipping</h4>
            <p>On all orders worldwide</p>
          </div>
        </div>

        <div className="premium-card">
          <div className="premium-icon">↺</div>

          <div>
            <h4>30-Day Returns</h4>
            <p>Hassle-free premium returns</p>
          </div>
        </div>

        <div className="premium-card">
          <div className="premium-icon">✓</div>

          <div>
            <h4>2 Years Warranty</h4>
            <p>Luxury protection included</p>
          </div>
        </div>

      </div>

    </section>
  );
}