import receptionImg from "../assets/reception.png";
import weddingInviteImg from "../assets/wedding-invite.png";
import { events } from "../data/weddingData.js";
import { downloadICS } from "../utils/ics.js";

export default function Festivities({ onOpenImage }) {
  const { reception, wedding } = events;

  return (
    <section className="festivities" id="festivities">
      <p className="section-eyebrow center">Two Days of Celebration</p>
      <h2 className="section-title center">The Festivities</h2>

      <div className="fest-timeline">
        {/* RECEPTION */}
        <article className="fest-item">
          <div className="fest-timeline-marker" aria-hidden="true">
            <span className="fest-dot" />
          </div>
          <div className="fest-row">
            <div className="fest-text">
              <p className="fest-day">{reception.day}</p>
              <h3 className="fest-title">{reception.title}</h3>
              <p className="fest-time">
                {reception.time} &middot; {reception.venue}
              </p>
              <p className="fest-quote">&ldquo;{reception.quote}&rdquo;</p>
              <button className="fest-cal" onClick={() => downloadICS("reception")}>
                + Add to calendar
              </button>
            </div>
            <button
              type="button"
              className="fest-thumb"
              onClick={() => onOpenImage(receptionImg, "Reception & Vindu invitation")}
              aria-label="View reception invitation full screen"
            >
              <img src={receptionImg} alt="Reception & Vindu invitation card" />
              <span className="fest-thumb-hint">Tap to enlarge</span>
            </button>
          </div>
        </article>

        {/* WEDDING */}
        <article className="fest-item">
          <div className="fest-timeline-marker" aria-hidden="true">
            <span className="fest-dot" />
          </div>
          <div className="fest-row">
            <div className="fest-text">
              <p className="fest-day">{wedding.day}</p>
              <h3 className="fest-title">{wedding.title}</h3>
              <p className="fest-time">
                {wedding.time} &middot; {wedding.venue}
              </p>
              <p className="fest-quote">&ldquo;{wedding.quote}&rdquo;</p>
              <button className="fest-cal" onClick={() => downloadICS("wedding")}>
                + Add to calendar
              </button>
            </div>
            <button
              type="button"
              className="fest-thumb fest-thumb--contain"
              onClick={() => onOpenImage(weddingInviteImg, "The Wedding · Samuhartham invitation")}
              aria-label="View wedding invitation full screen"
            >
              <img src={weddingInviteImg} alt="The Wedding, Samuhartham invitation card" />
              <span className="fest-thumb-hint">Tap to enlarge</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
