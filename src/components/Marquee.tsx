const ITEMS = [
  "Lightweight warmth",
  "Water-resistant shell",
  "Recycled fill",
  "Free shipping over $75",
  "30-day easy returns",
  "Designed to elevate",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((t) => (
        <span key={t} className="flex items-center">
          <span className="px-8 text-[12px] font-medium uppercase tracking-[0.22em] text-white/70">
            {t}
          </span>
          <svg viewBox="0 0 8 8" className="h-2 w-2 text-[#f4740a]" fill="currentColor">
            <path d="M4 0l1.2 2.8L8 4 5.2 5.2 4 8 2.8 5.2 0 4l2.8-1.2z" />
          </svg>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-[#141414] py-4">
      <div className="jm-marquee flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  );
}
