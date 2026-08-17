import { useEffect, useRef } from "react";

export default function Lightbox({ src, alt, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!src) return undefined;

    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      open
      aria-label={alt || "Enlarged image"}
      onCancel={onClose}
    >
      <button
        type="button"
        className="lightbox-scrim"
        onClick={onClose}
        aria-label="Close"
        tabIndex={-1}
      />
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
        &times;
      </button>
      <img src={src} alt={alt} />
    </dialog>
  );
}