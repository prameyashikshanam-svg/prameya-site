import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="top-fixed-wrapper">
      <header className="site-header" role="banner" aria-label="Main header">
        <div className="header-inner">
          {/* Top row: brand (center) + hamburger on the right (mobile) */}
          <div className="brand-row">
            <div className="brand-col" onClick={closeMenu}>
              <div className="brand-title">PRAMEYA SHIKSHANAM</div>
              <div className="brand-subtitle">
                (Learning of Eternal Values towards holistic development)
              </div>
            </div>

            {/* Hamburger button for mobile */}
            <button
              className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          {/* Nav links: right-aligned on desktop, dropdown on mobile */}
          <nav
            className={`nav-col ${menuOpen ? "is-open" : ""}`}
            aria-label="Main navigation"
          >
            <Link to="/" className="nav-link" onClick={closeMenu}>
              HOME
            </Link>
            <Link to="/page2" className="nav-link" onClick={closeMenu}>
              OBJECTIVE
            </Link>
            <Link to="/page3" className="nav-link" onClick={closeMenu}>
              STRATEGY
            </Link>
            <Link to="/page4" className="nav-link" onClick={closeMenu}>
              TREASURE BASKET OF VALUES
            </Link>
            <Link to="/page5" className="nav-link" onClick={closeMenu}>
              ABOUT US
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
