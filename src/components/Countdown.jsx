import { useEffect, useState } from "react";
import { muhurthamTarget, rsvpDeadline, venue } from "../data/weddingData.js";
import { downloadICS } from "../utils/ics.js";

function pad(n) {
  return String(n).padStart(2, "0");
}

function getRemaining() {
  const target = new Date(muhurthamTarget).getTime();
  let diff = target - Date.now();
  if (diff <= 0) return { days: "00", hours: "00", mins: "00", secs: "00" };

  const days = Math.floor(diff / 86400000);
  diff -= days * 86400000;
  const hours = Math.floor(diff / 3600000);
  diff -= hours * 3600000;
  const mins = Math.floor(diff / 60000);
  diff -= mins * 60000;
  const secs = Math.floor(diff / 1000);

  return { days: pad(days), hours: pad(hours), mins: pad(mins), secs: pad(secs) };
}

export default function Countdown() {
  const [time, setTime] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="countdown-section" id="countdown">
      <p className="countdown-cheer">The countdown has begun &mdash; join the celebration! &#127881;</p>
      <p className="section-eyebrow">Counting down to the Muhurtham</p>

      <div className="countdown-grid">
        <div className="cd-block"><span className="cd-num">{time.days}</span><span className="cd-label">Days</span></div>
        <div className="cd-sep">:</div>
        <div className="cd-block"><span className="cd-num">{time.hours}</span><span className="cd-label">Hours</span></div>
        <div className="cd-sep">:</div>
        <div className="cd-block"><span className="cd-num">{time.mins}</span><span className="cd-label">Minutes</span></div>
        <div className="cd-sep">:</div>
        <div className="cd-block"><span className="cd-num">{time.secs}</span><span className="cd-label">Seconds</span></div>
      </div>

      <p className="countdown-note">Friday, 28 August 2026 &nbsp;·&nbsp; 3:00 – 4:00 AM &nbsp;·&nbsp; Purusha Kalam 3:24 – 3:30 AM</p>

      <h3 className="countdown-question">Please Join Us</h3>
      <p className="countdown-rsvp-note">Mark your calendar &mdash; we can&rsquo;t wait to celebrate with you.</p>

      <div className="countdown-actions">
        <button className="btn btn-outline btn-light fest-cal" onClick={() => downloadICS("wedding")}>
          + Add wedding to calendar
        </button>
        <a
          className="btn btn-outline btn-light"
          href={`https://www.google.com/maps/search/?api=1&query=${venue.mapsQuery}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Directions
        </a>
      </div>
    </section>
  );
}
