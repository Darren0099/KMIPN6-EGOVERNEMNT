/** Bentuk bintang bergerigi (ornamen). Warna lewat CSS `color`. */
export default function Starburst({ points = 16, depth = 0.8, className }: { points?: number; depth?: number; className?: string }) {
  const pts = Array.from({ length: points * 2 }, (_, i) => {
    const r = i % 2 === 0 ? 50 : 50 * depth;
    const a = (Math.PI * i) / points - Math.PI / 2;
    return `${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      <polygon points={pts} fill="currentColor" />
    </svg>
  );
}
