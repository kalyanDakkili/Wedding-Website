import { couple } from "../data/weddingData.js";

export default function InviteCard() {
  return (
    <section className="invite" id="invite">
      <div className="invite-card">
        <p className="invite-eyebrow">You Are Warmly Invited</p>
        <h2 className="invite-names invite-names--stacked">
  <span className="invite-name-line">{couple.brideFirst}</span>
  <span className="amp">&amp;</span>
  <span className="invite-name-line">{couple.groomFirst}</span>
</h2>

        <div className="invite-grid">
          <div className="invite-box">
            <span className="invite-box-label">When</span>
            <span className="invite-box-value">28 August 2026</span>
            <span className="invite-box-sub">Friday · Muhurtham 3–4 AM</span>
          </div>
          <div className="invite-box">
            <span className="invite-box-label">Where</span>
            <span className="invite-box-value">sri Gandhamaneni Sivaiah Krishna Reddy Bhavan</span>
            <span className="invite-box-sub">Bairagi patteda, Tirupati</span>
          </div>
        </div>

        <p className="invite-hashtag">{couple.hashtag}</p>
      </div>
    </section>
  );
}
