import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useShop } from "../context/ShopContext";
import { byId, PRODUCTS, SIZES } from "../data/products";
import { ChevronRightIcon, HeartIcon } from "../components/icons";
import NotFoundPage from "./NotFoundPage";

const SPECS = [
  ["Fill", "100% recycled cloud-soft insulation"],
  ["Shell", "Water-resistant gloss nylon"],
  ["Weight", "Under 500 g"],
  ["Care", "Machine wash cold, hang dry"],
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const p = byId(id);
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const [size, setSize] = useState("36");

  if (!p) return <NotFoundPage />;
  const wished = wishlist.includes(p.id);
  const related = PRODUCTS.filter((x) => x.id !== p.id && x.kind === p.kind).slice(0, 4);

  return (
    <div className="min-h-full bg-[#141414]">
      <TopBar />
      <main className="mx-auto w-full max-w-[1240px] px-6 pb-24 pt-12">
        <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">
          <Link to="/" className="hover:text-white">Home</Link> /{" "}
          <Link to="/products" className="hover:text-white">Products</Link> /{" "}
          <span className="text-white/70">{p.name}</span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            className={`flex h-[420px] items-center justify-center overflow-hidden rounded-[32px] md:h-[520px] ${p.bgClass}`}
          >
            <img
              src={p.img}
              alt={p.name}
              className="h-[78%] w-auto select-none drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#f4740a]">
              {p.tag ?? "WearIt"}
            </div>
            <h1 className="mt-3 text-[34px] font-medium leading-[42px] text-white md:text-[40px]">
              {p.name}
            </h1>
            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-[26px] font-medium text-white">${p.price}</span>
              {p.compareAt && (
                <span className="text-[18px] text-white/40 line-through">${p.compareAt}</span>
              )}
            </div>
            <p className="mt-5 max-w-[440px] text-[13.5px] leading-[21px] text-white/60">
              {p.desc}
            </p>

            {p.kind === "jacket" && (
              <>
                <div className="mt-7 text-[12px] text-white/70">Choose your size:</div>
                <div className="mt-3 flex gap-3">
                  {SIZES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`flex h-[38px] w-[38px] items-center justify-center rounded-full text-[12px] transition ${
                        size === s
                          ? "bg-white font-medium text-[#202020]"
                          : "bg-white/5 text-white/80 hover:bg-white/15"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </>
            )}

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => addToCart(p.id, p.kind === "jacket" ? size : "One size")}
                className="group inline-flex h-[44px] items-center gap-2 rounded-full bg-white pl-7 pr-5 text-[12.5px] font-semibold text-[#1c1c1c] transition hover:scale-[1.03] active:scale-[0.98]"
              >
                Add to Bag
                <ChevronRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-[2px]" />
              </button>
              <button
                onClick={() => toggleWishlist(p.id)}
                className={`inline-flex h-[44px] items-center gap-2 rounded-full border px-6 text-[12.5px] font-medium transition ${
                  wished
                    ? "border-[#ff5d5d]/60 text-[#ff5d5d]"
                    : "border-white/20 text-white/80 hover:border-white/50 hover:text-white"
                }`}
              >
                <HeartIcon className="h-4 w-4" />
                {wished ? "Wishlisted" : "Wishlist"}
              </button>
            </div>

            <div className="mt-9 rounded-[20px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
                Specs & care
              </div>
              <dl className="mt-4 space-y-2.5">
                {SPECS.map(([k, v]) => (
                  <div key={k} className="flex gap-4 text-[12.5px]">
                    <dt className="w-[64px] shrink-0 text-white/45">{k}</dt>
                    <dd className="text-white/80">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-[24px] font-medium text-white">You may also like</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <ProductCard key={r.id} p={r} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
