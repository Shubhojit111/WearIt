import { motion } from "framer-motion";
import { TESTIMONIALS } from "../data/slides";
import { StarIcon } from "./icons";

export default function TestimonialsSection() {
  return (
    <section className="bg-[#141414] py-24 md:py-28">
      <div className="mx-auto w-full max-w-[1240px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center"
        >
          <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#f4740a]">
            Word on the street
          </div>
          <h2 className="mt-4 text-[36px] font-medium leading-[44px] text-white md:text-[44px] md:leading-[52px]">
            Worn. Loved. Repeated.
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className="flex flex-col rounded-[24px] border border-white/[0.08] bg-white/[0.04] p-8"
            >
              <div className="flex gap-1 text-[#f9a03f]">
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon key={s} className="h-[14px] w-[14px]" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[13.5px] leading-[22px] text-white/75">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4740a]/20 text-[11px] font-semibold text-[#f9a03f]">
                  {t.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </span>
                <span>
                  <span className="block text-[13px] font-medium text-white">{t.name}</span>
                  <span className="block text-[11px] text-white/50">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
