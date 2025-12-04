import React, { useState, useEffect } from "react";
import Header from "../components/Header";

export default function Page4() {
  const images = [
    new URL("../assets/Logos/1.Updated-latest.png", import.meta.url).href,
    new URL("../assets/Logos/2.Updated-latest.png", import.meta.url).href,
    new URL("../assets/Logos/3.Updated-latest.png", import.meta.url).href,
    new URL("../assets/Logos/4.Updated-latest.png", import.meta.url).href,
    new URL("../assets/Logos/5.Updated-latest.png", import.meta.url).href,
    new URL("../assets/Logos/6.Updated-latest.png", import.meta.url).href,
    new URL("../assets/Logos/7.Updated-latest.png", import.meta.url).href,
    new URL("../assets/Logos/8.Updated-latest.png", import.meta.url).href,
    new URL("../assets/Logos/9.Updated-latest.png", import.meta.url).href,
    new URL("../assets/Logos/10.Updated-latest.png", import.meta.url).href,
  ];

  // Info content for each image (kept exactly from your comment block)
  const info = [
`1) Ethical and Moral Values

a)  Hard work and commitment
b)  Active listening with open mind
c)  Ahimsa
d)  Aparigraha
e)  Compassion
f)  Contentment
g)  Courage
h)  Courtesy
i)  Creative Imagination
j)  Dignity
k)  Empathy 
l)  Forgiveness
m)  Gratitude
n)  Honesty/Sincerity
o)  Humility
p)  Integrity
q)  Perseverance
r)  Resilience
s)  Sacrifice
t)  Helping Nature/ Spirit of Seva
u)  Tolerance
v)  Truth
w)  Positive Thinking
x)  Acceptance`,

`2) Bhagavad Gita Values

a)  Nishkama Karma
b)  Karma theory`,

`3) Stories from Bharatiya epics

a)  Mahabharata
b)  Ramayana
c)  Bhagavatam
d) Upanishads`,

`4) Social Values

a)  Sharing is Caring
b)  Peace
c)  Respectful conversation
d)  Freedom comes with Responsibility
e)  Sensitivity
f)  Sustainability
g)  Good Company / Satsang
h)  Teamwork
i)  Social Responsibility 
j)  Respecting All Philosophies
k)  Respect for Public Property: Swachh Bharat / Clean India`,

`5) Democratic Values

a)  Commitment to Liberty and Freedom
b)  Democratic Outlook, Democratic Spirit
c)  Equality
d)  Fraternal Spirit
e)  Social Literacy
f)  Gender Equality
g)  Gender Sensitivity
h)  Plurality and Inclusion
i)  Justice and Fairness`,

`6) Scientific Values

a)  Rational Thinking
b)  Scientific Temper`,

`7) Fighting Hurdles

a)  Fighting Desires / Kama
b)  Fighting Anger / Krodha
c)  Fighting Greed / Lobha
d)  Fighting Attachment / Moha
e)  Fighting Pride / Mada
f)  Fighting Jealousy / Matsarya`,

`8) Respecting Values

a)  Respecting Mother
b)  Respecting Father
c)  Respecting Teacher
d)  Respecting Guests
e)  Respecting Divyangas
f)  Respecting Elders/All
g)Respecting Self`,

`9) Respecting Nature

a)  Respect Soil
b)  Respect Rivers
c)  Respect Trees`,

`10) Pride Of Bharat

a)  Respecting the Indian Army
b)  Respecting Monuments/Religious Places
c)  Patriotism
d)  Pride in India: IKS
e)  Rootedness/Respect culture festivals`,

  ];

  const [openIndex, setOpenIndex] = useState(null);

  // close modal on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpenIndex(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Header />
      <main className="page-root">
        <section className="gallery-panel">
          <div className="gallery-inner">
            <h1>TREASURE BASKET OF VALUES</h1>

            <div className="intro-box">
              <p className="lead">
                Prameya Shikshanam inculcates Values in children so as to guide them in their
                complete personality development holistically. These values are taught to
                children through stories which include Realistic Incidents, Creative Fictional
                Stories, Stories from Epics of Ancient Bharat and also Living Examples of great
                people who have excelled in various fields, etc., through interactive sessions,
                which promote their emotional well-being. The main purpose of teaching these
                values is to instil noble characteristics in children, which teaches them to respect
                all and see divinity in all living beings and think of human beings as an integral
                part of nature around them. These values will go with them beyond their school
                years into adulthood.

                The values taught in our illustrations are adopted from NCERT syllabi and
                scriptures alike to create a blend of values which are ethical as well as
                democratic. They are as follows:
              </p>
            </div>

            <div className="gallery-grid two-col" role="list" aria-label="Values gallery">
              {images.map((src, idx) => (
                <figure className="gallery-item" key={idx} role="listitem">
                  <button
                    className="gallery-button"
                    onClick={() => setOpenIndex(idx)}
                    aria-haspopup="dialog"
                    aria-label={`Open info for value ${idx + 1}`}
                  >
                    <img src={src} alt={`Value ${idx + 1}`} loading="lazy" />
                    
                  </button>
                </figure>
              ))}
            </div>

          </div>
        </section>

        {/* <div className="final-message">
          Come join hands to create a peaceful and happy future with us.
        </div> */}

        {/* Modal / Drawer for image info */}
        {openIndex !== null && (
          <div
            className="info-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`info-title-${openIndex}`}
            onClick={(e) => {
              if (e.target.classList.contains("info-modal")) setOpenIndex(null);
            }}
          >
            <div className="info-panel" role="document">
              <button
                className="info-close"
                aria-label="Close"
                onClick={() => setOpenIndex(null)}
              >
                ×
              </button>

              {/* <h2 id={`info-title-${openIndex}`}>Value {openIndex + 1}</h2> */}

              <div className="info-body">
                {info[openIndex].split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
