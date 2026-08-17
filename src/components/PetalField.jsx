import { useMemo } from "react";

export default function PetalField() {
  const petals = useMemo(() => {
    const count = typeof window !== "undefined" && window.innerWidth < 700 ? 14 : 26;
    return Array.from({ length: count }, (_, i) => {
      const size = 6 + Math.random() * 8;
      return {
        id: i,
        maroon: i % 3 === 0,
        left: Math.random() * 100,
        size,
        duration: 10 + Math.random() * 14,
        delay: Math.random() * 14,
        opacity: 0.35 + Math.random() * 0.4,
      };
    });
  }, []);

  return (
    <div className="petal-field" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className={"petal" + (p.maroon ? " petal--maroon" : "")}
          style={{
            left: p.left + "vw",
            width: p.size,
            height: p.size,
            animationDuration: p.duration + "s",
            animationDelay: p.delay + "s",
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
