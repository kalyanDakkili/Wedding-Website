import { bride, groom } from "../data/weddingData.js";

export default function Families() {
  return (
    <section className="families" id="families">
      <p className="section-eyebrow center">The Union</p>
      <h2 className="section-title center">Our Families</h2>

      <div className="families-grid">
        <article className="family-card">
          <p className="family-role">{bride.role}</p>
          <h3 className="family-name">{bride.name}</h3>
          <p className="family-lineage">{bride.lineage}</p>
          <p className="family-place">{bride.place}</p>
        </article>

        <div className="families-glyph" aria-hidden="true">
          <svg width="56" height="56" viewBox="0 0 56 56">
            <circle cx="28" cy="28" r="26" fill="none" stroke="#C9971C" strokeWidth="1" />
            <path d="M17 28 Q28 14 39 28 Q28 42 17 28 Z" fill="none" stroke="#7A1220" strokeWidth="1.3" />
            <circle cx="28" cy="28" r="3" fill="#7A1220" />
          </svg>
        </div>

        <article className="family-card">
          <p className="family-role">{groom.role}</p>
          <h3 className="family-name">{groom.name}</h3>
          <p className="family-lineage">{groom.lineage}</p>
          <p className="family-lineage small">{groom.extra}</p>
          <p className="family-place">{groom.place}</p>
        </article>
      </div>
    </section>
  );
}
