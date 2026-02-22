import "./Sponsors.css";
import SponsorCard from "./SponsorCard";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import json from "../../data/sponsors2026.json";

const SPONSOR_RESUME_BOOK_URL = "https://example.com";
const STUDENT_RESUME_SUBMISSION_URL = "https://example.com";

function Sponsors() {
  const getGold = json.sponsors.filter((sponsor) => sponsor.class === "gold");
  const getSilver = json.sponsors.filter(
    (sponsor) => sponsor.class === "silver",
  );
  const getBronze = json.sponsors.filter(
    (sponsor) => sponsor.class === "bronze",
  );

  const [gold] = useState(getGold);
  const [silver] = useState(getSilver);
  const [bronze] = useState(getBronze);
  const currYear = new Date().getFullYear();

  return (
    <Fade delay={500}>
      <div className="sponsors">
        <div className="sponsors-content">
          <h1 className="font-orbitron sponsors-hero-title">
            <span className="sponsors-line">Thank You To Our</span>
            <span className="sponsors-word">Sponsors</span>
          </h1>
          <h5 className="sponsors-thankyou">
            Thank you to all our {currYear} sponsors! Your partnership helps
            ACSU build community and create meaningful educational and
            professional opportunities for Cornell CS undergraduates.
          </h5>
          <p className="sponsors-hero-heart">♡</p>

          <p className="sponsorship-form">
            If you would like to sponsor us, fill out the form{" "}
            <a href="https://forms.gle/iHAGSgSijE4RxFZo8">here!</a>
          </p>
          <section className="sponsors-cta" aria-label="Resume resources">
            <div className="sponsors-cta-item">
              <h3 className="sponsors-cta-label">For Sponsors</h3>
              <a
                className="sponsors-cta-btn"
                href={SPONSOR_RESUME_BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Access Resume Book
              </a>
            </div>
            <div className="sponsors-cta-item">
              <h3 className="sponsors-cta-label">For Students</h3>
              <a
                className="sponsors-cta-btn"
                href={STUDENT_RESUME_SUBMISSION_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit Resume
              </a>
            </div>
          </section>
          <section className="sponsor-rows" aria-label="Sponsor tiers">
            <article className="sponsor-row sponsor-row-gold">
              <h2 className="sponsor-row-title">Gold</h2>
              <div className="sponsor-row-list">
                {gold.map((sponsor) => (
                  <SponsorCard
                    key={sponsor.imgName}
                    itemId={sponsor.imgName}
                    link={sponsor.link}
                    img={sponsor.img}
                    imgName={sponsor.imgName}
                  />
                ))}
              </div>
            </article>

            <article className="sponsor-row sponsor-row-silver">
              <h2 className="sponsor-row-title">Silver</h2>
              <div className="sponsor-row-list">
                {silver.map((sponsor) => (
                  <SponsorCard
                    key={sponsor.imgName}
                    itemId={sponsor.imgName}
                    link={sponsor.link}
                    img={sponsor.img}
                    imgName={sponsor.imgName}
                  />
                ))}
              </div>
            </article>

            <article className="sponsor-row sponsor-row-bronze">
              <h2 className="sponsor-row-title">Bronze</h2>
              <div className="sponsor-row-list">
                {bronze.map((sponsor) => (
                  <SponsorCard
                    key={sponsor.imgName}
                    itemId={sponsor.imgName}
                    link={sponsor.link}
                    img={sponsor.img}
                    imgName={sponsor.imgName}
                  />
                ))}
              </div>
            </article>
          </section>
        </div>
      </div>
    </Fade>
  );
}

export default Sponsors;
