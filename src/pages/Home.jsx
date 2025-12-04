import React from "react";
import Header from "../components/Header";

/* Vite-friendly image resolution */
const bigImg = new URL("../assets/Logos/Front Page.jpg", import.meta.url).href;
const smallImg = new URL("../assets/Logos/Logo.png", import.meta.url).href;

export default function Home() {
  return (
    <>
      <Header />

      {/* little band under header */}
      <div className="below-header-band" aria-hidden="true" />

      <main className="home-root-v2">
        {/* SECTION 1: big image, centered */}
        <section
          className="hero-main-section-v2"
          aria-label="Main hero image section"
        >
          <div className="hero-main-wrapper-v2">
            <div className="hero-main-card-v2">
              <img
                className="hero-main-img-v2"
                src={bigImg}
                alt="Children learning eternal values"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: small image left, text right */}
        <section
          className="hero-secondary-section-v2"
          aria-label="Vision and mission section"
        >
          <div className="hero-secondary-wrapper-v2">
            {/* left: small image */}
            <div className="hero-secondary-image-v2">
              <img
                className="hero-small-img-v2"
                src={smallImg}
                alt="Prameya Shikshanam logo"
              />
            </div>

            {/* right: poem text aligned with image */}
            <div className="hero-secondary-text-v2">
              <p>A dream, a passion, a mission,</p>
              <p>To shape the future generation,</p>
              <p>Leading not only the nation,</p>
              <p>Inspiring world for compassion</p>
              <p>Peace, Patriotism and Devotion.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
