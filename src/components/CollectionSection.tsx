import { motion } from "framer-motion";
import { PRODUCTS } from "../data/products";
import ProductCard from "./ProductCard";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] as const },
  }),
};

export default function CollectionSection() {
  const jackets = PRODUCTS.filter((p) => p.kind === "jacket");
  return (
    <section id="collection" className="bg-[#141414] py-24 md:py-28">
      <div className="mx-auto w-full max-w-[1240px] px-6">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#f4740a]">
              The Collection
            </div>
            <h2 className="mt-4 text-[36px] font-medium leading-[44px] text-white md:text-[44px] md:leading-[52px]">
              Four colours.
              <br />
              One feeling.
            </h2>
          </div>
          <p className="max-w-[360px] text-[13px] leading-[20px] text-white/55">
            Every WearIt puffer is cut for movement, filled for warmth and
            finished to turn a simple outfit into a statement.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {jackets.map((p, i) => (
            <motion.div
              key={p.id}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <ProductCard p={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
