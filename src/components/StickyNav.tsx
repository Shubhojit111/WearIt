import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { CartIcon, HeartIcon } from "./icons";

const LINKS = [
  { label: "Products", to: "/products" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function StickyNav() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  const { cartCount, setCartOpen } = useShop();
  const { pathname } = useLocation();

  useMotionValueEvent(scrollY, "change", (v) => {
    setShow(v > window.innerHeight * 0.72 && pathname === "/");
  });

  return (
    <motion.div
      style={{ x: "-50%" }}
      initial={{ y: -90, opacity: 0 }}
      animate={show ? { y: 0, opacity: 1 } : { y: -90, opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
      className="fixed left-1/2 top-5 z-50 flex w-max max-w-[94vw] items-center gap-8 rounded-full border border-white/10 bg-[#141414]/70 py-3 pl-6 pr-4 backdrop-blur-md"
    >
      <Link to="/" className="flex items-center gap-2 select-none">
        <span className="flex h-[22px] w-[22px] items-center justify-center rounded-[3px] bg-white text-[10px] font-semibold tracking-wide text-[#202020]">
          WI
        </span>
        <span className="font-serif-logo whitespace-nowrap text-[15px] font-semibold tracking-[0.04em] text-white">
          WearIt
        </span>
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        {LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.12em] text-white/70 transition-colors hover:text-white"
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-4 text-white/80">
        <Link
          to="/wishlist"
          aria-label="Wishlist"
          className="transition hover:scale-110 hover:text-white"
        >
          <HeartIcon className="h-[17px] w-[17px]" />
        </Link>
        <button
          aria-label="Cart"
          onClick={() => setCartOpen(true)}
          className="relative transition hover:scale-110 hover:text-white"
        >
          <CartIcon className="h-[17px] w-[17px]" />
          {cartCount > 0 && (
            <span className="absolute -right-1.5 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#f4740a] text-[8px] font-semibold text-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </motion.div>
  );
}
