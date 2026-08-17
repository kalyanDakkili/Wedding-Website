import { planner } from "../data/weddingData.js";

export default function PlannerInfo() {
  return (
    <section className="planner" id="planner">
      <p className="section-eyebrow center">Curated By</p>
      <h2 className="section-title center"> Wedding Planner</h2>
      <p className="planner-blurb">{planner.blurb}</p>

      <div className="planner-grid">
        <div className="planner-box">
          <p className="planner-box-label">Contact</p>
          <p className="planner-box-name">{planner.name}</p>
          <p className="planner-box-line">{planner.phone}</p>
          <p className="planner-box-line">{planner.altPhone}</p>
          <p className="planner-box-line">{planner.address}</p>
          <a className="btn btn-outline btn-maroon" href={`tel:${planner.phone.replace(/\s/g, "")}`}>
            Call the Planner
          </a>
        </div>

        <div className="planner-box">
          <p className="planner-box-label">Directions</p>
          <p className="planner-box-name">Visit the Planner's Office</p>
          <p className="planner-box-line">{planner.address}</p>
          <p className="planner-box-line planner-box-muted">
            For consultations, decor previews, and last-minute coordination.
          </p>
          <a
            className="btn btn-solid"
            href={`https://www.google.com/maps/search/?api=1&query=${planner.mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
