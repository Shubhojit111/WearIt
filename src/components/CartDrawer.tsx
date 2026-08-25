import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { byId } from "../data/products";
import { ChevronRightIcon } from "./icons";

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, setQty, removeFromCart, subtotal } =
    useShop();
  const [placed, setPlaced] = useState(false);

  const total = subtotal((id) => byId(id)?.price ?? 0);

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.button
            aria-label="Close cart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-[2px]"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-[400px] flex-col border-l border-white/10 bg-[#161616]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div className="text-[14px] font-medium uppercase tracking-[0.18em] text-white">
                Your Bag ({cart.length})
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="text-white/60 transition hover:text-white"
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {cart.length === 0 ? (
                <div className="mt-16 text-center">
                  <div className="text-[15px] text-white/70">Your bag is empty.</div>
                  <Link
                    to="/products"
                    onClick={() => setCartOpen(false)}
                    className="mt-5 inline-flex h-[38px] items-center gap-2 rounded-full bg-white px-6 text-[12px] font-semibold text-[#1c1c1c]"
                  >
                    Browse products
                    <ChevronRightIcon className="h-3 w-3" />
                  </Link>
                </div>
              ) : (
                <ul className="space-y-5">
                  {cart.map((i) => {
                    const p = byId(i.id);
                    if (!p) return null;
                    return (
                      <li key={`${i.id}-${i.size}`} className="flex gap-4">
                        <span className={`flex h-[64px] w-[64px] shrink-0 items-center justify-center overflow-hidden rounded-[12px] ${p.bgClass}`}>
                          <img src={p.img} alt={p.name} className="h-[56px] w-auto object-contain" />
                        </span>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="text-[13px] font-medium text-white">{p.name}</div>
                              <div className="mt-0.5 text-[11px] text-white/50">Size {i.size}</div>
                            </div>
                            <div className="text-[13px] font-medium text-white">
                              ${p.price * i.qty}
                            </div>
                          </div>
                          <div className="mt-3 flex items-center justify-between">
                            <div className="flex items-center gap-3 rounded-full border border-white/15 px-3 py-1">
                              <button
                                onClick={() => setQty(i.id, i.size, i.qty - 1)}
                                className="text-white/70 hover:text-white"
                                aria-label="Decrease quantity"
                              >
                                −
                              </button>
                              <span className="min-w-[14px] text-center text-[12px] text-white">{i.qty}</span>
                              <button
                                onClick={() => setQty(i.id, i.size, i.qty + 1)}
                                className="text-white/70 hover:text-white"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(i.id, i.size)}
                              className="text-[11px] text-white/45 underline-offset-2 hover:text-white hover:underline"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-white/10 px-6 py-5">
                <div className="flex items-center justify-between text-[13px] text-white/70">
                  <span>Subtotal</span>
                  <span className="text-[16px] font-medium text-white">${total}</span>
                </div>
                <button
                  onClick={() => setPlaced(true)}
                  className="mt-4 flex h-[44px] w-full items-center justify-center gap-2 rounded-full bg-white text-[12.5px] font-semibold text-[#1c1c1c] transition hover:scale-[1.02] active:scale-[0.98]"
                >
                  {placed ? "Order placed — thank you!" : "Checkout"}
                  {!placed && <ChevronRightIcon className="h-3 w-3" />}
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
