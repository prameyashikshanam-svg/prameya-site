import React from "react";
import Header from "../components/Header";

export default function Page5() {
  return (
    <>
      <Header />
      <main className="page-root">
        <section className="center-panel about-panel">
          <div className="panel-inner card-contrast about-inner">
            <h1>About Us</h1>

            <div className="about-section">
              <p className="lead">
                Prameya Shikshanam is a non-profit organisation for promoting eternal, moral
                &amp; democratic values based in Bengaluru, Karnataka, India.
              </p>
{/* 
              <div className="about-summary">
                <div className="summary-item">
                  <strong>● Our vision, passion &amp; mission:</strong>
                </div>
                <div className="summary-item">
                  <strong>● Main Contributors</strong>
                </div>
                <div className="summary-item">
                  <strong>● Advisory Board</strong>
                </div>
                <div className="summary-item">
                  <strong>● Contact</strong>
                </div>
              </div> */}

              <h2 className="subhead">OUR PASSION &amp; MISSION:</h2>
              <p className="body-text">
                Prameya Shikshanam is a non-profit organisation started by a few enthusiastic
                freelancers who are extremely service-oriented, voluntarily contributing towards
                the holistic, all-around development of children of all age groups to teach them
                methods for enhancing their inner happiness &amp; to face this challenging world
                positively. We have created very interesting, relevant illustrations/stories taking
                into consideration the present-day scenarios suiting students of all backgrounds.
                Our value education content will be available online on request.
              </p>

              <h2 className="subhead">MAIN CONTRIBUTORS:</h2>
              <ol className="contributors about-list">
                <li>1. Smt. Mrudula Vijayendra</li>
                <li>2. Smt. Nagasri Raghavendra</li>
                <li>3. Smt. K. Kamakshi</li>
              </ol>

              <h2 className="subhead">ADVISORY BOARD:</h2>
              <ol className="advisory about-list">
                <li>1. Sri. G.P.Nagaraja Acharya (Retd Professor, Dwaita Vedanta Dept,
                  Karnataka Sanskrit University).
                </li>
                <li>2. Dr. Vasanthalakshmi R (Bsc. MBA. PhD. Former General Manager and
                  a Principal Investigator for IKS Projects at Samvit Research Foundation,
                  Bangalore).
                </li>
              </ol>

              <h2 className="subhead">CONTACT US:</h2>
              <div className="contact-block">
                <p className="contact-line">
                  E-mail: <a href="mailto:prameyashikshanam@gmail.com">prameyashikshanam@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
