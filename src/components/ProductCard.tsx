import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import type { Product } from "../data/products";
import { HeartIcon, PlusIcon } from "./icons";

export default function ProductCard({ p }: { p: Product }) {
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const wished = wishlist.includes(p.id);
  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] p-5 ${p.bgClass}`}
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-black/25 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.16em] text-white/85">
          {p.tag ?? "WearIt"}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[15px] font-medium text-white">${p.price}</span>
          {p.compareAt && (
            <span className="text-[11px] text-white/45 line-through">${p.compareAt}</span>
          )}
          <button
            aria-label="Toggle wishlist"
            onClick={() => toggleWishlist(p.id)}
            className={`ml-1 transition hover:scale-110 ${wished ? "text-[#ff5d5d]" : "text-white/60 hover:text-white"}`}
          >
            <HeartIcon className="h-[15px] w-[15px]" />
          </button>
        </div>
      </div>

      <Link
        to={`/product/${p.id}`}
        className="mt-3 flex h-[190px] items-center justify-center"
      >
        <img
          src={p.img}
          alt={p.name}
          className="h-full w-auto select-none drop-shadow-[0_16px_20px_rgba(0,0,0,0.3)] transition-transform duration-500 ease-out group-hover:-rotate-2 group-hover:scale-[1.07]"
        />
      </Link>

      <div className="mt-4">
        <Link to={`/product/${p.id}`} className="block text-[15px] font-medium text-white hover:underline">
          {p.name}
        </Link>
      </div>

      <button
        onClick={() => addToCart(p.id)}
        className="mt-4 flex h-[36px] w-full items-center justify-center gap-2 rounded-full bg-white text-[11px] font-semibold text-[#1c1c1c] transition-all duration-300 hover:gap-3 active:scale-[0.98]"
      >
        Add to Bag
        <PlusIcon className="h-[10px] w-[10px]" />
      </button>
    </div>
  );
}
