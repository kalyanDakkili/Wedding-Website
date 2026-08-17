import heroBg from "../assets/couple-cutout.png";
import { bride, groom, venue } from "../data/weddingData.js";
import mandalaTop from "../assets/mandala-top.png";
import mandalaBottom from "../assets/mandala-bottom.png";
export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-split">
        <div className="hero-photo-col">
          <img
            className="hero-bg"
            src={heroBg}
            alt="Charishma and Vinay Kumar, hands folded in greeting, framed by a floral temple arch with marigold garlands"
          />
        </div>

        <div className="hero-info-col">
          <p className="eyebrow">Together With Their Families</p>
          <p className="hero-request">Request the honour of your presence</p>

          <img className="hero-mandala hero-mandala--top" src={mandalaTop} alt="" aria-hidden="true" />

          <div className="hero-person">
            <h1 className="hero-name-solo">{bride.name}</h1>
            <p className="hero-person-line">{bride.lineage}</p>
          </div>

          <span className="hero-amp-solo" aria-hidden="true">&amp;</span>

          <div className="hero-person">
            <h1 className="hero-name-solo">{groom.name}</h1>
            <p className="hero-person-line">{groom.lineage}</p>
          </div>

          <img className="hero-mandala hero-mandala--bottom" src={mandalaBottom} alt="" aria-hidden="true" />

          <p className="hero-sub">at their wedding celebration</p>
          <p className="hero-date">
            From 3:00 AM onwards &nbsp;&middot;&nbsp; Friday, 28 August 2026
            <br />
            Venue: {venue.name}, Tirupati
          </p>
        </div>
      </div>
    </header>
  );
}
