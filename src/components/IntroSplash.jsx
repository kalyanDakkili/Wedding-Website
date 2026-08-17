import { useState } from "react";
import doorLeft from "../assets/door-left-red.jpg";
import doorRight from "../assets/door-right-red.jpg";

export default function IntroSplash({ onOpen }) {
  const [opening, setOpening] = useState(false);

  function handleTap() {
    if (opening) return;
    setOpening(true);
    // let the door-slide transition play before unmounting
    window.setTimeout(() => {
      onOpen();
    }, 1150);
  }

  return (
    <div className={"splash" + (opening ? " is-opening" : "")}>
      <button
        className="splash-tap-target"
        onClick={handleTap}
        aria-label="Tap to open the invitation"
      />
      <div className="splash-door splash-door--left">
        <img src={doorLeft} alt="" aria-hidden="true" />
      </div>
      <div className="splash-door splash-door--right">
        <img src={doorRight} alt="" aria-hidden="true" />
      </div>

      <div className="splash-center">
        <div className="splash-monogram-center" aria-hidden="true">
          <svg width="66" height="66" viewBox="0 0 66 66">
            <circle cx="33" cy="33" r="31" fill="none" stroke="#E4B94F" strokeWidth="1" />
            <circle cx="33" cy="33" r="27" fill="none" stroke="#E4B94F" strokeWidth="0.5" opacity="0.6" />
            <text x="33" y="42" textAnchor="middle" fontFamily="Cinzel" fontSize="22" fill="#E4B94F">C&amp;V</text>
          </svg>
        </div>
        <span className="splash-rule" aria-hidden="true" />
        <p className="splash-arch-hint">Tap to Open</p>
      </div>
    </div>
  );
}
