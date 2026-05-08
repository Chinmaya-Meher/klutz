// src/components/Navbar.jsx

import "./Navbar.css";

import { useState } from "react";

import {
  FiMoon,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Navbar({
  darkMode,
  setDarkMode,
}) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-wrapper">

      <nav className="navbar">

        {/* LOGO */}

        <div className="logo">
          <h1>KLTUZ.</h1>
        </div>

        {/* DESKTOP LINKS */}

        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#products">
            Products
          </a>

          <a href="#features">
            Features
          </a>

          <a href="#contact">
            Contact Us
          </a>

          <a href="#faq">
            FAQs
          </a>

        </div>

        {/* RIGHT SIDE */}

        <div className="nav-icons">

          {/* DARK MODE */}

          <FiMoon
            className="theme-icon"
            onClick={() =>
              setDarkMode(!darkMode)
            }
          />

          {/* HAMBURGER */}

          <div
            className="hamburger"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >

            {
              menuOpen
                ? <FiX />
                : <FiMenu />
            }

          </div>

        </div>

      </nav>

      {/* MOBILE MENU */}

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <a href="#home">
          Home
        </a>

        <a href="#products">
          Products
        </a>

        <a href="#features">
          Features
        </a>

        <a href="#contact">
          Contact Us
        </a>

        <a href="#faq">
          FAQs
        </a>

      </div>

    </header>
  );
}