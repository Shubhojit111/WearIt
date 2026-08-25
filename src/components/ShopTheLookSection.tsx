import { useState } from "react";
import { motion } from "framer-motion";
import model from "../assets/look-model.png";
import { useShop } from "../context/ShopContext";
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from "./icons";
import { byId } from "../data/products";

const ROW_IDS = ["beanie", "black", "cargo", "sneakers"];
const PRODUCTS = ROW_IDS.map((id) => byId(id)!).map((p, i) => ({
  ...p,
  hot: [
    { x: 50, y: 14 },
    { x: 40, y: 40 },
    undefined,
    { x: 50, y: 82 },
  ][i] as { x: number; y: number } | undefined,
}));

export default function ShopTheLookSection() {
  const [active, setActive] = useState(1);
  const { addToCart } = useShop();

  return (
    <section className="bg-[#141414] py-24 md:py-28">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.8fr_1.5fr_1fr] lg:gap-10">
        {/* left copy + arrows */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <h2 className="text-[38px] font-medium leading-[46px] text-white md:text-[42px] md:leading-[50px]">
            Shop
            <br />
            the look
          </h2>
          <p className="mt-6 max-w-[220px] text-[12.5px] leading-[20px] text-white/55">
            Curated pieces that complete the vibe. Tap the hotspots to shop the
            look.
          </p>
          <div className="mt-10 flex items-center gap-[10px]">
            <button
              aria-label="Previous look"
              onClick={() => setActive((a) => (a - 1 + PRODUCTS.length) % PRODUCTS.length)}
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white/25 active:scale-90"
            >
              <ChevronLeftIcon className="h-[14px] w-[14px]" />
            </button>
            <button
              aria-label="Next look"
              onClick={() => setActive((a) => (a + 1) % PRODUCTS.length)}
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white/25 active:scale-90"
            >
              <ChevronRightIcon className="h-[14px] w-[14px]" />
            </button>
          </div>
        </motion.div>

        {/* center look photo with hotspots */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative"
        >
          <img
            src={model}
            alt="Model wearing the full look"
            className="h-[420px] w-full object-cover object-top md:h-[500px]"
          />
          {PRODUCTS.map((p, i) =>
            p.hot ? (
              <button
                key={p.name}
                aria-label={`Shop ${p.name}`}
                onClick={() => setActive(i)}
                style={{ left: `${p.hot.x}%`, top: `${p.hot.y}%` }}
                className={`absolute flex h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[#141414] shadow-[0_4px_14px_rgba(0,0,0,0.45)] transition-all duration-200 ${
                  active === i
                    ? "scale-110 bg-[#f4740a] text-white"
                    : "bg-white hover:scale-110"
                }`}
              >
                <PlusIcon className="h-[12px] w-[12px]" />
              </button>
            ) : null
          )}
        </motion.div>

        {/* right product list */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex flex-col gap-3"
        >
          {PRODUCTS.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-4 rounded-[14px] border p-3 text-left transition-colors duration-200 ${
                active === i
                  ? "border-white/20 bg-white/10"
                  : "border-white/[0.06] bg-white/[0.04] hover:bg-white/[0.07]"
              }`}
            >
              <span className="flex h-[54px] w-[54px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-[#242424]">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
              </span>
              <span className="flex-1">
                <span className="block text-[12.5px] font-medium text-white">
                  {p.name}
                </span>
                <span className="mt-0.5 block text-[11.5px] text-white/50">
                  ${p.price}
                </span>
              </span>
              <span
                role="button"
                aria-label={`Add ${p.name} to bag`}
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(p.id);
                }}
                className={`flex h-[26px] w-[26px] items-center justify-center rounded-full border transition-colors ${
                  active === i
                    ? "border-[#f4740a] text-[#f4740a]"
                    : "border-white/15 text-white/70"
                }`}
              >
                <PlusIcon className="h-[11px] w-[11px]" />
              </span>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
