// src/components/ProductPage.jsx

import "./ProductPage.css";

import { useState } from "react";

import creamHeadphone from "../assets/headphone.png";
import blackHeadphone from "../assets/black-headphone.png";
import blueHeadphone from "../assets/blue-headphone.png";

export default function ProductPage() {

  const [activeColor, setActiveColor] = useState("cream");

  const headphones = {
    cream: creamHeadphone,
    black: blackHeadphone,
    blue: blueHeadphone,
  };

  return (
    <section className="product-page" id="products">

      {/* LEFT */}

      <div className="product-gallery">

        <div className="thumbnail-column">

          <div
            className={`thumb ${activeColor === "cream" ? "active" : ""}`}
            onClick={() => setActiveColor("cream")}
          >
            <img src={creamHeadphone} alt="" />
          </div>

          <div
            className={`thumb ${activeColor === "black" ? "active" : ""}`}
            onClick={() => setActiveColor("black")}
          >
            <img src={blackHeadphone} alt="" />
          </div>

          <div
            className={`thumb ${activeColor === "blue" ? "active" : ""}`}
            onClick={() => setActiveColor("blue")}
          >
            <img src={blueHeadphone} alt="" />
          </div>

        </div>

        <div className="main-product-image">

          <img
            src={headphones[activeColor]}
            alt="headphone"
          />

        </div>

      </div>

      {/* RIGHT */}

      <div className="product-info">

        <span className="arrival-badge">
          New Arrival
        </span>

        <h1>
          KLTUZ Aura X
        </h1>

        <p className="product-description">
          High-fidelity sound with luxurious comfort
          and advanced noise-canceling technology.
        </p>

        {/* RATING */}

        <div className="rating-row">

          <div className="stars">
            ★★★★★
          </div>

          <span>
            4.8 (256 reviews)
          </span>

        </div>

        {/* PRICE */}

        <div className="price-row">

          <h2>$249.00</h2>

          <span className="old-price">
            $299.00
          </span>

          <div className="save-badge">
            Save $50
          </div>

        </div>

        {/* COLORS */}

        <div className="color-section">

          <p>Color:</p>

          <div className="color-buttons">

            <button
              className={`color-btn cream ${activeColor === "cream" ? "selected" : ""}`}
              onClick={() => setActiveColor("cream")}
            />

            <button
              className={`color-btn black ${activeColor === "black" ? "selected" : ""}`}
              onClick={() => setActiveColor("black")}
            />

            <button
              className={`color-btn blue ${activeColor === "blue" ? "selected" : ""}`}
              onClick={() => setActiveColor("blue")}
            />

          </div>

        </div>

        {/* QUANTITY */}

        <div className="quantity-box">

          <button>-</button>

          <span>1</span>

          <button>+</button>

        </div>

        {/* BUTTONS */}

        <button className="cart-btn">
          Add to cart
        </button>

        <button className="buy-btn-product">
          Buy now
        </button>


      </div>

    </section>
  );
}