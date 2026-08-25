import { Link, NavLink } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { CartIcon, HeartIcon } from "./icons";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function TopBar() {
  const { cartCount, setCartOpen } = useShop();
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#141414]/85 backdrop-blur-md">
      <div className="mx-auto flex h-[64px] w-full max-w-[1240px] items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5 select-none">
          <span className="flex h-[22px] w-[22px] items-center justify-center rounded-[3px] bg-white text-[10px] font-semibold tracking-wide text-[#202020]">
            WI
          </span>
          <span className="font-serif-logo text-[18px] font-semibold tracking-[0.04em] text-white">
            WearIt
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[11px] font-medium uppercase tracking-[0.14em] transition-colors ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-5 text-white/85">
          <Link to="/wishlist" aria-label="Wishlist" className="transition hover:scale-110 hover:text-white">
            <HeartIcon className="h-[18px] w-[18px]" />
          </Link>
          <button
            aria-label="Open cart"
            onClick={() => setCartOpen(true)}
            className="relative transition hover:scale-110 hover:text-white"
          >
            <CartIcon className="h-[18px] w-[18px]" />
            {cartCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#f4740a] text-[8px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
