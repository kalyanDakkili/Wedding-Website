import { contact } from "../data/weddingData.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glyph" aria-hidden="true">
        <svg width="34" height="34" viewBox="0 0 34 34">
          <circle cx="17" cy="17" r="15" fill="none" stroke="#C9971C" strokeWidth="1" />
          <text x="17" y="22" textAnchor="middle" fontFamily="Cinzel" fontSize="13" fill="#E4B94F">C&amp;V</text>
        </svg>
      </div>
      <p className="footer-line">With the blessings of our elders and the warmth of your presence,</p>
      <p className="footer-names">Charishma &amp; Vinay Kumar</p>
      <p className="footer-madewithlove">Made with love</p>

      <div className="footer-contact">
        <p>{contact.hostedBy}</p>
        <p>{contact.address}</p>
        <p>{contact.phones.join(" \u00b7 ")}</p>
      </div>

      <p className="footer-credit">Invitation curated by Sree Lakshmi Events &amp; Wedding Planner</p>
    </footer>
  );
}
