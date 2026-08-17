import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setScrolled(scrollTop > 40);
    }
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="kumkum-progress" style={{ width: progress + "%" }} aria-hidden="true" />
      <nav className={"site-nav" + (scrolled || menuOpen ? " scrolled" : "")}>
        <div className="nav-mono">C&nbsp;&amp;&nbsp;V</div>
        <ul className="nav-links">
          <li><a href="#invite">Invitation</a></li>
          <li><a href="#festivities">Festivities</a></li>
          <li><a href="#venue">Venue</a></li>
          <li><a href="#countdown">Countdown</a></li>
        </ul>
        <button
          type="button"
          className={"nav-burger" + (menuOpen ? " is-open" : "")}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={"nav-mobile-panel" + (menuOpen ? " is-open" : "")}>
        <ul>
          <li><a href="#invite" onClick={closeMenu}>Invitation</a></li>
          <li><a href="#festivities" onClick={closeMenu}>Festivities</a></li>
          <li><a href="#venue" onClick={closeMenu}>Venue</a></li>
          <li><a href="#countdown" onClick={closeMenu}>Countdown</a></li>
        </ul>
      </div>
      {menuOpen && <button className="nav-mobile-scrim" aria-hidden="true" onClick={closeMenu} />}
    </>
  );
}