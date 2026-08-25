import { Link } from "react-router-dom";
import Socials from "./Socials";

const COLS: { title: string; links: [string, string][] }[] = [
  {
    title: "Shop",
    links: [
      ["All Products", "/products"],
      ["Puffer Jackets", "/products"],
      ["Accessories", "/products"],
      ["Size Guide", "/contact"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/about"],
      ["Journal", "/about"],
      ["Careers", "/about"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Support",
    links: [
      ["Shipping", "/contact"],
      ["Returns", "/contact"],
      ["Care Instructions", "/contact"],
      ["FAQ", "/contact"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#101010] pb-8 pt-16">
      <div className="mx-auto w-full max-w-[1240px] px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5 select-none">
              <span className="flex h-[22px] w-[22px] items-center justify-center rounded-[3px] bg-white text-[10px] font-semibold tracking-wide text-[#202020]">
                WI
              </span>
              <span className="font-serif-logo text-[18px] font-semibold tracking-[0.04em] text-white">
                WearIt
              </span>
            </Link>
            <p className="mt-5 max-w-[280px] text-[12.5px] leading-[20px] text-white/50">
              Lightweight puffers and accessories designed to elevate even the
              simplest outfit. Confidence, wrapped in warmth.
            </p>
            <Socials className="mt-6 gap-6" />
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
                {c.title}
              </div>
              <ul className="mt-5 space-y-3">
                {c.links.map(([l, to]) => (
                  <li key={l}>
                    <Link
                      to={to}
                      className="text-[13px] text-white/70 transition-colors hover:text-white"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <div className="text-[11px] text-white/40">
            © 2026 WearIt. All rights reserved.
          </div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">
            Stand out — without trying
          </div>
        </div>
      </div>
    </footer>
  );
}
