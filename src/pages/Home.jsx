import React from "react";
import Header from "../components/Header";

/* Vite-friendly image resolution */
const bigImg = new URL("../assets/Logos/Front Page.jpg", import.meta.url).href;
// smallImg not needed now, so removed

export default function Home() {
  return (
    <>
      <Header />

      {/* little band under header */}
      <div className="below-header-band" aria-hidden="true" />

      <main className="home-root-v2">
        {/* SINGLE SECTION: left image, right heading + poem */}
        <section
          className="hero-vision-section"
          aria-label="Our Vision section"
        >
          <div className="hero-vision-wrapper">
            {/* LEFT: big image, slightly compact */}
            <div className="hero-vision-left">
              <div className="hero-vision-img-card">
                <img
                  className="hero-vision-img"
                  src={bigImg}
                  alt="Children learning eternal values"
                />
              </div>
            </div>

            {/* RIGHT: heading + poem */}
            <div className="hero-vision-right">
              <h2 className="hero-vision-title">Our Vision</h2>
              <div className="hero-vision-text">
                <p>A dream, a passion, a mission,</p>
                <p>To shape the future generation,</p>
                <p>Leading not only the nation,</p>
                <p>Inspiring world for compassion</p>
                <p>Peace, Patriotism and Devotion.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
