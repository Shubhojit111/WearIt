import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

const SORTS = ["Featured", "Price: Low to High", "Price: High to Low", "Name"] as const;

export default function ProductsPage() {
  const [kind, setKind] = useState<"all" | "jacket" | "accessory">("all");
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Featured");

  const items = useMemo(() => {
    let list = PRODUCTS.filter((p) => kind === "all" || p.kind === kind);
    if (sort === "Price: Low to High") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "Price: High to Low") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "Name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [kind, sort]);

  return (
    <div className="min-h-full bg-[#141414]">
      <TopBar />
      <main className="mx-auto w-full max-w-[1240px] px-6 pb-24 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#f4740a]">
              All Products
            </div>
            <h1 className="mt-3 text-[38px] font-medium leading-[46px] text-white md:text-[44px] md:leading-[52px]">
              The full lineup.
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {(
              [
                ["all", "Everything"],
                ["jacket", "Puffer Jackets"],
                ["accessory", "Accessories"],
              ] as const
            ).map(([k, label]) => (
              <button
                key={k}
                onClick={() => setKind(k)}
                className={`rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] transition ${
                  kind === k
                    ? "bg-white text-[#202020]"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as (typeof SORTS)[number])}
              className="rounded-full border border-white/15 bg-[#1c1c1c] px-4 py-2 text-[11px] uppercase tracking-[0.1em] text-white/70 outline-none"
            >
              {SORTS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <ProductCard p={p} />
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
