import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { CartIcon, HeartIcon } from "./icons";

const LINKS = [
  { label: "Products", to: "/products" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const { cartCount, setCartOpen } = useShop();
  return (
    <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between pl-[5%] pr-[4.5%] pt-[48px]">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-[10px] select-none">
        <span className="flex h-[22px] w-[22px] items-center justify-center rounded-[3px] bg-white text-[10px] font-semibold tracking-wide text-[#202020]">
          WI
        </span>
        <span className="font-serif-logo text-[18px] font-semibold tracking-[0.04em] text-white">
          WearIt
        </span>
      </Link>

      {/* Center pill navigation */}
      <nav className="absolute left-1/2 top-[30px] w-max -translate-x-1/2 rounded-[26px] bg-black/25 px-[14px] py-[8px] backdrop-blur-[2px]">
        <div className="flex items-center gap-[16px]">
          {LINKS.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-[14px] py-[8px] text-[12px] font-medium uppercase tracking-[0.12em] transition-colors duration-200 hover:text-white ${
                i === 0 ? "rounded-full bg-white text-[#202020]" : "text-white/85"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Right icons */}
      <div className="mt-[2px] flex items-center gap-[22px]">
        <button
          aria-label="Cart"
          onClick={() => setCartOpen(true)}
          className="relative text-white/85 transition-all duration-200 hover:scale-110 hover:text-white"
        >
          <CartIcon className="h-[19px] w-[19px]" />
          {cartCount > 0 && (
            <span className="absolute -right-1.5 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#f4740a] text-[8px] font-semibold text-white">
              {cartCount}
            </span>
          )}
        </button>
        <Link
          to="/wishlist"
          aria-label="Wishlist"
          className="text-white/85 transition-all duration-200 hover:scale-110 hover:text-white"
        >
          <HeartIcon className="h-[19px] w-[19px]" />
        </Link>
      </div>
    </header>
  );
}
