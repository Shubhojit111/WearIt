import { motion } from "framer-motion";
import { DropletIcon, FeatherIcon, FlameIcon, LeafIcon } from "./icons";

const FEATURES = [
  {
    icon: FeatherIcon,
    title: "Featherlight",
    text: "Under 500 grams of quilted comfort. Warmth you can move in, never bulk you carry.",
  },
  {
    icon: FlameIcon,
    title: "Warmth, wrapped",
    text: "Cloud-soft recycled fill traps heat where you need it — from first chill to last call.",
  },
  {
    icon: DropletIcon,
    title: "Weatherproof shell",
    text: "A water-resistant gloss shell shrugs off drizzle, wind and weekday commutes.",
  },
  {
    icon: LeafIcon,
    title: "Responsibly made",
    text: "Recycled fill, durable stitching and a design made to be worn for years, not seasons.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="about"
      className="bg-[#191919] bg-[image:radial-gradient(60%_45%_at_50%_0%,rgba(244,116,10,0.14)_0%,rgba(20,20,20,0)_70%)] py-24 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1240px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="mx-auto max-w-[560px] text-center"
        >
          <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#f4740a]">
            Why WearIt
          </div>
          <h2 className="mt-4 text-[36px] font-medium leading-[44px] text-white md:text-[44px] md:leading-[52px]">
            Engineered for ease.
            <br />
            Designed for you.
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className="group rounded-[24px] border border-white/[0.08] bg-white/[0.04] p-8 transition-colors duration-300 hover:border-white/[0.16] hover:bg-white/[0.06]"
            >
              <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/10 bg-[#f4740a]/15 text-[#f9a03f] transition-transform duration-300 group-hover:scale-110">
                <f.icon className="h-[20px] w-[20px]" />
              </div>
              <h3 className="mt-6 text-[17px] font-medium text-white">{f.title}</h3>
              <p className="mt-3 text-[12.5px] leading-[20px] text-white/55">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
