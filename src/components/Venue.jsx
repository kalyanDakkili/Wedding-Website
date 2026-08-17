import { venue } from "../data/weddingData.js";

export default function Venue() {
  return (
    <section className="venue" id="venue">
      <p className="section-eyebrow center">Where To Find Us</p>
      <h2 className="section-title center">The Venue</h2>

      <div className="venue-panel">
        <div className="venue-info">
          <h3>{venue.name}</h3>
          <p>{venue.address}</p>
          <a
            className="btn btn-outline"
            href={`https://www.google.com/maps/search/?api=1&query=${venue.mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </div>
        <div className="venue-map">
          <iframe
            title="Venue map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={venue.mapsEmbed}
          />
        </div>
      </div>
    </section>
  );
}
