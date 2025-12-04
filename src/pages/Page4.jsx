import React from "react";
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

  // Same content as before, but converted to title + list items, without numbers/letters
  const infoData = [
    {
      title: "Ethical and Moral Values",
      items: [
        "Hard work and commitment",
        "Active listening with open mind",
        "Ahimsa",
        "Aparigraha",
        "Compassion",
        "Contentment",
        "Courage",
        "Courtesy",
        "Creative Imagination",
        "Dignity",
        "Empathy",
        "Forgiveness",
        "Gratitude",
        "Honesty/Sincerity",
        "Humility",
        "Integrity",
        "Perseverance",
        "Resilience",
        "Sacrifice",
        "Helping Nature/ Spirit of Seva",
        "Tolerance",
        "Truth",
        "Positive Thinking",
        "Acceptance",
      ],
    },
    {
      title: "Bhagavad Gita Values",
      items: ["Nishkama Karma", "Karma theory"],
    },
    {
      title: "Stories from Bharatiya epics",
      items: ["Mahabharata", "Ramayana", "Bhagavatam", "Upanishads"],
    },
    {
      title: "Social Values",
      items: [
        "Sharing is Caring",
        "Peace",
        "Respectful conversation",
        "Freedom comes with Responsibility",
        "Sensitivity",
        "Sustainability",
        "Good Company / Satsang",
        "Teamwork",
        "Social Responsibility",
        "Respecting All Philosophies",
        "Respect for Public Property: Swachh Bharat / Clean India",
      ],
    },
    {
      title: "Democratic Values",
      items: [
        "Commitment to Liberty and Freedom",
        "Democratic Outlook, Democratic Spirit",
        "Equality",
        "Fraternal Spirit",
        "Social Literacy",
        "Gender Equality",
        "Gender Sensitivity",
        "Plurality and Inclusion",
        "Justice and Fairness",
      ],
    },
    {
      title: "Scientific Values",
      items: ["Rational Thinking", "Scientific Temper"],
    },
    {
      title: "Fighting Hurdles",
      items: [
        "Fighting Desires / Kama",
        "Fighting Anger / Krodha",
        "Fighting Greed / Lobha",
        "Fighting Attachment / Moha",
        "Fighting Pride / Mada",
        "Fighting Jealousy / Matsarya",
      ],
    },
    {
      title: "Respecting Values",
      items: [
        "Respecting Mother",
        "Respecting Father",
        "Respecting Teacher",
        "Respecting Guests",
        "Respecting Divyangas",
        "Respecting Elders/All",
        "Respecting Self",
      ],
    },
    {
      title: "Respecting Nature",
      items: ["Respect Soil", "Respect Rivers", "Respect Trees"],
    },
    {
      title: "Pride Of Bharat",
      items: [
        "Respecting the Indian Army",
        "Respecting Monuments/Religious Places",
        "Patriotism",
        "Pride in India: IKS",
        "Rootedness/Respect culture festivals",
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="page-root">
        <section className="gallery-panel">
          <div className="gallery-inner">
            <h1>TREASURE BASKET OF VALUES</h1>

            <div className="intro-box">
              <p className="lead">
                Prameya Shikshanam inculcates Values in children so as to guide
                them in their complete personality development holistically.
                These values are taught to children through stories which include
                Realistic Incidents, Creative Fictional Stories, Stories from
                Epics of Ancient Bharat and also Living Examples of great people
                who have excelled in various fields, etc., through interactive
                sessions, which promote their emotional well-being. The main
                purpose of teaching these values is to instil noble
                characteristics in children, which teaches them to respect all
                and see divinity in all living beings and think of human beings
                as an integral part of nature around them. These values will go
                with them beyond their school years into adulthood.
                <br />
                <br />
                The values taught in our illustrations are adopted from NCERT
                syllabi and scriptures alike to create a blend of values which
                are ethical as well as democratic. They are as follows:
              </p>
            </div>

            <div
              className="gallery-grid two-col"
              role="list"
              aria-label="Values gallery"
            >
              {images.map((src, idx) => {
                const data = infoData[idx];
                return (
                  <figure className="gallery-item" key={idx} role="listitem">
                    <button
                      className="gallery-button"
                      type="button"
                      aria-label={`Values for ${data.title}`}
                    >
                      <img
                        src={src}
                        alt={data.title}
                        loading="lazy"
                      />

                      {/* HOVER OVERLAY – DROPDOWN STYLE LIST ON TOP OF IMAGE */}
                      <div className="gallery-hover-panel">
                        <div className="gallery-hover-content">
                          <h3 className="gallery-hover-title">
                            {data.title}
                          </h3>
                          <ul className="gallery-hover-list">
                            {data.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </button>
                  </figure>
                );
              })}
            </div>

            <br />
            <br />
            <p className="lead">
              <center>
                <strong>
                  Come join hands to create a peaceful and happy future with us.
                </strong>
              </center>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
