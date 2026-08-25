import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { SLIDES } from "../data/slides";
import {
  ChevronRightIcon,
  DropletIcon,
  FeatherIcon,
  FlameIcon,
  LeafIcon,
} from "../components/icons";

const VALUES = [
  { icon: FeatherIcon, title: "Lightness", text: "We obsess over grams so you never think about weight." },
  { icon: FlameIcon, title: "Warmth", text: "Recycled fill engineered to trap heat without bulk." },
  { icon: DropletIcon, title: "Resilience", text: "Shells that shrug off rain, wind and weekday chaos." },
  { icon: LeafIcon, title: "Responsibility", text: "Recycled materials, durable making, zero seasonal waste." },
];

const MILESTONES = [
  ["2021", "WearIt starts as a one-jacket idea in a Kolkata flat."],
  ["2023", "The Glossy Puffer launches — 12,000 customers and counting."],
  ["2024", "Four colours, one promise: confidence, wrapped in warmth."],
  ["2026", "Accessories arrive — the full look, head to toe."],
];

export default function AboutPage() {
  return (
    <div className="min-h-full bg-[#141414]">
      <TopBar />
      <main className="pb-24">
        <section className="mx-auto w-full max-w-[1240px] px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            className="max-w-[720px]"
          >
            <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#f4740a]">
              About Us
            </div>
            <h1 className="mt-4 text-[40px] font-medium leading-[50px] text-white md:text-[52px] md:leading-[62px]">
              Stand out.
              <br />
              Without trying.
            </h1>
            <p className="mt-6 text-[14px] leading-[23px] text-white/60">
              WearIt began with a simple belief: a jacket should do more than
              keep you warm. It should feel like yourself on your best day —
              confident, comfortable, completely at ease. We make a small
              lineup of puffers and accessories, and we make them properly:
              lightweight, weatherproof, responsibly filled and built to be
              worn for years, not seasons.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {SLIDES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className={`flex h-[180px] items-center justify-center rounded-[24px] ${s.bgClass}`}
              >
                <img src={s.img} alt={s.name} className="h-[140px] w-auto drop-shadow-[0_14px_18px_rgba(0,0,0,0.35)]" />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 w-full max-w-[1240px] px-6">
          <h2 className="text-[28px] font-medium text-white md:text-[34px]">What we value</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-[24px] border border-white/[0.08] bg-white/[0.04] p-7"
              >
                <v.icon className="h-[26px] w-[26px] text-[#f9a03f]" />
                <div className="mt-4 text-[16px] font-medium text-white">{v.title}</div>
                <p className="mt-2 text-[12.5px] leading-[19px] text-white/55">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 w-full max-w-[1240px] px-6">
          <h2 className="text-[28px] font-medium text-white md:text-[34px]">The road so far</h2>
          <div className="mt-8 space-y-0 border-l border-white/10 pl-8">
            {MILESTONES.map(([y, t], i) => (
              <motion.div
                key={y}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative pb-10"
              >
                <span className="absolute -left-[37px] top-1 h-[9px] w-[9px] rounded-full bg-[#f4740a]" />
                <div className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#f4740a]">{y}</div>
                <div className="mt-1 text-[14px] text-white/75">{t}</div>
              </motion.div>
            ))}
          </div>
          <Link
            to="/products"
            className="group inline-flex h-[44px] items-center gap-2 rounded-full bg-white pl-7 pr-5 text-[12.5px] font-semibold text-[#1c1c1c] transition hover:scale-[1.03]"
          >
            Shop the collection
            <ChevronRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-[2px]" />
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
