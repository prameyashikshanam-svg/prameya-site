import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="top-fixed-wrapper">
      <header className="site-header" role="banner" aria-label="Main header">
        <div className="header-inner">
          <div className="brand-col">
            <div className="brand-title">PRAMEYA SHIKSHANAM</div>
            <div className="brand-subtitle">(Learning of Eternal Values towards holistic development)</div>
          </div>

          <nav className="nav-col" aria-label="Main navigation">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/page2" className="nav-link">OBJECTIVE</Link>
            <Link to="/page3" className="nav-link">STRATEGY</Link>
            <Link to="/page4" className="nav-link">TREASURE BASKET OF VALUES</Link>
            <Link to="/page5" className="nav-link">ABOUT US</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
