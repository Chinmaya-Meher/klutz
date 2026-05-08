// src/App.jsx

import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductPage from "./components/ProductPage";
import FeatureShowcase from "./components/Features";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

  }, [darkMode]);

  return (
    <div className="app">

      {/* NAVBAR */}

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* HERO */}

      <section id="home">
        <Hero />
      </section>

      {/* PRODUCTS */}

      <section id="products">
        <ProductPage />
      </section>

      {/* FEATURES */}

      <section id="features">
        <FeatureShowcase />
      </section>

      {/* CONTACT */}

      <section id="contact">
        <Contact />
      </section>

      {/* FAQ */}

      <section id="faq">
        <FAQ />
      </section>

    </div>
  );
}

export default App;