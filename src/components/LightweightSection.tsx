import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import model from "../assets/lightweight-model.png";
import {
  ChevronRightIcon,
  DropletIcon,
  FeatherIcon,
  ThermometerIcon,
  WindIcon,
} from "./icons";

const POINTS = [
  {
    icon: FeatherIcon,
    title: "Ultra lightweight",
    text: "Featherlight, keeps you warm.",
  },
  {
    icon: ThermometerIcon,
    title: "Thermal protection",
    text: "Advanced insulation that locks in heat.",
  },
  {
    icon: DropletIcon,
    title: "Water resistant",
    text: "Stay dry, no matter the weather.",
  },
  {
    icon: WindIcon,
    title: "Windproof",
    text: "Built to block wind, keep you warm.",
  },
];

export default function LightweightSection() {
  return (
    <section className="bg-[#141414]">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-12 px-6 py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <img
            src={model}
            alt="Model wearing the ivory puffer against a concrete wall"
            className="h-[380px] w-full object-cover object-top md:h-[440px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">
            Built for urban explorers
          </div>
          <h2 className="mt-5 text-[34px] font-medium leading-[42px] text-white md:text-[40px] md:leading-[48px]">
            Lightweight.
            <br />
            Warmth. Freedom.
          </h2>
          <p className="mt-6 max-w-[400px] text-[13px] leading-[21px] text-white/60">
            Engineered with ultra-light insulation and premium fabric that
            moves with you. Because comfort should never hold you back.
          </p>
          <Link
            to="/products"
            className="group mt-9 inline-flex h-[40px] items-center gap-[10px] rounded-full bg-white pl-[24px] pr-[16px] text-[12px] font-semibold text-[#1c1c1c] transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
          >
            Explore collection
            <ChevronRightIcon className="h-[11px] w-[11px] transition-transform duration-200 group-hover:translate-x-[2px]" />
          </Link>
        </motion.div>
      </div>

      {/* feature strip */}
      <div className="border-t border-white/10">
        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className="flex items-start gap-4"
            >
              <p.icon className="h-[30px] w-[30px] shrink-0 text-white" />
              <div>
                <div className="text-[13px] font-medium text-white">{p.title}</div>
                <div className="mt-1 text-[11.5px] leading-[17px] text-white/50">
                  {p.text}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
