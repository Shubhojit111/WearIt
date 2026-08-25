import { useState } from "react";
import { motion } from "framer-motion";
import { SLIDES } from "../data/slides";

const STATS = [
  { value: "12k+", label: "Happy customers" },
  { value: "4.9/5", label: "Average rating" },
  { value: "30-day", label: "Easy returns" },
];

export default function ConfidenceSection() {
  /* static showcase — dots swap the jacket instantly, no motion animation */
  const [idx, setIdx] = useState(2);

  return (
    <section className="relative overflow-hidden bg-[#1b1512] bg-[image:radial-gradient(46%_68%_at_70%_52%,#c2600e_0%,#93440a_48%,rgba(27,21,18,0)_78%)] py-24 md:py-28">
      <div className="relative mx-auto flex w-full max-w-[1240px] items-center px-6">
        {/* left copy */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="max-w-[560px]"
        >
          <h2 className="text-[38px] font-medium leading-[46px] text-white md:text-[44px] md:leading-[54px]">
            Confidence,
            <br />
            wrapped in warmth.
          </h2>
          <p className="mt-6 text-[13px] leading-[21px] text-white/70">
            One jacket, four colours. zero compromise.
            <br />
            Step outside and feel it instantly —
            <br />
            the quiet confidence of being exactly yourself.
          </p>
          <div className="mt-12 flex flex-wrap gap-12">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-[30px] font-medium leading-[38px] text-white">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* right static jacket over the glow */}
        <div className="pointer-events-none relative ml-auto hidden md:block">
          <img
            src={SLIDES[idx].img}
            alt={SLIDES[idx].name}
            draggable={false}
            className="h-[400px] w-auto rotate-12 select-none drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"
          />
          <div className="mx-auto mt-7 h-[20px] w-[250px] rounded-full bg-black/55 blur-[16px]" />
        </div>

        {/* slide indicator 01 — 04 */}
        <div className="absolute right-6 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-[10px]">
          <span className="text-[10px] tracking-[0.2em] text-white/60">01</span>
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Show ${s.name}`}
              onClick={() => setIdx(i)}
              className={`h-[7px] w-[7px] rounded-full transition-colors duration-200 ${
                i === idx ? "bg-white" : "bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
          <span className="text-[10px] tracking-[0.2em] text-white/60">04</span>
        </div>
      </div>
    </section>
  );
}
