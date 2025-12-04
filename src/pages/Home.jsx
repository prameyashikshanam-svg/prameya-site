import React from "react";
import Header from "../components/Header";

/* Vite-friendly image resolution (works with spaces in filenames) */
const leftImg = new URL("../assets/Logos/Front Page.jpg", import.meta.url).href;
const rightImg = new URL("../assets/Logos/Logo.png", import.meta.url).href;

export default function Home() {
  return (
    <>
      <Header />

      {/* subtle band under header for spacing */}
      <div className="below-header-band" aria-hidden="true" />

      <main className="page-root">
        {/* FULL-VIEW ROW: container has 10% left/right gap (padding: 0 10vw) */}
        <section className="full-row" role="region" aria-label="Main feature">
          <div className="full-row-inner">
            {/* left: big image (60% of inner area) */}
            <div className="left-area">
              <div className="card-frame left-frame">
                <img className="big-left-img" src={leftImg} alt="Left visual" />
              </div>
            </div>

            {/* right: small image on top + About text under it (40% of inner area) */}
            <div className="right-area">
              <div className="card-frame right-frame">
                <img className="small-right-img" src={rightImg} alt="Right visual" />
                <div className="right-text">
                  <p>A dream, a passion, a mission,</p>
                  <p>To shape the future generation,</p>
                  <p>Leading not only the nation,</p>
                  <p>Inspiring world for compassion</p>
                  <p>Peace, Patriotism and Devotion.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
